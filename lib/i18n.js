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

const baseTools = {
  en: {
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
}

const translatedTools = {
  ko: {
    'bmi-calculator': {title: 'BMI 계산기', description: '브라우저에서 체질량지수를 빠르게 계산합니다.'},
    'loan-calculator': {title: '대출 계산기', description: '원리금 균등 상환 기준 월 납입액을 계산합니다.'},
    'dday-calculator': {title: 'D-Day 계산기', description: '선택한 날짜까지 남은 일수 또는 지난 일수를 계산합니다.'},
    'unit-converter': {title: '단위 변환기', description: '자주 쓰는 단위를 빠르게 변환합니다.'},
    'qr-code-generator': {title: 'QR 코드 생성기', description: '텍스트나 URL을 QR 코드 이미지로 만듭니다.'},
  },
  ja: {
    'bmi-calculator': {title: 'BMI計算機', description: 'ブラウザで体格指数をすばやく計算します。'},
    'loan-calculator': {title: 'ローン計算機', description: '月々の返済額を見積もります。'},
    'dday-calculator': {title: 'D-Day計算機', description: '選択した日付までの日数を計算します。'},
    'unit-converter': {title: '単位変換', description: 'よく使う単位をすばやく変換します。'},
    'qr-code-generator': {title: 'QRコード生成', description: 'テキストやURLからQRコードを作成します。'},
  },
  zh: {
    'bmi-calculator': {title: 'BMI 计算器', description: '在浏览器中快速计算身体质量指数。'},
    'loan-calculator': {title: '贷款计算器', description: '估算每月还款额。'},
    'dday-calculator': {title: 'D-Day 计算器', description: '计算距离指定日期的天数。'},
    'unit-converter': {title: '单位换算器', description: '快速换算常用单位。'},
    'qr-code-generator': {title: '二维码生成器', description: '将文本或 URL 生成二维码。'},
  },
  es: {
    'bmi-calculator': {title: 'Calculadora de BMI', description: 'Calcula el índice de masa corporal en el navegador.'},
    'loan-calculator': {title: 'Calculadora de préstamos', description: 'Estima pagos mensuales de préstamos.'},
    'dday-calculator': {title: 'Calculadora D-Day', description: 'Calcula días hasta o desde una fecha.'},
    'unit-converter': {title: 'Convertidor de unidades', description: 'Convierte unidades comunes rápidamente.'},
    'qr-code-generator': {title: 'Generador QR', description: 'Crea códigos QR desde texto o URLs.'},
  },
  fr: {
    'bmi-calculator': {title: 'Calculateur IMC', description: 'Calculez rapidement l’IMC dans le navigateur.'},
    'loan-calculator': {title: 'Calculateur de prêt', description: 'Estimez les mensualités de prêt.'},
    'dday-calculator': {title: 'Calculateur D-Day', description: 'Calculez les jours restants ou passés.'},
    'unit-converter': {title: 'Convertisseur d’unités', description: 'Convertissez rapidement les unités courantes.'},
    'qr-code-generator': {title: 'Générateur QR', description: 'Créez des QR codes depuis du texte ou des URL.'},
  },
}

function mergeTools(locale) {
  return Object.fromEntries(
    Object.entries(baseTools.en).map(([slug, tool]) => [
      slug,
      {
        ...tool,
        ...(translatedTools[locale]?.[slug] || {}),
        form: {
          ...tool.form,
          ...(translatedTools[locale]?.[slug]?.form || {}),
        },
      },
    ])
  )
}

const copy = {
  ko: {
    common: {tools: '도구', about: '소개', contact: '문의', privacy: '개인정보', terms: '이용약관', quickTool: '브라우저 도구', email: '이메일', relatedTools: '관련 도구', result: '결과', enterValues: '값을 입력하고 계산 버튼을 눌러주세요.', language: '언어'},
    home: {title: 'Utility Hub - 무료 브라우저 도구', heroTitle: '필요한 도구를 한곳에 모았습니다.', heroDescription: '계산기, 변환기, 개발자 도구, 개인정보 보호 도구, 텍스트 유틸리티, CSS 생성기, 랜덤 도구까지 브라우저에서 바로 사용할 수 있습니다.', statsTools: '도구', statsCategories: '카테고리', statsLogin: '로그인', statsFree: '무료', categoryCount: '개 도구'},
    footer: {copy: '© 2026 Utility Hub. 간편한 브라우저 도구.', privacy: '개인정보', terms: '이용약관'},
    about: {title: '소개', description: 'Utility Hub는 회원가입 없이 바로 사용할 수 있는 브라우저 기반 도구 모음입니다.'},
    contact: {title: '문의', description: '이 사이트는 정적 사이트입니다. 문의는 이메일 또는 외부 폼을 이용해주세요.', emailText: '이메일', email: 'contact@example.com'},
    privacy: {title: '개인정보 처리방침', description: '이 사이트는 기본적으로 클라이언트 측 코드만 사용하며 사용자 데이터를 수집하거나 저장하지 않습니다.', additional: '분석이나 광고 같은 제3자 서비스가 추가되면 이 페이지에 공개하겠습니다.'},
    terms: {title: '이용약관', description: '이 도구들은 사용자 판단에 따라 사용해주세요. 결과는 정보 제공 목적이며 보증을 제공하지 않습니다.'},
    categories: {finance: '금융 및 계산', productivity: '생산성', dev: '개발자 도구', security: '보안 및 개인정보', lifestyle: '생활 및 건강', utility: '일상 유틸리티', design: '디자인 및 콘텐츠', performance: '성능', text: '텍스트 및 문서', css: 'CSS 및 프론트엔드', marketing: '마케팅 및 SEO', random: '랜덤 도구', time: '시간 및 날짜'},
    tools: mergeTools('ko'),
  },
  en: {
    common: {tools: 'Tools', about: 'About', contact: 'Contact', privacy: 'Privacy', terms: 'Terms', quickTool: 'Browser tool', email: 'Email', relatedTools: 'Related tools', result: 'Result', enterValues: 'Enter values and press Calculate.', language: 'Language'},
    home: {title: 'Utility Hub - Free browser tools', heroTitle: 'All your everyday tools in one place.', heroDescription: 'Calculators, converters, developer tools, privacy tools, text utilities, CSS generators, randomizers, and more. Everything runs in your browser.', statsTools: 'Tools', statsCategories: 'Categories', statsLogin: 'Login', statsFree: 'Free', categoryCount: 'tools'},
    footer: {copy: '© 2026 Utility Hub. Simple browser tools.', privacy: 'Privacy', terms: 'Terms'},
    about: {title: 'About', description: 'Utility Hub offers simple browser-based tools with no account required.'},
    contact: {title: 'Contact', description: 'This is a static site. For inquiries, use email or an external form.', emailText: 'Email', email: 'contact@example.com'},
    privacy: {title: 'Privacy Policy', description: 'This site is static and uses client-side code by default. No user data is collected or stored by default.', additional: 'If analytics or ads are added later, they will be disclosed here.'},
    terms: {title: 'Terms of Use', description: 'Use these tools at your own discretion. Results are informational and are provided without warranty.'},
    categories: {finance: 'Finance and calculators', productivity: 'Productivity', dev: 'Developer tools', security: 'Security and privacy', lifestyle: 'Lifestyle and health', utility: 'Everyday utilities', design: 'Design and content', performance: 'Performance', text: 'Text and documents', css: 'CSS and frontend', marketing: 'Marketing and SEO', random: 'Randomizers', time: 'Time and dates'},
    tools: mergeTools('en'),
  },
  ja: {
    common: {tools: 'ツール', about: '概要', contact: 'お問い合わせ', privacy: 'プライバシー', terms: '利用規約', quickTool: 'ブラウザツール', email: 'メール', relatedTools: '関連ツール', result: '結果', enterValues: '値を入力して計算ボタンを押してください。', language: '言語'},
    home: {title: 'Utility Hub - 無料ブラウザツール', heroTitle: '必要なツールをひとつの場所に。', heroDescription: '計算機、変換ツール、開発者ツール、プライバシーツール、テキストユーティリティ、CSS生成ツールなどをブラウザで直接使えます。', statsTools: 'ツール', statsCategories: 'カテゴリ', statsLogin: 'ログイン', statsFree: '無料', categoryCount: 'ツール'},
    footer: {copy: '© 2026 Utility Hub. シンプルなブラウザツール。', privacy: 'プライバシー', terms: '利用規約'},
    about: {title: '概要', description: 'Utility Hub は、アカウントなしですぐに使えるブラウザベースのツール集です。'},
    contact: {title: 'お問い合わせ', description: 'このサイトは静的サイトです。お問い合わせはメールまたは外部フォームをご利用ください。', emailText: 'メール', email: 'contact@example.com'},
    privacy: {title: 'プライバシーポリシー', description: 'このサイトは基本的にクライアント側コードのみを使用し、ユーザーデータを収集または保存しません。', additional: '分析や広告などの第三者サービスを追加する場合は、このページで公開します。'},
    terms: {title: '利用規約', description: 'これらのツールはご自身の判断でご利用ください。結果は情報提供を目的としており、保証はありません。'},
    categories: {finance: '金融と計算', productivity: '生産性', dev: '開発者ツール', security: 'セキュリティとプライバシー', lifestyle: '生活と健康', utility: '日常ユーティリティ', design: 'デザインとコンテンツ', performance: 'パフォーマンス', text: 'テキストと文書', css: 'CSSとフロントエンド', marketing: 'マーケティングとSEO', random: 'ランダムツール', time: '時間と日付'},
    tools: mergeTools('ja'),
  },
  zh: {
    common: {tools: '工具', about: '关于', contact: '联系', privacy: '隐私', terms: '条款', quickTool: '浏览器工具', email: '邮箱', relatedTools: '相关工具', result: '结果', enterValues: '请输入数值并点击计算。', language: '语言'},
    home: {title: 'Utility Hub - 免费浏览器工具', heroTitle: '把常用工具集中在一个地方。', heroDescription: '计算器、转换器、开发者工具、隐私工具、文本工具、CSS 生成器和随机工具都可以直接在浏览器中使用。', statsTools: '工具', statsCategories: '分类', statsLogin: '登录', statsFree: '免费', categoryCount: '个工具'},
    footer: {copy: '© 2026 Utility Hub. 简单的浏览器工具。', privacy: '隐私', terms: '条款'},
    about: {title: '关于', description: 'Utility Hub 是一个无需账号即可使用的浏览器工具集合。'},
    contact: {title: '联系', description: '这是一个静态网站。如需咨询，请使用邮箱或外部表单。', emailText: '邮箱', email: 'contact@example.com'},
    privacy: {title: '隐私政策', description: '本网站默认只使用客户端代码，不收集或存储用户数据。', additional: '如果以后添加分析或广告等第三方服务，将在此页面说明。'},
    terms: {title: '使用条款', description: '请自行判断使用这些工具。结果仅供参考，不提供任何保证。'},
    categories: {finance: '金融与计算', productivity: '效率', dev: '开发者工具', security: '安全与隐私', lifestyle: '生活与健康', utility: '日常工具', design: '设计与内容', performance: '性能', text: '文本与文档', css: 'CSS 与前端', marketing: '营销与 SEO', random: '随机工具', time: '时间与日期'},
    tools: mergeTools('zh'),
  },
  es: {
    common: {tools: 'Herramientas', about: 'Acerca de', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos', quickTool: 'Herramienta web', email: 'Correo', relatedTools: 'Herramientas relacionadas', result: 'Resultado', enterValues: 'Ingresa valores y pulsa Calcular.', language: 'Idioma'},
    home: {title: 'Utility Hub - Herramientas gratuitas', heroTitle: 'Todas tus herramientas en un solo lugar.', heroDescription: 'Calculadoras, conversores, herramientas para desarrolladores, privacidad, texto, generadores CSS y utilidades aleatorias directamente en el navegador.', statsTools: 'Herramientas', statsCategories: 'Categorías', statsLogin: 'Inicio de sesión', statsFree: 'Gratis', categoryCount: 'herramientas'},
    footer: {copy: '© 2026 Utility Hub. Herramientas simples de navegador.', privacy: 'Privacidad', terms: 'Términos'},
    about: {title: 'Acerca de', description: 'Utility Hub ofrece herramientas basadas en el navegador que puedes usar sin crear una cuenta.'},
    contact: {title: 'Contacto', description: 'Este es un sitio estático. Para consultas, usa correo o un formulario externo.', emailText: 'Correo', email: 'contact@example.com'},
    privacy: {title: 'Política de privacidad', description: 'Este sitio usa código del lado del cliente por defecto y no recopila ni almacena datos de usuario.', additional: 'Si se agregan análisis o anuncios de terceros, se informará aquí.'},
    terms: {title: 'Términos de uso', description: 'Usa estas herramientas a tu criterio. Los resultados son informativos y no tienen garantía.'},
    categories: {finance: 'Finanzas y cálculos', productivity: 'Productividad', dev: 'Herramientas de desarrollo', security: 'Seguridad y privacidad', lifestyle: 'Vida y salud', utility: 'Utilidades diarias', design: 'Diseño y contenido', performance: 'Rendimiento', text: 'Texto y documentos', css: 'CSS y frontend', marketing: 'Marketing y SEO', random: 'Aleatorio', time: 'Tiempo y fechas'},
    tools: mergeTools('es'),
  },
  fr: {
    common: {tools: 'Outils', about: 'À propos', contact: 'Contact', privacy: 'Confidentialité', terms: 'Conditions', quickTool: 'Outil navigateur', email: 'Email', relatedTools: 'Outils associés', result: 'Résultat', enterValues: 'Entrez les valeurs puis appuyez sur Calculer.', language: 'Langue'},
    home: {title: 'Utility Hub - Outils gratuits', heroTitle: 'Tous vos outils du quotidien au même endroit.', heroDescription: 'Calculatrices, convertisseurs, outils développeur, outils de confidentialité, utilitaires de texte, générateurs CSS et outils aléatoires directement dans le navigateur.', statsTools: 'Outils', statsCategories: 'Catégories', statsLogin: 'Connexion', statsFree: 'Gratuit', categoryCount: 'outils'},
    footer: {copy: '© 2026 Utility Hub. Outils simples de navigateur.', privacy: 'Confidentialité', terms: 'Conditions'},
    about: {title: 'À propos', description: 'Utility Hub propose des outils basés sur le navigateur, utilisables sans créer de compte.'},
    contact: {title: 'Contact', description: 'Ce site est statique. Pour toute question, utilisez l’email ou un formulaire externe.', emailText: 'Email', email: 'contact@example.com'},
    privacy: {title: 'Politique de confidentialité', description: 'Ce site utilise par défaut du code côté client et ne collecte ni ne stocke les données utilisateur.', additional: 'Si des services tiers d’analyse ou de publicité sont ajoutés, ils seront indiqués ici.'},
    terms: {title: 'Conditions d’utilisation', description: 'Utilisez ces outils à votre discrétion. Les résultats sont fournis à titre informatif sans garantie.'},
    categories: {finance: 'Finance et calculs', productivity: 'Productivité', dev: 'Outils développeur', security: 'Sécurité et confidentialité', lifestyle: 'Vie quotidienne et santé', utility: 'Utilitaires quotidiens', design: 'Design et contenu', performance: 'Performance', text: 'Texte et documents', css: 'CSS et frontend', marketing: 'Marketing et SEO', random: 'Aléatoire', time: 'Temps et dates'},
    tools: mergeTools('fr'),
  },
}

function getObjectPath(obj, path) {
  return path.reduce((value, key) => {
    if (value && value[key] !== undefined) return value[key]
    return undefined
  }, obj)
}

export function getTranslation(locale, path, fallback = '') {
  const target = copy[locale] || copy[defaultLocale]
  const value = getObjectPath(target, path)
  if (typeof value === 'string') return value
  const fallbackValue = getObjectPath(copy[defaultLocale], path)
  return typeof fallbackValue === 'string' ? fallbackValue : fallback
}

export function getToolTranslation(locale, slug, key) {
  return getTranslation(locale, ['tools', slug, ...key.split('.')])
}

export function getCategoryTranslation(locale, categoryId, fallback = '') {
  return getTranslation(locale, ['categories', categoryId], fallback)
}

const titleTerms = {
  ja: {
    calculator: '計算機',
    converter: '変換ツール',
    generator: '生成ツール',
    formatter: '整形ツール',
    tester: 'テスター',
    checker: 'チェッカー',
    decoder: 'デコーダー',
    encoder: 'エンコーダー',
    minifier: '圧縮ツール',
    randomizer: 'ランダム化ツール',
    roller: 'ローラー',
    flipper: 'フリップ',
    stopwatch: 'ストップウォッチ',
    timer: 'タイマー',
    builder: 'ビルダー',
    maker: 'メーカー',
    viewer: 'ビューア',
    preview: 'プレビュー',
    remover: '削除ツール',
    sorter: '並べ替えツール',
    cleaner: '整理ツール',
    password: 'パスワード',
    percent: 'パーセント',
    interest: '利息',
    crypto: '暗号資産',
    profit: '損益',
    timezone: 'タイムゾーン',
    text: 'テキスト',
    color: 'カラー',
    font: 'フォント',
    nickname: 'ニックネーム',
    resistor: '抵抗',
    markdown: 'Markdown',
    timestamp: 'タイムスタンプ',
    gradient: 'グラデーション',
    discount: '割引',
    salary: '給与',
    fuel: '燃料費',
    calorie: 'カロリー',
    grocery: '買い物',
    meeting: '会議メモ',
  },
  zh: {
    calculator: '计算器',
    converter: '转换器',
    generator: '生成器',
    formatter: '格式化工具',
    tester: '测试器',
    checker: '检查器',
    decoder: '解码器',
    encoder: '编码器',
    minifier: '压缩器',
    randomizer: '随机工具',
    roller: '投掷器',
    flipper: '翻转器',
    stopwatch: '秒表',
    timer: '计时器',
    builder: '构建器',
    maker: '制作器',
    viewer: '查看器',
    preview: '预览',
    remover: '移除器',
    sorter: '排序工具',
    cleaner: '清理工具',
    password: '密码',
    percent: '百分比',
    interest: '利息',
    crypto: '加密货币',
    profit: '收益',
    timezone: '时区',
    text: '文本',
    color: '颜色',
    font: '字体',
    nickname: '昵称',
    resistor: '电阻',
    markdown: 'Markdown',
    timestamp: '时间戳',
    gradient: '渐变',
    discount: '折扣',
    salary: '薪资',
    fuel: '燃油费',
    calorie: '卡路里',
    grocery: '购物清单',
    meeting: '会议记录',
  },
  es: {
    calculator: 'calculadora',
    converter: 'conversor',
    generator: 'generador',
    formatter: 'formateador',
    tester: 'probador',
    checker: 'verificador',
    decoder: 'decodificador',
    encoder: 'codificador',
    minifier: 'minificador',
    randomizer: 'aleatorizador',
    roller: 'lanzador',
    flipper: 'lanzador',
    stopwatch: 'cronómetro',
    timer: 'temporizador',
    builder: 'constructor',
    maker: 'creador',
    viewer: 'visor',
    preview: 'vista previa',
    remover: 'eliminador',
    sorter: 'ordenador',
    cleaner: 'limpiador',
    password: 'contraseñas',
    percent: 'porcentaje',
    interest: 'intereses',
    crypto: 'cripto',
    profit: 'ganancias',
    timezone: 'zona horaria',
    text: 'texto',
    color: 'color',
    font: 'fuentes',
    nickname: 'apodos',
    discount: 'descuentos',
    salary: 'salario',
    fuel: 'combustible',
    calorie: 'calorías',
    grocery: 'compras',
    meeting: 'reuniones',
  },
  fr: {
    calculator: 'calculateur',
    converter: 'convertisseur',
    generator: 'générateur',
    formatter: 'formateur',
    tester: 'testeur',
    checker: 'vérificateur',
    decoder: 'décodeur',
    encoder: 'encodeur',
    minifier: 'minificateur',
    randomizer: 'mélangeur',
    roller: 'lanceur',
    flipper: 'tirage',
    stopwatch: 'chronomètre',
    timer: 'minuteur',
    builder: 'constructeur',
    maker: 'créateur',
    viewer: 'visionneuse',
    preview: 'aperçu',
    remover: 'suppresseur',
    sorter: 'trieur',
    cleaner: 'nettoyeur',
    password: 'mots de passe',
    percent: 'pourcentage',
    interest: 'intérêts',
    crypto: 'crypto',
    profit: 'profit',
    timezone: 'fuseau horaire',
    text: 'texte',
    color: 'couleur',
    font: 'polices',
    nickname: 'pseudos',
    discount: 'remises',
    salary: 'salaire',
    fuel: 'carburant',
    calorie: 'calories',
    grocery: 'courses',
    meeting: 'réunion',
  },
}

const categoryDescriptions = {
  ja: {
    finance: '金額、割合、税金、費用の計算を入力値からすばやく確認できます。',
    productivity: '作業メモ、時間管理、一覧整理をブラウザだけで進められます。',
    dev: 'コード、データ、URL、識別子をローカルで検証・変換できます。',
    security: 'パスワード、URL、機密情報をブラウザ内で安全に扱えます。',
    lifestyle: '健康、生活費、学習、趣味に関する目安を手軽に計算できます。',
    utility: '日常でよく使う変換、表、グラフ、用語確認をまとめて行えます。',
    design: '色、画像、フォント、共有用メタ情報をすばやく調整できます。',
    performance: '稼働率、応答時間、転送量などの運用指標を確認できます。',
    text: '文章、CSV、Markdown、リストを整形・比較・生成できます。',
    css: 'CSS値を視覚的に調整し、そのまま使えるコードを作れます。',
    marketing: '共有メタ情報、UTM、キーワード比率を確認できます。',
    random: '数値、リスト、チーム、サイコロなどをランダムに生成できます。',
    time: '日付、年齢、営業日、タイマーをすばやく計算できます。',
  },
  zh: {
    finance: '根据输入快速计算金额、比例、税费和成本。',
    productivity: '在浏览器中整理清单、会议内容和专注时间。',
    dev: '本地验证、转换和整理代码、数据、URL 与标识符。',
    security: '在浏览器内处理密码、URL 和敏感信息。',
    lifestyle: '快速估算健康、生活、学习和日常费用相关数值。',
    utility: '集中处理常用转换、表格、图表和术语查询。',
    design: '调整颜色、图片、字体和分享用元数据。',
    performance: '查看可用性、响应时间和传输量等运营指标。',
    text: '整理、比较、生成文本、CSV、Markdown 和列表。',
    css: '可视化调整 CSS 值并复制可用代码。',
    marketing: '生成分享标签、UTM 链接并检查关键词比例。',
    random: '随机生成数字、列表、队伍、骰子和硬币结果。',
    time: '快速计算日期、年龄、工作日和计时器。',
  },
  es: {
    finance: 'Calcula importes, porcentajes, impuestos y costes a partir de tus datos.',
    productivity: 'Organiza listas, notas y sesiones de trabajo desde el navegador.',
    dev: 'Valida, convierte y limpia código, datos, URLs e identificadores localmente.',
    security: 'Gestiona contraseñas, URLs e información sensible dentro del navegador.',
    lifestyle: 'Estima valores de salud, vida diaria, estudios y costes cotidianos.',
    utility: 'Resuelve conversiones, tablas, gráficos y consultas rápidas del día a día.',
    design: 'Ajusta colores, imágenes, fuentes y metadatos para compartir.',
    performance: 'Revisa disponibilidad, tiempos de respuesta y métricas de transferencia.',
    text: 'Limpia, compara, genera y transforma texto, CSV, Markdown y listas.',
    css: 'Ajusta valores CSS visualmente y copia código listo para usar.',
    marketing: 'Crea etiquetas sociales, enlaces UTM y revisa densidad de palabras clave.',
    random: 'Genera números, listas, equipos, dados y resultados aleatorios.',
    time: 'Calcula fechas, edad, días laborables y temporizadores.',
  },
  fr: {
    finance: 'Calculez montants, pourcentages, taxes et coûts à partir de vos valeurs.',
    productivity: 'Organisez listes, notes et sessions de travail dans le navigateur.',
    dev: 'Validez, convertissez et nettoyez code, données, URL et identifiants localement.',
    security: 'Gérez mots de passe, URL et informations sensibles dans le navigateur.',
    lifestyle: 'Estimez des valeurs de santé, de vie quotidienne, d’études et de coûts.',
    utility: 'Traitez conversions, tableaux, graphiques et recherches rapides du quotidien.',
    design: 'Ajustez couleurs, images, polices et métadonnées de partage.',
    performance: 'Contrôlez disponibilité, temps de réponse et métriques de transfert.',
    text: 'Nettoyez, comparez, générez et transformez texte, CSV, Markdown et listes.',
    css: 'Réglez visuellement des valeurs CSS et copiez du code prêt à l’emploi.',
    marketing: 'Créez des balises sociales, des liens UTM et vérifiez la densité de mots-clés.',
    random: 'Générez nombres, listes, équipes, dés et tirages aléatoires.',
    time: 'Calculez dates, âge, jours ouvrés et minuteurs.',
  },
}

function localizeTitleFromEnglish(title, locale) {
  if (locale === 'en') return title
  const terms = titleTerms[locale]
  if (!terms) return title
  return title
    .split(/(\s+|\/|&|-|\(|\)|\.)/)
    .map((part) => terms[part.toLowerCase()] || part)
    .join('')
}

export function getToolDisplayTitle(locale, tool) {
  if (locale === 'ko' && tool.koTitle) return tool.koTitle
  if (locale === 'en' && tool.enTitle) return tool.enTitle
  const translated = getToolTranslation(locale, tool.slug, 'title')
  if (translated) return translated
  return localizeTitleFromEnglish(tool.enTitle || tool.title, locale)
}

export function getToolDisplayDescription(locale, tool) {
  if (locale === 'ko' && tool.koDescription) return tool.koDescription
  if (locale === 'en' && tool.enDescription) return tool.enDescription
  const translated = getToolTranslation(locale, tool.slug, 'description')
  if (translated) return translated
  return categoryDescriptions[locale]?.[tool.category] || tool.enDescription || tool.description
}

export function getLocaleFromQuery(query) {
  const lang = Array.isArray(query) ? query[0] : query
  if (supportedLocales.includes(lang)) return lang
  return defaultLocale
}

export function getLocaleFromPath(path = '') {
  const cleanPath = path.split('?')[0].split('#')[0]
  const firstSegment = cleanPath.split('/').filter(Boolean)[0]
  if (supportedLocales.includes(firstSegment)) return firstSegment
  return undefined
}

export function stripLocaleFromPath(path = '') {
  const [withoutHash, hash = ''] = path.split('#')
  const [pathname, query = ''] = withoutHash.split('?')
  const parts = pathname.split('/').filter(Boolean)
  const cleanParts = supportedLocales.includes(parts[0]) ? parts.slice(1) : parts
  const cleanPath = `/${cleanParts.join('/')}`.replace(/\/$/, '') || '/'
  return `${cleanPath}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`
}

export function getQueryLocale(router) {
  if (!router) return defaultLocale
  const lang = router.query?.lang
  if (lang) return getLocaleFromQuery(lang)
  return getLocaleFromPath(router.asPath || router.pathname) || defaultLocale
}

export function getLocalizedHref(path, locale) {
  const targetLocale = supportedLocales.includes(locale) ? locale : defaultLocale
  const [withoutHash, hash = ''] = stripLocaleFromPath(path).split('#')
  const [pathname, query = ''] = withoutHash.split('?')
  const cleanPath = pathname === '/' ? '' : pathname
  return `/${targetLocale}${cleanPath}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`
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

export default copy
