export default function Footer(){
  return (
    <footer className="mt-14">
      <div className="container rounded-[32px] bg-slate-950/95 border border-slate-200/20 px-6 py-8 text-sm text-slate-300 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.65)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Utility Hub — Simple browser tools.</div>
          <div className="space-x-3">
            <a href="/privacy-policy" className="underline decoration-emerald-400 decoration-2 underline-offset-4">Privacy Policy</a>
            <a href="/terms" className="underline decoration-emerald-400 decoration-2 underline-offset-4">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
