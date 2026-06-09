'use client';

import { useState, useMemo, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MessageCircle, Search, X } from 'lucide-react';
import type { Product } from '@/src/data/products';
import { searchProducts } from '@/src/data/products';
import { useLanguage } from '@/lib/i18n';
import ProductListRow from './ProductListRow';
import CategoryFilterBar, { getCategoryBadgeClass } from './CategoryFilterBar';
import EnquiryPanel, { type EnquiryItem } from './EnquiryPanel';
import { getCategoryLabel, getSubCategoryLabel } from './displayLabels';

type Props = {
  products: Product[];
  categories: string[];
  subCategories: string[];
  initialCategory?: string;
  initialSubCategory?: string;
};

export default function ProductsClient({
  products,
  categories,
  subCategories,
  initialCategory = '',
  initialSubCategory = '',
}: Props) {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState('');
  const [openRow, setOpenRow] = useState<string | null>(null);
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);

  const applyFilter = (updates: Record<string, string>) => {
    const current: Record<string, string> = {
      category: initialCategory,
      sub_category: initialSubCategory,
    };
    const merged = { ...current, ...updates };
    const params = new URLSearchParams();
    Object.entries(merged).forEach(([k, v]) => { if (v) params.set(k, v); });
    const qs = params.toString();
    setOpenRow(null);
    startTransition(() => {
      router.push(qs ? `${pathname}?${qs}` : pathname);
    });
  };

  const clearFilters = () => {
    setSearch('');
    setOpenRow(null);
    startTransition(() => router.push(pathname));
  };

  const handleCategoryChange = (cat: string) => {
    applyFilter({ category: cat, sub_category: '' });
  };

  const addToEnquiry = (product: Product) => {
    setEnquiryItems((prev) => {
      if (prev.find((i) => i.id === product.id)) return prev;
      const name = lang === 'en' ? product.name_en : product.name_id || product.name_en;
      return [...prev, { id: product.id, name }];
    });
  };

  const removeFromEnquiry = (id: string) => {
    setEnquiryItems((prev) => prev.filter((i) => i.id !== id));
  };

  const filtered = useMemo(() => {
    return searchProducts(search, products);
  }, [products, search]);

  const enquiredIds = new Set(enquiryItems.map((i) => i.id));

  return (
    <div className={`${isPending ? 'opacity-60 pointer-events-none' : ''} overflow-x-hidden`}>
      <div className="mb-4 min-w-0 max-w-full">
        <CategoryFilterBar categories={categories} activeCategory={initialCategory} onChange={handleCategoryChange} />
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-gray-700">{filtered.length}</span> {t('products')}
              {initialCategory && (
                <span className="ml-1.5 font-medium text-brand-blue">· {getCategoryLabel(initialCategory, lang)}</span>
              )}
              {initialSubCategory && (
                <span className="ml-1.5 font-medium text-brand-green">· {getSubCategoryLabel(initialSubCategory, lang)}</span>
              )}
            </p>

            <div className="grid grid-cols-1 sm:flex sm:items-center gap-2 w-full sm:w-auto">
              {subCategories.length > 0 && (
                <select
                  value={initialSubCategory}
                  onChange={(e) => applyFilter({ sub_category: e.target.value })}
                  className="py-2 sm:py-1.5 px-2 text-xs border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green w-full sm:w-44"
                >
                  <option value="">{lang === 'id' ? 'Semua Subkategori' : 'All Sub Categories'}</option>
                  {subCategories.map((subCategory) => (
                    <option key={subCategory} value={subCategory}>
                      {getSubCategoryLabel(subCategory, lang)}
                    </option>
                  ))}
                </select>
              )}

              {/* Search */}
              <div className="relative min-w-0">
                <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('search_placeholder')}
                  className="pl-8 pr-7 py-2 sm:py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue w-full sm:w-56"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2">
                    <X size={11} className="text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              {(search || initialCategory || initialSubCategory) && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-400 hover:text-brand-green flex items-center gap-1"
                >
                  <X size={11} /> {lang === 'id' ? 'Hapus' : 'Clear'}
                </button>
              )}
            </div>
          </div>

          <a
            href="#enquiry-form"
            className="xl:hidden mb-4 flex items-center justify-between gap-3 rounded-lg border border-brand-blue/20 bg-brand-blue-light px-4 py-3 text-sm text-brand-navy"
          >
            <span className="font-semibold">{lang === 'id' ? 'Kirim pertanyaan produk' : 'Send product enquiry'}</span>
            <span className="inline-flex items-center gap-1.5 text-brand-blue font-semibold">
              <MessageCircle size={14} />
              {lang === 'id' ? 'Form' : 'Form'}
            </span>
          </a>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400 bg-white border border-gray-200 rounded-lg">
              <Search size={32} className="mx-auto mb-3 opacity-20" />
              <p className="text-sm">{lang === 'id' ? 'Produk tidak ditemukan.' : 'No products found.'}</p>
              <button onClick={clearFilters} className="mt-2 text-xs text-brand-green hover:underline">
                {t('clear_filters')}
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden max-w-full">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] bg-brand-navy px-4 py-2.5">
                <span className="text-xs font-semibold text-white uppercase tracking-wider truncate">
                  {lang === 'id' ? 'Daftar Produk A-Z' : 'A-Z Product List'}
                </span>
                <span className="hidden sm:block text-xs font-semibold text-white uppercase tracking-wider text-right">
                  {lang === 'id' ? 'Pertanyaan' : 'Enquire'}
                </span>
              </div>

              {filtered.map((product) => (
                <ProductListRow
                  key={product.id}
                  product={product}
                  isOpen={openRow === product.id}
                  onToggle={() => setOpenRow(openRow === product.id ? null : product.id)}
                  categoryBadgeClass={getCategoryBadgeClass(product.category)}
                  onAddToEnquiry={() => addToEnquiry(product)}
                  isEnquired={enquiredIds.has(product.id)}
                />
              ))}
            </div>
          )}
        </div>

        <div id="enquiry-form" className="w-full xl:w-72 flex-shrink-0 scroll-mt-24">
          <div className="sticky top-24">
            <EnquiryPanel items={enquiryItems} onRemove={removeFromEnquiry} />
          </div>
        </div>

      </div>
    </div>
  );
}
