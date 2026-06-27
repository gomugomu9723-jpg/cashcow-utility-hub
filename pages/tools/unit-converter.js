import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useRouter} from 'next/router'
import {useState, useMemo} from 'react'
import {defaultLocale, getToolTranslation, getTranslation} from '../../lib/i18n'

const converters = {
  length: {
    units: {
      m: 'Meters',
      km: 'Kilometers',
      mi: 'Miles',
      ft: 'Feet'
    },
    toMeters: (v, u) => {
      switch(u){
        case 'm': return v
        case 'km': return v*1000
        case 'mi': return v*1609.344
        case 'ft': return v*0.3048
        default: return v
      }
    },
    fromMeters: (m, u) => {
      switch(u){
        case 'm': return m
        case 'km': return m/1000
        case 'mi': return m/1609.344
        case 'ft': return m/0.3048
        default: return m
      }
    }
  },
  weight: {
    units: {kg:'Kilograms', lb:'Pounds'},
    toKg: (v,u)=> u==='kg'?v:v*0.45359237,
    fromKg: (k,u)=> u==='kg'?k:k/0.45359237
  },
  temp: {
    units: {c:'Celsius', f:'Fahrenheit'},
    convert: (v, from, to)=>{
      if (from===to) return v
      if (from==='c' && to==='f') return (v*9/5)+32
      if (from==='f' && to==='c') return (v-32)*5/9
      return v
    }
  }
}

export default function UnitConverter(){
  const router = useRouter()
  const locale = router.locale || defaultLocale
  const title = getToolTranslation(locale, 'unit-converter', 'title')
  const description = getToolTranslation(locale, 'unit-converter', 'description')

  const [category, setCategory] = useState('length')
  const [from, setFrom] = useState('m')
  const [to, setTo] = useState('km')
  const [value, setValue] = useState('')

  useMemo(()=>{
    const keys = Object.keys(converters[category].units)
    setFrom(keys[0])
    setTo(keys[1]||keys[0])
  },[category])

  function compute(){
    const v = parseFloat(value)
    if (isNaN(v)) return ''
    if (category==='length'){
      const m = converters.length.toMeters(v, from)
      return converters.length.fromMeters(m, to)
    }
    if (category==='weight'){
      const kg = converters.weight.toKg(v, from)
      return converters.weight.fromKg(kg, to)
    }
    if (category==='temp'){
      return converters.temp.convert(v, from, to)
    }
    return ''
  }

  const result = compute()

  return (
    <ToolLayout title={title} description={description}>
      <div className="card">
        <label className="block">{getToolTranslation(locale, 'unit-converter', 'form.category')}
          <select className="mt-1 w-full" value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="length">{getTranslation(locale, ['common', 'relatedTools'], 'Length')}</option>
            <option value="weight">{getTranslation(locale, ['common', 'relatedTools'], 'Weight')}</option>
            <option value="temp">{getTranslation(locale, ['common', 'relatedTools'], 'Temperature')}</option>
          </select>
        </label>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label>{getToolTranslation(locale, 'unit-converter', 'form.from')}
              <select className="mt-1 w-full" value={from} onChange={e=>setFrom(e.target.value)}>
                {Object.entries(converters[category].units).map(([k,v])=> (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>{getToolTranslation(locale, 'unit-converter', 'form.to')}
              <select className="mt-1 w-full" value={to} onChange={e=>setTo(e.target.value)}>
                {Object.entries(converters[category].units).map(([k,v])=> (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <label className="block mt-3">{getToolTranslation(locale, 'unit-converter', 'form.value')}
          <input className="mt-1 w-full" value={value} onChange={e=>setValue(e.target.value)} inputMode="decimal" />
        </label>

        <div className="mt-4">
          <div className="font-medium">{getTranslation(locale, ['common', 'result'])}</div>
          <div className="mt-2">
            {value === '' || result === '' ? <div className="muted">{getTranslation(locale, ['common', 'enterValues'])}</div> : (
              <div><strong>{Number(result).toLocaleString(undefined,{maximumFractionDigits:6})}</strong> {converters[category].units[to]}</div>
            )}
          </div>
        </div>
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">{getToolTranslation(locale, 'unit-converter', 'form.whatThisDoes')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'unit-converter', 'form.whatThisDoes')}</p>
        <h4 className="font-semibold mt-4">{getToolTranslation(locale, 'unit-converter', 'form.howToUse')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'unit-converter', 'form.howToUse')}</p>
      </section>

      <FAQ items={[{q:getTranslation(locale, ['common', 'result']), a:getTranslation(locale, ['common', 'enterValues'])}]} />
      <RelatedTools tools={[{slug:'bmi-calculator', title:getToolTranslation(locale, 'bmi-calculator', 'title')}, {slug:'unit-converter', title:title}]} />
    </ToolLayout>
  )
}
