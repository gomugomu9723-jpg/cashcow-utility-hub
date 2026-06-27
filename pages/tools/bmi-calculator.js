import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {getQueryLocale, getToolTranslation, getTranslation} from '../../lib/i18n'

export default function BMI(){
  const router = useRouter()
  const locale = getQueryLocale(router)
  const title = getToolTranslation(locale, 'bmi-calculator', 'title')
  const description = getToolTranslation(locale, 'bmi-calculator', 'description')

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState(null)

  function calculate(e){
    e.preventDefault()
    const w = parseFloat(weight)
    const h = parseFloat(height) / 100
    if (!w || !h) return
    const bmi = w / (h*h)
    let categoryKey = 'unknown'
    if (bmi < 18.5) categoryKey = 'underweight'
    else if (bmi < 25) categoryKey = 'normal'
    else if (bmi < 30) categoryKey = 'overweight'
    else categoryKey = 'obese'
    setResult({bmi: bmi.toFixed(1), categoryKey})
  }

  const categoryLabel = result ? getToolTranslation(locale, 'bmi-calculator', `form.${result.categoryKey}`) : ''

  return (
    <ToolLayout title={title} description={description}>
      <form onSubmit={calculate} className="card">
        <label className="block">{getToolTranslation(locale, 'bmi-calculator', 'form.weight')}
          <input className="mt-1 w-full" value={weight} onChange={e=>setWeight(e.target.value)} inputMode="decimal" />
        </label>
        <label className="block mt-3">{getToolTranslation(locale, 'bmi-calculator', 'form.height')}
          <input className="mt-1 w-full" value={height} onChange={e=>setHeight(e.target.value)} inputMode="decimal" />
        </label>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">{getToolTranslation(locale, 'bmi-calculator', 'form.calculate')}</button>
        </div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">{getTranslation(locale, ['common', 'result'])}</h4>
        {result ? (
          <div className="mt-2">
            <div>BMI: <strong>{result.bmi}</strong></div>
            <div>{getToolTranslation(locale, 'bmi-calculator', 'form.category')}: <strong>{categoryLabel}</strong></div>
          </div>
        ) : <div className="muted mt-2">{getTranslation(locale, ['common', 'enterValues'])}</div>}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">{getToolTranslation(locale, 'bmi-calculator', 'form.whatThisDoes')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'bmi-calculator', 'form.whatThisDoes')}</p>
        <h4 className="font-semibold mt-4">{getToolTranslation(locale, 'bmi-calculator', 'form.howToUse')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'bmi-calculator', 'form.howToUse')}</p>
      </section>

      <FAQ items={[{q:getTranslation(locale, ['common', 'result']), a:getTranslation(locale, ['common', 'enterValues'])}]} />

      <RelatedTools tools={[{slug:'unit-converter', title:getToolTranslation(locale, 'unit-converter', 'title')}]} />
    </ToolLayout>
  )
}
