import Head from 'next/head'
import ToolCard from '../components/ToolCard'
import {useRouter} from 'next/router'
import {allTools, categories, getToolsByCategory} from '../lib/tools'
import {
  getCategoryTranslation,
  getQueryLocale,
  getToolDisplayDescription,
  getToolDisplayTitle,
  getTranslation,
} from '../lib/i18n'

export default function Home() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const title = getTranslation(locale, ['home', 'title'], 'Utility Hub - Free browser tools')
  const description = getTranslation(
    locale,
    ['home', 'heroDescription'],
    'A fast collection of free calculators, converters, developer tools, privacy helpers, and everyday browser utilities.'
  )

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <section className="hero-panel mb-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="brand-pill">{allTools.length}+ browser tools</div>
            <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-6xl">
              {getTranslation(locale, ['home', 'heroTitle'], 'All the browser tools you need in one place.')}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-5">
              <div className="text-3xl font-bold text-emerald-700">{allTools.length}</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">{getTranslation(locale, ['home', 'statsTools'], 'Tools')}</div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="text-3xl font-bold text-slate-900">{categories.length}</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">{getTranslation(locale, ['home', 'statsCategories'], 'Categories')}</div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="text-3xl font-bold text-slate-900">0</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">{getTranslation(locale, ['home', 'statsLogin'], 'Login')}</div>
            </div>
            <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-5">
              <div className="text-3xl font-bold text-emerald-700">100%</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">{getTranslation(locale, ['home', 'statsFree'], 'Free')}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="space-y-10">
        {categories.map((category) => {
          const items = getToolsByCategory(category.id)
          if (!items.length) return null

          return (
            <div key={category.id}>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    <span className="mr-2">{category.icon}</span>
                    {getCategoryTranslation(locale, category.id, category.title)}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {items.length} {getTranslation(locale, ['home', 'categoryCount'], 'tools')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    slug={tool.slug}
                    title={getToolDisplayTitle(locale, tool)}
                    description={getToolDisplayDescription(locale, tool)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
