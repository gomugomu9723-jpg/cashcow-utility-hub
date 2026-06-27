import ToolLayout from '../../components/ToolLayout'
import FAQ from '../../components/FAQ'
import RelatedTools from '../../components/RelatedTools'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {getQueryLocale, getToolTranslation, getTranslation} from '../../lib/i18n'
// QR code library is imported dynamically to avoid build-time server issues

export default function QRGenerator(){
  const router = useRouter()
  const locale = getQueryLocale(router)
  const title = getToolTranslation(locale, 'qr-code-generator', 'title')
  const description = getToolTranslation(locale, 'qr-code-generator', 'description')
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
    <ToolLayout title={title} description={description}>
      <form onSubmit={generate} className="card">
        <label>{getToolTranslation(locale, 'qr-code-generator', 'form.text')}
          <input className="mt-1 w-full" value={text} onChange={e=>setText(e.target.value)} />
        </label>
        <label className="block mt-3">{getToolTranslation(locale, 'qr-code-generator', 'form.size')}
          <input className="mt-1 w-full" value={size} onChange={e=>setSize(e.target.value)} inputMode="numeric" />
        </label>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">{getToolTranslation(locale, 'qr-code-generator', 'form.generate')}</button>
        </div>
      </form>

      <div className="mt-4 card">
        <h4 className="font-semibold">{getTranslation(locale, ['common', 'result'])}</h4>
        <div className="mt-2">
          {src ? <img src={src} alt="QR code" /> : <div className="muted">{getTranslation(locale, ['common', 'enterValues'])}</div>}
        </div>
        {src && <a className="inline-block mt-3 text-sm text-blue-600" href={src} download="qrcode.png">{getToolTranslation(locale, 'qr-code-generator', 'form.download')}</a>}
      </div>

      <section className="mt-6">
        <h4 className="font-semibold">{getToolTranslation(locale, 'qr-code-generator', 'form.whatThisDoes')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'qr-code-generator', 'form.whatThisDoes')}</p>
        <h4 className="font-semibold mt-4">{getToolTranslation(locale, 'qr-code-generator', 'form.howToUse')}</h4>
        <p className="muted mt-1">{getToolTranslation(locale, 'qr-code-generator', 'form.howToUse')}</p>
      </section>

      <FAQ items={[{q:getTranslation(locale, ['common', 'result']), a:getTranslation(locale, ['common', 'enterValues'])}]} />
      <RelatedTools tools={[{slug:'qr-code-generator', title:title}, {slug:'unit-converter', title:getToolTranslation(locale, 'unit-converter', 'title')}]} />
    </ToolLayout>
  )
}
