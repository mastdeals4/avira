import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { capabilities, labImage, qcImage } from '../data'

export default function Capabilities() {
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={labImage} alt="Laboratory" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'relative', background: 'linear-gradient(90deg, rgba(15,23,42,0.82), rgba(15,23,42,0.5))' }}>
          <div className="container" style={{ padding: '110px 24px 90px', maxWidth: 680 }}>
            <span className="eyebrow" style={{ color: 'var(--primary-300)' }}>What we do</span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 46px)' }}>Capabilities that go beyond supply</h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, marginTop: 16, maxWidth: 500 }}>
              Custom synthesis, analytical R&D, regulatory support and global logistics — all under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} style={{ padding: 30, background: '#fff', borderRadius: 16, border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ display: 'grid', placeItems: 'center', width: 54, height: 54, borderRadius: 14, background: 'var(--primary-50)', color: 'var(--primary-600)', marginBottom: 18 }}>
                    <Icon size={26} />
                  </span>
                  <h3 style={{ fontSize: 19, marginBottom: 8 }}>{cap.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--neutral-600)', lineHeight: 1.65 }}>{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface)' }} className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <img src={qcImage} alt="Quality control" style={{ borderRadius: 20, boxShadow: 'var(--shadow-lg)' }} />
          <div>
            <span className="eyebrow">Quality control</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)' }}>Every batch, verified</h2>
            <p style={{ color: 'var(--neutral-600)', fontSize: 16.5, marginTop: 14, lineHeight: 1.75 }}>
              Our QC labs run identity, assay, impurity and microbiological testing on every batch before release. Results are documented in a full COA and archived for ten years.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 22 }}>Request documentation <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
