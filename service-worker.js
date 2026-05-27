// service-worker.js — 엠베스트SE 동탄남광장 학습 플랫폼
// 오프라인 지원 + 빠른 로딩

const CACHE_VERSION = 'terrys-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;

// 핵심 파일들 (오프라인에서도 작동)
const STATIC_FILES = [
  './login.html',
  './student.html',
  './vocab-learn.html',
  './grammar-full.html',
  './rl-storage.js',
  './curriculum-sync.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// 설치 시 핵심 파일 미리 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[SW] Caching static files');
      return cache.addAll(STATIC_FILES).catch(e => {
        console.warn('[SW] Some files failed to cache:', e);
      });
    })
  );
  self.skipWaiting();
});

// 활성화 시 옛 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => !k.startsWith(CACHE_VERSION)).map(k => {
        console.log('[SW] Deleting old cache:', k);
        return caches.delete(k);
      })
    ))
  );
  self.clients.claim();
});

// fetch 전략:
// - curriculum.json: 항상 네트워크 우선 (학원 자료 항상 최신)
// - GitHub API: 캐싱 안 함
// - 나머지 정적 파일: 캐시 우선 (빠른 로딩)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // POST/PUT 등은 캐싱 안 함
  if (event.request.method !== 'GET') return;
  
  // GitHub API 요청은 그냥 네트워크로
  if (url.hostname.includes('api.github.com') || 
      url.hostname.includes('githubusercontent.com')) {
    return; // 기본 동작 (네트워크)
  }
  
  // curriculum.json: 네트워크 우선, 실패 시 캐시
  if (url.pathname.endsWith('curriculum.json')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          // 새 응답 캐싱
          if (res.ok) {
            const clone = res.clone();
            caches.open(STATIC_CACHE).then(c => c.put(event.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // 나머지: 캐시 우선, 네트워크 폴백, 응답 캐싱
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // 백그라운드에서 캐시 업데이트 (다음 방문 시 최신)
        fetch(event.request).then(res => {
          if (res.ok) {
            caches.open(STATIC_CACHE).then(c => c.put(event.request, res));
          }
        }).catch(()=>{});
        return cached;
      }
      // 캐시에 없으면 네트워크
      return fetch(event.request).then(res => {
        if (res.ok && (url.pathname.endsWith('.html') || 
                       url.pathname.endsWith('.js') ||
                       url.pathname.endsWith('.png'))) {
          const clone = res.clone();
          caches.open(STATIC_CACHE).then(c => c.put(event.request, clone));
        }
        return res;
      });
    })
  );
});

// 메시지 수신 — 새 버전 즉시 활성화
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
