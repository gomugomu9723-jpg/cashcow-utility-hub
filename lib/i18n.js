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

const localizedToolText = {
  ja: {
    'percent-calculator': {title: 'パーセント計算機', description: '増加率、減少率、全体に対する割合をすばやく計算します。'},
    'vat-calculator': {title: 'VAT計算機', description: '税抜価格、VAT、税込合計を相互に計算します。'},
    'tax33-calculator': {title: 'フリーランス3.3%税計算機', description: '源泉徴収3.3%の控除前後の金額を計算します。'},
    'interest-calculator': {title: '利息計算機', description: '単利と複利の予想利息を期間に合わせて計算します。'},
    'crypto-profit-calculator': {title: '暗号資産損益計算機', description: '購入価格、売却価格、数量から損益と利回りを確認します。'},
    'area-converter': {title: '坪・平方メートル変換', description: '坪と平方メートルをすばやく相互変換します。'},
    'text-counter': {title: '文字数・バイト計算機', description: '文字数、単語数、行数、UTF-8バイト数をまとめて数えます。'},
    'timezone-converter': {title: 'タイムゾーン変換', description: '主要都市の時刻を並べて比較します。'},
    'pomodoro-timer': {title: 'ポモドーロタイマー', description: '集中時間と休憩時間を設定して作業リズムを作ります。'},
    'json-formatter': {title: 'JSONフォーマッター', description: 'JSONを検証し、読みやすい形に整形します。'},
    'regex-tester': {title: '正規表現テスター', description: 'サンプルテキストに対する正規表現の一致結果を確認します。'},
    'password-generator': {title: 'パスワード生成', description: '長さと文字種を選んで強力なパスワードを作成します。'},
    'redact-tool': {title: '個人情報マスキング', description: 'メール、電話番号などの機密パターンを伏せ字にします。'},
    'url-checker': {title: 'URL安全チェック', description: 'URL形式と不審なパターンをローカルルールで確認します。'},
    'burn-message': {title: '一回限りの秘密メモ', description: 'ブラウザ内だけに保持される一時的な秘密メモを作成します。'},
    'color-checker': {title: 'カラーコントラスト確認', description: '色の組み合わせとテキストの読みやすさを確認します。'},
    'font-compare': {title: 'フォント比較', description: '同じ文章を複数のシステムフォントで見比べます。'},
    'nickname-generator': {title: 'ニックネーム生成', description: '名前やキーワードから英字ニックネーム候補を作成します。'},
    'gpa-converter': {title: 'GPA変換', description: '4.5、4.3、100点基準の成績を相互変換します。'},
    'gym-plate-calculator': {title: '1RM・バーベルプレート計算', description: '推定1RMと片側に載せるプレート構成を計算します。'},
    'pet-food-calculator': {title: 'ペットフード量計算', description: '体重とカロリーから1日の給与量を見積もります。'},
    'coffee-yield-calculator': {title: 'コーヒー抽出収率計算', description: '豆量、抽出液量、TDSから抽出収率を計算します。'},
    'sla-uptime-calculator': {title: 'SLA稼働率計算', description: '稼働率目標から許容停止時間を算出します。'},
    'carbon-footprint-calculator': {title: 'WebサイトCO2推定', description: 'ページビューと転送量からおおよそのCO2排出量を見積もります。'},
    'ttfb-tester': {title: 'TTFBログ分析', description: '応答時間ログを貼り付けて平均値とp95を計算します。'},
    'resistor-calculator': {title: '抵抗カラーコード計算', description: '4本帯の色から抵抗値を読み取ります。'},
    'construction-dictionary': {title: '建設現場用語辞典', description: 'よく使う現場用語と標準表現を検索します。'},
    'elbow-offset-calculator': {title: '配管エルボオフセット計算', description: '45度・90度エルボの簡易オフセット長を計算します。'},
    'case-converter': {title: '大文字小文字変換', description: 'テキストを大文字、小文字、タイトルケースなどに変換します。'},
    'whitespace-remover': {title: '空白整理ツール', description: '余分な空白、重複スペース、空行をきれいに整えます。'},
    'lorem-ipsum-generator': {title: 'Lorem Ipsum生成', description: 'デザイン確認用のダミーテキストを生成します。'},
    'markdown-preview': {title: 'Markdownプレビュー', description: 'Markdownを簡易HTML表示で確認します。'},
    'csv-to-table': {title: 'CSVテーブル表示', description: 'CSVテキストを読みやすい表に変換します。'},
    'duplicate-line-remover': {title: '重複行削除', description: '貼り付けたリストから重複する行を削除します。'},
    'sort-lines': {title: '行ソート', description: 'テキストの行を昇順または降順に並べ替えます。'},
    'text-diff': {title: 'テキスト差分比較', description: '2つのテキストの行単位の違いを比較します。'},
    'url-slug-generator': {title: 'URLスラッグ生成', description: '見出しをSEO向けのURLスラッグに変換します。'},
    'base64-encoder-decoder': {title: 'Base64エンコード・デコード', description: '文字列をBase64に変換したり元に戻したりします。'},
    'url-encoder-decoder': {title: 'URLエンコード・デコード', description: 'URLで安全に使える文字列へ変換します。'},
    'html-encoder-decoder': {title: 'HTMLエンティティ変換', description: '特殊文字をHTMLエンティティに変換し、元に戻します。'},
    'html-minifier': {title: 'HTML圧縮', description: 'HTMLコードの不要な空白を減らします。'},
    'css-minifier': {title: 'CSS圧縮', description: 'CSSのコメントや余分な空白を削除します。'},
    'javascript-minifier': {title: 'JavaScript圧縮', description: 'JavaScriptのコメントや余分な空白を軽く削減します。'},
    'jwt-decoder': {title: 'JWTデコーダー', description: 'JWTのヘッダーとペイロードをローカルで読み取ります。'},
    'uuid-generator': {title: 'UUID生成', description: 'ブラウザでUUID v4を生成します。'},
    'timestamp-converter': {title: 'Unixタイムスタンプ変換', description: 'Unix時刻と日付文字列を相互変換します。'},
    'css-gradient-generator': {title: 'CSSグラデーション生成', description: '2色からlinear-gradientコードを作成します。'},
    'box-shadow-generator': {title: 'CSSボックスシャドウ生成', description: 'プレビューを見ながらbox-shadowを調整します。'},
    'border-radius-generator': {title: 'CSS角丸生成', description: '各角のborder-radius値を作成します。'},
    'css-clamp-generator': {title: 'CSS clamp()生成', description: 'レスポンシブなフォントサイズ用のclamp値を計算します。'},
    'aspect-ratio-calculator': {title: 'アスペクト比計算', description: '画像や動画の比率から幅と高さを計算します。'},
    'hex-rgba-converter': {title: 'HEX・RGBA変換', description: '色コードをHEXとRGBAの間で変換します。'},
    'color-mixer': {title: 'カラーミキサー', description: '2つの色を段階的に混ぜたパレットを作ります。'},
    'image-size-ratio': {title: '画像リサイズ比率計算', description: '元の比率を保ったままリサイズ後のサイズを計算します。'},
    'open-graph-generator': {title: 'Open Graphタグ生成', description: 'SNS共有用のOGメタタグを作成します。'},
    'utm-builder': {title: 'UTMリンク作成', description: 'キャンペーン計測用のUTM付きURLを作成します。'},
    'keyword-density': {title: 'キーワード密度計算', description: '本文内で特定キーワードが出現する割合を確認します。'},
    'random-number-generator': {title: 'ランダム数生成', description: '指定範囲内のランダムな数値を生成します。'},
    'list-randomizer': {title: 'リストシャッフル', description: '行ごとのリストをランダムな順序に並べ替えます。'},
    'team-randomizer': {title: 'チーム分け', description: '名前リストを指定した数のチームに分けます。'},
    'dice-roller': {title: 'サイコロロール', description: '面数を選んでサイコロの結果を確認します。'},
    'coin-flipper': {title: 'コイントス', description: '表か裏をランダムに選びます。'},
    'stopwatch': {title: 'ストップウォッチ', description: 'ブラウザで経過時間を簡単に測定します。'},
    'countdown-timer': {title: 'カウントダウンタイマー', description: '指定した分秒から残り時間をカウントします。'},
    'age-calculator': {title: '年齢計算', description: '生年月日から年齢を計算します。'},
    'business-day-calculator': {title: '営業日計算', description: '2つの日付の間の平日数を数えます。'},
    'tip-calculator': {title: 'チップ計算', description: 'チップ込みの支払いを人数で割って計算します。'},
    'discount-calculator': {title: '割引計算', description: '割引後価格と節約額を計算します。'},
    'salary-converter': {title: '時給・年収変換', description: '時給、週の勤務時間、年収を相互変換します。'},
    'fuel-cost-calculator': {title: '燃料費計算', description: '距離、燃費、燃料価格から費用を見積もります。'},
    'water-intake-calculator': {title: '水分摂取量計算', description: '体重から1日の目安水分量を計算します。'},
    'calorie-calculator': {title: '基礎代謝量計算', description: '身体情報から基礎代謝量を見積もります。'},
    'bmi-water-calculator': {title: 'BMI・水分摂取量計算', description: 'BMIと推奨水分量をまとめて計算します。'},
    'grocery-list': {title: '買い物リスト整理', description: '買うものをチェックできるリストに整理します。'},
    'meeting-notes': {title: '会議メモテンプレート', description: '会議名と議題からメモ用テンプレートを作成します。'},
    'simple-notepad': {title: 'シンプルメモ帳', description: 'ブラウザで素早くメモを書けます。'},
    'bar-chart-maker': {title: '棒グラフメーカー', description: 'ラベルと数値から簡単な棒グラフを作ります。'},
    'pie-chart-calculator': {title: '円グラフ比率計算', description: '項目ごとの割合と角度を計算します。'},
  },
  zh: {
    'percent-calculator': {title: '百分比计算器', description: '快速计算增长率、下降率和整体占比。'},
    'vat-calculator': {title: 'VAT 计算器', description: '在未税价格、增值税和含税总额之间换算。'},
    'tax33-calculator': {title: '自由职业3.3%税费计算器', description: '计算3.3%预扣税前后的金额。'},
    'interest-calculator': {title: '利息计算器', description: '按单利或复利估算指定期间的利息。'},
    'crypto-profit-calculator': {title: '加密货币收益计算器', description: '根据买入价、卖出价和数量计算收益率。'},
    'area-converter': {title: '坪与平方米转换器', description: '快速在坪和平方米之间转换。'},
    'text-counter': {title: '字符与字节计数器', description: '统计字符、单词、行数和 UTF-8 字节数。'},
    'timezone-converter': {title: '时区转换器', description: '对比主要城市和时区的时间。'},
    'pomodoro-timer': {title: '番茄钟计时器', description: '设置专注和休息时段，管理工作节奏。'},
    'json-formatter': {title: 'JSON 格式化工具', description: '验证 JSON 并整理为易读格式。'},
    'regex-tester': {title: '正则表达式测试器', description: '用示例文本检查正则匹配结果。'},
    'password-generator': {title: '密码生成器', description: '按长度和字符组合生成强密码。'},
    'redact-tool': {title: '个人信息遮盖工具', description: '遮盖邮箱、电话等敏感文本模式。'},
    'url-checker': {title: 'URL 安全检查器', description: '用本地规则检查 URL 格式和可疑模式。'},
    'burn-message': {title: '一次性秘密备忘录', description: '创建仅保存在浏览器内的临时秘密内容。'},
    'color-checker': {title: '颜色对比检查器', description: '检查颜色组合和文字可读性。'},
    'font-compare': {title: '字体比较工具', description: '用多种系统字体对比同一句文本。'},
    'nickname-generator': {title: '昵称生成器', description: '根据姓名或关键词生成英文昵称候选。'},
    'gpa-converter': {title: 'GPA 转换器', description: '在4.5、4.3和100分制之间转换成绩。'},
    'gym-plate-calculator': {title: '1RM 与杠铃片计算器', description: '估算1RM并计算单侧杠铃片组合。'},
    'pet-food-calculator': {title: '宠物食量计算器', description: '根据体重和热量估算每日喂食量。'},
    'coffee-yield-calculator': {title: '咖啡萃取率计算器', description: '根据粉量、液量和TDS计算萃取率。'},
    'sla-uptime-calculator': {title: 'SLA 可用性计算器', description: '根据可用性目标换算允许停机时间。'},
    'carbon-footprint-calculator': {title: '网站碳排放估算器', description: '根据页面浏览量和传输量估算 CO2。'},
    'ttfb-tester': {title: 'TTFB 日志分析器', description: '粘贴响应时间日志并计算平均值和 p95。'},
    'resistor-calculator': {title: '电阻色环计算器', description: '根据四色环读取电阻值。'},
    'construction-dictionary': {title: '施工现场术语词典', description: '搜索常用施工术语和标准表达。'},
    'elbow-offset-calculator': {title: '管道弯头偏移计算器', description: '计算45度和90度弯头的简易偏移长度。'},
    'case-converter': {title: '大小写转换器', description: '将文本转换为大写、小写、标题式或句子式。'},
    'whitespace-remover': {title: '空白清理工具', description: '整理重复空格、多余空行和混乱间距。'},
    'lorem-ipsum-generator': {title: 'Lorem Ipsum 生成器', description: '生成布局和原型用占位文本。'},
    'markdown-preview': {title: 'Markdown 预览', description: '将 Markdown 预览为简单的渲染 HTML。'},
    'csv-to-table': {title: 'CSV 表格查看器', description: '把 CSV 文本转换成易读表格。'},
    'duplicate-line-remover': {title: '重复行移除器', description: '从粘贴列表中删除重复行。'},
    'sort-lines': {title: '行排序工具', description: '按升序或降序排列文本行。'},
    'text-diff': {title: '文本差异比较', description: '比较两段文本的逐行差异。'},
    'url-slug-generator': {title: 'URL Slug 生成器', description: '把标题转换为适合 SEO 的 URL slug。'},
    'base64-encoder-decoder': {title: 'Base64 编码/解码', description: '将文本编码为 Base64 或解码回来。'},
    'url-encoder-decoder': {title: 'URL 编码/解码', description: '将字符串转换为 URL 安全格式或还原。'},
    'html-encoder-decoder': {title: 'HTML 实体编码/解码', description: '在特殊字符和 HTML 实体之间转换。'},
    'html-minifier': {title: 'HTML 压缩器', description: '减少 HTML 代码中的多余空白。'},
    'css-minifier': {title: 'CSS 压缩器', description: '删除 CSS 注释和多余空白。'},
    'javascript-minifier': {title: 'JavaScript 压缩器', description: '轻量减少 JavaScript 注释和空白。'},
    'jwt-decoder': {title: 'JWT 解码器', description: '在本地读取 JWT 头部和载荷。'},
    'uuid-generator': {title: 'UUID 生成器', description: '在浏览器中生成 UUID v4。'},
    'timestamp-converter': {title: 'Unix 时间戳转换器', description: '在 Unix 时间和日期字符串之间转换。'},
    'css-gradient-generator': {title: 'CSS 渐变生成器', description: '用两种颜色生成 linear-gradient 代码。'},
    'box-shadow-generator': {title: 'CSS 阴影生成器', description: '通过预览调整 box-shadow 并复制 CSS。'},
    'border-radius-generator': {title: 'CSS 圆角生成器', description: '为每个角生成 border-radius 值。'},
    'css-clamp-generator': {title: 'CSS clamp() 生成器', description: '计算响应式字体大小的 clamp 值。'},
    'aspect-ratio-calculator': {title: '宽高比计算器', description: '根据图片或视频比例计算尺寸。'},
    'hex-rgba-converter': {title: 'HEX/RGBA 转换器', description: '在 HEX 和 RGBA 颜色格式之间转换。'},
    'color-mixer': {title: '颜色混合器', description: '把两种颜色混合成分级调色板。'},
    'image-size-ratio': {title: '图片缩放比例计算器', description: '保持原始比例计算缩放后的尺寸。'},
    'open-graph-generator': {title: 'Open Graph 标签生成器', description: '生成社交分享用 OG meta 标签。'},
    'utm-builder': {title: 'UTM 链接构建器', description: '创建带 UTM 参数的营销追踪链接。'},
    'keyword-density': {title: '关键词密度计算器', description: '检查正文中特定关键词出现的比例。'},
    'random-number-generator': {title: '随机数生成器', description: '在指定范围内生成随机数字。'},
    'list-randomizer': {title: '列表随机排序', description: '将逐行列表打乱为随机顺序。'},
    'team-randomizer': {title: '随机分组工具', description: '把姓名列表分成指定数量的团队。'},
    'dice-roller': {title: '骰子投掷器', description: '选择骰子面数并查看随机结果。'},
    'coin-flipper': {title: '抛硬币', description: '随机选择正面或反面。'},
    'stopwatch': {title: '秒表', description: '在浏览器中简单测量经过时间。'},
    'countdown-timer': {title: '倒计时计时器', description: '从指定分钟和秒数开始倒计时。'},
    'age-calculator': {title: '年龄计算器', description: '根据出生日期计算年龄。'},
    'business-day-calculator': {title: '工作日计算器', description: '计算两个日期之间的工作日数量。'},
    'tip-calculator': {title: '小费计算器', description: '按人数分摊含小费账单。'},
    'discount-calculator': {title: '折扣计算器', description: '计算折后价和节省金额。'},
    'salary-converter': {title: '时薪/年薪转换器', description: '在时薪、每周工时和年薪之间换算。'},
    'fuel-cost-calculator': {title: '燃油费用计算器', description: '根据距离、油耗和油价估算费用。'},
    'water-intake-calculator': {title: '饮水量计算器', description: '根据体重估算每日饮水量。'},
    'calorie-calculator': {title: '基础代谢率计算器', description: '根据身体信息估算 BMR。'},
    'bmi-water-calculator': {title: 'BMI 与饮水量计算器', description: '同时计算 BMI 和建议饮水量。'},
    'grocery-list': {title: '购物清单整理', description: '把购物项目整理成可勾选列表。'},
    'meeting-notes': {title: '会议记录模板', description: '根据会议标题和议程生成记录模板。'},
    'simple-notepad': {title: '简易记事本', description: '直接在浏览器中快速写笔记。'},
    'bar-chart-maker': {title: '柱状图制作器', description: '根据标签和数值创建简单柱状图。'},
    'pie-chart-calculator': {title: '饼图比例计算器', description: '计算各项目比例和扇区角度。'},
  },
  es: {
    'percent-calculator': {title: 'Calculadora de porcentajes', description: 'Calcula aumentos, reducciones y proporciones frente al total.'},
    'vat-calculator': {title: 'Calculadora de VAT', description: 'Convierte entre precio base, impuesto y total con IVA incluido.'},
    'tax33-calculator': {title: 'Calculadora de impuesto freelance 3.3%', description: 'Calcula importes antes y después de la retención del 3.3%.'},
    'interest-calculator': {title: 'Calculadora de intereses', description: 'Estima intereses simples o compuestos durante un periodo.'},
    'crypto-profit-calculator': {title: 'Calculadora de ganancias cripto', description: 'Revisa ganancias, pérdidas y rentabilidad con precios de compra y venta.'},
    'area-converter': {title: 'Conversor de pyeong y metros cuadrados', description: 'Convierte rápidamente entre pyeong y metros cuadrados.'},
    'text-counter': {title: 'Contador de texto y bytes', description: 'Cuenta caracteres, palabras, líneas y bytes UTF-8.'},
    'timezone-converter': {title: 'Conversor de zonas horarias', description: 'Compara la hora entre ciudades y zonas horarias principales.'},
    'pomodoro-timer': {title: 'Temporizador Pomodoro', description: 'Configura sesiones de concentración y descanso para trabajar con ritmo.'},
    'json-formatter': {title: 'Formateador JSON', description: 'Valida JSON y lo ordena en una estructura legible.'},
    'regex-tester': {title: 'Probador de expresiones regulares', description: 'Comprueba coincidencias de regex contra texto de muestra.'},
    'password-generator': {title: 'Generador de contraseñas', description: 'Crea contraseñas fuertes con longitud y caracteres personalizados.'},
    'redact-tool': {title: 'Redactor de datos personales', description: 'Oculta patrones sensibles como correos y teléfonos.'},
    'url-checker': {title: 'Verificador de seguridad URL', description: 'Inspecciona formato de URL y patrones sospechosos localmente.'},
    'burn-message': {title: 'Nota secreta temporal', description: 'Crea una nota privada que se guarda solo en el navegador.'},
    'color-checker': {title: 'Verificador de contraste', description: 'Revisa combinaciones de color y legibilidad del texto.'},
    'font-compare': {title: 'Comparador de fuentes', description: 'Compara una misma frase con varias fuentes del sistema.'},
    'nickname-generator': {title: 'Generador de apodos', description: 'Crea ideas de apodos en inglés desde un nombre o palabra clave.'},
    'gpa-converter': {title: 'Conversor de GPA', description: 'Convierte notas entre escalas 4.5, 4.3 y 100 puntos.'},
    'gym-plate-calculator': {title: 'Calculadora de 1RM y discos', description: 'Estima el 1RM y la carga de discos para una barra.'},
    'pet-food-calculator': {title: 'Calculadora de comida para mascotas', description: 'Estima raciones diarias según peso y calorías.'},
    'coffee-yield-calculator': {title: 'Calculadora de rendimiento de café', description: 'Calcula extracción usando dosis, bebida y TDS.'},
    'sla-uptime-calculator': {title: 'Calculadora de disponibilidad SLA', description: 'Convierte objetivos de disponibilidad en tiempo de caída permitido.'},
    'carbon-footprint-calculator': {title: 'Estimador de CO2 web', description: 'Estima CO2 por visitas y tamaño de transferencia.'},
    'ttfb-tester': {title: 'Analizador de TTFB', description: 'Pega tiempos de respuesta para calcular promedio y p95.'},
    'resistor-calculator': {title: 'Calculadora de código de resistencias', description: 'Decodifica bandas de color de resistencias de cuatro bandas.'},
    'construction-dictionary': {title: 'Diccionario de construcción', description: 'Busca términos frecuentes de obra y expresiones estándar.'},
    'elbow-offset-calculator': {title: 'Calculadora de codo de tubería', description: 'Calcula offsets simples para codos de 45 y 90 grados.'},
    'case-converter': {title: 'Conversor de mayúsculas', description: 'Convierte texto a mayúsculas, minúsculas, título o frase.'},
    'whitespace-remover': {title: 'Limpiador de espacios', description: 'Elimina espacios duplicados, líneas vacías y separación desordenada.'},
    'lorem-ipsum-generator': {title: 'Generador Lorem Ipsum', description: 'Genera texto de relleno para diseños y prototipos.'},
    'markdown-preview': {title: 'Vista previa Markdown', description: 'Previsualiza Markdown como HTML renderizado simple.'},
    'csv-to-table': {title: 'Visor de tabla CSV', description: 'Convierte texto CSV en una tabla fácil de leer.'},
    'duplicate-line-remover': {title: 'Eliminador de líneas duplicadas', description: 'Quita líneas repetidas de listas pegadas.'},
    'sort-lines': {title: 'Ordenador de líneas', description: 'Ordena líneas de texto en orden ascendente o descendente.'},
    'text-diff': {title: 'Comparador de texto', description: 'Compara dos bloques de texto y muestra diferencias por línea.'},
    'url-slug-generator': {title: 'Generador de slug URL', description: 'Convierte títulos en slugs limpios para SEO.'},
    'base64-encoder-decoder': {title: 'Codificador y decodificador Base64', description: 'Codifica texto en Base64 o lo decodifica de vuelta.'},
    'url-encoder-decoder': {title: 'Codificador y decodificador URL', description: 'Convierte cadenas a formato seguro para URL y las restaura.'},
    'html-encoder-decoder': {title: 'Codificador de entidades HTML', description: 'Convierte caracteres especiales a entidades HTML y viceversa.'},
    'html-minifier': {title: 'Minificador HTML', description: 'Reduce espacios innecesarios en código HTML.'},
    'css-minifier': {title: 'Minificador CSS', description: 'Elimina comentarios y espacios extra del CSS.'},
    'javascript-minifier': {title: 'Minificador JavaScript', description: 'Reduce comentarios y espacios de JavaScript de forma ligera.'},
    'jwt-decoder': {title: 'Decodificador JWT', description: 'Lee encabezados y payloads JWT localmente.'},
    'uuid-generator': {title: 'Generador UUID', description: 'Genera valores UUID v4 en el navegador.'},
    'timestamp-converter': {title: 'Conversor Unix timestamp', description: 'Convierte entre timestamps Unix y fechas legibles.'},
    'css-gradient-generator': {title: 'Generador de gradientes CSS', description: 'Crea código linear-gradient a partir de dos colores.'},
    'box-shadow-generator': {title: 'Generador de box-shadow CSS', description: 'Ajusta sombras con vista previa y copia el CSS.'},
    'border-radius-generator': {title: 'Generador de border-radius', description: 'Crea valores CSS de radio para cada esquina.'},
    'css-clamp-generator': {title: 'Generador CSS clamp()', description: 'Calcula tamaños de fuente responsivos con clamp().' },
    'aspect-ratio-calculator': {title: 'Calculadora de relación de aspecto', description: 'Calcula dimensiones desde proporciones de imagen o video.'},
    'hex-rgba-converter': {title: 'Conversor HEX y RGBA', description: 'Convierte colores entre formatos HEX y RGBA.'},
    'color-mixer': {title: 'Mezclador de colores', description: 'Mezcla dos colores en una paleta por pasos.'},
    'image-size-ratio': {title: 'Calculadora de proporción de imagen', description: 'Calcula tamaños manteniendo la proporción original.'},
    'open-graph-generator': {title: 'Generador Open Graph', description: 'Crea meta tags OG para compartir en redes sociales.'},
    'utm-builder': {title: 'Constructor de enlaces UTM', description: 'Crea URLs de campaña con parámetros UTM.'},
    'keyword-density': {title: 'Calculadora de densidad de palabras clave', description: 'Mide la frecuencia de una palabra clave en el texto.'},
    'random-number-generator': {title: 'Generador de números aleatorios', description: 'Genera números aleatorios dentro de un rango.'},
    'list-randomizer': {title: 'Mezclador de listas', description: 'Reordena elementos de una lista de forma aleatoria.'},
    'team-randomizer': {title: 'Aleatorizador de equipos', description: 'Divide una lista de nombres en equipos.'},
    'dice-roller': {title: 'Lanzador de dados', description: 'Elige caras de dado y revisa el resultado aleatorio.'},
    'coin-flipper': {title: 'Lanzador de moneda', description: 'Elige aleatoriamente cara o cruz.'},
    'stopwatch': {title: 'Cronómetro', description: 'Mide tiempo transcurrido directamente en el navegador.'},
    'countdown-timer': {title: 'Temporizador de cuenta atrás', description: 'Cuenta hacia atrás desde minutos y segundos elegidos.'},
    'age-calculator': {title: 'Calculadora de edad', description: 'Calcula la edad desde una fecha de nacimiento.'},
    'business-day-calculator': {title: 'Calculadora de días laborables', description: 'Cuenta días de semana entre dos fechas.'},
    'tip-calculator': {title: 'Calculadora de propinas', description: 'Divide una cuenta con propina entre varias personas.'},
    'discount-calculator': {title: 'Calculadora de descuentos', description: 'Calcula precio final y ahorro tras un descuento.'},
    'salary-converter': {title: 'Conversor de salario', description: 'Convierte entre tarifa horaria, horas semanales y salario anual.'},
    'fuel-cost-calculator': {title: 'Calculadora de combustible', description: 'Estima coste según distancia, eficiencia y precio.'},
    'water-intake-calculator': {title: 'Calculadora de agua diaria', description: 'Estima ingesta diaria de agua según peso corporal.'},
    'calorie-calculator': {title: 'Calculadora de metabolismo basal', description: 'Estima BMR con datos corporales básicos.'},
    'bmi-water-calculator': {title: 'Calculadora BMI y agua', description: 'Calcula BMI y recomendación de agua en una sola vista.'},
    'grocery-list': {title: 'Organizador de compras', description: 'Convierte artículos de compra en una lista marcable.'},
    'meeting-notes': {title: 'Plantilla de notas de reunión', description: 'Genera una plantilla desde título y agenda.'},
    'simple-notepad': {title: 'Bloc de notas simple', description: 'Escribe notas rápidas directamente en el navegador.'},
    'bar-chart-maker': {title: 'Creador de gráficos de barras', description: 'Crea un gráfico simple con etiquetas y valores.'},
    'pie-chart-calculator': {title: 'Calculadora de gráfico circular', description: 'Calcula porcentajes y ángulos para cada elemento.'},
  },
  fr: {
    'percent-calculator': {title: 'Calculateur de pourcentage', description: 'Calculez hausses, baisses et proportions par rapport au total.'},
    'vat-calculator': {title: 'Calculateur de TVA', description: 'Convertissez prix hors taxe, TVA et total TTC.'},
    'tax33-calculator': {title: 'Calculateur fiscal freelance 3,3%', description: 'Calculez les montants avant et après retenue de 3,3%.'},
    'interest-calculator': {title: 'Calculateur d’intérêts', description: 'Estimez intérêts simples ou composés sur une période.'},
    'crypto-profit-calculator': {title: 'Calculateur de profit crypto', description: 'Vérifiez gain, perte et rendement avec prix d’achat et de vente.'},
    'area-converter': {title: 'Convertisseur pyeong et m²', description: 'Convertissez rapidement pyeong et mètres carrés.'},
    'text-counter': {title: 'Compteur de texte et d’octets', description: 'Comptez caractères, mots, lignes et octets UTF-8.'},
    'timezone-converter': {title: 'Convertisseur de fuseaux horaires', description: 'Comparez l’heure entre grandes villes et fuseaux horaires.'},
    'pomodoro-timer': {title: 'Minuteur Pomodoro', description: 'Configurez des sessions de concentration et de pause.'},
    'json-formatter': {title: 'Formateur JSON', description: 'Validez et formatez JSON dans une structure lisible.'},
    'regex-tester': {title: 'Testeur d’expressions régulières', description: 'Testez des regex sur un texte d’exemple.'},
    'password-generator': {title: 'Générateur de mots de passe', description: 'Créez des mots de passe solides avec longueur et caractères personnalisés.'},
    'redact-tool': {title: 'Masqueur de données personnelles', description: 'Masquez emails, téléphones et autres motifs sensibles.'},
    'url-checker': {title: 'Vérificateur de sécurité URL', description: 'Inspectez format d’URL et motifs suspects localement.'},
    'burn-message': {title: 'Note secrète temporaire', description: 'Créez une note privée stockée uniquement dans le navigateur.'},
    'color-checker': {title: 'Vérificateur de contraste', description: 'Contrôlez combinaisons de couleurs et lisibilité du texte.'},
    'font-compare': {title: 'Comparateur de polices', description: 'Comparez une même phrase avec plusieurs polices système.'},
    'nickname-generator': {title: 'Générateur de pseudos', description: 'Créez des idées de pseudos anglais depuis un nom ou mot-clé.'},
    'gpa-converter': {title: 'Convertisseur GPA', description: 'Convertissez des notes entre échelles 4.5, 4.3 et 100 points.'},
    'gym-plate-calculator': {title: 'Calculateur 1RM et disques', description: 'Estimez le 1RM et la charge des disques de barre.'},
    'pet-food-calculator': {title: 'Calculateur de nourriture animale', description: 'Estimez les portions quotidiennes selon poids et calories.'},
    'coffee-yield-calculator': {title: 'Calculateur de rendement café', description: 'Calculez l’extraction avec dose, boisson et TDS.'},
    'sla-uptime-calculator': {title: 'Calculateur de disponibilité SLA', description: 'Convertissez un objectif de disponibilité en temps d’arrêt autorisé.'},
    'carbon-footprint-calculator': {title: 'Estimateur CO2 de site web', description: 'Estimez le CO2 selon vues de page et taille transférée.'},
    'ttfb-tester': {title: 'Analyseur TTFB', description: 'Collez des temps de réponse pour calculer moyenne et p95.'},
    'resistor-calculator': {title: 'Calculateur de codes de résistances', description: 'Décodez les couleurs de résistances à quatre bandes.'},
    'construction-dictionary': {title: 'Dictionnaire de chantier', description: 'Recherchez termes de chantier fréquents et formulations standard.'},
    'elbow-offset-calculator': {title: 'Calculateur de coude de tuyau', description: 'Calculez des offsets simples pour coudes à 45 et 90 degrés.'},
    'case-converter': {title: 'Convertisseur de casse', description: 'Convertissez texte en majuscules, minuscules, titre ou phrase.'},
    'whitespace-remover': {title: 'Nettoyeur d’espaces', description: 'Supprimez espaces doublés, lignes vides et espacements désordonnés.'},
    'lorem-ipsum-generator': {title: 'Générateur Lorem Ipsum', description: 'Générez du texte de remplissage pour maquettes.'},
    'markdown-preview': {title: 'Aperçu Markdown', description: 'Prévisualisez Markdown en HTML rendu simple.'},
    'csv-to-table': {title: 'Visionneuse CSV', description: 'Transformez un CSV en tableau lisible.'},
    'duplicate-line-remover': {title: 'Suppresseur de lignes doublées', description: 'Retirez les lignes répétées d’une liste collée.'},
    'sort-lines': {title: 'Trieur de lignes', description: 'Triez des lignes de texte par ordre croissant ou décroissant.'},
    'text-diff': {title: 'Comparateur de texte', description: 'Comparez deux blocs de texte ligne par ligne.'},
    'url-slug-generator': {title: 'Générateur de slug URL', description: 'Transformez des titres en slugs propres pour le SEO.'},
    'base64-encoder-decoder': {title: 'Encodeur et décodeur Base64', description: 'Encodez du texte en Base64 ou décodez-le.'},
    'url-encoder-decoder': {title: 'Encodeur et décodeur URL', description: 'Convertissez des chaînes en format sûr pour URL.'},
    'html-encoder-decoder': {title: 'Encodeur d’entités HTML', description: 'Convertissez caractères spéciaux et entités HTML.'},
    'html-minifier': {title: 'Minificateur HTML', description: 'Réduisez les espaces inutiles dans le HTML.'},
    'css-minifier': {title: 'Minificateur CSS', description: 'Supprimez commentaires et espaces supplémentaires du CSS.'},
    'javascript-minifier': {title: 'Minificateur JavaScript', description: 'Réduisez légèrement commentaires et espaces JavaScript.'},
    'jwt-decoder': {title: 'Décodeur JWT', description: 'Lisez localement les en-têtes et payloads JWT.'},
    'uuid-generator': {title: 'Générateur UUID', description: 'Générez des UUID v4 dans le navigateur.'},
    'timestamp-converter': {title: 'Convertisseur timestamp Unix', description: 'Convertissez timestamps Unix et dates lisibles.'},
    'css-gradient-generator': {title: 'Générateur de dégradés CSS', description: 'Créez un linear-gradient à partir de deux couleurs.'},
    'box-shadow-generator': {title: 'Générateur box-shadow CSS', description: 'Ajustez une ombre avec aperçu et copiez le CSS.'},
    'border-radius-generator': {title: 'Générateur border-radius', description: 'Créez les valeurs CSS de rayon pour chaque coin.'},
    'css-clamp-generator': {title: 'Générateur CSS clamp()', description: 'Calculez des tailles de police responsives avec clamp().' },
    'aspect-ratio-calculator': {title: 'Calculateur de ratio d’aspect', description: 'Calculez dimensions depuis ratios d’image ou vidéo.'},
    'hex-rgba-converter': {title: 'Convertisseur HEX et RGBA', description: 'Convertissez couleurs entre HEX et RGBA.'},
    'color-mixer': {title: 'Mélangeur de couleurs', description: 'Mélangez deux couleurs en palette par étapes.'},
    'image-size-ratio': {title: 'Calculateur de redimensionnement image', description: 'Calculez des tailles en conservant le ratio original.'},
    'open-graph-generator': {title: 'Générateur Open Graph', description: 'Créez des balises OG pour le partage social.'},
    'utm-builder': {title: 'Constructeur de liens UTM', description: 'Créez des URL de campagne avec paramètres UTM.'},
    'keyword-density': {title: 'Calculateur de densité de mots-clés', description: 'Mesurez la fréquence d’un mot-clé dans un texte.'},
    'random-number-generator': {title: 'Générateur de nombres aléatoires', description: 'Générez des nombres dans une plage choisie.'},
    'list-randomizer': {title: 'Mélangeur de listes', description: 'Réorganisez des éléments de liste au hasard.'},
    'team-randomizer': {title: 'Répartiteur d’équipes', description: 'Divisez une liste de noms en équipes.'},
    'dice-roller': {title: 'Lanceur de dés', description: 'Choisissez le nombre de faces et obtenez un résultat.'},
    'coin-flipper': {title: 'Pile ou face', description: 'Choisissez aléatoirement pile ou face.'},
    'stopwatch': {title: 'Chronomètre', description: 'Mesurez le temps écoulé dans le navigateur.'},
    'countdown-timer': {title: 'Minuteur de compte à rebours', description: 'Décomptez depuis des minutes et secondes choisies.'},
    'age-calculator': {title: 'Calculateur d’âge', description: 'Calculez l’âge à partir d’une date de naissance.'},
    'business-day-calculator': {title: 'Calculateur de jours ouvrés', description: 'Comptez les jours de semaine entre deux dates.'},
    'tip-calculator': {title: 'Calculateur de pourboire', description: 'Répartissez une addition avec pourboire entre plusieurs personnes.'},
    'discount-calculator': {title: 'Calculateur de remise', description: 'Calculez prix final et économie après réduction.'},
    'salary-converter': {title: 'Convertisseur de salaire', description: 'Convertissez taux horaire, heures hebdomadaires et salaire annuel.'},
    'fuel-cost-calculator': {title: 'Calculateur de carburant', description: 'Estimez le coût selon distance, consommation et prix.'},
    'water-intake-calculator': {title: 'Calculateur d’eau quotidienne', description: 'Estimez l’apport d’eau quotidien selon le poids.'},
    'calorie-calculator': {title: 'Calculateur de métabolisme basal', description: 'Estimez le BMR à partir de données corporelles.'},
    'bmi-water-calculator': {title: 'Calculateur IMC et eau', description: 'Calculez IMC et recommandation d’eau ensemble.'},
    'grocery-list': {title: 'Organisateur de courses', description: 'Transformez vos achats en liste cochable.'},
    'meeting-notes': {title: 'Modèle de notes de réunion', description: 'Générez un modèle depuis titre et ordre du jour.'},
    'simple-notepad': {title: 'Bloc-notes simple', description: 'Écrivez des notes rapides dans le navigateur.'},
    'bar-chart-maker': {title: 'Créateur de graphique en barres', description: 'Créez un graphique simple avec libellés et valeurs.'},
    'pie-chart-calculator': {title: 'Calculateur de graphique circulaire', description: 'Calculez pourcentages et angles de chaque élément.'},
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
  const localized = localizedToolText[locale]?.[tool.slug]?.title
  if (localized) return localized
  const translated = getToolTranslation(locale, tool.slug, 'title')
  if (translated) return translated
  return localizeTitleFromEnglish(tool.enTitle || tool.title, locale)
}

export function getToolDisplayDescription(locale, tool) {
  if (locale === 'ko' && tool.koDescription) return tool.koDescription
  if (locale === 'en' && tool.enDescription) return tool.enDescription
  const localized = localizedToolText[locale]?.[tool.slug]?.description
  if (localized) return localized
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
