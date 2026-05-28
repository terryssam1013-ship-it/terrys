/**
 * grammar-sync.js (v2 — 학생 진도 종합 동기화)
 * 문법/단어 챕터 페이지(grammarwise-*.html, vocab-learn.html 등)에서
 * 학생 학습 데이터를 Firebase에 실시간 동기화합니다.
 *
 * 사용법:
 *   각 챕터/학습 페이지의 <head> 또는 body 첫 script 근처에 한 줄 추가:
 *   <script src="grammar-sync.js"></script>
 *
 * 처리하는 키:
 *   - uid 포함 키 (rl_gr_<sid>_*, rl_inprog_<sid>_*, rl_trtype_<sid>_*, 
 *     rl_train_<sid>_*, rl_done_<sid>_*, rl_weekly_<sid>_*, rl_gichul_history_<sid>):
 *     값 그대로 푸시
 *   - 공유 키 (rl_progress, rl_vc_*): 값이 {sid:데이터} 형식이므로
 *     현재 학생 부분만 추출해서 __shared__<key>로 푸시
 */

(function(){
    'use strict';
    
    const SYNC_FB_URL = 'https://terrys-d643a-default-rtdb.firebaseio.com';
    const DEBOUNCE_MS = 500;
    
    function getCurrentSid(){
        try{
            let raw = localStorage.getItem('rl_current_user');
            if(!raw && window.RLStorage && window.RLStorage.isReady && window.RLStorage.isReady()){
                raw = window.RLStorage.getItem('rl_current_user');
            }
            if(!raw) return null;
            const u = JSON.parse(raw);
            return (u && u.id && u.role === 'student') ? u.id : null;
        }catch(e){ return null; }
    }
    
    function keyType(k){
        if(!k || typeof k !== 'string' || !k.startsWith('rl_')) return 'skip';
        if(/^rl_gr_/.test(k)) return 'uid-prefixed';
        if(/^rl_gichul_history_/.test(k)) return 'uid-prefixed';
        if(/^rl_inprog_/.test(k)) return 'uid-prefixed';
        if(/^rl_trtype_/.test(k)) return 'uid-prefixed';
        if(/^rl_train_/.test(k)) return 'uid-prefixed';
        if(/^rl_done_/.test(k)) return 'uid-prefixed';
        if(/^rl_weekly_/.test(k)) return 'uid-prefixed';
        if(/^rl_assess_/.test(k)) return 'uid-prefixed';
        // 학생 ID가 suffix로 붙은 키 (rl_vc_daycheck_progress_<sid> 등) — 그대로 푸시
        if(/^rl_vc_daycheck_progress_/.test(k)) return 'uid-prefixed';
        if(/^rl_vocab_progress_/.test(k)) return 'uid-prefixed';
        // 단어 학습 결과 키 (rl_vc_daycheck, rl_vc_selfcheck, rl_vc_realexam, rl_vc_weeklyexam_*):
        //   값이 {deckId/dayId: rec} 구조 = 학생 본인 데이터. Firebase 경로가 학생별 분리돼 있으니 통째로 동기화.
        if(/^rl_vc_/.test(k)) return 'uid-prefixed-shared';
        if(k === 'rl_vocab_game_scores') return 'uid-prefixed-shared';
        if(k === 'rl_progress') return 'uid-indexed';
        if(k === 'rl_active_week') return 'per-student-global';
        return 'skip';
    }
    
    function safeKey(k){
        return String(k).replace(/[$\[\].#\/]/g, '_');
    }
    
    const pushQueue = {};
    let pushTimer = null;
    
    function schedulePush(){
        if(pushTimer) return;
        pushTimer = setTimeout(function(){ flushPush(false); }, DEBOUNCE_MS);
    }
    
    function flushPush(useKeepalive){
        if(pushTimer){ clearTimeout(pushTimer); pushTimer = null; }
        const sid = getCurrentSid();
        if(!sid) return;
        const keys = Object.keys(pushQueue);
        if(keys.length === 0) return;
        
        const batch = {};
        for(const k of keys){
            batch[k] = pushQueue[k];
            delete pushQueue[k];
        }
        
        const url = SYNC_FB_URL + '/student_state/' + encodeURIComponent(sid) + '.json';
        const fetchOpts = {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(batch)
        };
        if(useKeepalive) fetchOpts.keepalive = true;
        
        fetch(url, fetchOpts).then(function(r){
            if(!r.ok){
                console.warn('[Student Sync] 푸시 실패 status='+r.status);
                for(const k in batch){ if(!(k in pushQueue)) pushQueue[k] = batch[k]; }
                setTimeout(schedulePush, 5000);
            } else {
                console.log('[Student Sync] ✅ '+keys.length+'개 항목 푸시 (sid: '+sid+')');
            }
        }).catch(function(e){
            console.warn('[Student Sync] 네트워크 오류:', e);
            for(const k in batch){ if(!(k in pushQueue)) pushQueue[k] = batch[k]; }
        });
    }
    
    function queueSet(k, v){
        const sid = getCurrentSid();
        if(!sid) return;
        const type = keyType(k);
        if(type === 'skip') return;
        
        if(type === 'uid-prefixed'){
            if(!k.includes(sid)) return;
            pushQueue[safeKey(k)] = v;
        } else if(type === 'uid-prefixed-shared'){
            // 단어 학습 결과 키 - 통째로 푸시 (Firebase 경로가 학생별 분리)
            pushQueue['__vshared__' + safeKey(k)] = v;
        } else if(type === 'uid-indexed'){
            try{
                const parsed = (v === null || v === undefined) ? null : JSON.parse(v);
                const myPortion = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed[sid] : null;
                pushQueue['__shared__' + safeKey(k)] = 
                    myPortion === undefined || myPortion === null ? null : JSON.stringify(myPortion);
            }catch(e){ /* 잘못된 JSON 무시 */ }
        } else if(type === 'per-student-global'){
            pushQueue['__perstudent__' + safeKey(k)] = v;
        }
        schedulePush();
    }
    
    const origSetItem = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function(k, v){
        origSetItem(k, v);
        queueSet(k, v);
    };
    
    const origRemoveItem = localStorage.removeItem.bind(localStorage);
    localStorage.removeItem = function(k){
        origRemoveItem(k);
        queueSet(k, null);
    };
    
    window.addEventListener('beforeunload', function(){ flushPush(true); });
    window.addEventListener('pagehide', function(){ flushPush(true); });
    document.addEventListener('visibilitychange', function(){
        if(document.visibilityState === 'hidden') flushPush(true);
    });
    
    // ════════════════════════════════════════════════════════════════
    // 📥 다운로드: Firebase에서 이 학생의 진도를 받아와 localStorage에 복원
    //    새 기기(아이패드 등)에서 처음 챕터/단어 페이지 들어왔을 때
    //    localStorage가 비어있어도 Firebase에서 받아와서 결과 화면 표시 가능
    // ════════════════════════════════════════════════════════════════
    function _restoreKey(fbKey, value){
        try{
            if(fbKey.startsWith('__vshared__')){
                // 단어 학습 키 (rl_vc_*, rl_vocab_game_scores): {deckId/dayId: rec} 병합
                const realKey = fbKey.substring('__vshared__'.length);
                if(typeof value !== 'string') return;
                let remoteDict; try{ remoteDict = JSON.parse(value); }catch(e){ return; }
                if(typeof remoteDict !== 'object' || Array.isArray(remoteDict)) return;
                let localDict = {};
                try{ const ls = origGetItem(realKey); if(ls) localDict = JSON.parse(ls)||{}; }catch(e){ localDict = {}; }
                if(typeof localDict !== 'object' || Array.isArray(localDict)) localDict = {};
                for(const dk in remoteDict){
                    const r = remoteDict[dk], l = localDict[dk];
                    if(!l){ localDict[dk] = r; continue; }
                    const rt = (r&&(r.lastAttempt||r.timestamp||r.date))||'';
                    const lt = (l&&(l.lastAttempt||l.timestamp||l.date))||'';
                    if(String(rt) >= String(lt)) localDict[dk] = r;
                }
                origSetItem(realKey, JSON.stringify(localDict));
            } else if(fbKey.startsWith('__shared__')){
                // rl_progress 등: {sid: data} 구조 → 현재 학생 부분만 머지
                const realKey = fbKey.substring('__shared__'.length);
                const sid = getCurrentSid();
                if(!sid || typeof value !== 'string') return;
                let myData; try{ myData = JSON.parse(value); }catch(e){ return; }
                let dict = {};
                try{ const ls = origGetItem(realKey); if(ls) dict = JSON.parse(ls)||{}; }catch(e){ dict = {}; }
                if(typeof dict !== 'object' || Array.isArray(dict)) dict = {};
                dict[sid] = myData;
                origSetItem(realKey, JSON.stringify(dict));
            } else if(fbKey.startsWith('__perstudent__')){
                const realKey = fbKey.substring('__perstudent__'.length);
                if(typeof value === 'string') origSetItem(realKey, value);
            } else {
                // uid-prefixed: 키 그대로 복원 (단, 로컬에 이미 있으면 덮어쓰지 않음 — 로컬 우선)
                const realKey = unsafeKey(fbKey);
                if(value === null) return;
                const existing = origGetItem(realKey);
                if(existing === null || existing === undefined){
                    origSetItem(realKey, typeof value === 'string' ? value : JSON.stringify(value));
                }
            }
        }catch(e){ /* 개별 키 복원 실패는 무시 */ }
    }
    
    // safeKey 역변환 (안전): Firebase 키는 _로 치환됐을 수 있으나 rl_gr_ 등은 영숫자/_라 대부분 그대로
    function unsafeKey(k){ return k; }
    const origGetItem = localStorage.getItem.bind(localStorage);
    
    var _syncDownDone = false;
    function syncDownStudentState(){
        return new Promise(function(resolve){
            const sid = getCurrentSid();
            if(!sid){ resolve(false); return; }
            const url = SYNC_FB_URL + '/student_state/' + encodeURIComponent(sid) + '.json?_t=' + Date.now();
            fetch(url, {cache:'no-store'}).then(function(r){
                if(!r.ok){ resolve(false); return; }
                return r.json();
            }).then(function(data){
                if(!data || typeof data !== 'object'){ resolve(false); return; }
                var n = 0;
                for(const fbKey in data){
                    _restoreKey(fbKey, data[fbKey]);
                    n++;
                }
                _syncDownDone = true;
                console.log('[Student Sync] 📥 '+n+'개 항목 받아옴 (sid: '+sid+')');
                resolve(true);
            }).catch(function(e){
                console.warn('[Student Sync] 받아오기 실패:', e);
                resolve(false);
            });
        });
    }
    
    // 전역 노출: 챕터/단어 페이지가 진입 시 await window.StudentSync.syncDown() 호출 가능
    window.StudentSync = {
        syncDown: syncDownStudentState,
        flushUp: function(){ flushPush(false); },
        isReady: function(){ return _syncDownDone; }
    };
    
    console.log('[Student Sync] 활성화 (학생: '+(getCurrentSid()||'미로그인')+')');
})();
