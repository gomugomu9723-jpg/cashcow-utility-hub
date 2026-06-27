import Head from 'next/head'

export default function Privacy(){
  return (
    <>
      <Head>
        <title>Privacy Policy — Utility Hub</title>
        <meta name="description" content="Privacy policy for Utility Hub — static browser tools, no tracking by default." />
      </Head>
      <section>
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p className="muted mt-2">This site is static and uses client-side code only. No user data is collected or stored by default.</p>
        <p className="mt-2">If third-party services (analytics, ads) are added later, they will be disclosed here.</p>
      </section>
    </>
  )
}
