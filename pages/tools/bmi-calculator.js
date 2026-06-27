import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useState} from 'react'

export default function BMI(){
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState(null)

  function calculate(e){
    e.preventDefault()
    const w = parseFloat(weight)
    const h = parseFloat(height) / 100
    if (!w || !h) return
    const bmi = w / (h*h)
    let cat = 'Unknown'
    if (bmi < 18.5) cat = 'Underweight'
    else if (bmi < 25) cat = 'Normal'
    else if (bmi < 30) cat = 'Overweight'
    else cat = 'Obese'
    setResult({bmi: bmi.toFixed(1), category: cat})
  }

  return (
    <ToolLayout title="BMI Calculator" description="Calculate Body Mass Index (BMI) quickly in the browser">
      <form onSubmit={calculate} className="card">
        <label className="block">Weight (kg)
          <input className="mt-1 w-full" value={weight} onChange={e=>setWeight(e.target.value)} inputMode="decimal" />
        </label>
        <label className="block mt-3">Height (cm)
          <input className="mt-1 w-full" value={height} onChange={e=>setHeight(e.target.value)} inputMode="decimal" />
        </label>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Calculate</button>
        </div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">Result</h4>
        {result ? (
          <div className="mt-2">
            <div>BMI: <strong>{result.bmi}</strong></div>
            <div>Category: <strong>{result.category}</strong></div>
          </div>
        ) : <div className="muted mt-2">Enter values and press Calculate.</div>}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">What this does</h4>
        <p className="muted mt-1">Computes BMI = weight (kg) / (height (m))^2. For adults only; consult professionals for health advice.</p>
        <h4 className="font-semibold mt-4">How to use</h4>
        <p className="muted mt-1">Enter weight in kilograms and height in centimeters, then press Calculate.</p>
      </section>

      <FAQ items={[{q:'Is BMI accurate?', a:'BMI is a rough indicator and does not account for muscle mass.'}]} />

      <RelatedTools tools={[{slug:'unit-converter', title:'Unit Converter'}]} />
    </ToolLayout>
  )
}
