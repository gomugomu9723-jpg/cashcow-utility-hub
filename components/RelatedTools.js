import Link from 'next/link'
import {useRouter} from 'next/router'
import {getLocalizedHref, getQueryLocale, getTranslation} from '../lib/i18n'

export default function RelatedTools({tools}){
  const router = useRouter()
  const locale = getQueryLocale(router)

  return (
    <aside className="mt-6">
      <h4 className="text-sm font-semibold">{getTranslation(locale, ['common', 'relatedTools'], 'Related tools')}</h4>
      <div className="mt-2 space-y-2">
        {tools.map(t => (
          <div key={t.slug}>
            <Link href={getLocalizedHref(`/tools/${t.slug}`, locale)} className="text-blue-600">{t.title}</Link>
          </div>
        ))}
      </div>
    </aside>
  )
}
