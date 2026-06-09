'use client';

import Link from 'next/link';
import { Atom, TestTube as TestTube2, Sprout, Pill, Microscope, Droplets, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const categories = [
  { icon: Atom, labelKey: 'cat_api' as const, descKey: 'cat_api_desc' as const, href: '/products?category=API', bg: 'bg-brand-navy/5', iconColor: 'text-brand-navy', hoverBorder: 'hover:border-brand-navy/25', dot: 'bg-brand-navy' },
  { icon: TestTube2, labelKey: 'cat_excipients' as const, descKey: 'cat_excipients_desc' as const, href: '/products?category=Excipient', bg: 'bg-brand-blue/6', iconColor: 'text-brand-blue', hoverBorder: 'hover:border-brand-blue/30', dot: 'bg-brand-blue' },
  { icon: Sprout, labelKey: 'cat_herbal' as const, descKey: 'cat_herbal_desc' as const, href: '/products?category=Herbal+Extract', bg: 'bg-brand-green/6', iconColor: 'text-brand-green-dark', hoverBorder: 'hover:border-brand-green/30', dot: 'bg-brand-green' },
  { icon: Pill, labelKey: 'cat_nutra' as const, descKey: 'cat_nutra_desc' as const, href: '/products?category=Nutraceutical', bg: 'bg-brand-navy/5', iconColor: 'text-brand-navy', hoverBorder: 'hover:border-brand-navy/25', dot: 'bg-brand-navy' },
  { icon: Microscope, labelKey: 'cat_probiotic' as const, descKey: 'cat_probiotic_desc' as const, href: '/products?category=Probiotic', bg: 'bg-brand-blue/6', iconColor: 'text-brand-blue', hoverBorder: 'hover:border-brand-blue/30', dot: 'bg-brand-blue' },
  { icon: Droplets, labelKey: 'cat_oils' as const, descKey: 'cat_oils_desc' as const, href: '/products?category=Refined+Oil', bg: 'bg-brand-green/6', iconColor: 'text-brand-green-dark', hoverBorder: 'hover:border-brand-green/30', dot: 'bg-brand-green' },
];

export default function CategoriesSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-14 lg:py-18 bg-white">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="section-label">{lang === 'id' ? 'Rangkaian Produk' : 'Product Range'}</p>
            <div className="section-divider" />
            <h2 className="section-title">{t('categories_title')}</h2>
            <p className="section-subtitle">{t('categories_sub')}</p>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1.5 text-brand-navy/70 hover:text-brand-navy text-sm font-semibold transition-colors flex-shrink-0">
            {lang === 'id' ? 'Lihat Semua' : 'View All'}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ icon: Icon, labelKey, descKey, href, bg, iconColor, hoverBorder, dot }) => (
            <Link
              key={labelKey}
              href={href}
              className={`group bg-white border border-gray-200 ${hoverBorder} rounded-xl p-5 flex flex-col gap-4 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(12,35,64,0.12)]`}
            >
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className={iconColor} strokeWidth={1.4} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`w-4 h-0.5 ${dot} rounded-full mb-2.5 opacity-60`} />
                <h3 className="font-semibold text-brand-navy text-[13px] mb-1.5 leading-snug">{t(labelKey)}</h3>
                <p className="text-[11.5px] text-gray-500 leading-relaxed line-clamp-2">{t(descKey)}</p>
              </div>
              <ArrowRight size={12} className="text-gray-300 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all duration-200 self-end" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
