import Head from 'next/head'
import {useRouter} from 'next/router'
import {defaultLocale, getTranslation, getPageTitle} from '../lib/i18n'

export default function Terms(){
  const router = useRouter()
  const locale = router.locale || defaultLocale

  return (
    <>
      <Head>
        <title>{getPageTitle(locale, 'terms')}</title>
        <meta name="description" content={getTranslation(locale, ['terms', 'description'])} />
      </Head>
      <section>
        <h1 className="text-2xl font-bold">{getTranslation(locale, ['terms', 'title'])}</h1>
        <p className="muted mt-2">{getTranslation(locale, ['terms', 'description'])}</p>
      </section>
    </>
  )
}
