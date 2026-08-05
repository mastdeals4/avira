import { Link } from 'react-router-dom'
import { FlaskRound, Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--neutral-900)', color: 'var(--neutral-300)', marginTop: 40 }}>
      <div className="container" style={{ padding: '64px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 19, color: '#fff', marginBottom: 16 }}>
              <span style={{
                display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))', color: '#fff',
              }}>
                <FlaskRound size={20} />
              </span>
              NutraBio
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--neutral-400)', maxWidth: 280 }}>
              Specialty ingredients, excipients, herbal extracts and nutraceuticals for the life-sciences industry.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
              <a href="#" aria-label="LinkedIn" style={social}><Globe size={18} /></a>
              <a href="#" aria-label="Twitter" style={social}><Share2 size={18} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 15, marginBottom: 14 }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <li><Link to="/products/specialty-ingredients" style={flink}>Specialty Ingredients</Link></li>
              <li><Link to="/products/excipients" style={flink}>Excipients</Link></li>
              <li><Link to="/products/herbal-extracts" style={flink}>Herbal Extracts</Link></li>
              <li><Link to="/products/nutraceuticals" style={flink}>Nutraceuticals</Link></li>
              <li><Link to="/products/bio-battery" style={flink}>Bio-Battery</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 15, marginBottom: 14 }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <li><Link to="/about" style={flink}>About Us</Link></li>
              <li><Link to="/capabilities" style={flink}>Capabilities</Link></li>
              <li><Link to="/contact" style={flink}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 15, marginBottom: 14 }}>Get in touch</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><MapPin size={16} style={{ marginTop: 3, color: 'var(--primary-400)' }} /> 12 Innovation Drive, Boston, MA</li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Mail size={16} style={{ color: 'var(--primary-400)' }} /> hello@nutrabio.com</li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Phone size={16} style={{ color: 'var(--primary-400)' }} /> +1 (617) 555-0142</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--neutral-800)', marginTop: 40, paddingTop: 24, fontSize: 13, color: 'var(--neutral-500)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span>© {new Date().getFullYear()} NutraBio Sciences. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}

const social: React.CSSProperties = {
  display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: 8,
  background: 'var(--neutral-800)', color: 'var(--neutral-300)', transition: 'all 0.2s',
}
const flink: React.CSSProperties = { color: 'var(--neutral-400)', transition: 'color 0.2s' }
