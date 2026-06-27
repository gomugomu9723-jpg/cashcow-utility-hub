# Utility Hub — 브라우저 유틸리티 허브

간단한 브라우저 전용 유틸리티 모음입니다. Next.js + Tailwind CSS로 작성되었고 정적 사이트로 Cloudflare Pages에 배포할 수 있도록 구성되어 있습니다.

## 주요 기능
- BMI 계산기, 대출(월 상환) 계산기, D-Day 계산기, 단위 변환기, QR 코드 생성기
- 모든 도구는 클라이언트(브라우저)에서만 동작합니다 — 서버나 DB 불필요
- **🌍 6개 언어 지원**: 한국어(ko), 영어(en), 일본어(ja), 중국어(zh), 스페인어(es), 프랑스어(fr)
- AdSense 추가 위치는 자리만 확보(플레이스홀더)되어 있습니다

## 다국어 지원
- 기본 언어: 한국어(ko)
- 헤더에 언어 선택기 표시 (로고 옆)
- 모든 페이지, 도구, UI 텍스트가 모두 번역됨
- 번역 데이터: `lib/i18n.js`

### 특정 언어로 접속하기
- 메인: `/` (기본: 한국어)
- 영어: `/?lang=en` 또는 헤더의 "English" 클릭
- 일본어: `/?lang=ja` 또는 헤더의 "日本語" 클릭
- 중국어: `/?lang=zh`
- 스페인어: `/?lang=es`
- 프랑스어: `/?lang=fr`

## 필수 사전 준비
- Node.js (권장 v18 이상)
- GitHub 계정 및 리포지토리 (Cloudflare Pages 연결용)
- (선택) 커스텀 도메인 및 연락용 이메일

## 설치 및 로컬 실행
1. 저장소 루트로 이동:
```bash
cd "e:\CashCow Homepage"
```
2. 의존성 설치:
```bash
npm install
```
3. 개발 서버 실행(로컬 확인):
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 열기

## 프로덕션 빌드 및 정적 내보내기
```bash
npm run build
npm run export
```
정적 출력 폴더: `out`

## Cloudflare Pages 배포
1. GitHub에 리포지토리 푸시
2. Cloudflare Pages에서 리포지토리 연결
3. 빌드 설정:
   - Build command: `npm run build && npm run export`
   - Output directory: `out`
4. 배포 완료 후 도메인 연결 및 HTTPS 설정

현재 배포 상태: 🟢 배포 완료 - https://winter-disk-baeb.9723bmw.workers.dev/

## AdSense 관련(추후)
- 현재는 광고 코드가 포함되어 있지 않습니다. 실제 광고 추가는 `pages/_document.js`의 `<Head>` 또는 `components/AdPlaceholder.js` 위치에 스크립트를 추가하면 됩니다.

## 새 도구 추가 방법
- `pages/tools/` 폴더에 새 파일을 추가하면 자동으로 라우트가 생성됩니다. 예: `pages/tools/new-tool.js` → `/tools/new-tool`
- 각 도구는 `ToolLayout` 컴포넌트를 사용해 제목, 설명, 메타를 설정하세요.

## 새 번역 추가 방법
1. `lib/i18n.js`에서 `translations` 객체에 새 언어 추가:
```javascript
const translations = {
  ko: { /* ... */ },
  // 새 언어 추가
  de: {
    common: { tools: 'Werkzeuge', /* ... */ },
    // ... 나머지 번역
  }
}
```
2. `next.config.js`의 `i18n.locales` 배열에 언어 코드 추가
3. `lib/i18n.js`의 `localeNames` 객체에 언어 이름 추가

## 구조
```
pages/
  _app.js          - 전역 레이아웃
  _document.js     - HTML 문서 구조
  index.js         - 메인 페이지 (다국어)
  about.js         - 소개 페이지 (다국어)
  contact.js       - 문의 페이지 (다국어)
  privacy-policy.js - 개인정보 처리방침 (다국어)
  terms.js         - 이용약관 (다국어)
  tools/
    bmi-calculator.js       - BMI 계산기 (다국어)
    loan-calculator.js      - 대출 계산기 (다국어)
    dday-calculator.js      - D-Day 계산기 (다국어)
    unit-converter.js       - 단위 변환 (다국어)
    qr-code-generator.js    - QR 코드 생성 (다국어)

components/
  Header.js      - 헤더 + 언어 선택기
  Footer.js      - 푸터 (다국어)
  ToolCard.js    - 도구 카드
  ToolLayout.js  - 도구 페이지 레이아웃
  RelatedTools.js - 관련 도구 표시
  FAQ.js         - FAQ 섹션
  AdPlaceholder.js - 광고 자리 확보

lib/
  i18n.js        - 다국어 번역 및 헬퍼 함수

styles/
  globals.css    - 전역 스타일 (Toss 디자인)

public/
  robots.txt     - 검색 엔진 로봇 지시
  sitemap.xml    - 사이트맵
```


검증 및 권장 추가 작업
- `Privacy Policy`와 `Contact` 페이지에 실제 이메일/정책으로 업데이트
- `sitemap.xml`과 `robots.txt` 확인 (프로젝트에 포함됨)
- Google Search Console에 사이트 추가 및 소유권 확인

문의
- 배포, AdSense 연동, 또는 추가 도구 개발을 도와드릴 수 있습니다. 원하시면 GitHub 초기 커밋 및 Cloudflare 연결 절차를 단계별로 안내해 드리겠습니다.
