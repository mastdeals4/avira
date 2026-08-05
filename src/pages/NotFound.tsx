import { Link } from 'react-router-dom'
import { House } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
        <div style={{ fontSize: 'clamp(56px, 10vw, 96px)', fontWeight: 800, color: 'var(--primary-600)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>404</div>
        <h1 style={{ fontSize: 28, margin: '8px 0 12px' }}>Page not found</h1>
        <p style={{ color: 'var(--neutral-600)', marginBottom: 28 }}>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary"><House size={18} /> Back home</Link>
      </div>
    </section>
  )
}
