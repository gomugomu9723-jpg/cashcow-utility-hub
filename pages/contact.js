import Head from 'next/head'
import {useRouter} from 'next/router'
import {getQueryLocale, getTranslation, getPageTitle} from '../lib/i18n'

export default function Contact(){
  const router = useRouter()
  const locale = getQueryLocale(router)

  return (
    <>
      <Head>
        <title>{getPageTitle(locale, 'contact')}</title>
        <meta name="description" content={getTranslation(locale, ['contact', 'description'])} />
      </Head>
      <section>
        <h1 className="text-2xl font-bold">{getTranslation(locale, ['contact', 'title'])}</h1>
        <p className="muted mt-2">{getTranslation(locale, ['contact', 'description'])}</p>
        <p className="mt-4">
          {getTranslation(locale, ['common', 'email'])}: <a href={`mailto:${getTranslation(locale, ['contact', 'email'])}`} className="underline">{getTranslation(locale, ['contact', 'email'])}</a>
        </p>
      </section>
    </>
  )
}
