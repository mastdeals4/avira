import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, FlaskRound } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 19, color: 'var(--neutral-900)' }}>
          <span style={{
            display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))', color: '#fff',
          }}>
            <FlaskRound size={20} />
          </span>
          <span>NutraBio<span style={{ color: 'var(--primary-600)' }}>Sciences</span></span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              style={({ isActive }) => ({
                padding: '8px 14px', borderRadius: 8, fontSize: 15, fontWeight: 500,
                color: isActive ? 'var(--primary-700)' : 'var(--neutral-600)',
                background: isActive ? 'var(--primary-50)' : 'transparent',
                transition: 'all 0.2s',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginLeft: 8, padding: '10px 20px' }}>
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none' }}
          className="mobile-toggle"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="container" style={{ paddingBottom: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} style={({ isActive }) => ({
              padding: '12px 8px', fontWeight: 500, color: isActive ? 'var(--primary-700)' : 'var(--neutral-700)',
              borderBottom: '1px solid var(--neutral-100)',
            })}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
