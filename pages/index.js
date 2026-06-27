import Link from 'next/link'
import ToolCard from '../components/ToolCard'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {defaultLocale, getTranslation, getToolTranslation} from '../lib/i18n'

const toolSlugs = [
  'bmi-calculator',
  'loan-calculator',
  'dday-calculator',
  'unit-converter',
  'qr-code-generator'
]

export default function Home(){
  const router = useRouter()
  const locale = router.locale || defaultLocale
  const tools = toolSlugs.map(slug => ({
    slug,
    title: getToolTranslation(locale, slug, 'title'),
    description: getToolTranslation(locale, slug, 'description')
  }))

  return (
    <>
      <Head>
        <title>{getTranslation(locale, ['home', 'heroTitle'], 'Utility Hub — Online Browser Tools')}</title>
        <meta name="description" content={getTranslation(locale, ['home', 'heroDescription'], 'Small, fast browser-only utility tools.') } />
      </Head>

      <section className="hero-panel mb-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div>
            <div className="brand-pill">{getTranslation(locale, ['common', 'quickTool'], '간편한 브라우저 도구')}</div>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-[3.8rem]">{getTranslation(locale, ['home', 'heroTitle'])}</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{getTranslation(locale, ['home', 'heroDescription'])}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/tools/bmi-calculator" locale={locale} className="btn-primary">{getTranslation(locale, ['home', 'cta'])}</Link>
              <Link href="/about" locale={locale} className="text-sm font-medium text-slate-700 hover:text-emerald-600">{getTranslation(locale, ['home', 'learnMore'])}</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-emerald-200/70 bg-emerald-50/80 p-6 shadow-sm">
              <div className="text-sm font-semibold text-emerald-700">{getTranslation(locale, ['home', 'noLogin'])}</div>
              <p className="mt-3 text-sm text-slate-700">{getTranslation(locale, ['home', 'noSignup'])}</p>
            </div>
            <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{getTranslation(locale, ['home', 'mobile'])}</div>
              <p className="mt-3 text-sm text-slate-600">{getTranslation(locale, ['home', 'mobileDesc'])}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {tools.map(t => (
          <ToolCard key={t.slug} slug={t.slug} title={t.title} description={t.description} />
        ))}
      </section>
    </>
  )
}
