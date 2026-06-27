import Head from 'next/head'
import AdPlaceholder from './AdPlaceholder'

export default function ToolLayout({title, description, children}) {
  return (
    <>
      <Head>
        <title>{title} - Utility Hub</title>
        <meta name="description" content={description} />
      </Head>
      <article>
        <header className="mb-8 rounded-[32px] bg-white/95 border border-slate-200/70 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.3)]">
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="muted mt-3 text-base">{description}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            {children}
          </div>
          <aside className="space-y-4">
            <AdPlaceholder />
          </aside>
        </div>
      </article>
    </>
  )
}
