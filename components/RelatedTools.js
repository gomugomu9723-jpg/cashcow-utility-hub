import Link from 'next/link'

export default function RelatedTools({tools}){
  return (
    <aside className="mt-6">
      <h4 className="text-sm font-semibold">Related tools</h4>
      <div className="mt-2 space-y-2">
        {tools.map(t => (
          <div key={t.slug}>
            <Link href={`/tools/${t.slug}`} className="text-blue-600">{t.title}</Link>
          </div>
        ))}
      </div>
    </aside>
  )
}
