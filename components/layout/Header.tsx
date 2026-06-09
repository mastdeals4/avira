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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
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
        isScrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/logo.png"
              alt="PT Avira Perkasa Farma"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-brand-green font-semibold'
                    : 'text-gray-600 hover:text-brand-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 border border-gray-200 rounded overflow-hidden text-xs font-medium">
              <button
                onClick={() => setLang('id')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'id' ? 'bg-brand-green text-white' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'en' ? 'bg-brand-green text-white' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-4 py-1.5 rounded text-sm font-medium transition-colors duration-200"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-green bg-brand-green-light font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-gray-100">
              <div className="flex items-center gap-1 border border-gray-200 rounded overflow-hidden text-xs font-medium">
                <button
                  onClick={() => setLang('id')}
                  className={`px-3 py-1.5 transition-colors ${
                    lang === 'id' ? 'bg-brand-green text-white' : 'text-gray-500'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 transition-colors ${
                    lang === 'en' ? 'bg-brand-green text-white' : 'text-gray-500'
                  }`}
                >
                  EN
                </button>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-brand-green text-brand-green px-4 py-1.5 rounded text-sm font-medium"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
