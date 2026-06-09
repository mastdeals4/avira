'use client';

import Link from 'next/link';
import { FlaskConical, Layers, Leaf, Pill, Sparkles, Droplets, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const categories = [
  {
    icon: FlaskConical,
    labelKey: 'cat_api' as const,
    descKey: 'cat_api_desc' as const,
    href: '/products?category=API',
  },
  {
    icon: Layers,
    labelKey: 'cat_excipients' as const,
    descKey: 'cat_excipients_desc' as const,
    href: '/products?category=Excipient',
  },
  {
    icon: Leaf,
    labelKey: 'cat_herbal' as const,
    descKey: 'cat_herbal_desc' as const,
    href: '/products?category=Herbal+Extract',
  },
  {
    icon: Pill,
    labelKey: 'cat_nutra' as const,
    descKey: 'cat_nutra_desc' as const,
    href: '/products?category=Nutraceutical',
  },
  {
    icon: Sparkles,
    labelKey: 'cat_probiotic' as const,
    descKey: 'cat_probiotic_desc' as const,
    href: '/products?category=Probiotic',
  },
  {
    icon: Droplets,
    labelKey: 'cat_oils' as const,
    descKey: 'cat_oils_desc' as const,
    href: '/products?category=Refined+Oil',
  },
];

export default function CategoriesSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-10 lg:py-12 bg-[#F7FAFC]">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div className="max-w-xl">
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
              {lang === 'id' ? 'Rangkaian Produk' : 'Product Range'}
            </p>
            <h2 className="section-title">{t('categories_title')}</h2>
            <p className="section-subtitle">{t('categories_sub')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          {categories.map(({ icon: Icon, labelKey, descKey, href }) => (
            <Link
              key={labelKey}
              href={href}
              className="group bg-white border border-gray-200 hover:border-brand-blue/35 rounded-lg p-4 flex flex-col gap-3 transition-all duration-200 hover:shadow-sm min-h-36"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="w-9 h-9 rounded border border-brand-blue/15 bg-brand-blue-light group-hover:bg-white flex items-center justify-center transition-colors">
                  <Icon size={18} className="text-brand-blue" strokeWidth={1.45} />
                </div>
                <ArrowRight size={13} className="text-gray-300 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-brand-navy text-sm mb-1 group-hover:text-brand-blue transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t(labelKey)}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3">
                  {t(descKey)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
