import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CircleCheck,
  Sparkles,
} from 'lucide-react'
import { categories, capabilities, stats, heroImage, facilityImage } from '../data'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--primary-50), #fff)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', padding: '72px 24px 80px' }}>
          <div className="fade-up">
            <span className="eyebrow"><Sparkles size={15} /> Trusted by 500+ life-science brands</span>
            <h1 style={{ fontSize: 'clamp(34px, 5vw, 54px)', lineHeight: 1.08, marginBottom: 20 }}>
              Specialty ingredients for a <span style={{ color: 'var(--primary-600)' }}>healthier</span> tomorrow
            </h1>
            <p style={{ fontSize: 18, color: 'var(--neutral-600)', maxWidth: 480, marginBottom: 28 }}>
              From precision-engineered actives to standardized botanicals, we supply the building blocks of modern health products — backed by rigorous science.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary">Explore Products <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn btn-outline">Request a Quote</Link>
            </div>
            <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
              {['GMP Certified', 'ISO 9001', 'USP / EP compliant'].map((b) => (
                <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 14, color: 'var(--neutral-600)', fontWeight: 500 }}>
                  <CircleCheck size={16} style={{ color: 'var(--primary-500)' }} /> {b}
                </span>
              ))}
            </div>
          </div>
          <div className="fade-up" style={{ position: 'relative' }}>
            <img src={heroImage} alt="Scientists working in a modern laboratory" style={{ width: '100%', borderRadius: 20, boxShadow: 'var(--shadow-lg)' }} />
            <div style={{
              position: 'absolute', bottom: -22, left: -22, background: '#fff', borderRadius: 16, padding: '18px 22px',
              boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ display: 'grid', placeItems: 'center', width: 46, height: 46, borderRadius: 12, background: 'var(--primary-50)', color: 'var(--primary-600)' }}>
                <CircleCheck size={24} />
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--neutral-900)' }}>99.6%</div>
                <div style={{ fontSize: 13, color: 'var(--neutral-500)' }}>On-time delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <span className="eyebrow">What we supply</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}>Ingredients that power your formulations</h2>
            <p style={{ color: 'var(--neutral-600)', marginTop: 14, fontSize: 17 }}>
              Five core categories, each backed by deep technical expertise and full regulatory documentation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {categories.map((c) => {
              const Icon = c.icon
              return (
                <Link key={c.slug} to={`/products/${c.slug}`} style={cardStyle}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden', borderRadius: '14px 14px 0 0' }}>
                    <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.45))' }} />
                    <span style={{
                      position: 'absolute', top: 14, left: 14, display: 'grid', placeItems: 'center', width: 48, height: 48, borderRadius: 12,
                      background: 'rgba(255,255,255,0.95)', color: 'var(--primary-600)', boxShadow: 'var(--shadow)',
                    }}>
                      <Icon size={24} />
                    </span>
                  </div>
                  <div style={{ padding: '22px 22px 24px' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary-600)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.tagline}</div>
                    <h3 style={{ fontSize: 20, margin: '6px 0 10px' }}>{c.name}</h3>
                    <p style={{ fontSize: 14.5, color: 'var(--neutral-600)', lineHeight: 1.6 }}>{c.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 14, fontWeight: 600, color: 'var(--primary-600)' }}>
                      Learn more <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ background: 'var(--neutral-900)', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, padding: '56px 24px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(34px, 5vw, 44px)', fontWeight: 800, color: 'var(--primary-400)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.value}</div>
              <div style={{ color: 'var(--neutral-400)', marginTop: 6, fontSize: 15 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <span className="eyebrow">Beyond supply</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}>Capabilities that de-risk your project</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} style={{ padding: 28, background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)', transition: 'all 0.2s' }}>
                  <span style={{ display: 'grid', placeItems: 'center', width: 50, height: 50, borderRadius: 12, background: 'var(--primary-50)', color: 'var(--primary-600)', marginBottom: 18 }}>
                    <Icon size={24} />
                  </span>
                  <h3 style={{ fontSize: 18, marginBottom: 8 }}>{cap.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--neutral-600)', lineHeight: 1.6 }}>{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA band with image */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={facilityImage} alt="Manufacturing facility" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'relative', background: 'linear-gradient(90deg, rgba(13,148,136,0.95), rgba(15,118,110,0.88))' }}>
          <div className="container" style={{ padding: '72px 24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18, maxWidth: 640 }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 4vw, 36px)' }}>Let's build your next formulation together</h2>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 17, maxWidth: 520 }}>
              Tell us about your project. Our technical team will help you select the right ingredient, grade and documentation package.
            </p>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--primary-700)', padding: '14px 28px' }}>
              Talk to a specialist <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

const cardStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: 16,
  border: '1px solid var(--border)', overflow: 'hidden', transition: 'all 0.25s',
  boxShadow: 'var(--shadow-sm)',
}
