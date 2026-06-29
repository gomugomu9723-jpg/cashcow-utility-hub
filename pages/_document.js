import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const locale = this.props.__NEXT_DATA__?.query?.lang
    const htmlLang = ['ko', 'en', 'ja', 'zh', 'es', 'fr'].includes(locale) ? locale : 'ko'

    return (
      <Html lang={htmlLang}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:site_name" content="Utility Hub" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
