import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {getQueryLocale, getToolTranslation, getTranslation} from '../../lib/i18n'

export default function Loan(){
  const router = useRouter()
  const locale = getQueryLocale(router)
  const title = getToolTranslation(locale, 'loan-calculator', 'title')
  const description = getToolTranslation(locale, 'loan-calculator', 'description')
  const [principal, setPrincipal] = useState('')
  const [annualRate, setAnnualRate] = useState('')
  const [years, setYears] = useState('')
  const [result, setResult] = useState(null)

  function calculate(e){
    e.preventDefault()
    const P = parseFloat(principal)
    const r = parseFloat(annualRate)/100/12
    const n = parseFloat(years)*12
    if (!P || !r || !n) return
    const payment = (P * r) / (1 - Math.pow(1 + r, -n))
    setResult({monthly: payment.toFixed(2), total: (payment*n).toFixed(2)})
  }

  return (
    <ToolLayout title={title} description={description}>
      <form onSubmit={calculate} className="card">
        <label>{getToolTranslation(locale, 'loan-calculator', 'form.amount')}
          <input className="mt-1 w-full" value={principal} onChange={e=>setPrincipal(e.target.value)} inputMode="decimal" />
        </label>
        <label className="block mt-3">{getToolTranslation(locale, 'loan-calculator', 'form.rate')}
          <input className="mt-1 w-full" value={annualRate} onChange={e=>setAnnualRate(e.target.value)} inputMode="decimal" />
        </label>
        <label className="block mt-3">{getToolTranslation(locale, 'loan-calculator', 'form.years')}
          <input className="mt-1 w-full" value={years} onChange={e=>setYears(e.target.value)} inputMode="numeric" />
        </label>
        <div className="mt-4"><button className="px-4 py-2 bg-blue-600 text-white rounded">{getToolTranslation(locale, 'loan-calculator', 'form.calculate')}</button></div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">{getTranslation(locale, ['common', 'result'])}</h4>
        {result ? (
          <div className="mt-2">
            <div>{getToolTranslation(locale, 'loan-calculator', 'form.monthlyPayment')}: <strong>{result.monthly}</strong></div>
            <div>Total paid: <strong>{result.total}</strong></div>
          </div>
        ) : <div className="muted mt-2">{getTranslation(locale, ['common', 'enterValues'])}</div>}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">{getToolTranslation(locale, 'loan-calculator', 'form.howToUse')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'loan-calculator', 'form.whatThisDoes')}</p>
      </section>

      <FAQ items={[{q:getTranslation(locale, ['common', 'result']), a:getTranslation(locale, ['common', 'enterValues'])}]} />
      <RelatedTools tools={[{slug:'loan-calculator', title:title}, {slug:'unit-converter', title:getToolTranslation(locale, 'unit-converter', 'title')}]} />
    </ToolLayout>
  )
}
