import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useState} from 'react'
// QR code library is imported dynamically to avoid build-time server issues

export default function QRGenerator(){
  const [text, setText] = useState('')
  const [size, setSize] = useState(200)
  const [src, setSrc] = useState('')

  async function generate(e){
    e && e.preventDefault()
    try{
      const QRCode = (await import('qrcode')).default
      const dataUrl = await QRCode.toDataURL(text || ' ' , {width: parseInt(size,10)||200})
      setSrc(dataUrl)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <ToolLayout title="QR Code Generator" description="Create QR codes directly in your browser">
      <form onSubmit={generate} className="card">
        <label>Text or URL
          <input className="mt-1 w-full" value={text} onChange={e=>setText(e.target.value)} />
        </label>
        <label className="block mt-3">Size (px)
          <input className="mt-1 w-full" value={size} onChange={e=>setSize(e.target.value)} inputMode="numeric" />
        </label>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Generate</button>
        </div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">Result</h4>
        <div className="mt-2">
          {src ? <img src={src} alt="QR code" /> : <div className="muted">Generated QR will appear here.</div>}
        </div>
        {src && <a className="inline-block mt-3 text-sm text-blue-600" href={src} download="qrcode.png">Download PNG</a>}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">What this does</h4>
        <p className="muted mt-1">Encodes text or URLs into a QR code image entirely in the browser — no data leaves the page.</p>
        <h4 className="font-semibold mt-4">How to use</h4>
        <p className="muted mt-1">Enter text or a link, optionally set pixel size, then click Generate. Use the download link to save a PNG.</p>
      </section>

      <FAQ items={[{q:'Is my text sent to a server?', a:'No — the QR code is generated locally in your browser.'}]} />
      <RelatedTools tools={[{slug:'qr-code-generator', title:'QR Code Generator'}, {slug:'unit-converter', title:'Unit Converter'}]} />
    </ToolLayout>
  )
}
