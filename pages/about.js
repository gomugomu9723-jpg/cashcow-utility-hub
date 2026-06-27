import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head>
        <title>About — Utility Hub</title>
        <meta name="description" content="About Utility Hub — small browser-based tools." />
      </Head>
      <section>
        <h1 className="text-2xl font-bold">About</h1>
        <p className="muted mt-2">Utility Hub provides simple client-side tools with no servers or tracking. Designed for performance and privacy.</p>
      </section>
    </>
  )
}
