// pwa-init.js — Service Worker 등록 + 앱 설치 안내
(function(){
  'use strict';
  
  // 1. Service Worker 등록
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(reg => {
        console.log('[PWA] Service Worker 등록 완료');
        // 새 버전 감지 시 활성화
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          if (newSW) {
            newSW.addEventListener('statechange', () => {
              if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('[PWA] 새 버전 감지 — 다음 로딩에 적용');
              }
            });
          }
        });
      }).catch(err => {
        console.warn('[PWA] Service Worker 등록 실패:', err);
      });
    });
  }
  
  // 2. 앱 설치 프롬프트
  let deferredPrompt = null;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallBanner();
  });
  
  // iOS는 beforeinstallprompt 지원 안함 — 별도 안내
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone === true;
  }
  
  // iOS 사용자에게 안내 (앱으로 안 열린 상태일 때만)
  if (isIOS() && !isStandalone()) {
    // 페이지 로드 후 약간 지연되게 보여줌
    setTimeout(() => {
      if (!localStorage.getItem('pwa_ios_hint_shown')) {
        showIOSHint();
      }
    }, 3000);
  }
  
  function showInstallBanner(){
    // 이미 표시했거나 거부한 사용자에게는 다시 안 보여줌
    if (localStorage.getItem('pwa_install_dismissed')) return;
    if (document.getElementById('pwa-install-banner')) return;
    
    const banner = document.createElement('div');
    banner.id = 'pwa-install-banner';
    banner.style.cssText = `
      position:fixed;bottom:16px;left:16px;right:16px;
      background:linear-gradient(135deg,#10B981,#059669);
      color:white;border-radius:12px;padding:14px 16px;
      box-shadow:0 8px 24px rgba(0,0,0,0.2);
      z-index:9999;display:flex;align-items:center;gap:12px;
      font-family:'Noto Sans KR',sans-serif;font-size:14px;
      animation:slideUp 0.3s ease-out;
      max-width:480px;margin:0 auto;
    `;
    banner.innerHTML = `
      <div style="font-size:28px">📱</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;margin-bottom:2px">TERRY'S 앱으로 설치</div>
        <div style="font-size:12px;opacity:0.95">홈 화면에서 바로 학습 시작!</div>
      </div>
      <button id="pwa-install-btn" style="
        background:white;color:#047857;border:none;
        padding:8px 14px;border-radius:8px;font-weight:700;
        font-size:13px;cursor:pointer;font-family:inherit
      ">설치</button>
      <button id="pwa-dismiss-btn" style="
        background:transparent;color:white;border:none;
        font-size:20px;cursor:pointer;padding:4px 8px;line-height:1
      " aria-label="닫기">×</button>
    `;
    
    // 애니메이션 키프레임 추가
    if (!document.getElementById('pwa-style')) {
      const style = document.createElement('style');
      style.id = 'pwa-style';
      style.textContent = `
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(banner);
    
    document.getElementById('pwa-install-btn').onclick = async () => {
      if (!deferredPrompt) return;
      banner.remove();
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('[PWA] 사용자 선택:', outcome);
      if (outcome === 'accepted') {
        localStorage.setItem('pwa_installed', 'true');
      } else {
        localStorage.setItem('pwa_install_dismissed', Date.now().toString());
      }
      deferredPrompt = null;
    };
    
    document.getElementById('pwa-dismiss-btn').onclick = () => {
      banner.remove();
      localStorage.setItem('pwa_install_dismissed', Date.now().toString());
    };
  }
  
  function showIOSHint(){
    if (document.getElementById('pwa-ios-hint')) return;
    
    const hint = document.createElement('div');
    hint.id = 'pwa-ios-hint';
    hint.style.cssText = `
      position:fixed;bottom:16px;left:16px;right:16px;
      background:white;border:2px solid #10B981;border-radius:12px;
      padding:14px 16px;box-shadow:0 8px 24px rgba(0,0,0,0.15);
      z-index:9999;font-family:'Noto Sans KR',sans-serif;font-size:13px;
      color:#1F2937;line-height:1.5;
      animation:slideUp 0.3s ease-out;
      max-width:480px;margin:0 auto;
    `;
    hint.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
        <div style="flex:1">
          <div style="font-weight:700;color:#047857;margin-bottom:6px;font-size:14px">📱 홈 화면에 앱으로 추가</div>
          <div>1. 하단의 <b>공유 버튼</b> <span style="display:inline-block;border:1px solid #ccc;border-radius:4px;padding:0 6px;font-size:11px">⬆️</span> 누르기<br>
          2. "<b>홈 화면에 추가</b>" 선택<br>
          3. 학원 앱처럼 사용!</div>
        </div>
        <button id="pwa-ios-close" style="
          background:transparent;color:#9CA3AF;border:none;
          font-size:22px;cursor:pointer;padding:0 4px;line-height:1
        ">×</button>
      </div>
    `;
    
    if (!document.getElementById('pwa-style')) {
      const style = document.createElement('style');
      style.id = 'pwa-style';
      style.textContent = `
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(hint);
    
    document.getElementById('pwa-ios-close').onclick = () => {
      hint.remove();
      localStorage.setItem('pwa_ios_hint_shown', 'true');
    };
    
    // 10초 후 자동 사라짐
    setTimeout(() => {
      if (document.getElementById('pwa-ios-hint')) {
        hint.remove();
        localStorage.setItem('pwa_ios_hint_shown', 'true');
      }
    }, 15000);
  }
  
  // 앱이 설치된 후 호출됨
  window.addEventListener('appinstalled', () => {
    console.log('[PWA] 앱 설치 완료!');
    localStorage.setItem('pwa_installed', 'true');
    deferredPrompt = null;
  });
})();
