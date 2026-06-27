import Head from 'next/head'
import {useRouter} from 'next/router'
import {defaultLocale, getTranslation, getPageTitle} from '../lib/i18n'

export default function About(){
  const router = useRouter()
  const locale = router.locale || defaultLocale

  return (
    <>
      <Head>
        <title>{getPageTitle(locale, 'about')}</title>
        <meta name="description" content={getTranslation(locale, ['about', 'description'])} />
      </Head>
      <section>
        <h1 className="text-2xl font-bold">{getTranslation(locale, ['about', 'title'])}</h1>
        <p className="muted mt-2">{getTranslation(locale, ['about', 'description'])}</p>
      </section>
    </>
  )
}
