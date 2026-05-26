#!/usr/bin/env python3
"""
모든 챕터 HTML 파일에 모바일 반응형 CSS를 일괄 적용합니다.

사용법:
  1) 이 스크립트를 챕터 HTML들이 있는 폴더에 두세요
  2) python3 apply_mobile_css.py
  3) grammarwise-l1-ch1.html ~ ch13.html, grammarwise-ch1.html ~ ch12.html 모두 자동 수정됨

각 파일에서 마지막 `}` 다음에 (480px 미디어 쿼리 닫는 괄호) 추가 CSS 블록을 삽입합니다.
이미 추가된 파일은 건너뜁니다 (중복 방지).
"""
import os
import re
import glob

MOBILE_CSS = """
/* ============ 📱 모바일 화면 전반 최적화 (자동 추가) ============ */
@media(max-width:768px){
  body{padding:14px 10px 80px;font-size:14px}
  .app{max-width:100%}
  .card{padding:18px 14px;margin-bottom:16px}
  .head{padding:16px;margin-bottom:14px}
  .ch-title{font-size:20px;line-height:1.3}
  .ch-sub{font-size:12px}
  .tabs{overflow-x:auto;-webkit-overflow-scrolling:touch;flex-wrap:nowrap;gap:6px;padding-bottom:6px;margin:0 -10px;padding-left:10px;padding-right:10px}
  .tabs::-webkit-scrollbar{height:3px}
  .tab{min-width:fit-content;padding:9px 12px;font-size:12px;white-space:nowrap}
  video,iframe{max-width:100%;height:auto}
  .video-wrap,.video-container{max-width:100%}
  .opt-row{gap:8px}
  .opt-row.col2{grid-template-columns:1fr}
  .opt-row.col3{grid-template-columns:1fr}
  .opt-row.col4{grid-template-columns:1fr 1fr}
  .opt{padding:11px 12px;font-size:13.5px}
  h1,h2,h3{line-height:1.35}
  h1{font-size:20px!important}
  h2{font-size:18px!important}
  h3{font-size:16px!important}
  button,.btn{min-height:42px;padding:10px 14px;font-size:14px}
  .lec-stats{grid-template-columns:1fr 1fr;gap:8px}
  .lec-stat{padding:10px 12px;font-size:12px}
  .result-score{font-size:48px}
  .q-stem,.q-text{font-size:14.5px;line-height:1.65}
  .video-upload-card,.add-video-card{padding:14px;font-size:13px}
}
@media(max-width:380px){
  .card{padding:14px 10px}
  .head{padding:13px}
  .ch-title{font-size:18px}
  .tab{padding:8px 10px;font-size:11px}
  .opt{padding:10px 10px;font-size:13px}
  button,.btn{font-size:13px;padding:9px 12px}
  .result-score{font-size:40px}
}
"""

MARKER = "/* ============ 📱 모바일 화면 전반 최적화"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Already has mobile CSS?
    if MARKER in content:
        return False, "이미 적용됨"
    
    # Find </style> and insert mobile CSS just before it
    if '</style>' not in content:
        return False, "</style> 태그를 찾을 수 없음"
    
    new_content = content.replace('</style>', MOBILE_CSS + '</style>', 1)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True, "적용 완료"

def main():
    patterns = [
        'grammarwise-l1-ch*.html',
        'grammarwise-ch*.html'
    ]
    
    files = []
    for p in patterns:
        files.extend(glob.glob(p))
    files = sorted(set(files))
    
    if not files:
        print("⚠️ 챕터 HTML 파일을 찾을 수 없어요. 챕터 파일들이 있는 폴더에서 실행해주세요.")
        return
    
    print(f"📂 발견된 챕터 파일: {len(files)}개\n")
    
    updated = 0
    skipped = 0
    for fp in files:
        ok, msg = process_file(fp)
        status = "✅" if ok else "⏭️"
        print(f"  {status} {fp:40s} - {msg}")
        if ok:
            updated += 1
        else:
            skipped += 1
    
    print(f"\n📊 완료: 적용 {updated}개 / 건너뜀 {skipped}개")
    print("\n다음 단계:")
    print("  1. 수정된 모든 .html 파일을 GitHub에 업로드 (덮어쓰기)")
    print("  2. commit + push")
    print("  3. 학생 휴대폰에서 강제 새로고침 (Ctrl+F5 / 모바일은 Safari/Chrome 캐시 비우기)")

if __name__ == '__main__':
    main()
