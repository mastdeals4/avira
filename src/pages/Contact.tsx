import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CircleCheck } from 'lucide-react'
import { categories } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
          <span className="eyebrow">Get in touch</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 42px)' }}>Let's talk about your project</h1>
          <p style={{ color: 'var(--neutral-600)', marginTop: 14, fontSize: 17 }}>
            Tell us what you're formulating and our technical team will respond within one business day.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 40, alignItems: 'start' }}>
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: MapPin, title: 'Visit us', lines: ['12 Innovation Drive', 'Boston, MA 02115'] },
              { icon: Mail, title: 'Email us', lines: ['hello@nutrabio.com', 'sales@nutrabio.com'] },
              { icon: Phone, title: 'Call us', lines: ['+1 (617) 555-0142', 'Mon–Fri, 9am–6pm ET'] },
            ].map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} style={{ padding: 24, background: 'var(--surface)', borderRadius: 14, border: '1px solid var(--border)' }}>
                  <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 12, background: 'var(--primary-50)', color: 'var(--primary-600)', marginBottom: 14 }}>
                    <Icon size={22} />
                  </span>
                  <h3 style={{ fontSize: 16, marginBottom: 6 }}>{b.title}</h3>
                  {b.lines.map((l) => <div key={l} style={{ fontSize: 14.5, color: 'var(--neutral-600)' }}>{l}</div>)}
                </div>
              )
            })}
          </div>

          {/* Form */}
          <div style={{ padding: 32, background: '#fff', borderRadius: 16, border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <span style={{ display: 'inline-grid', placeItems: 'center', width: 64, height: 64, borderRadius: 18, background: 'var(--primary-50)', color: 'var(--primary-600)', marginBottom: 18 }}>
                  <CircleCheck size={32} />
                </span>
                <h3 style={{ fontSize: 22, marginBottom: 8 }}>Thank you!</h3>
                <p style={{ color: 'var(--neutral-600)' }}>Your message has been sent. Our team will respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'grid', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field label="First name"><input style={input} placeholder="Jane" required /></Field>
                  <Field label="Last name"><input style={input} placeholder="Doe" required /></Field>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field label="Work email"><input style={input} type="email" placeholder="jane@company.com" required /></Field>
                  <Field label="Company"><input style={input} placeholder="Acme Pharma" required /></Field>
                </div>
                <Field label="Product of interest">
                  <select style={input} defaultValue="">
                    <option value="" disabled>Select a category…</option>
                    {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                    <option value="other">Other / not sure yet</option>
                  </select>
                </Field>
                <Field label="Message">
                  <textarea style={{ ...input, minHeight: 120, resize: 'vertical' }} placeholder="Tell us about your formulation, volumes and timeline…" required />
                </Field>
                <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start', padding: '14px 28px' }}>
                  Send message <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--neutral-700)' }}>{label}</span>
      {children}
    </label>
  )
}

const input: React.CSSProperties = {
  padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--border)',
  fontSize: 15, fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s',
  background: 'var(--surface)',
}
