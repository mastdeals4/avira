import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CircleCheck, FileText, Download } from 'lucide-react'
import { categories } from '../data'

export default function ProductDetail() {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)
  if (!category) return <Navigate to="/products" replace />
  const Icon = category.icon

  return (
    <>
      <section style={{ background: 'linear-gradient(180deg, var(--primary-50), #fff)', padding: '56px 0 48px' }}>
        <div className="container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 500, color: 'var(--neutral-600)', marginBottom: 24 }}>
            <ArrowLeft size={16} /> All products
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-grid', placeItems: 'center', width: 64, height: 64, borderRadius: 18, background: 'var(--primary-600)', color: '#fff', marginBottom: 20 }}>
                <Icon size={32} />
              </span>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary-600)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category.tagline}</div>
              <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '6px 0 16px' }}>{category.name}</h1>
              <p style={{ fontSize: 17, color: 'var(--neutral-600)', lineHeight: 1.7, maxWidth: 480 }}>{category.description}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                <a href="#" className="btn btn-outline"><Download size={17} /> Datasheet</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src={category.image} alt={category.name} style={{ width: '100%', borderRadius: 20, boxShadow: 'var(--shadow-lg)' }} />
              <span style={{
                position: 'absolute', top: 18, right: 18, display: 'grid', placeItems: 'center', width: 56, height: 56, borderRadius: 14,
                background: 'rgba(255,255,255,0.95)', color: 'var(--primary-600)', boxShadow: 'var(--shadow)',
              }}>
                <Icon size={28} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <span className="eyebrow">Key highlights</span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)' }}>Why choose our {category.name.toLowerCase()}</h2>
            <ul style={{ listStyle: 'none', marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {category.highlights.map((h) => (
                <li key={h} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16 }}>
                  <CircleCheck size={22} style={{ color: 'var(--primary-500)', flexShrink: 0 }} /> {h}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--surface)', borderRadius: 16, padding: 30, border: '1px solid var(--border)' }}>
            <span style={{ display: 'grid', placeItems: 'center', width: 50, height: 50, borderRadius: 12, background: 'var(--primary-50)', color: 'var(--primary-600)', marginBottom: 18 }}>
              <FileText size={24} />
            </span>
            <h3 style={{ fontSize: 19, marginBottom: 10 }}>Documentation included</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: 'var(--neutral-600)' }}>
              <li>• Certificate of Analysis (COA)</li>
              <li>• Safety Data Sheet (SDS)</li>
              <li>• Allergen & residual solvent statement</li>
              <li>• Regulatory dossier on request</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
