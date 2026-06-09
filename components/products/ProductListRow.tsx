'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Check, ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import type { Product } from '@/src/data/products';
import { getProductName } from '@/src/data/products';
import { getDisplayApplications, getDisplayDescription } from './productContent';
import { getCategoryLabel, getEnquiryMessage } from './displayLabels';

type Props = {
  product: Product;
  isOpen: boolean;
  onToggle: () => void;
  categoryBadgeClass: string;
  onAddToEnquiry: () => void;
  isEnquired: boolean;
};

export default function ProductListRow({
  product,
  isOpen,
  onToggle,
  categoryBadgeClass,
  onAddToEnquiry,
  isEnquired,
}: Props) {
  const { t, lang } = useLanguage();

  const name = getProductName(product, lang);
  const waMessage = getEnquiryMessage(name, lang);

  const handleToggle = () => {
    onToggle();
  };

  const specs = [
    { label: t('cas'), value: product.cas_number },
    { label: t('pharmacopoeia'), value: product.pharma_std },
    { label: t('grade'), value: product.grade },
    { label: t('physical_form'), value: product.physical_form },
  ].filter((s) => s.value);

  const description = getDisplayDescription(product, lang);
  const applications = getDisplayApplications(product, lang);

  return (
    <div className={`border-b border-gray-100 last:border-0 ${isOpen ? 'bg-white' : ''}`}>
      {/* Row */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center">
        {/* Clickable product info */}
        <button
          onClick={handleToggle}
          className="text-left px-4 py-2.5 hover:bg-gray-50 transition-colors duration-100 min-w-0 overflow-hidden"
        >
          <div className="flex items-baseline gap-2 min-w-0 overflow-hidden">
            <span
              className="font-medium text-gray-900 text-sm leading-snug min-w-0 truncate"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {name}
            </span>
            {product.inn && product.inn !== product.name_en && (
              <span className="text-xs text-gray-400 italic truncate flex-shrink min-w-0">
                {product.inn}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap min-w-0">
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${categoryBadgeClass}`}>
              {getCategoryLabel(product.category, lang)}
            </span>
            {product.origin && (
              <span className="text-[10px] text-gray-400">{product.origin}</span>
            )}
            <ChevronDown
              size={11}
              className={`text-gray-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>

        {/* Add to enquiry button */}
        <div className="px-4 flex-shrink-0">
          <button
            onClick={(e) => { e.stopPropagation(); onAddToEnquiry(); }}
            title={isEnquired
              ? (lang === 'id' ? 'Sudah ditambahkan' : 'Added to enquiry')
              : (lang === 'id' ? 'Tambah ke pertanyaan' : 'Add to enquiry')}
            className={`w-7 h-7 rounded flex items-center justify-center font-bold text-sm transition-all duration-150 ${
              isEnquired
                ? 'bg-brand-blue text-white'
                : 'border-2 border-gray-300 text-gray-400 hover:border-brand-blue hover:text-brand-blue'
            }`}
          >
            {isEnquired ? <Check size={13} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Expanded detail */}
      {isOpen && (
        <div className="bg-[#F8FAFC] border-t border-gray-100 px-4 py-3">
          <div className="space-y-3">
              {description && (
                <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
              )}

              {specs.length > 0 && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {specs.map(({ label, value }) => (
                    <div key={label} className="flex gap-2 text-xs">
                      <span className="text-gray-400 font-medium w-28 flex-shrink-0">{label}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {applications.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{t('applications')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {applications.slice(0, 5).map((app) => (
                      <span key={app} className="text-[10px] bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 pt-1">
                <Link
                  href={`/products/${product.slug}`}
                  className="text-xs text-brand-green hover:underline font-medium"
                >
                  {lang === 'id' ? 'Detail lengkap' : 'Full details'}
                </Link>
                <span className="text-gray-200">|</span>
                <a
                  href={`https://wa.me/6285888600999?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand-green font-medium transition-colors"
                >
                  <MessageCircle size={11} />
                  {lang === 'id' ? 'Tanya via WhatsApp' : 'WhatsApp'}
                </a>
                <span className="text-gray-200">|</span>
                <button
                  onClick={onAddToEnquiry}
                  disabled={isEnquired}
                  className="text-xs font-medium text-brand-blue hover:text-brand-blue-dark disabled:text-gray-300 transition-colors"
                >
                  {isEnquired
                    ? (lang === 'id' ? 'Sudah ditambahkan' : 'Added to enquiry')
                    : (lang === 'id' ? '+ Tambah ke pertanyaan' : '+ Add to enquiry')}
                </button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}
