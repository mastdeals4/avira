'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import type { Product } from '@/src/data/products';
import { getProductName } from '@/src/data/products';
import { getDisplayDescription } from '@/components/products/productContent';
import { getCategoryLabel, getEnquiryMessage } from '@/components/products/displayLabels';

type Props = {
  products: Product[];
};

const categoryColors: Record<string, string> = {
  'API': 'bg-brand-blue-light text-brand-navy border-brand-blue/20',
  'Excipient': 'bg-brand-green-light text-brand-navy border-brand-green/25',
  'Herbal Extract': 'bg-brand-green-light text-brand-green-dark border-brand-green/25',
  'Nutraceutical': 'bg-white text-brand-blue border-brand-blue/25',
  'Cosmetic Ingredient': 'bg-white text-brand-navy border-brand-navy/15',
  'Refined Oil': 'bg-brand-blue-light text-brand-blue border-brand-blue/25',
  'Probiotic': 'bg-brand-green-light text-brand-green-dark border-brand-green/25',
};

export default function FeaturedProducts({ products }: Props) {
  const { t, lang } = useLanguage();

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="container-main">
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
              {lang === 'id' ? 'Katalog' : 'Catalog'}
            </p>
            <h2 className="section-title">{t('featured_title')}</h2>
            <p className="section-subtitle">{t('featured_sub')}</p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:text-brand-blue-dark transition-colors flex-shrink-0"
          >
            {t('view_all')}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
          {products.map((product) => {
            const name = getProductName(product, lang);
            const description = getDisplayDescription(product, lang);
            const badgeClass = categoryColors[product.category] || 'bg-gray-50 text-gray-600 border-gray-100';
            const waMessage = getEnquiryMessage(name, lang);
            return (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-sm hover:border-brand-blue/30 transition-all duration-200 flex-shrink-0 w-64 flex flex-col">
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${badgeClass}`}>
                      {getCategoryLabel(product.category, lang)}
                    </span>
                    {product.origin && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <MapPin size={11} />
                        {product.origin}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {name}
                  </h3>
                  {product.inn && (
                    <p className="text-xs text-gray-400 italic mb-2">{product.inn}</p>
                  )}
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-2">
                    {description}
                  </p>
                </div>
                <div className="px-4 pb-4 flex gap-2 border-t border-gray-100 pt-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 text-center border border-gray-200 text-gray-700 hover:border-brand-blue hover:text-brand-blue text-xs font-semibold py-2 px-2 rounded transition-colors duration-200"
                  >
                    {t('view_details')}
                  </Link>
                  <a
                    href={`https://wa.me/6285888600999?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-semibold py-2 px-2 rounded transition-colors duration-200"
                  >
                    {t('enquire')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex justify-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-6 py-2.5 rounded transition-colors"
          >
            {t('view_all')}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
