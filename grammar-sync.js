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
        if(k === 'rl_progress') return 'uid-indexed';
        if(/^rl_vc_/.test(k)) return 'uid-indexed';
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
    
    console.log('[Student Sync] 활성화 (학생: '+(getCurrentSid()||'미로그인')+')');
})();
