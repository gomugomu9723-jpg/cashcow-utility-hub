export const supportedLocales = ['ko', 'en', 'ja', 'zh', 'es', 'fr']
export const defaultLocale = 'ko'

export const localeNames = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
}

const translations = {
  ko: {
    common: {
      tools: '도구',
      about: '소개',
      contact: '문의',
      privacy: '개인정보',
      terms: '이용약관',
      quickTool: '빠른 도구',
      email: '이메일',
      relatedTools: '관련 도구',
      result: '결과',
      enterValues: '값을 입력하고 계산 버튼을 눌러주세요.',
      language: '언어',
    },
    home: {
      heroTitle: '일상 업무를 더 빠르고 깔끔하게',
      heroDescription: 'BMI, 대출 계산, D-Day, 단위 변환, QR 코드 생성까지 설치 없이 브라우저에서 바로 쓰는 가벼운 도구 모음입니다.',
      cta: '도구 바로가기',
      learnMore: '서비스 소개 보기',
      noLogin: '로그인 없이 사용',
      noSignup: '회원가입 없이 필요한 도구를 바로 사용할 수 있습니다.',
      mobile: '모바일 최적화',
      mobileDesc: '모든 화면에서 자연스럽게 작동하도록 설계했습니다.',
    },
    footer: {
      copy: '© 2026 Utility Hub. 간편한 브라우저 도구.',
      privacy: '개인정보',
      terms: '이용약관',
    },
    about: {
      title: '소개',
      description: 'Utility Hub는 서버 추적 없이 동작하는 간단한 클라이언트 도구를 제공합니다. 빠른 성능과 개인정보 보호를 목표로 설계했습니다.',
    },
    contact: {
      title: '문의',
      description: '이 사이트는 정적 사이트입니다. 문의는 이메일 또는 외부 폼을 이용해주세요.',
      emailText: '이메일',
      email: 'contact@example.com',
    },
    privacy: {
      title: '개인정보 처리방침',
      description: '이 사이트는 정적이며 기본적으로 클라이언트 측 코드만 사용합니다. 사용자 데이터를 수집하거나 저장하지 않습니다.',
      additional: '추후 분석, 광고 등 제3자 서비스가 추가되면 이 페이지에 공개하겠습니다.',
    },
    terms: {
      title: '이용약관',
      description: '이 도구들은 사용자 판단에 따라 사용해주세요. 결과는 정보 제공 목적이며 보증을 제공하지 않습니다.',
    },
    tools: {
      'bmi-calculator': {
        title: 'BMI 계산기',
        description: '브라우저에서 체질량 지수를 빠르게 계산합니다.',
        form: {
          weight: '체중 (kg)',
          height: '신장 (cm)',
          calculate: '계산하기',
          resultLabel: '결과',
          bmi: 'BMI',
          category: '분류',
          unknown: '알 수 없음',
          underweight: '저체중',
          normal: '정상',
          overweight: '과체중',
          obese: '비만',
          whatThisDoes: 'BMI = 체중(kg) / 신장(m)^2 공식을 계산합니다. 성인용 참고 지표이며 의학적 조언을 대체하지 않습니다.',
          howToUse: '체중을 kg 단위로, 신장을 cm 단위로 입력한 뒤 계산 버튼을 누르세요.',
        },
      },
      'loan-calculator': {
        title: '대출 계산기',
        description: '원리금 균등 상환 기준 월 납입액을 계산합니다.',
        form: {
          amount: '대출 금액',
          rate: '연 이자율 (%)',
          years: '기간 (년)',
          calculate: '계산하기',
          monthlyPayment: '월 상환금',
          whatThisDoes: '대출 금액, 이자율, 기간을 입력하면 예상 월 상환금을 계산합니다.',
          howToUse: '금액, 연 이자율, 상환 기간을 입력하고 계산하기를 누르세요.',
        },
      },
      'dday-calculator': {
        title: 'D-Day 계산기',
        description: '선택한 날짜까지 남은 일수 또는 지난 일수를 계산합니다.',
        form: {
          date: '날짜 선택',
          calculate: '계산하기',
          result: 'D-Day 결과',
          past: '일 지났습니다.',
          future: '일 남았습니다.',
          whatThisDoes: '선택한 날짜를 기준으로 오늘부터 남은 일수 또는 지난 일수를 표시합니다.',
          howToUse: '달력에서 날짜를 선택한 뒤 계산 버튼을 누르세요.',
        },
      },
      'unit-converter': {
        title: '단위 변환기',
        description: '자주 쓰는 단위를 빠르게 변환합니다.',
        form: {
          category: '분류 선택',
          from: '변환할 단위',
          to: '목표 단위',
          value: '값 입력',
          convert: '변환하기',
          result: '변환 결과',
          whatThisDoes: '일반적인 길이, 무게, 온도 단위를 변환합니다. 일부 결과는 근사치일 수 있습니다.',
          howToUse: '분류와 단위를 선택하고 값을 입력한 뒤 변환하기를 누르세요.',
        },
      },
      'qr-code-generator': {
        title: 'QR 코드 생성기',
        description: '텍스트나 URL을 QR 코드 이미지로 만듭니다.',
        form: {
          text: '텍스트 또는 URL',
          size: '픽셀 크기',
          generate: '생성하기',
          download: '다운로드',
          whatThisDoes: '입력한 텍스트나 URL을 브라우저에서 QR 코드 이미지로 변환합니다.',
          howToUse: '텍스트나 링크를 입력하고 생성한 뒤 이미지를 다운로드하세요.',
        },
      },
    },
  },
  en: {
    common: {
      tools: 'Tools',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      quickTool: 'Quick tool',
      email: 'Email',
      relatedTools: 'Related tools',
      result: 'Result',
      enterValues: 'Enter values and press Calculate.',
      language: 'Language',
    },
    home: {
      heroTitle: 'Faster, cleaner everyday workflow',
      heroDescription: 'BMI, loan calculator, D-Day, unit converter, and QR code generator. Lightweight browser tools with no installation required.',
      cta: 'Open tools',
      learnMore: 'Learn more',
      noLogin: 'No login required',
      noSignup: 'Use instantly without creating an account.',
      mobile: 'Mobile friendly',
      mobileDesc: 'Designed to work smoothly on every screen.',
    },
    footer: {
      copy: '© 2026 Utility Hub. Simple browser tools.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    about: {
      title: 'About',
      description: 'Utility Hub offers simple client-side tools without server tracking. It is built for speed and privacy.',
    },
    contact: {
      title: 'Contact',
      description: 'This is a static site. For inquiries, use email or an external form.',
      emailText: 'Email',
      email: 'contact@example.com',
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'This site is static and uses client-side code by default. It does not collect or store user data.',
      additional: 'If third-party analytics or ads are added later, they will be disclosed here.',
    },
    terms: {
      title: 'Terms of Use',
      description: 'Use these tools at your own discretion. Results are provided for informational purposes without warranty.',
    },
    tools: {
      'bmi-calculator': {
        title: 'BMI Calculator',
        description: 'Calculate body mass index quickly in the browser.',
        form: {
          weight: 'Weight (kg)',
          height: 'Height (cm)',
          calculate: 'Calculate',
          resultLabel: 'Result',
          bmi: 'BMI',
          category: 'Category',
          unknown: 'Unknown',
          underweight: 'Underweight',
          normal: 'Normal',
          overweight: 'Overweight',
          obese: 'Obese',
          whatThisDoes: 'Computes BMI = weight (kg) / height (m)^2. It is a reference for adults and not medical advice.',
          howToUse: 'Enter weight in kilograms and height in centimeters, then press Calculate.',
        },
      },
      'loan-calculator': {
        title: 'Loan Payment Calculator',
        description: 'Estimate monthly loan payments using standard amortization.',
        form: {
          amount: 'Loan amount',
          rate: 'Annual interest rate (%)',
          years: 'Years',
          calculate: 'Calculate',
          monthlyPayment: 'Monthly payment',
          whatThisDoes: 'Enter loan amount, interest rate, and term to estimate monthly payments.',
          howToUse: 'Input the amount, annual rate, and repayment period, then press Calculate.',
        },
      },
      'dday-calculator': {
        title: 'D-Day Calculator',
        description: 'Compute days until or since a chosen date.',
        form: {
          date: 'Pick a date',
          calculate: 'Calculate',
          result: 'D-Day result',
          past: 'days have passed.',
          future: 'days remaining.',
          whatThisDoes: 'Shows days remaining until or passed since the selected date.',
          howToUse: 'Choose a date from the calendar and press Calculate.',
        },
      },
      'unit-converter': {
        title: 'Unit Converter',
        description: 'Quickly convert common units.',
        form: {
          category: 'Category',
          from: 'From unit',
          to: 'To unit',
          value: 'Value',
          convert: 'Convert',
          result: 'Result',
          whatThisDoes: 'Converts common length, weight, and temperature units. Some results may be approximate.',
          howToUse: 'Select a category and units, enter a value, then press Convert.',
        },
      },
      'qr-code-generator': {
        title: 'QR Code Generator',
        description: 'Create QR code images from text or URLs.',
        form: {
          text: 'Text or URL',
          size: 'Pixel size',
          generate: 'Generate',
          download: 'Download',
          whatThisDoes: 'Turns text or URLs into a QR code image in the browser.',
          howToUse: 'Enter text or a link, generate the QR code, then download the image.',
        },
      },
    },
  },
}

