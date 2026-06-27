import ToolCard from '../components/ToolCard'
import Head from 'next/head'

const tools = [
  {slug: 'bmi-calculator', title: 'BMI Calculator', description: 'Calculate body mass index'},
  {slug: 'loan-calculator', title: 'Loan Payment Calculator', description: 'Estimate monthly loan payments'},
  {slug: 'dday-calculator', title: 'D-Day Calculator', description: 'Days until or since a date'},
  {slug: 'unit-converter', title: 'Unit Converter', description: 'Convert common units quickly'},
  {slug: 'qr-code-generator', title: 'QR Code Generator', description: 'Create QR codes in the browser'}
]

export default function Home(){
  return (
    <>
      <Head>
        <title>Utility Hub — Online Browser Tools</title>
        <meta name="description" content="Small, fast browser-only utility tools (BMI, loan calculator, QR, unit convert, D-Day)." />
      </Head>

      <section className="hero-panel mb-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div>
            <div className="brand-pill">간편한 브라우저 도구</div>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-[3.8rem]">일상 업무를 더 빠르게, 더 깔끔하게</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">BMI, 대출 계산, D-Day, 단위 변환, QR 코드 생성. 별도 설치 없이 브라우저에서 즉시 실행할 수 있는 가볍고 실용적인 도구들입니다.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="/tools/bmi-calculator" className="btn-primary">도구 바로가기</a>
              <a href="/about" className="text-sm font-medium text-slate-700 hover:text-emerald-600">서비스 소개 보기</a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-emerald-200/70 bg-emerald-50/80 p-6 shadow-sm">
              <div className="text-sm font-semibold text-emerald-700">로그인 없이 사용</div>
              <p className="mt-3 text-sm text-slate-700">회원가입 없이 누구나 바로 사용할 수 있는 도구 모음.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">모바일 최적화</div>
              <p className="mt-3 text-sm text-slate-600">모든 화면에서 자연스럽게 작동하도록 설계되었습니다.</p>
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
