import Link from 'next/link'
import Icon from './icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100/60 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="inline-flex items-center gap-3 text-xl font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200">
            <Icon name="bmi-calculator" className="h-5 w-5 text-emerald-700" />
          </span>
          <span>Utility Hub</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/tools/bmi-calculator" className="link-accent">Tools</Link>
          <Link href="/about" className="link-accent">About</Link>
          <Link href="/contact" className="link-accent">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