const localizedToolText = {
  ja: {
    common: {tools: 'ツール', about: '概要', contact: 'お問い合わせ', privacy: 'プライバシー', terms: '利用規約', quickTool: 'クイックツール', email: 'メール', relatedTools: '関連ツール', result: '結果', enterValues: '値を入力して計算を押してください。', language: '言語'},
    home: {heroTitle: '日々の作業をより速く、すっきりと', heroDescription: 'BMI、ローン計算、D-Day、単位変換、QRコード生成をブラウザですぐ使えます。', cta: 'ツールを開く', learnMore: '詳しく見る', noLogin: 'ログイン不要', noSignup: 'アカウントなしですぐに使えます。', mobile: 'モバイル対応', mobileDesc: 'あらゆる画面で快適に動作します。'},
    footer: {copy: '© 2026 Utility Hub. シンプルなブラウザツール。', privacy: 'プライバシー', terms: '利用規約'},
    about: {title: '概要', description: 'Utility Hubは、サーバー追跡なしで動作するシンプルなクライアント側ツールを提供します。'},
    contact: {title: 'お問い合わせ', description: 'このサイトは静的サイトです。お問い合わせはメールまたは外部フォームをご利用ください。', emailText: 'メール', email: 'contact@example.com'},
    privacy: {title: 'プライバシーポリシー', description: 'このサイトは静的で、基本的にクライアント側コードのみを使用します。ユーザーデータは収集または保存しません。', additional: '分析や広告などの第三者サービスを追加する場合はここで公開します。'},
    terms: {title: '利用規約', description: 'これらのツールは自己判断でご利用ください。結果は情報提供目的であり、保証はありません。'},
  },
  zh: {
    common: {tools: '工具', about: '关于', contact: '联系', privacy: '隐私', terms: '条款', quickTool: '快速工具', email: '邮箱', relatedTools: '相关工具', result: '结果', enterValues: '请输入数值并点击计算。', language: '语言'},
    home: {heroTitle: '让日常工作更快、更清晰', heroDescription: 'BMI、贷款计算、D-Day、单位换算和二维码生成器，均可直接在浏览器中使用。', cta: '打开工具', learnMore: '了解更多', noLogin: '无需登录', noSignup: '无需创建账号即可使用。', mobile: '适配移动端', mobileDesc: '在各种屏幕上都能顺畅使用。'},
    footer: {copy: '© 2026 Utility Hub. 简单的浏览器工具。', privacy: '隐私', terms: '条款'},
    about: {title: '关于', description: 'Utility Hub 提供无需服务器追踪的简单客户端工具，注重速度与隐私。'},
    contact: {title: '联系', description: '这是一个静态网站。如需咨询，请使用邮箱或外部表单。', emailText: '邮箱', email: 'contact@example.com'},
    privacy: {title: '隐私政策', description: '本网站是静态网站，默认仅使用客户端代码。不收集或存储用户数据。', additional: '如果以后添加第三方分析或广告服务，将在此说明。'},
    terms: {title: '使用条款', description: '请自行判断使用这些工具。结果仅供参考，不提供任何保证。'},
  },
  es: {
    common: {tools: 'Herramientas', about: 'Acerca de', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos', quickTool: 'Herramienta rápida', email: 'Correo', relatedTools: 'Herramientas relacionadas', result: 'Resultado', enterValues: 'Ingresa valores y presiona Calcular.', language: 'Idioma'},
    home: {heroTitle: 'Flujo diario más rápido y claro', heroDescription: 'BMI, calculadora de préstamos, D-Day, convertidor de unidades y generador QR directamente en el navegador.', cta: 'Abrir herramientas', learnMore: 'Saber más', noLogin: 'No requiere inicio de sesión', noSignup: 'Úsalo al instante sin crear cuenta.', mobile: 'Optimizado para móviles', mobileDesc: 'Diseñado para funcionar bien en todas las pantallas.'},
    footer: {copy: '© 2026 Utility Hub. Herramientas sencillas de navegador.', privacy: 'Privacidad', terms: 'Términos'},
    about: {title: 'Acerca de', description: 'Utility Hub ofrece herramientas simples del lado del cliente sin seguimiento del servidor.'},
    contact: {title: 'Contacto', description: 'Este es un sitio estático. Para consultas, usa correo o un formulario externo.', emailText: 'Correo', email: 'contact@example.com'},
    privacy: {title: 'Política de privacidad', description: 'Este sitio es estático y usa código del lado del cliente por defecto. No recopila ni almacena datos de usuario.', additional: 'Si se agregan análisis o anuncios de terceros, se informará aquí.'},
    terms: {title: 'Términos de uso', description: 'Usa estas herramientas a tu criterio. Los resultados son informativos y no tienen garantía.'},
  },
  fr: {
    common: {tools: 'Outils', about: 'À propos', contact: 'Contact', privacy: 'Confidentialité', terms: 'Conditions', quickTool: 'Outil rapide', email: 'Email', relatedTools: 'Outils associés', result: 'Résultat', enterValues: 'Entrez les valeurs puis appuyez sur Calculer.', language: 'Langue'},
    home: {heroTitle: 'Un flux quotidien plus rapide et plus clair', heroDescription: 'IMC, calcul de prêt, D-Day, conversion d’unités et générateur QR directement dans le navigateur.', cta: 'Ouvrir les outils', learnMore: 'En savoir plus', noLogin: 'Connexion non requise', noSignup: 'Utilisez les outils sans créer de compte.', mobile: 'Adapté au mobile', mobileDesc: 'Conçu pour fonctionner sur tous les écrans.'},
    footer: {copy: '© 2026 Utility Hub. Outils simples de navigateur.', privacy: 'Confidentialité', terms: 'Conditions'},
    about: {title: 'À propos', description: 'Utility Hub propose des outils simples côté client sans suivi serveur.'},
    contact: {title: 'Contact', description: 'Ce site est statique. Pour toute question, utilisez l’email ou un formulaire externe.', emailText: 'Email', email: 'contact@example.com'},
    privacy: {title: 'Politique de confidentialité', description: 'Ce site est statique et utilise par défaut du code côté client. Il ne collecte ni ne stocke les données utilisateur.', additional: 'Si des services tiers d’analyse ou de publicité sont ajoutés, ils seront indiqués ici.'},
    terms: {title: 'Conditions d’utilisation', description: 'Utilisez ces outils à votre discrétion. Les résultats sont fournis à titre informatif sans garantie.'},
  },
}

const toolTranslations = {
  ja: {
    'bmi-calculator': {title: 'BMI計算機', description: 'ブラウザで体格指数をすばやく計算します。'},
    'loan-calculator': {title: 'ローン計算機', description: '標準的な返済方式で月々の支払いを見積もります。'},
    'dday-calculator': {title: 'D-Day計算機', description: '選択した日付までの日数、または経過日数を計算します。'},
    'unit-converter': {title: '単位変換', description: 'よく使う単位をすばやく変換します。'},
    'qr-code-generator': {title: 'QRコード生成', description: 'テキストやURLからQRコードを作成します。'},
  },
  zh: {
    'bmi-calculator': {title: 'BMI 计算器', description: '在浏览器中快速计算身体质量指数。'},
    'loan-calculator': {title: '贷款计算器', description: '按标准摊还方式估算每月还款额。'},
    'dday-calculator': {title: 'D-Day 计算器', description: '计算距离指定日期还有多少天或已过去多少天。'},
    'unit-converter': {title: '单位换算器', description: '快速换算常用单位。'},
    'qr-code-generator': {title: '二维码生成器', description: '将文本或 URL 生成二维码图片。'},
  },
  es: {
    'bmi-calculator': {title: 'Calculadora de BMI', description: 'Calcula el índice de masa corporal rápidamente en el navegador.'},
    'loan-calculator': {title: 'Calculadora de préstamos', description: 'Estima pagos mensuales con amortización estándar.'},
    'dday-calculator': {title: 'Calculadora D-Day', description: 'Calcula días hasta o desde una fecha elegida.'},
    'unit-converter': {title: 'Convertidor de unidades', description: 'Convierte unidades comunes rápidamente.'},
    'qr-code-generator': {title: 'Generador QR', description: 'Crea códigos QR desde texto o URLs.'},
  },
  fr: {
    'bmi-calculator': {title: 'Calculateur IMC', description: 'Calculez rapidement l’IMC dans le navigateur.'},
    'loan-calculator': {title: 'Calculateur de prêt', description: 'Estimez les paiements mensuels avec un amortissement standard.'},
    'dday-calculator': {title: 'Calculateur D-Day', description: 'Calculez les jours restants ou passés depuis une date.'},
    'unit-converter': {title: 'Convertisseur d’unités', description: 'Convertissez rapidement les unités courantes.'},
    'qr-code-generator': {title: 'Générateur QR', description: 'Créez des QR codes depuis du texte ou des URL.'},
  },
}

for (const [locale, localeText] of Object.entries(localizedToolText)) {
  translations[locale] = {
    ...localeText,
    tools: Object.fromEntries(
      Object.entries(translations.en.tools).map(([slug, text]) => [
        slug,
        {
          ...text,
          ...(toolTranslations[locale]?.[slug] || {}),
        },
      ]),
    ),
  }
}

function getObjectPath(obj, path) {
  return path.reduce((value, key) => {
    if (value && value[key] !== undefined) return value[key]
    return undefined
  }, obj)
}

export function getTranslation(locale, path, fallback = '') {
  const target = translations[locale] || translations[defaultLocale]
  const value = getObjectPath(target, path)
  if (typeof value === 'string') return value
  const fallbackValue = getObjectPath(translations[defaultLocale], path)
  return typeof fallbackValue === 'string' ? fallbackValue : fallback
}

export function getToolTranslation(locale, slug, key) {
  return getTranslation(locale, ['tools', slug, ...key.split('.')])
}

export function getLocaleFromQuery(query) {
  const lang = Array.isArray(query) ? query[0] : query
  if (supportedLocales.includes(lang)) return lang
  return defaultLocale
}

export function getQueryLocale(router) {
  if (!router) return defaultLocale
  return getLocaleFromQuery(router.query?.lang)
}

export function getLocalizedHref(path, locale) {
  if (!locale || locale === defaultLocale) return path
  const [pathname, hash] = path.split('#')
  const separator = pathname.includes('?') ? '&' : '?'
  return `${pathname}${separator}lang=${locale}${hash ? `#${hash}` : ''}`
}

export function getPageTitle(locale, section) {
  const title = getTranslation(locale, [section, 'title'])
  if (!title) return 'Utility Hub'
  return `${title} - Utility Hub`
}

export function getNavText(locale, key) {
  return getTranslation(locale, ['common', key])
}

export function getHomeTitle(locale) {
  return getTranslation(locale, ['home', 'heroTitle'])
}

export function getLanguageLabel(locale) {
  return localeNames[locale] || locale
}

export default translations
