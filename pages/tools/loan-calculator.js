import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useState} from 'react'

export default function Loan(){
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
    <ToolLayout title="Loan Payment Calculator" description="Estimate monthly loan payments">
      <form onSubmit={calculate} className="card">
        <label>Principal
          <input className="mt-1 w-full" value={principal} onChange={e=>setPrincipal(e.target.value)} inputMode="decimal" />
        </label>
        <label className="block mt-3">Annual interest rate (%)
          <input className="mt-1 w-full" value={annualRate} onChange={e=>setAnnualRate(e.target.value)} inputMode="decimal" />
        </label>
        <label className="block mt-3">Term (years)
          <input className="mt-1 w-full" value={years} onChange={e=>setYears(e.target.value)} inputMode="numeric" />
        </label>
        <div className="mt-4"><button className="px-4 py-2 bg-blue-600 text-white rounded">Calculate</button></div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">Result</h4>
        {result ? (
          <div className="mt-2">
            <div>Monthly payment: <strong>${result.monthly}</strong></div>
            <div>Total paid: <strong>${result.total}</strong></div>
          </div>
        ) : <div className="muted mt-2">Enter values and press Calculate.</div>}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">How to use</h4>
        <p className="muted mt-1">Provide loan amount, annual interest rate, and years to compute monthly payment using standard amortization formula.</p>
      </section>

      <FAQ items={[{q:'Does this include fees?', a:'No. This calculator ignores fees and taxes.'}]} />
      <RelatedTools tools={[{slug:'loan-calculator', title:'Loan Payment Calculator'}, {slug:'unit-converter', title:'Unit Converter'}]} />
    </ToolLayout>
  )
}
