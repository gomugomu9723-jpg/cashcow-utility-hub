import Link from 'next/link'
import {useRouter} from 'next/router'
import {defaultLocale, getTranslation} from '../lib/i18n'

export default function Footer(){
  const router = useRouter()
  const locale = router.locale || defaultLocale

  return (
    <footer className="mt-14">
      <div className="container rounded-[32px] bg-slate-950/95 border border-slate-200/20 px-6 py-8 text-sm text-slate-300 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.65)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>{getTranslation(locale, ['footer', 'copy'])}</div>
          <div className="space-x-3">
            <Link href="/privacy-policy" locale={locale} className="underline decoration-emerald-400 decoration-2 underline-offset-4">
              {getTranslation(locale, ['footer', 'privacy'])}
            </Link>
            <Link href="/terms" locale={locale} className="underline decoration-emerald-400 decoration-2 underline-offset-4">
              {getTranslation(locale, ['footer', 'terms'])}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
