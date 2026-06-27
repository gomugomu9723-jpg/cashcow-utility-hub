export const supportedLocales = ['ko', 'en', 'ja', 'zh', 'es', 'fr']
export const defaultLocale = 'ko'

export const localeNames = {
  ko: 'Korean',
  en: 'English',
  ja: 'Japanese',
  zh: 'Chinese',
  es: 'Spanish',
  fr: 'French',
}

const copy = {
  ko: {
    common: {
      tools: 'Tools',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      quickTool: 'Browser tool',
      email: 'Email',
      relatedTools: 'Related tools',
      result: 'Result',
      enterValues: 'Enter values and press Calculate.',
      language: 'Language',
    },
    home: {
      title: 'Utility Hub - Free browser tools',
      heroTitle: 'All your everyday tools in one place.',
      heroDescription: 'Calculators, converters, developer tools, privacy tools, text utilities, CSS generators, randomizers, and more. Everything runs in your browser.',
      statsTools: 'Tools',
      statsCategories: 'Categories',
      statsLogin: 'Login',
      statsFree: 'Free',
      categoryCount: 'tools',
    },
    footer: {
      copy: '© 2026 Utility Hub. Simple browser tools.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    about: {
      title: 'About',
      description: 'Utility Hub offers simple browser-based tools with no account required.',
    },
    contact: {
      title: 'Contact',
      description: 'This is a static site. For inquiries, use email or an external form.',
      emailText: 'Email',
      email: 'contact@example.com',
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'This site is static and uses client-side code by default. No user data is collected or stored by default.',
      additional: 'If analytics or ads are added later, they will be disclosed here.',
    },
    terms: {
      title: 'Terms of Use',
      description: 'Use these tools at your own discretion. Results are informational and are provided without warranty.',
    },
  },
}

copy.en = copy.ko
copy.ja = copy.ko
copy.zh = copy.ko
copy.es = copy.ko
copy.fr = copy.ko

const existingToolCopy = {
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
}

for (const locale of supportedLocales) {
  copy[locale].tools = existingToolCopy
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
