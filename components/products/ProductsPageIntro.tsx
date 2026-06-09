'use client';

import { useLanguage } from '@/lib/i18n';

export default function ProductsPageIntro() {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7 mb-6 min-w-0 max-w-full overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
        <a href="/" className="hover:text-brand-navy transition-colors">{lang === 'id' ? 'Beranda' : 'Home'}</a>
        <span className="text-gray-300">/</span>
        <span className="text-gray-600 font-medium">{lang === 'id' ? 'Produk' : 'Products'}</span>
      </div>
      <p className="section-label mb-0">{lang === 'id' ? 'Katalog' : 'Catalog'}</p>
      <div className="section-divider mt-2" />
      <h1 className="section-title break-words">{t('categories_title')}</h1>
      <p className="section-subtitle max-w-3xl break-words">
        {lang === 'id'
          ? 'Telusuri katalog bahan baku farmasi kami untuk API, eksipien, ekstrak herbal, nutrasetikal, probiotik, dan minyak. Produk dipasok bergantung pada ketersediaan, tinjauan dokumen, dan persyaratan regulasi.'
          : 'Browse our pharmaceutical raw material catalogue for APIs, excipients, herbal extracts, nutraceuticals, probiotics, and oils. Products are supplied subject to availability, documentation review, and regulatory requirements.'}
      </p>
    </div>
  );
}
