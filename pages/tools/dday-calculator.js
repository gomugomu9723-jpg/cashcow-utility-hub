import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useState} from 'react'

export default function DDay(){
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
    <ToolLayout title="D-Day Calculator" description="Count days until or since a date">
      <form onSubmit={compute} className="card">
        <label>Select date
          <input type="date" className="mt-1 w-full" value={date} onChange={e=>setDate(e.target.value)} />
        </label>
        <div className="mt-4"><button className="px-4 py-2 bg-blue-600 text-white rounded">Compute</button></div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">Result</h4>
        {result === null ? <div className="muted mt-2">Select a date and compute.</div> : (
          <div className="mt-2">{result >= 0 ? <span>{result} days until target.</span> : <span>{Math.abs(result)} days since target.</span>}</div>
        )}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">How to use</h4>
        <p className="muted mt-1">Pick the date you want to count to/from and press Compute.</p>
      </section>

      <FAQ items={[{q:'Timezone differences?', a:'Results are based on local browser time.'}]} />
      <RelatedTools tools={[{slug:'dday-calculator', title:'D-Day Calculator'}]} />
    </ToolLayout>
  )
}
