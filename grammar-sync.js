/**
 * grammar-sync.js
 * 문법 챕터 페이지(grammarwise-*.html 등)에서 학생 진도를 Firebase에 실시간 동기화
 * 
 * 사용법:
 *   각 챕터 파일의 <head> 안에 아래 한 줄 추가:
 *   <script src="grammar-sync.js"></script>
 * 
 * 동작:
 *   - localStorage.setItem이 호출될 때마다 자동 감지
 *   - 키가 rl_gr_<현재학생id>_* 패턴이면 Firebase에 PATCH로 푸시
 *   - 디바운스 500ms (연속 저장 시 한번에 묶어 푸시)
 *   - 페이지 닫힐 때 keepalive fetch로 마지막 푸시 보장 (폰 잠금 OK)
 */

(function(){
    'use strict';
    
    const SYNC_FB_URL = 'https://terrys-d643a-default-rtdb.firebaseio.com';
    const DEBOUNCE_MS = 500;
    
    // 현재 학생 ID 가져오기 (localStorage 또는 IndexedDB)
    function getCurrentSid(){
        try{
            // localStorage 우선
            let raw = localStorage.getItem('rl_current_user');
            if(!raw && window.RLStorage && window.RLStorage.isReady && window.RLStorage.isReady()){
                raw = window.RLStorage.getItem('rl_current_user');
            }
            if(!raw) return null;
            const u = JSON.parse(raw);
            return (u && u.id && u.role === 'student') ? u.id : null;
        }catch(e){ return null; }
    }
    
    function shouldSyncKey(k, sid){
        if(!k || typeof k !== 'string') return false;
        if(!k.startsWith('rl_gr_')) return false;
        if(!k.includes(sid)) return false;  // 안전장치: 다른 학생 데이터 누출 방지
        return true;
    }
    
    function safeKey(k){
        return String(k).replace(/[$\[\].#\/]/g, '_');
    }
    
    const pushQueue = {};
    let pushTimer = null;
    
    function schedulePush(){
        if(pushTimer) return;
        pushTimer = setTimeout(flushPush, DEBOUNCE_MS);
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
        
        fetch(url, fetchOpts).then(r => {
            if(!r.ok){
                console.warn('[Grammar Sync] 푸시 실패 status='+r.status);
                // 실패 시 다음 시도 위해 큐에 복원
                for(const k in batch){ if(!(k in pushQueue)) pushQueue[k] = batch[k]; }
                setTimeout(schedulePush, 5000);
            } else {
                console.log('[Grammar Sync] ✅ '+keys.length+'개 항목 푸시 (sid: '+sid+')');
            }
        }).catch(e => {
            console.warn('[Grammar Sync] 네트워크 오류:', e);
            for(const k in batch){ if(!(k in pushQueue)) pushQueue[k] = batch[k]; }
        });
    }
    
    // localStorage.setItem 후킹
    const origSetItem = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function(k, v){
        origSetItem(k, v);
        const sid = getCurrentSid();
        if(sid && shouldSyncKey(k, sid)){
            pushQueue[safeKey(k)] = v;
            schedulePush();
        }
    };
    
    // localStorage.removeItem 후킹
    const origRemoveItem = localStorage.removeItem.bind(localStorage);
    localStorage.removeItem = function(k){
        origRemoveItem(k);
        const sid = getCurrentSid();
        if(sid && shouldSyncKey(k, sid)){
            pushQueue[safeKey(k)] = null;
            schedulePush();
        }
    };
    
    // 페이지 닫기/숨김 직전에 큐에 남은 데이터 강제 전송 (keepalive로 보장)
    // → 폰 잠금, 다른 앱 전환, 탭 닫기 모두 커버
    window.addEventListener('beforeunload', function(){ flushPush(true); });
    window.addEventListener('pagehide', function(){ flushPush(true); });
    document.addEventListener('visibilitychange', function(){
        if(document.visibilityState === 'hidden') flushPush(true);
    });
    
    console.log('[Grammar Sync] 활성화 (학생: '+(getCurrentSid()||'미로그인')+')');
})();
