/**
 * curriculum-sync.js
 * 학원 자료(지문/단어/챕터/학생 명단 등)를 GitHub의 curriculum.json에서 자동 동기화
 * 
 * 사용법:
 *   1) 페이지 HTML에 <script src="rl-storage.js"></script>
 *   2) <script src="curriculum-sync.js"></script>
 *   3) RLStorage.init() 후 await window.syncCurriculum() 호출
 * 
 * 동작:
 *   - GitHub 루트의 curriculum.json fetch
 *   - 버전이 다르면 IndexedDB에 동기화 (학생 본인의 진도는 건드리지 않음)
 *   - curriculum.json 없으면 무동작 (조용히 패스)
 */

(function(window){
    'use strict';
    
    const CURRICULUM_URL = 'curriculum.json';
    const VERSION_KEY = 'rl_curriculum_version';
    
    async function syncCurriculum(opts){
        opts = opts || {};
        if(!window.RLStorage){
            console.warn('[Curriculum] RLStorage not loaded');
            return {ok:false, reason:'no-storage'};
        }
        
        try{
            const res = await fetch(CURRICULUM_URL, {cache:'no-cache'});
            if(!res.ok){
                console.log('[Curriculum] curriculum.json not found on server (skip)');
                return {ok:false, reason:'not-found'};
            }
            
            const data = await res.json();
            const meta = data._meta || {};
            const remoteVersion = meta.version || '';
            const localVersion = RLStorage.getItem(VERSION_KEY) || '';
            
            if(remoteVersion && remoteVersion === localVersion && !opts.force){
                console.log('[Curriculum] 최신 버전 (' + localVersion + ')');
                return {ok:true, reason:'up-to-date', synced:0};
            }
            
            console.log('[Curriculum] 동기화 시작... ' + (localVersion?localVersion:'(초기)') + ' → ' + remoteVersion);
            
            const items = data._items || {};
            let count = 0;
            
            for(const k in items){
                if(!Object.prototype.hasOwnProperty.call(items, k)) continue;
                if(k.startsWith('_')) continue;
                if(!k.startsWith('rl_')) continue;
                
                let val = items[k];
                if(typeof val !== 'string') val = JSON.stringify(val);
                RLStorage.setItem(k, val);
                count++;
            }
            
            if(remoteVersion) RLStorage.setItem(VERSION_KEY, remoteVersion);
            await RLStorage.flush();
            
            console.log('[Curriculum] ✅ 동기화 완료 (' + count + '개 항목)');
            return {ok:true, reason:'synced', synced:count, version:remoteVersion};
        } catch(e){
            console.warn('[Curriculum] 동기화 실패:', e);
            return {ok:false, reason:'error', error:String(e)};
        }
    }
    
    window.syncCurriculum = syncCurriculum;
})(window);
