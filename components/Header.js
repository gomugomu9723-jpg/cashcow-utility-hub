import Link from 'next/link'
import {useRouter} from 'next/router'
import Icon from './icons'
import {defaultLocale, getTranslation, localeNames} from '../lib/i18n'

export default function Header() {
  const router = useRouter()
  const locale = router.locale || defaultLocale
  const locales = router.locales || [defaultLocale]
  const navText = (key) => getTranslation(locale, ['common', key], key)
  const currentPath = router.asPath || '/'

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100/60 shadow-sm">
      <div className="container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" locale={locale} className="inline-flex items-center gap-3 text-xl font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200">
              <Icon name="bmi-calculator" className="h-5 w-5 text-emerald-700" />
            </span>
            <span>Utility Hub</span>
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 sm:flex">
            <span>{navText('language')}:</span>
            {locales.map((code) => (
              <Link
                key={code}
                href={currentPath}
                locale={code}
                className={`rounded-full px-3 py-1 transition ${code === locale ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                {localeNames[code] || code}
              </Link>
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          <Link href="/tools/bmi-calculator" locale={locale} className="link-accent">{navText('tools')}</Link>
          <Link href="/about" locale={locale} className="link-accent">{navText('about')}</Link>
          <Link href="/contact" locale={locale} className="link-accent">{navText('contact')}</Link>
        </nav>
      </div>
    </header>
  )
}
