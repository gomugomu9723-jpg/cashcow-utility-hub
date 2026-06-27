import Head from 'next/head'
import {useRouter} from 'next/router'
import {defaultLocale, getTranslation, getPageTitle} from '../lib/i18n'

export default function Privacy(){
  const router = useRouter()
  const locale = router.locale || defaultLocale

  return (
    <>
      <Head>
        <title>{getPageTitle(locale, 'privacy')}</title>
        <meta name="description" content={getTranslation(locale, ['privacy', 'description'])} />
      </Head>
      <section>
        <h1 className="text-2xl font-bold">{getTranslation(locale, ['privacy', 'title'])}</h1>
        <p className="muted mt-2">{getTranslation(locale, ['privacy', 'description'])}</p>
        <p className="mt-2">{getTranslation(locale, ['privacy', 'additional'])}</p>
      </section>
    </>
  )
}
