import Link from 'next/link'
import {useRouter} from 'next/router'
import Icon from './icons'
import {defaultLocale, getTranslation} from '../lib/i18n'

export default function ToolCard({slug, title, description}){
  const router = useRouter()
  const locale = router.locale || defaultLocale

  return (
    <Link href={`/tools/${slug}`} locale={locale} className="card block transform transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200">
      <div className="flex items-start gap-4">
        <div className="tool-icon text-2xl text-emerald-700"><Icon name={slug} className="h-6 w-6" /></div>
        <div className="flex-1">
          <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{getTranslation(locale, ['common', 'quickTool'], 'Quick tool')}</div>
          <h3 className="tool-title mt-4">{title}</h3>
          <p className="muted mt-2">{description}</p>
        </div>
      </div>
    </Link>
  )
}
