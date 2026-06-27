export const categories = [
  {id: 'finance', title: '금융/계산', icon: '💳'},
  {id: 'productivity', title: '생산성', icon: '⚡'},
  {id: 'dev', title: '개발자', icon: '💻'},
  {id: 'security', title: '보안/프라이버시', icon: '🛡️'},
  {id: 'lifestyle', title: '생활/건강', icon: '🌿'},
  {id: 'utility', title: '유틸리티', icon: '🛠️'},
  {id: 'design', title: '디자인/콘텐츠', icon: '✨'},
  {id: 'performance', title: '성능/모니터링', icon: '🚀'},
]

export const tools = [
  {slug: 'percent-calculator', category: 'finance', type: 'percent', title: '퍼센트 계산기', description: '증가율, 감소율, 전체 대비 비율을 빠르게 계산합니다.'},
  {slug: 'vat-calculator', category: 'finance', type: 'vat', title: '부가세(VAT) 계산기', description: '공급가액과 부가세 포함 금액을 상호 계산합니다.'},
  {slug: 'tax33-calculator', category: 'finance', type: 'tax33', title: '프리랜서 3.3% 세금 계산기', description: '원천징수 3.3% 공제 전후 금액을 계산합니다.'},
  {slug: 'interest-calculator', category: 'finance', type: 'interest', title: '이자 계산기', description: '단리와 복리 기준의 예상 이자를 계산합니다.'},
  {slug: 'crypto-profit-calculator', category: 'finance', type: 'crypto', title: '코인 수익률 계산기', description: '매수가, 매도가, 수량으로 수익률을 계산합니다.'},
  {slug: 'area-converter', category: 'utility', type: 'area', title: '평수 ↔ ㎡ 변환기', description: '평과 제곱미터를 즉시 변환합니다.'},
  {slug: 'text-counter', category: 'productivity', type: 'text', title: '글자 수 및 바이트 계산기', description: '글자 수, 단어 수, 줄 수, UTF-8 바이트를 계산합니다.'},
  {slug: 'timezone-converter', category: 'productivity', type: 'timezone', title: '시간대 변환기', description: '주요 도시 시간대를 기준으로 시간을 비교합니다.'},
  {slug: 'pomodoro-timer', category: 'productivity', type: 'pomodoro', title: '뽀모도로 타이머', description: '집중 시간과 휴식 시간을 설정해 작업 리듬을 만듭니다.'},
  {slug: 'json-formatter', category: 'dev', type: 'json', title: 'JSON 포맷터', description: 'JSON을 검증하고 보기 좋게 정렬합니다.'},
  {slug: 'regex-tester', category: 'dev', type: 'regex', title: '정규표현식 테스터', description: '정규식 매칭 결과를 브라우저에서 바로 확인합니다.'},
  {slug: 'password-generator', category: 'security', type: 'password', title: '비밀번호 생성기', description: '길이와 문자 조합을 선택해 안전한 비밀번호를 생성합니다.'},
  {slug: 'redact-tool', category: 'security', type: 'redact', title: '개인정보 마스킹 도구', description: '이메일, 전화번호, 주민번호 형태의 민감 정보를 가립니다.'},
  {slug: 'url-checker', category: 'security', type: 'url', title: 'URL 안전 점검기', description: 'URL 형식과 의심 패턴을 로컬 규칙으로 점검합니다.'},
  {slug: 'burn-message', category: 'security', type: 'burn', title: '일회용 비밀 메모', description: '브라우저 안에서만 보관되는 임시 비밀 메모를 만듭니다.'},
  {slug: 'color-checker', category: 'design', type: 'color', title: '색상 팔레트/대비 검사기', description: 'HEX 색상과 텍스트 대비율을 확인합니다.'},
  {slug: 'font-compare', category: 'design', type: 'font', title: '다국어 폰트 비교기', description: '문장을 여러 시스템 폰트로 비교해봅니다.'},
  {slug: 'nickname-generator', category: 'design', type: 'nickname', title: '영문 성함/닉네임 추천기', description: '이름이나 키워드로 영문 닉네임 후보를 만듭니다.'},
  {slug: 'gpa-converter', category: 'lifestyle', type: 'gpa', title: '학점 변환기', description: '4.5, 4.3, 100점 기준 GPA를 상호 변환합니다.'},
  {slug: 'gym-plate-calculator', category: 'lifestyle', type: 'gym', title: '1RM & 바벨 원판 계산기', description: '예상 1RM과 바벨 한쪽 원판 구성을 계산합니다.'},
  {slug: 'pet-food-calculator', category: 'lifestyle', type: 'pet', title: '반려동물 사료량 계산기', description: '체중과 kcal 기준으로 하루 급여량을 계산합니다.'},
  {slug: 'coffee-yield-calculator', category: 'lifestyle', type: 'coffee', title: '커피 브루잉 수율 계산기', description: '원두, 추출액, TDS로 추출 수율을 계산합니다.'},
  {slug: 'sla-uptime-calculator', category: 'performance', type: 'sla', title: 'SLA 가동률 계산기', description: '가동률 기준 허용 장애 시간을 계산합니다.'},
  {slug: 'carbon-footprint-calculator', category: 'performance', type: 'carbon', title: '웹사이트 탄소 발자국 계산기', description: '페이지뷰와 전송량 기준 대략적인 CO2를 추정합니다.'},
  {slug: 'ttfb-tester', category: 'performance', type: 'ttfb', title: 'TTFB 기록 도구', description: '측정한 응답시간을 붙여 넣어 평균과 p95를 계산합니다.'},
  {slug: 'resistor-calculator', category: 'dev', type: 'resistor', title: '저항기 색띠 계산기', description: '4색 저항 색띠 값을 옴 단위로 계산합니다.'},
  {slug: 'construction-dictionary', category: 'utility', type: 'construction', title: '건설현장 용어 사전', description: '자주 쓰는 현장 용어와 표준 표현을 검색합니다.'},
  {slug: 'elbow-offset-calculator', category: 'utility', type: 'elbow', title: '배관 엘보 오프셋 계산기', description: '45도/90도 엘보 기준 절단 길이를 간단 계산합니다.'},
]

export const existingTools = [
  {slug: 'bmi-calculator', category: 'lifestyle', title: 'BMI 계산기', description: '체질량지수를 계산합니다.'},
  {slug: 'loan-calculator', category: 'finance', title: '대출 계산기', description: '대출 월 상환금을 계산합니다.'},
  {slug: 'dday-calculator', category: 'productivity', title: 'D-Day 계산기', description: '날짜까지 남은 일수를 계산합니다.'},
  {slug: 'unit-converter', category: 'utility', title: '단위 변환기', description: '길이, 무게, 온도를 변환합니다.'},
  {slug: 'qr-code-generator', category: 'utility', title: 'QR 코드 생성기', description: '텍스트와 URL을 QR 코드로 만듭니다.'},
]

export const allTools = [...existingTools, ...tools]

export function getTool(slug) {
  return allTools.find((tool) => tool.slug === slug)
}

export function getDynamicTool(slug) {
  return tools.find((tool) => tool.slug === slug)
}

export function getToolsByCategory(categoryId) {
  return allTools.filter((tool) => tool.category === categoryId)
}
