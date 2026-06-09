'use client';

import Link from 'next/link';
import { FileCheck, MapPin, MessageCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import type { Product } from '@/src/data/products';
import { getProductName } from '@/src/data/products';
import { useLanguage } from '@/lib/i18n';
import { getDisplayApplications, getDisplayDescription } from './productContent';
import {
  DOCUMENT_TRUST,
  getCategoryLabel,
  getEnquiryMessage,
  getSpecLabel,
  getSubCategoryLabel,
} from './displayLabels';

type Props = {
  product: Product;
  relatedProducts: Product[];
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

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const { t, lang } = useLanguage();
  const name = getProductName(product, lang);
  const description = getDisplayDescription(product, lang);
  const applications = getDisplayApplications(product, lang);
  const badgeClass = categoryColors[product.category] || 'bg-gray-50 text-gray-600 border-gray-100';
  const waMessage = getEnquiryMessage(product.inn ? `${name} (${product.inn})` : name, lang);

  const specs = [
    { label: getSpecLabel('productNameEn', lang), value: product.name_en },
    { label: getSpecLabel('productNameId', lang), value: product.name_id },
    { label: getSpecLabel('category', lang), value: getCategoryLabel(product.category, lang) },
    { label: getSpecLabel('subCategory', lang), value: product.sub_category ? getSubCategoryLabel(product.sub_category, lang) : '' },
    { label: 'INN', value: product.inn },
    { label: t('origin'), value: product.origin },
    { label: getSpecLabel('hsCode', lang), value: product.hs_code },
    { label: t('cas'), value: product.cas_number },
    { label: t('pharmacopoeia'), value: product.pharma_std },
    { label: t('grade'), value: product.grade },
  ].filter((s) => s.value);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand-green">{lang === 'id' ? 'Beranda' : 'Home'}</Link>
            <ChevronRight size={12} />
            <Link href="/products" className="hover:text-brand-green">{lang === 'id' ? 'Produk' : 'Products'}</Link>
            <ChevronRight size={12} />
            <span className="text-gray-600">{name}</span>
          </nav>
        </div>
      </div>

      <div className="container-main py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-brand-green mb-1">
                {name}
              </h1>
              {product.inn && (
                <p className="text-gray-500 text-base italic mb-4">{product.inn}</p>
              )}
              {description && (
                <p className="text-gray-700 leading-relaxed text-base">
                  {description}
                </p>
              )}
            </div>

            {specs.length > 0 && (
              <div>
                <h2 className="font-serif text-xl text-brand-green mb-4">
                  {t('specifications')}
                </h2>
                <div className="card-base overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {specs.map(({ label, value }, idx) => (
                        <tr key={label} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-5 font-medium text-gray-600 w-48 border-r border-gray-100">
                            {label}
                          </td>
                          <td className="py-3 px-5 text-gray-800">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {applications.length > 0 && (
              <div>
                <h2 className="font-serif text-xl text-brand-green mb-4">
                  {t('applications')}
                </h2>
                <ul className="space-y-2">
                  {applications.map((app) => (
                    <li key={app} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="font-serif text-xl text-brand-green mb-4">
                {t('documents_available')}
              </h2>
              <div className="card-base p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCUMENT_TRUST[lang].map((doc) => (
                    <div key={doc} className="flex items-start gap-2 text-sm text-gray-700">
                      <FileCheck size={15} className="text-brand-green mt-0.5 flex-shrink-0" />
                      {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="card-base p-6 space-y-5">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-gray-100">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded border ${badgeClass}`}>
                    {getCategoryLabel(product.category, lang)}
                  </span>
                  {product.origin && (
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin size={13} />
                      {product.origin}
                    </span>
                  )}
                </div>

                {product.pharma_std && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-medium">
                      {t('pharmacopoeia')}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {product.pharma_std}
                    </p>
                  </div>
                )}

                {product.grade && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-medium">
                      {t('grade')}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {product.grade}
                    </p>
                  </div>
                )}

                <div className="rounded border border-brand-green/25 bg-brand-green-light p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-brand-navy uppercase tracking-wider">
                        {lang === 'id' ? 'Sertifikasi CDOB' : 'CDOB Certification'}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        CDOB5310/S/3-0684/03/2026
                      </p>
                      <p className="text-xs text-gray-600">
                        {lang === 'id' ? 'Berlaku hingga' : 'Valid until'} 18 March 2031
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3.5 px-6 rounded text-sm transition-colors duration-200"
                >
                  {t('request_quote')}
                </Link>

                <a
                  href={`https://wa.me/6285888600999?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold py-3 px-6 rounded text-sm transition-colors duration-200"
                >
                  <MessageCircle size={15} />
                  {lang === 'id' ? 'Pertanyaan via WhatsApp' : 'WhatsApp Enquiry'}
                </a>
              </div>

              {relatedProducts.length > 0 && (
                <div className="card-base p-5">
                  <h3 className="font-serif text-base text-brand-green mb-4">{t('related_products')}</h3>
                  <div className="space-y-3">
                    {relatedProducts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/products/${rp.slug}`}
                        className="block group p-3 rounded border border-gray-100 hover:border-brand-green/30 hover:bg-brand-green-light transition-colors"
                      >
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-brand-green transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {getProductName(rp, lang)}
                        </p>
                        {rp.inn && (
                          <p className="text-xs text-gray-400 italic mt-0.5">{rp.inn}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
