/**
 * rl-storage.js
 * ReadingLab IndexedDB 래퍼 (Phase 1)
 * 
 * 목적: localStorage와 동일한 API로 IndexedDB 사용
 * - localStorage 5MB 한계 우회 (수백 MB 사용 가능)
 * - 옛 코드 변경 최소화
 * - 마이그레이션 도구 포함
 * 
 * 사용법:
 *   1) HTML에 <script src="rl-storage.js"></script> 추가
 *   2) RLStorage.init() 호출
 *   3) RLStorage.migrate() 로 localStorage 데이터 복사
 *   4) 검증 후에 점진적으로 localStorage → RLStorage 전환
 */

(function(window) {
    'use strict';
    
    const DB_NAME = 'rl_storage';
    const DB_VERSION = 1;
    const STORE_NAME = 'kv';
    
    let _db = null;
    let _ready = false;
    let _readyPromise = null;
    
    // ========== IndexedDB 초기화 ==========
    function _openDB() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onerror = () => reject(req.error);
            req.onsuccess = () => {
                _db = req.result;
                resolve(_db);
            };
            req.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            };
        });
    }
    
    // ========== 트랜잭션 헬퍼 ==========
    function _tx(mode) {
        if (!_db) throw new Error('DB not initialized. Call RLStorage.init() first.');
        return _db.transaction(STORE_NAME, mode).objectStore(STORE_NAME);
    }
    
    function _wrap(req) {
        return new Promise((resolve, reject) => {
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }
    
    // ========== 동기적 캐시 (성능을 위해) ==========
    // localStorage는 동기 API라 IndexedDB로 1:1 대체가 어렵움
    // → 메모리 캐시를 만들고, 쓰기는 비동기 백그라운드로 처리
    const _cache = new Map();
    let _writeQueue = [];
    let _writePromise = null;
    
    function _flushWrites() {
        if (_writePromise) return _writePromise;
        if (_writeQueue.length === 0) return Promise.resolve();
        
        _writePromise = (async () => {
            const items = _writeQueue.slice();
            _writeQueue = [];
            const store = _tx('readwrite');
            const promises = items.map(({key, value, op}) => {
                if (op === 'set') return _wrap(store.put(value, key));
                if (op === 'del') return _wrap(store.delete(key));
            });
            await Promise.all(promises);
            _writePromise = null;
            // 큐에 더 있으면 재귀
            if (_writeQueue.length > 0) await _flushWrites();
        })();
        
        return _writePromise;
    }
    
    function _queueWrite(key, value, op) {
        _writeQueue.push({key, value, op});
        // 다음 tick에 flush
        setTimeout(_flushWrites, 0);
    }
    
    // ========== 공개 API ==========
    const RLStorage = {
        
        /**
         * 초기화 — 페이지 로드 시 호출
         * IndexedDB 열고, 전체 데이터를 메모리 캐시에 로드
         */
        async init() {
            if (_ready) return _readyPromise;
            if (_readyPromise) return _readyPromise;
            
            _readyPromise = (async () => {
                try {
                    await _openDB();
                    // 전체 키-값을 캐시에 로드
                    const store = _tx('readonly');
                    const keysReq = store.getAllKeys();
                    const valsReq = store.getAll();
                    const [keys, vals] = await Promise.all([_wrap(keysReq), _wrap(valsReq)]);
                    keys.forEach((k, i) => _cache.set(k, vals[i]));
                    _ready = true;
                    console.log(`✅ RLStorage 초기화 완료 (${_cache.size}개 키 로드)`);
                    return true;
                } catch(e) {
                    console.error('❌ RLStorage 초기화 실패:', e);
                    throw e;
                }
            })();
            
            return _readyPromise;
        },
        
        /**
         * 준비 상태 확인
         */
        isReady() {
            return _ready;
        },
        
        /**
         * 값 가져오기 (동기 — 캐시에서)
         * localStorage.getItem과 호환
         */
        getItem(key) {
            const v = _cache.get(key);
            return v === undefined ? null : v;
        },
        
        /**
         * 값 저장 (동기 — 캐시 즉시, IndexedDB는 비동기)
         * localStorage.setItem과 호환
         */
        setItem(key, value) {
            if (typeof value !== 'string') value = String(value);
            _cache.set(key, value);
            _queueWrite(key, value, 'set');
        },
        
        /**
         * 키 삭제
         * localStorage.removeItem과 호환
         */
        removeItem(key) {
            _cache.delete(key);
            _queueWrite(key, null, 'del');
        },
        
        /**
         * 모든 키
         */
        keys() {
            return Array.from(_cache.keys());
        },
        
        /**
         * 키 개수
         */
        get length() {
            return _cache.size;
        },
        
        /**
         * 인덱스로 키 가져오기 (localStorage.key 호환)
         */
        key(index) {
            return Array.from(_cache.keys())[index] || null;
        },
        
        /**
         * 쓰기 완료 대기
         * (페이지 닫기 전 호출 권장)
         */
        async flush() {
            await _flushWrites();
        },
        
        /**
         * 전체 데이터 가져오기 (디버그용)
         */
        getAll() {
            const result = {};
            _cache.forEach((v, k) => result[k] = v);
            return result;
        },
        
        /**
         * 사용량 정보 (대략)
         */
        getUsage() {
            let total = 0;
            _cache.forEach((v, k) => total += (v||'').length + k.length);
            return {
                keys: _cache.size,
                bytes: total,
                mb: (total / 1024 / 1024).toFixed(2)
            };
        },
        
        // ========== 마이그레이션 도구 ==========
        
        /**
         * localStorage → IndexedDB 복사 (옛 데이터는 유지)
         * @param {Object} options
         * @param {string[]} options.prefixes - 복사할 키 접두사 목록 (기본: rl_)
         * @param {boolean} options.overwrite - 이미 있는 키 덮어쓰기 (기본: false)
         * @returns {Object} 결과 통계
         */
        async migrate(options = {}) {
            await this.init();
            const prefixes = options.prefixes || ['rl_'];
            const overwrite = options.overwrite || false;
            
            console.log('%c🔄 마이그레이션 시작', 'font-weight:bold;color:#3B82F6;font-size:14px');
            
            const stats = {
                scanned: 0,
                copied: 0,
                skipped: 0,
                errors: 0,
                totalBytes: 0
            };
            
            const keysToMigrate = [];
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && prefixes.some(p => k.startsWith(p))) {
                    keysToMigrate.push(k);
                }
            }
            stats.scanned = keysToMigrate.length;
            
            console.log(`  스캔: ${stats.scanned}개 키 발견`);
            
            for (const k of keysToMigrate) {
                try {
                    const v = localStorage.getItem(k);
                    if (v === null) continue;
                    
                    if (!overwrite && _cache.has(k)) {
                        stats.skipped++;
                        continue;
                    }
                    
                    this.setItem(k, v);
                    stats.copied++;
                    stats.totalBytes += v.length;
                } catch(e) {
                    console.error('  복사 실패:', k, e);
                    stats.errors++;
                }
            }
            
            // 쓰기 큐 비우기 (대기)
            await this.flush();
            
            console.log(`  ✅ 복사: ${stats.copied}개 (${(stats.totalBytes/1024/1024).toFixed(2)}MB)`);
            console.log(`  ⏭️ 건너뜀: ${stats.skipped}개 (이미 있음)`);
            if (stats.errors > 0) console.log(`  ❌ 실패: ${stats.errors}개`);
            console.log('%c✅ 마이그레이션 완료', 'font-weight:bold;color:#10B981;font-size:14px');
            
            return stats;
        },
        
        /**
         * 데이터 검증 — localStorage와 IndexedDB가 일치하는지 확인
         * @returns {Object} 검증 결과
         */
        async verify() {
            await this.init();
            console.log('%c🔍 데이터 검증 시작', 'font-weight:bold;color:#3B82F6;font-size:14px');
            
            const lsKeys = new Set();
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith('rl_')) lsKeys.add(k);
            }
            
            const idbKeys = new Set();
            _cache.forEach((v, k) => { if (k.startsWith('rl_')) idbKeys.add(k); });
            
            const onlyInLS = [];
            const onlyInIDB = [];
            const differs = [];
            const matches = [];
            
            // localStorage에만 있는 키
            lsKeys.forEach(k => {
                if (!idbKeys.has(k)) onlyInLS.push(k);
                else {
                    const lv = localStorage.getItem(k);
                    const iv = _cache.get(k);
                    if (lv === iv) matches.push(k);
                    else differs.push({key: k, lsLen: (lv||'').length, idbLen: (iv||'').length});
                }
            });
            
            // IndexedDB에만 있는 키
            idbKeys.forEach(k => {
                if (!lsKeys.has(k)) onlyInIDB.push(k);
            });
            
            const result = {
                lsCount: lsKeys.size,
                idbCount: idbKeys.size,
                matchCount: matches.length,
                onlyInLS,
                onlyInIDB,
                differs
            };
            
            console.log(`  localStorage 키: ${result.lsCount}개`);
            console.log(`  IndexedDB 키: ${result.idbCount}개`);
            console.log(`  일치: ${result.matchCount}개`);
            if (onlyInLS.length > 0) console.log(`  ⚠️ localStorage에만 있음: ${onlyInLS.length}개`, onlyInLS.slice(0, 5));
            if (onlyInIDB.length > 0) console.log(`  ℹ️ IndexedDB에만 있음: ${onlyInIDB.length}개`, onlyInIDB.slice(0, 5));
            if (differs.length > 0) console.log(`  ⚠️ 값 다름: ${differs.length}개`, differs.slice(0, 5));
            
            const ok = onlyInLS.length === 0 && differs.length === 0;
            console.log(ok ? '%c✅ 검증 통과' : '%c⚠️ 검증 차이 있음', `font-weight:bold;color:${ok?'#10B981':'#F59E0B'};font-size:14px`);
            
            return result;
        },
        
        /**
         * IndexedDB 데이터 전체 삭제 (위험!)
         */
        async clearAll() {
            if (!confirm('⚠️ IndexedDB 데이터를 모두 삭제합니다. 진행할까요?')) return;
            const store = _tx('readwrite');
            await _wrap(store.clear());
            _cache.clear();
            console.log('🗑️ IndexedDB 전체 삭제됨');
        }
    };
    
    // 페이지 닫기 전 쓰기 큐 비우기 (best effort)
    window.addEventListener('beforeunload', () => {
        _flushWrites();
    });
    
    window.RLStorage = RLStorage;
})(window);
