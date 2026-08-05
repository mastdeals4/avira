import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../data'

export default function Products() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
          <span className="eyebrow">Our catalog</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 42px)' }}>Product categories</h1>
          <p style={{ color: 'var(--neutral-600)', marginTop: 14, fontSize: 17 }}>
            Explore our five ingredient categories. Each comes with full documentation, COA and regulatory support.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 26 }}>
          {categories.map((c) => {
            const Icon = c.icon
            return (
              <Link key={c.slug} to={`/products/${c.slug}`} style={cardStyle}>
                <div style={{ position: 'relative', height: 200, overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                  <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.4))' }} />
                  <span style={{
                    position: 'absolute', bottom: 14, left: 14, display: 'grid', placeItems: 'center', width: 52, height: 52, borderRadius: 14,
                    background: 'rgba(255,255,255,0.95)', color: 'var(--primary-600)', boxShadow: 'var(--shadow)',
                  }}>
                    <Icon size={26} />
                  </span>
                </div>
                <div style={{ padding: '24px 24px 26px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary-600)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.tagline}</div>
                  <h2 style={{ fontSize: 21, margin: '6px 0 10px' }}>{c.name}</h2>
                  <p style={{ fontSize: 14.5, color: 'var(--neutral-600)', lineHeight: 1.6 }}>{c.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 14, fontWeight: 600, color: 'var(--primary-600)' }}>
                    View details <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const cardStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: 16,
  border: '1px solid var(--border)', overflow: 'hidden', transition: 'all 0.25s', boxShadow: 'var(--shadow-sm)',
}
