import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'
import { stats, values, aboutHeroImage, facilityImage, labImage, teamImage } from '../data'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={aboutHeroImage} alt="Our team" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'relative', background: 'linear-gradient(90deg, rgba(15,23,42,0.82), rgba(15,23,42,0.55))' }}>
          <div className="container" style={{ padding: '120px 24px 100px', maxWidth: 680 }}>
            <span className="eyebrow" style={{ color: 'var(--primary-300)' }}>About NutraBio Sciences</span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(34px, 5vw, 50px)', lineHeight: 1.1 }}>
              Twenty-five years of <span style={{ color: 'var(--primary-300)' }}>ingredient science</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, marginTop: 18, maxWidth: 520 }}>
              We are a team of chemists, botanists and engineers dedicated to supplying the highest-quality ingredients to the global life-sciences industry.
            </p>
          </div>
        </div>
      </section>

      {/* Story with image */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>From a single lab to a global supplier</h2>
            <p style={{ color: 'var(--neutral-600)', fontSize: 16.5, marginTop: 16, lineHeight: 1.75 }}>
              Founded in 2001 by a group of pharmaceutical chemists, NutraBio Sciences began with a simple conviction: that quality ingredients are the foundation of every effective health product. What started as a single analytical laboratory in Boston has grown into a global supplier serving over 40 countries.
            </p>
            <p style={{ color: 'var(--neutral-600)', fontSize: 16.5, marginTop: 14, lineHeight: 1.75 }}>
              Today we operate three manufacturing sites, two R&D centers, and a regulatory affairs team that has supported more than 300 product launches. But our philosophy has never changed — science first, quality always.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={labImage} alt="Research laboratory" style={{ borderRadius: 20, boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section style={{ background: 'var(--surface)' }} className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 56 }}>
            {[
              { icon: Target, title: 'Our Mission', text: 'To advance human health by supplying ingredients of uncompromising purity, backed by transparent science.' },
              { icon: Eye, title: 'Our Vision', text: 'A world where every health product is built on ingredients people can trust completely.' },
              { icon: Heart, title: 'Our Promise', text: 'Full traceability, honest documentation and a partnership that extends beyond the invoice.' },
            ].map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} style={{ background: '#fff', padding: 30, borderRadius: 16, border: '1px solid var(--border)' }}>
                  <span style={{ display: 'grid', placeItems: 'center', width: 52, height: 52, borderRadius: 14, background: 'var(--primary-50)', color: 'var(--primary-600)', marginBottom: 18 }}>
                    <Icon size={26} />
                  </span>
                  <h3 style={{ fontSize: 19, marginBottom: 8 }}>{b.title}</h3>
                  <p style={{ color: 'var(--neutral-600)', fontSize: 15, lineHeight: 1.65 }}>{b.text}</p>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 44px' }}>
            <span className="eyebrow">What we stand for</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>Our core values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} style={{ textAlign: 'center', padding: 28 }}>
                  <span style={{ display: 'inline-grid', placeItems: 'center', width: 56, height: 56, borderRadius: 16, background: 'var(--primary-600)', color: '#fff', marginBottom: 16 }}>
                    <Icon size={26} />
                  </span>
                  <h3 style={{ fontSize: 18, marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ color: 'var(--neutral-600)', fontSize: 15, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(34px, 5vw, 44px)', fontWeight: 800, color: 'var(--primary-600)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.value}</div>
              <div style={{ color: 'var(--neutral-500)', marginTop: 6, fontSize: 15 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility image band */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={facilityImage} alt="Our manufacturing facility" style={{ width: '100%', height: 420, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(15,23,42,0.6))', display: 'flex', alignItems: 'flex-end' }}>
          <div className="container" style={{ paddingBottom: 40 }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 34px)' }}>Three manufacturing sites. One standard.</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: 10, maxWidth: 520 }}>
              Every facility operates under the same GMP-aligned quality system, audited annually.
            </p>
          </div>
        </div>
      </section>

      {/* Team strip */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <img src={teamImage} alt="Our team" style={{ borderRadius: 20, boxShadow: 'var(--shadow-lg)' }} />
          <div>
            <span className="eyebrow">Our people</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>Scientists who answer the phone</h2>
            <p style={{ color: 'var(--neutral-600)', fontSize: 16.5, marginTop: 16, lineHeight: 1.75 }}>
              When you call NutraBio, you don't reach a sales script — you reach a PhD chemist or a formulation engineer who understands your challenge. Our technical support team has an average of 12 years of industry experience.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Meet the team <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
