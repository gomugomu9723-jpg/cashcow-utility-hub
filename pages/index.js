import Head from 'next/head'
import ToolCard from '../components/ToolCard'
import {allTools, categories, getToolsByCategory} from '../lib/tools'

export default function Home() {
  return (
    <>
      <Head>
        <title>Utility Hub - 무료 브라우저 도구 모음</title>
        <meta name="description" content="계산기, 변환기, 개발자 도구, 보안 도구를 브라우저에서 바로 쓰는 무료 유틸리티 허브입니다." />
      </Head>

      <section className="hero-panel mb-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="brand-pill">{allTools.length}+ browser tools</div>
            <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-6xl">필요한 도구를 한곳에 모았습니다.</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              The Util Hub의 카테고리를 참고해, 서버 없이 브라우저에서 구현 가능한 계산기와 변환기, 개발자 도구, 보안 도구를 카테고리별로 정리했습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-5">
              <div className="text-3xl font-bold text-emerald-700">{allTools.length}</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">도구</div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="text-3xl font-bold text-slate-900">{categories.length}</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">카테고리</div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="text-3xl font-bold text-slate-900">0</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">로그인</div>
            </div>
            <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-5">
              <div className="text-3xl font-bold text-emerald-700">100%</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">무료</div>
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
                  <h2 className="text-2xl font-bold text-slate-900"><span className="mr-2">{category.icon}</span>{category.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">{items.length}개 도구</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tool) => (
                  <ToolCard key={tool.slug} slug={tool.slug} title={tool.title} description={tool.description} />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
