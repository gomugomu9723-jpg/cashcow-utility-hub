import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {getQueryLocale, getToolTranslation, getTranslation} from '../../lib/i18n'

export default function DDay(){
  const router = useRouter()
  const locale = getQueryLocale(router)
  const title = getToolTranslation(locale, 'dday-calculator', 'title')
  const description = getToolTranslation(locale, 'dday-calculator', 'description')
  const [date, setDate] = useState('')
  const [result, setResult] = useState(null)

  function compute(e){
    e.preventDefault()
    if (!date) return
    const target = new Date(date)
    const now = new Date()
    const diff = Math.ceil((target - now) / (1000*60*60*24))
    setResult(diff)
  }

  return (
    <ToolLayout title={title} description={description}>
      <form onSubmit={compute} className="card">
        <label>{getToolTranslation(locale, 'dday-calculator', 'form.date')}
          <input type="date" className="mt-1 w-full" value={date} onChange={e=>setDate(e.target.value)} />
        </label>
        <div className="mt-4"><button className="px-4 py-2 bg-blue-600 text-white rounded">{getToolTranslation(locale, 'dday-calculator', 'form.calculate')}</button></div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">{getTranslation(locale, ['common', 'result'])}</h4>
        {result === null ? <div className="muted mt-2">{getTranslation(locale, ['common', 'enterValues'])}</div> : (
          <div className="mt-2">
            {result >= 0 ? (
              <span>{result} {getToolTranslation(locale, 'dday-calculator', 'form.future')}</span>
            ) : (
              <span>{Math.abs(result)} {getToolTranslation(locale, 'dday-calculator', 'form.past')}</span>
            )}
          </div>
        )}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">{getToolTranslation(locale, 'dday-calculator', 'form.whatThisDoes')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'dday-calculator', 'form.whatThisDoes')}</p>
      </section>

      <FAQ items={[{q:getTranslation(locale, ['common', 'result']), a:getTranslation(locale, ['common', 'enterValues'])}]} />
      <RelatedTools tools={[{slug:'dday-calculator', title:title}]} />
    </ToolLayout>
  )
}
