import Head from 'next/head'

export default function Contact(){
  return (
    <>
      <Head>
        <title>Contact — Utility Hub</title>
        <meta name="description" content="Contact Utility Hub for support or questions." />
      </Head>
      <section>
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="muted mt-2">This is a static site. For inquiries, add a mailto link or external form integration.</p>
        <p className="mt-4">Email: <a href="mailto:contact@example.com" className="underline">contact@example.com</a></p>
      </section>
    </>
  )
}
