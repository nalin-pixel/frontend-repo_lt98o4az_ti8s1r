import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-orange-600' : 'text-slate-600 hover:text-orange-600'
        }`
      }
      end
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-orange-500" />
            <span className="font-semibold text-slate-900">Stanislas VMBO Mavo Delft</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/groep-8">Voor groep 8</NavItem>
            <NavItem to="/ouders">Voor ouders</NavItem>
            <NavItem to="/onderwijs">Onderwijs</NavItem>
            <NavItem to="/profielen">Praktijk & Profielen</NavItem>
            <NavItem to="/bezoek-ons">Bezoek ons</NavItem>
            <NavItem to="/over-ons">Over ons</NavItem>
            <NavItem to="/contact">Contact & Aanmelden</NavItem>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 grid gap-2">
            <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
            <NavItem to="/groep-8" onClick={() => setOpen(false)}>Voor groep 8</NavItem>
            <NavItem to="/ouders" onClick={() => setOpen(false)}>Voor ouders</NavItem>
            <NavItem to="/onderwijs" onClick={() => setOpen(false)}>Onderwijs</NavItem>
            <NavItem to="/profielen" onClick={() => setOpen(false)}>Praktijk & Profielen</NavItem>
            <NavItem to="/bezoek-ons" onClick={() => setOpen(false)}>Bezoek ons</NavItem>
            <NavItem to="/over-ons" onClick={() => setOpen(false)}>Over ons</NavItem>
            <NavItem to="/contact" onClick={() => setOpen(false)}>Contact & Aanmelden</NavItem>
          </div>
        </div>
      )}
    </header>
  )
}
