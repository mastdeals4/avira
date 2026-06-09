'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import type { Product } from '@/src/data/products';
import { getProductName } from '@/src/data/products';
import { getDisplayDescription } from '@/components/products/productContent';
import { getCategoryLabel, getEnquiryMessage } from '@/components/products/displayLabels';

type Props = { products: Product[] };

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
    <section className="py-14 lg:py-18 bg-[#F4F7FA]">
      <div className="container-main">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-label">{lang === 'id' ? 'Katalog' : 'Catalog'}</p>
            <div className="section-divider" />
            <h2 className="section-title">{t('featured_title')}</h2>
            <p className="section-subtitle">{t('featured_sub')}</p>
          </div>
          <Link href="/products" className="hidden md:inline-flex items-center gap-1.5 text-brand-navy/70 hover:text-brand-navy text-sm font-semibold transition-colors flex-shrink-0">
            {t('view_all')} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
          {products.map((product) => {
            const name = getProductName(product, lang);
            const description = getDisplayDescription(product, lang);
            const badgeClass = categoryColors[product.category] || 'bg-gray-50 text-gray-600 border-gray-100';
            const waMessage = getEnquiryMessage(name, lang);
            return (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl hover:shadow-[0_8px_32px_rgba(12,35,64,0.12)] hover:border-brand-navy/20 transition-all duration-200 flex-shrink-0 w-[264px] flex flex-col snap-start">
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                      {getCategoryLabel(product.category, lang)}
                    </span>
                    {product.origin && (
                      <span className="flex items-center gap-1 text-[11px] text-gray-400 flex-shrink-0">
                        <MapPin size={10} />{product.origin}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-brand-navy text-[13.5px] leading-snug mb-0.5">{name}</h3>
                  {product.inn && <p className="text-[12px] text-gray-400 italic mb-2">{product.inn}</p>}
                  <p className="text-[12px] text-gray-500 leading-relaxed flex-1 line-clamp-2">{description}</p>
                </div>
                <div className="px-5 pb-5 flex gap-2 border-t border-gray-100 pt-4">
                  <Link href={`/products/${product.slug}`} className="flex-1 text-center border border-gray-200 text-gray-600 hover:border-brand-navy hover:text-brand-navy text-[12px] font-semibold py-2 px-2 rounded-lg transition-colors duration-200">
                    {t('view_details')}
                  </Link>
                  <a href={`https://wa.me/6285888600999?text=${waMessage}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-brand-navy hover:bg-brand-navy-mid text-white text-[12px] font-semibold py-2 px-2 rounded-lg transition-colors duration-200">
                    {t('enquire')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Link href="/products" className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-mid text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors shadow-sm">
            {t('view_all')} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
