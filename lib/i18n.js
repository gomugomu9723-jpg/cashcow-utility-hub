export const supportedLocales = ['ko', 'en', 'ja', 'zh', 'es', 'fr']
export const defaultLocale = 'ko'
export const localeNames = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français'
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
      enterValues: '값을 입력하고 계산 버튼을 누르세요.',
      language: '언어'
    },
    home: {
      heroTitle: '일상 업무를 더 빠르게, 더 깔끔하게',
      heroDescription: 'BMI, 대출 계산, D-Day, 단위 변환, QR 코드 생성. 별도 설치 없이 브라우저에서 즉시 실행할 수 있는 가볍고 실용적인 도구들입니다.',
      cta: '도구 바로가기',
      learnMore: '서비스 소개 보기',
      noLogin: '로그인 없이 사용',
      noSignup: '회원가입 없이 누구나 바로 사용할 수 있는 도구 모음.',
      mobile: '모바일 최적화',
      mobileDesc: '모든 화면에서 자연스럽게 작동하도록 설계되었습니다.'
    },
    footer: {
      copy: '© 2026 Utility Hub — 간편한 브라우저 도구.',
      privacy: '개인정보',
      terms: '이용약관'
    },
    about: {
      title: '소개',
      description: 'Utility Hub는 서버나 추적 없이 동작하는 간단한 클라이언트 툴을 제공합니다. 빠른 성능과 개인 정보 보호를 목표로 설계되었습니다.'
    },
    contact: {
      title: '문의',
      description: '이 사이트는 정적 사이트입니다. 문의는 이메일이나 외부 폼으로 보내주세요.',
      emailText: '이메일',
      email: 'contact@example.com'
    },
    privacy: {
      title: '개인정보 처리방침',
      description: '이 사이트는 정적이며 클라이언트 측 코드만 사용합니다. 기본적으로 사용자 데이터를 수집하거나 저장하지 않습니다.',
      additional: '추가 타사 서비스(애널리틱스, 광고)가 나중에 추가되면 여기에 공개됩니다.'
    },
    terms: {
      title: '이용약관',
      description: '이 도구는 사용자의 재량으로 사용하십시오. 보증이 제공되지 않습니다. 정보 제공 용도로만 사용됩니다.'
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
          category: '카테고리',
          unknown: '알 수 없음',
          underweight: '저체중',
          normal: '정상',
          overweight: '과체중',
          obese: '비만',
          whatThisDoes: '이 도구는 BMI = 체중(kg) / (신장(m))^2 를 계산합니다. 성인을 위한 간이 지표이며 건강 상담을 대신하지 않습니다.',
          howToUse: '킬로그램 단위로 체중을 입력하고 센티미터 단위로 신장을 입력한 뒤 계산 버튼을 누르세요.'
        }
      },
      'loan-calculator': {
        title: '대출 계산기',
        description: '월별 대출 상환금을 표준 상환 방식으로 계산합니다.',
        form: {
          amount: '대출 금액',
          rate: '연 이율 (%)',
          years: '기간 (년)',
          calculate: '계산하기',
          monthlyPayment: '월 상환금',
          whatThisDoes: '대출 금액, 이율, 기간을 입력하면 월별 상환금을 계산합니다.',
          howToUse: '대출 금액, 연 이율, 상환 기간을 입력한 뒤 계산하기를 눌러주세요.'
        }
      },
      'dday-calculator': {
        title: 'D-Day 계산기',
        description: '선택한 날짜까지 남은 일수 또는 지난 일수를 계산합니다.',
        form: {
          date: '날짜 선택',
          calculate: '계산하기',
          result: 'D-Day 결과',
          past: '이미 지나갔습니다.',
          future: '남았습니다.',
          whatThisDoes: '선택한 날짜를 기준으로 남은 일수 또는 지난 일수를 표시합니다.',
          howToUse: '카렌다에서 날짜를 선택한 뒤 계산 버튼을 누르세요.'
        }
      },
      'unit-converter': {
        title: '단위 변환기',
        description: '일반 단위 간 변환을 빠르게 수행합니다.',
        form: {
          category: '분류 선택',
          from: '변환할 단위',
          to: '목표 단위',
          value: '값 입력',
          convert: '변환하기',
          result: '변환 결과',
          whatThisDoes: '일반적인 단위 변환을 지원하며 결과는 일부 단위에서 근사치일 수 있습니다.',
          howToUse: '분류를 선택하고, 변환할 단위와 목표 단위를 골라 값을 입력한 뒤 변환하기를 누르세요.'
        }
      },
      'qr-code-generator': {
        title: 'QR 코드 생성기',
        description: '브라우저에서 바로 QR 코드를 생성합니다.',
        form: {
          text: '텍스트 또는 URL',
          size: '픽셀 크기',
          generate: '생성하기',
          download: '다운로드',
          whatThisDoes: '텍스트 또는 URL을 브라우저에서 QR 코드 이미지로 인코딩합니다.',
          howToUse: '텍스트 또는 링크를 입력하고 생성하기를 누른 뒤 다운로드하세요.'
        }
      }
    }
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
      language: 'Language'
    },
    home: {
      heroTitle: 'Faster, cleaner everyday workflow',
      heroDescription: 'BMI, loan calculator, D-Day, unit converter, QR code generator. Lightweight browser tools with no installation required.',
      cta: 'Open tools',
      learnMore: 'Learn more',
      noLogin: 'No login required',
      noSignup: 'Use instantly without account creation.',
      mobile: 'Mobile friendly',
      mobileDesc: 'Designed to work smoothly on every screen.'
    },
    footer: {
      copy: '© 2026 Utility Hub — Simple browser tools.',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    about: {
      title: 'About',
      description: 'Utility Hub offers simple client-side tools with no servers or tracking. Built for speed and privacy.'
    },
    contact: {
      title: 'Contact',
      description: 'This is a static site. For inquiries, use mailto or an external form.',
      emailText: 'Email',
      email: 'contact@example.com'
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'This site is static and uses client-side code only. No user data is collected or stored by default.',
      additional: 'If third-party services (analytics, ads) are later added, they will be disclosed here.'
    },
    terms: {
      title: 'Terms of Use',
      description: 'Use these tools at your own discretion. No warranties are provided. For informational purposes only.'
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
          whatThisDoes: 'Computes BMI = weight (kg) / (height (m))^2. For adults only; consult professionals for health advice.',
          howToUse: 'Enter weight in kilograms and height in centimeters, then press Calculate.'
        }
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
          whatThisDoes: 'Enter loan amount, rate, and term to compute monthly payments.',
          howToUse: 'Input the amount, annual rate, and duration, then press Calculate.'
        }
      },
      'dday-calculator': {
        title: 'D-Day Calculator',
        description: 'Compute days until or since a chosen date.',
        form: {
          date: 'Pick a date',
          calculate: 'Calculate',
          result: 'D-Day result',
          past: 'has passed.',
          future: 'remaining.',
          whatThisDoes: 'Shows days until or since the selected date.',
          howToUse: 'Choose a date and click Calculate.'
        }
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
          whatThisDoes: 'Convert common measurement units. Results are approximate for some pairs.',
          howToUse: 'Select category, source and target units, enter a value, then convert.'
        }
      },
      'qr-code-generator': {
        title: 'QR Code Generator',
        description: 'Create QR codes directly in the browser.',
        form: {
          text: 'Text or URL',
          size: 'Pixel size',
          generate: 'Generate',
          download: 'Download',
          whatThisDoes: 'Encodes text or URLs into a QR code image in the browser.',
          howToUse: 'Enter text or a link, generate, then download the image.'
        }
      }
    }
  },
  ja: {
    common: {
      tools: 'ツール',
      about: '概要',
      contact: 'お問い合わせ',
      privacy: 'プライバシー',
      terms: '利用規約',
      quickTool: 'クイックツール',
      email: 'メール',
      relatedTools: '関連ツール',
      result: '結果',
      enterValues: '値を入力して「計算」を押してください。',
      language: '言語'
    },
    home: {
      heroTitle: '日常の作業をより速く、よりスマートに',
      heroDescription: 'BMI、ローン計算、D-Day、単位変換、QRコード生成。インストール不要のブラウザツールです。',
      cta: 'ツールを開く',
      learnMore: '詳細を見る',
      noLogin: 'ログイン不要',
      noSignup: 'アカウントなしですぐに利用できます。',
      mobile: 'モバイル対応',
      mobileDesc: 'どの画面でも快適に動作するように設計されています。'
    },
    footer: {
      copy: '© 2026 Utility Hub — シンプルなブラウザツール。',
      privacy: 'プライバシー',
      terms: '利用規約'
    },
    about: {
      title: '概要',
      description: 'Utility Hubはサーバーやトラッキングなしで動作するシンプルなクライアントツールを提供します。速度とプライバシーを重視して設計されています。'
    },
    contact: {
      title: 'お問い合わせ',
      description: 'このサイトは静的サイトです。お問い合わせはメールまたは外部フォームをご利用ください。',
      emailText: 'メール',
      email: 'contact@example.com'
    },
    privacy: {
      title: 'プライバシーポリシー',
      description: 'このサイトは静的でクライアント側コードのみを使用しています。デフォルトではユーザーデータは収集または保存されません。',
      additional: '後でサードパーティサービス（分析、広告）が追加された場合、ここで開示されます。'
    },
    terms: {
      title: '利用規約',
      description: 'これらのツールは自己責任でご利用ください。保証は提供されません。情報提供のみを目的としています。'
    },
    tools: {
      'bmi-calculator': {
        title: 'BMI計算機',
        description: 'ブラウザで体格指数をすばやく計算します。',
        form: {
          weight: '体重 (kg)',
          height: '身長 (cm)',
          calculate: '計算',
          resultLabel: '結果',
          bmi: 'BMI',
          category: '判定',
          unknown: '不明',
          underweight: '低体重',
          normal: '普通',
          overweight: '過体重',
          obese: '肥満',
          whatThisDoes: 'このツールはBMI = 体重(kg) / (身長(m))^2 を計算します。成人向けの目安であり、医療相談の代わりにはなりません。',
          howToUse: '体重をkg、身長をcmで入力し、計算を押してください。'
        }
      },
      'loan-calculator': {
        title: 'ローン計算機',
        description: '標準的な返済方式で月々の返済額を計算します。',
        form: {
          amount: 'ローン金額',
          rate: '年利 (%)',
          years: '年数',
          calculate: '計算',
          monthlyPayment: '月々の支払い',
          whatThisDoes: 'ローン金額、利率、期間を入力すると月々の支払いを計算します。',
          howToUse: '金額、年利、期間を入力し、計算を押してください。'
        }
      },
      'dday-calculator': {
        title: 'D-Day計算機',
        description: '指定した日付までの残り日数または経過日数を計算します。',
        form: {
          date: '日付を選択',
          calculate: '計算',
          result: 'D-Day結果',
          past: 'が経過しました。',
          future: '残っています。',
          whatThisDoes: '選択した日付までの残り日数または経過日数を表示します。',
          howToUse: '日付を選択して、計算を押してください。'
        }
      },
      'unit-converter': {
        title: '単位変換',
        description: '一般的な単位をすばやく変換します。',
        form: {
          category: 'カテゴリ',
          from: '変換元',
          to: '変換先',
          value: '値',
          convert: '変換',
          result: '結果',
          whatThisDoes: '一般的な測定単位を変換します。いくつかの組み合わせでは近似値になる場合があります。',
          howToUse: 'カテゴリを選択し、単位を選んで値を入力して変換を押してください。'
        }
      },
      'qr-code-generator': {
        title: 'QRコード生成',
        description: 'ブラウザで直接QRコードを作成します。',
        form: {
          text: 'テキストまたはURL',
          size: 'ピクセルサイズ',
          generate: '生成',
          download: 'ダウンロード',
          whatThisDoes: 'テキストまたはURLをQRコード画像に変換します。',
          howToUse: 'テキストまたはリンクを入力し、生成してダウンロードしてください。'
        }
      }
    }
  },
  zh: {
    common: {
      tools: '工具',
      about: '关于',
      contact: '联系',
      privacy: '隐私',
      terms: '条款',
      quickTool: '快捷工具',
      email: '邮箱',
      relatedTools: '相关工具',
      result: '结果',
      enterValues: '输入数值并点击计算。',
      language: '语言'
    },
    home: {
      heroTitle: '让日常工作更快捷、更整洁',
      heroDescription: 'BMI、贷款计算、D-Day、单位转换、QR 码生成。轻量级浏览器工具，无需安装。',
      cta: '打开工具',
      learnMore: '了解更多',
      noLogin: '无需登录',
      noSignup: '无需注册即可立即使用。',
      mobile: '移动端优化',
      mobileDesc: '设计为在所有屏幕上流畅运行。'
    },
    footer: {
      copy: '© 2026 Utility Hub — 简单的浏览器工具。',
      privacy: '隐私',
      terms: '条款'
    },
    about: {
      title: '关于',
      description: 'Utility Hub 提供简单的客户端工具，不依赖服务器或跟踪。专为性能和隐私设计。'
    },
    contact: {
      title: '联系',
      description: '这是一个静态网站。咨询请使用 mailto 或外部表单。',
      emailText: '邮箱',
      email: 'contact@example.com'
    },
    privacy: {
      title: '隐私政策',
      description: '本网站为静态站点，仅使用客户端代码。默认情况下不收集或存储用户数据。',
      additional: '如果以后添加第三方服务（分析、广告），将会在此披露。'
    },
    terms: {
      title: '使用条款',
      description: '请自行决定是否使用这些工具。不提供任何保证，仅供参考。'
    },
    tools: {
      'bmi-calculator': {
        title: 'BMI 计算器',
        description: '在浏览器中快速计算身体质量指数。',
        form: {
          weight: '体重 (kg)',
          height: '身高 (cm)',
          calculate: '计算',
          resultLabel: '结果',
          bmi: 'BMI',
          category: '类别',
          unknown: '未知',
          underweight: '偏瘦',
          normal: '正常',
          overweight: '超重',
          obese: '肥胖',
          whatThisDoes: '该工具计算 BMI = 体重(kg) / (身高(m))^2。仅供成人参考，不可替代专业健康建议。',
          howToUse: '输入公斤为单位的体重和厘米为单位的身高，然后点击计算。'
        }
      },
      'loan-calculator': {
        title: '贷款计算器',
        description: '使用标准摊销计算每月还款额。',
        form: {
          amount: '贷款金额',
          rate: '年利率 (%)',
          years: '年数',
          calculate: '计算',
          monthlyPayment: '月还款',
          whatThisDoes: '输入贷款金额、利率和期限即可计算每月还款金额。',
          howToUse: '输入金额、年利率和期限，然后点击计算。'
        }
      },
      'dday-calculator': {
        title: 'D-Day 计算器',
        description: '计算距指定日期的天数或已过天数。',
        form: {
          date: '选择日期',
          calculate: '计算',
          result: 'D-Day 结果',
          past: '已过去。',
          future: '剩余。',
          whatThisDoes: '显示所选日期的剩余天数或已过天数。',
          howToUse: '选择日期后点击计算。'
        }
      },
      'unit-converter': {
        title: '单位转换',
        description: '快速转换常用单位。',
        form: {
          category: '类别',
          from: '从单位',
          to: '到单位',
          value: '数值',
          convert: '转换',
          result: '结果',
          whatThisDoes: '转换常见计量单位。某些组合结果为近似值。',
          howToUse: '选择类别、源单位和目标单位，输入数值，然后点击转换。'
        }
      },
      'qr-code-generator': {
        title: 'QR 码生成器',
        description: '在浏览器中直接生成 QR 码。',
        form: {
          text: '文本或 URL',
          size: '像素大小',
          generate: '生成',
          download: '下载',
          whatThisDoes: '将文本或 URL 编码为浏览器中的 QR 码图像。',
          howToUse: '输入文本或链接，生成并下载图像。'
        }
      }
    }
  },
  es: {
    common: {
      tools: 'Herramientas',
      about: 'Acerca de',
      contact: 'Contacto',
      privacy: 'Privacidad',
      terms: 'Términos',
      quickTool: 'Herramienta rápida',
      email: 'Correo',
      relatedTools: 'Herramientas relacionadas',
      result: 'Resultado',
      enterValues: 'Ingresa valores y presiona Calcular.',
      language: 'Idioma'
    },
    home: {
      heroTitle: 'Flujo diario más rápido y más claro',
      heroDescription: 'BMI, calculadora de préstamos, D-Day, convertidor de unidades, generador de QR. Herramientas ligeras de navegador sin instalación.',
      cta: 'Abrir herramientas',
      learnMore: 'Saber más',
      noLogin: 'No requiere inicio de sesión',
      noSignup: 'Usa al instante sin crear cuenta.',
      mobile: 'Optimizado para móviles',
      mobileDesc: 'Diseñado para funcionar bien en todas las pantallas.'
    },
    footer: {
      copy: '© 2026 Utility Hub — Herramientas sencillas en el navegador.',
      privacy: 'Privacidad',
      terms: 'Términos'
    },
    about: {
      title: 'Acerca de',
      description: 'Utility Hub ofrece herramientas de cliente simples sin servidor ni seguimiento. Diseñado para velocidad y privacidad.'
    },
    contact: {
      title: 'Contacto',
      description: 'Este es un sitio estático. Para consultas, utiliza mailto o un formulario externo.',
      emailText: 'Correo',
      email: 'contact@example.com'
    },
    privacy: {
      title: 'Política de privacidad',
      description: 'Este sitio es estático y utiliza solo código del lado del cliente. No se recopilan ni almacenan datos de usuario por defecto.',
      additional: 'Si se agregan servicios de terceros (analítica, anuncios) más adelante, se divulgarán aquí.'
    },
    terms: {
      title: 'Términos de uso',
      description: 'Usa estas herramientas a tu discreción. No se ofrecen garantías. Solo con fines informativos.'
    },
    tools: {
      'bmi-calculator': {
        title: 'Calculadora de BMI',
        description: 'Calcula el índice de masa corporal rápidamente en el navegador.',
        form: {
          weight: 'Peso (kg)',
          height: 'Altura (cm)',
          calculate: 'Calcular',
          resultLabel: 'Resultado',
          bmi: 'BMI',
          category: 'Categoría',
          unknown: 'Desconocido',
          underweight: 'Bajo peso',
          normal: 'Normal',
          overweight: 'Sobrepeso',
          obese: 'Obeso',
          whatThisDoes: 'Calcula BMI = peso (kg) / (altura (m))^2. Solo para adultos; consulta a profesionales de salud.',
          howToUse: 'Ingresa el peso en kilogramos y la altura en centímetros, luego presiona Calcular.'
        }
      },
      'loan-calculator': {
        title: 'Calculadora de préstamos',
        description: 'Calcula pagos mensuales de préstamos con amortización estándar.',
        form: {
          amount: 'Monto del préstamo',
          rate: 'Tasa anual (%)',
          years: 'Años',
          calculate: 'Calcular',
          monthlyPayment: 'Pago mensual',
          whatThisDoes: 'Ingresa monto, tasa y plazo para calcular los pagos mensuales.',
          howToUse: 'Introduce el monto, tasa anual y duración, luego presiona Calcular.'
        }
      },
      'dday-calculator': {
        title: 'Calculadora D-Day',
        description: 'Calcula los días hasta o desde una fecha elegida.',
        form: {
          date: 'Selecciona una fecha',
          calculate: 'Calcular',
          result: 'Resultado D-Day',
          past: 'ha pasado.',
          future: 'restan.',
          whatThisDoes: 'Muestra los días hasta o desde la fecha seleccionada.',
          howToUse: 'Elige una fecha y haz clic en Calcular.'
        }
      },
      'unit-converter': {
        title: 'Convertidor de unidades',
        description: 'Convierte unidades comunes rápidamente.',
        form: {
          category: 'Categoría',
          from: 'Unidad origen',
          to: 'Unidad destino',
          value: 'Valor',
          convert: 'Convertir',
          result: 'Resultado',
          whatThisDoes: 'Convierte unidades de medida comunes. Los resultados son aproximados para algunas parejas.',
          howToUse: 'Selecciona categoría, unidad origen y destino, ingresa un valor y convierte.'
        }
      },
      'qr-code-generator': {
        title: 'Generador de QR',
        description: 'Crea códigos QR directamente en el navegador.',
        form: {
          text: 'Texto o URL',
          size: 'Tamaño en píxeles',
          generate: 'Generar',
          download: 'Descargar',
          whatThisDoes: 'Codifica texto o URLs en una imagen de código QR en el navegador.',
          howToUse: 'Ingresa texto o enlace, genera y descarga la imagen.'
        }
      }
    }
  },
  fr: {
    common: {
      tools: 'Outils',
      about: 'À propos',
      contact: 'Contact',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      quickTool: 'Outil rapide',
      email: 'Email',
      relatedTools: 'Outils associés',
      result: 'Résultat',
      enterValues: 'Entrez les valeurs et appuyez sur Calculer.',
      language: 'Langue'
    },
    home: {
      heroTitle: 'Flux de travail quotidien plus rapide et plus propre',
      heroDescription: 'IMC, calculatrice de prêt, D-Day, convertisseur d’unités, générateur de QR. Outils légers dans le navigateur sans installation.',
      cta: 'Ouvrir les outils',
      learnMore: 'En savoir plus',
      noLogin: 'Connexion non requise',
      noSignup: 'Utilisez immédiatement sans compte.',
      mobile: 'Optimisé mobile',
      mobileDesc: 'Conçu pour bien fonctionner sur tous les écrans.'
    },
    footer: {
      copy: '© 2026 Utility Hub — Outils simples dans le navigateur.',
      privacy: 'Confidentialité',
      terms: 'Conditions'
    },
    about: {
      title: 'À propos',
      description: 'Utility Hub propose des outils simples côté client sans serveur ni suivi. Conçu pour la vitesse et la confidentialité.'
    },
    contact: {
      title: 'Contact',
      description: 'Ceci est un site statique. Pour des questions, utilisez mailto ou un formulaire externe.',
      emailText: 'Email',
      email: 'contact@example.com'
    },
    privacy: {
      title: 'Politique de confidentialité',
      description: 'Ce site est statique et utilise uniquement du code côté client. Aucune donnée utilisateur n’est collectée ou stockée par défaut.',
      additional: 'Si des services tiers (analytique, publicités) sont ajoutés ultérieurement, ils seront divulgués ici.'
    },
    terms: {
      title: 'Conditions d’utilisation',
      description: 'Utilisez ces outils à votre discrétion. Aucune garantie n’est fournie. À des fins informatives uniquement.'
    },
    tools: {
      'bmi-calculator': {
        title: 'Calculateur IMC',
        description: 'Calculez rapidement l’IMC dans le navigateur.',
        form: {
          weight: 'Poids (kg)',
          height: 'Taille (cm)',
          calculate: 'Calculer',
          resultLabel: 'Résultat',
          bmi: 'IMC',
          category: 'Catégorie',
          unknown: 'Inconnu',
          underweight: 'Insuffisance pondérale',
          normal: 'Normal',
          overweight: 'Surpoids',
          obese: 'Obèse',
          whatThisDoes: 'Calcule IMC = poids (kg) / (taille (m))^2. Pour adultes seulement ; consultez un professionnel pour des conseils de santé.',
          howToUse: 'Entrez le poids en kilogrammes et la taille en centimètres, puis appuyez sur Calculer.'
        }
      },
      'loan-calculator': {
        title: 'Calculateur de prêt',
        description: 'Estimez les paiements mensuels d’un prêt selon une amortisation standard.',
        form: {
          amount: 'Montant du prêt',
          rate: 'Taux annuel (%)',
          years: 'Années',
          calculate: 'Calculer',
          monthlyPayment: 'Paiement mensuel',
          whatThisDoes: 'Entrez le montant, le taux et la durée pour calculer les paiements mensuels.',
          howToUse: 'Saisissez le montant, le taux annuel et la durée, puis appuyez sur Calculer.'
        }
      },
      'dday-calculator': {
        title: 'Calculateur D-Day',
        description: 'Calculez les jours restants ou passés depuis une date choisie.',
        form: {
          date: 'Choisissez une date',
          calculate: 'Calculer',
          result: 'Résultat D-Day',
          past: 'est passé.',
          future: 'restent.',
          whatThisDoes: 'Affiche les jours restants ou passés depuis la date sélectionnée.',
          howToUse: 'Choisissez une date puis appuyez sur Calculer.'
        }
      },
      'unit-converter': {
        title: 'Convertisseur d’unités',
        description: 'Convertissez rapidement des unités courantes.',
        form: {
          category: 'Catégorie',
          from: 'Unité source',
          to: 'Unité cible',
          value: 'Valeur',
          convert: 'Convertir',
          result: 'Résultat',
          whatThisDoes: 'Convertit des unités de mesure courantes. Les résultats sont approximatifs pour certaines paires.',
          howToUse: 'Sélectionnez la catégorie, l’unité source et l’unité cible, saisissez une valeur, puis convertissez.'
        }
      },
      'qr-code-generator': {
        title: 'Générateur de QR',
        description: 'Créez des codes QR directement dans le navigateur.',
        form: {
          text: 'Texte ou URL',
          size: 'Taille en pixels',
          generate: 'Générer',
          download: 'Télécharger',
          whatThisDoes: 'Encode du texte ou des URL dans une image de QR code dans le navigateur.',
          howToUse: 'Entrez du texte ou un lien, générez, puis téléchargez l’image.'
        }
      }
    }
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
  const queryLang = router.query?.lang
  return getLocaleFromQuery(queryLang)
}

export function getPageTitle(locale, section) {
  const title = getTranslation(locale, [section, 'title'])
  if (!title) return 'Utility Hub'
  return `${title} — Utility Hub`
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
