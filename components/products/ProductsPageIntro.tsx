'use client';

import { useLanguage } from '@/lib/i18n';

export default function ProductsPageIntro() {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-5 min-w-0 max-w-full overflow-hidden">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
        <a href="/" className="hover:text-brand-blue">{lang === 'id' ? 'Beranda' : 'Home'}</a>
        <span>/</span>
        <span className="text-gray-600">{lang === 'id' ? 'Produk' : 'Products'}</span>
      </div>
      <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-2">
        {lang === 'id' ? 'Katalog' : 'Catalog'}
      </p>
      <h1 className="section-title break-words">{t('categories_title')}</h1>
      <p className="section-subtitle max-w-3xl break-words">
        {lang === 'id'
          ? 'Telusuri katalog bahan baku farmasi kami untuk API, eksipien, ekstrak herbal, nutrasetikal, probiotik, dan minyak. Produk dipasok bergantung pada ketersediaan, tinjauan dokumen, dan persyaratan regulasi.'
          : 'Browse our pharmaceutical raw material catalogue for APIs, excipients, herbal extracts, nutraceuticals, probiotics, and oils. Products are supplied subject to availability, documentation review, and regulatory requirements.'}
      </p>
    </div>
  );
}
