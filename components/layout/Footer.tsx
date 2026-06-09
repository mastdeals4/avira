'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="container-main pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1.4fr] gap-10">
          <div>
            <img src="/logo.png" alt="PT Avira Perkasa Farma" className="h-10 w-auto object-contain brightness-0 invert mb-5" />
            <p className="text-[13.5px] text-gray-400 leading-relaxed mb-4 max-w-sm">{t('footer_tagline')}</p>
            <div className="inline-flex items-center gap-2 border border-brand-green/40 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
              <span className="text-[11px] text-brand-green font-semibold tracking-wide uppercase">CDOB Certified</span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold mb-5 uppercase tracking-[0.12em]">{t('footer_quick_links')}</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: t('nav_home') },
                { href: '/about', label: t('nav_about') },
                { href: '/products', label: t('nav_products') },
                { href: '/services', label: t('nav_services') },
                { href: '/contact', label: t('nav_contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-gray-400 hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold mb-5 uppercase tracking-[0.12em]">{t('footer_contact')}</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-[13px] text-gray-400 leading-relaxed">
                  Rukan Plaza Sunter Terrace, No. C12,<br />
                  Jl. Danau Sunter Utara, Sunter Agung,<br />
                  Tanjung Priok, Jakarta Utara 14350
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-brand-green flex-shrink-0" />
                <a href="tel:+6285888600999" className="text-[13px] text-gray-400 hover:text-white transition-colors">+62 85888600999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-brand-green flex-shrink-0" />
                <a href="mailto:sales@avira.co.id" className="text-[13px] text-gray-400 hover:text-white transition-colors">sales@avira.co.id</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={14} className="text-brand-green flex-shrink-0" />
                <a href="https://www.avira.co.id" target="_blank" rel="noopener noreferrer" className="text-[13px] text-gray-400 hover:text-white transition-colors">www.avira.co.id</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-white/45">© {new Date().getFullYear()} PT Avira Perkasa Farma. {t('footer_rights')}</p>
          <p className="text-[12px] text-white/35">CDOB No. CDOB5310/S/3-0684/03/2026 · Valid until 18 March 2031</p>
        </div>
      </div>
    </footer>
  );
}
