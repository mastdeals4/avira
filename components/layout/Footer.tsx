'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="container-main py-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="PT Avira Perkasa Farma"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3 max-w-sm">
              {t('footer_tagline')}
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              PT Avira Perkasa Farma
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t('footer_quick_links')}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { href: '/', label: t('nav_home') },
                { href: '/about', label: t('nav_about') },
                { href: '/products', label: t('nav_products') },
                { href: '/services', label: t('nav_services') },
                { href: '/contact', label: t('nav_contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t('footer_contact')}
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Rukan Plaza Sunter Terrace, No. C12,<br />
                  Jl. Danau Sunter Utara, Sunter Agung,<br />
                  Tanjung Priok, Jakarta Utara 14350,<br />
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-blue flex-shrink-0" />
                <a href="tel:+6285888600999" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +62 85888600999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:sales@avira.co.id" className="text-sm text-gray-400 hover:text-white transition-colors">
                  sales@avira.co.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-[15px] text-brand-blue text-xs font-semibold flex-shrink-0">W</span>
                <a href="https://www.avira.co.id" className="text-sm text-gray-400 hover:text-white transition-colors">
                  www.avira.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} PT Avira Perkasa Farma. {t('footer_rights')}
          </p>
          <p className="text-xs text-white/45">
            CDOB Certified · No. CDOB5310/S/3-0684/03/2026 · Valid until 18 March 2031
          </p>
        </div>
      </div>
    </footer>
  );
}
