'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const WHATSAPP_URL = 'https://wa.me/6285888600999';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/about', label: t('nav_about') },
    { href: '/products', label: t('nav_products') },
    { href: '/services', label: t('nav_services') },
    { href: '/contact', label: t('nav_contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-[0_1px_20px_rgba(12,35,64,0.10)] border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo.png" alt="PT Avira Perkasa Farma" className="h-9 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13.5px] font-medium transition-colors duration-150 ${
                  isActive(link.href) ? 'text-brand-navy' : 'text-gray-500 hover:text-brand-navy'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-green rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <div className="flex items-center rounded-md overflow-hidden border border-gray-200 text-[11px] font-semibold">
              <button
                onClick={() => setLang('id')}
                className={`px-3 py-1.5 transition-colors ${lang === 'id' ? 'bg-brand-navy text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >ID</button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-brand-navy text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >EN</button>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-brand-green hover:bg-brand-green-dark text-white px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MessageCircle size={14} strokeWidth={2} />
              WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-brand-navy transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-main py-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-navy bg-brand-green-light border-l-2 border-brand-green'
                    : 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-3 pt-4 pb-3 mt-2 border-t border-gray-100">
              <div className="flex items-center rounded-md overflow-hidden border border-gray-200 text-xs font-semibold">
                <button
                  onClick={() => setLang('id')}
                  className={`px-3 py-1.5 transition-colors ${lang === 'id' ? 'bg-brand-navy text-white' : 'text-gray-500'}`}
                >ID</button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-brand-navy text-white' : 'text-gray-500'}`}
                >EN</button>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-brand-green text-white px-4 py-1.5 rounded-lg text-sm font-semibold"
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
