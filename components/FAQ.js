export default function FAQ({items}){
  return (
    <section className="mt-6">
      <h4 className="text-lg font-semibold">FAQ</h4>
      <div className="mt-3 space-y-3">
        {items.map((it, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded">
            <div className="font-medium">{it.q}</div>
            <div className="muted mt-1">{it.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
