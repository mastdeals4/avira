import type { Product } from '@/src/data/products';
import type { Language } from '@/lib/i18n';
import { getCategoryLabel, getSubCategoryLabel } from './displayLabels';

const categoryDescriptions: Record<string, { en: string; id: string; appsEn: string[]; appsId: string[] }> = {
  API: {
    en: 'Pharmaceutical-grade active ingredient supplied for registered drug manufacturing, quality review, and procurement requirements.',
    id: 'Bahan Aktif Farmasi grade farmasi untuk kebutuhan produksi obat terdaftar, tinjauan mutu, dan pengadaan.',
    appsEn: ['Pharmaceutical formulation', 'Quality and regulatory documentation review', 'Manufacturing procurement'],
    appsId: ['Formulasi farmasi', 'Tinjauan dokumen mutu dan regulasi', 'Pengadaan untuk produksi'],
  },
  Excipient: {
    en: 'Pharmaceutical excipient used to support dosage form performance, processing, stability, or product presentation.',
    id: 'Eksipien Farmasi untuk mendukung performa bentuk sediaan, proses produksi, stabilitas, atau tampilan produk.',
    appsEn: ['Tablet, capsule, or liquid formulation', 'Process and stability support', 'Excipient procurement'],
    appsId: ['Formulasi tablet, kapsul, atau cairan', 'Dukungan proses dan stabilitas', 'Pengadaan eksipien'],
  },
  'Herbal Extract': {
    en: 'Herbal ingredient supplied for traditional medicine, supplement, and health product formulation needs.',
    id: 'Bahan herbal untuk kebutuhan formulasi obat tradisional, suplemen, dan produk kesehatan.',
    appsEn: ['Herbal product formulation', 'Supplement manufacturing', 'Health product development'],
    appsId: ['Formulasi produk herbal', 'Produksi suplemen', 'Pengembangan produk kesehatan'],
  },
  Nutraceutical: {
    en: 'Nutraceutical raw material for supplement and functional health product manufacturing.',
    id: 'Bahan baku Nutrasetikal untuk produksi suplemen dan produk kesehatan fungsional.',
    appsEn: ['Supplement formulation', 'Functional health products', 'Nutraceutical procurement'],
    appsId: ['Formulasi suplemen', 'Produk kesehatan fungsional', 'Pengadaan bahan Nutrasetikal'],
  },
  Probiotic: {
    en: 'Probiotic or fermentation-based ingredient for digestive health, supplement, and pharmaceutical applications.',
    id: 'Probiotik atau bahan berbasis fermentasi untuk aplikasi kesehatan pencernaan, suplemen, dan farmasi.',
    appsEn: ['Digestive health products', 'Supplement manufacturing', 'Temperature-sensitive material procurement'],
    appsId: ['Produk kesehatan pencernaan', 'Produksi suplemen', 'Pengadaan material sensitif suhu'],
  },
  'Refined Oil': {
    en: 'Oil material supplied for pharmaceutical, nutraceutical, food, cosmetic, or topical formulation requirements.',
    id: 'Material minyak untuk kebutuhan formulasi farmasi, Nutrasetikal, pangan, kosmetik, atau topikal.',
    appsEn: ['Carrier oil applications', 'Topical or oral formulation', 'Food, cosmetic, or pharmaceutical processing'],
    appsId: ['Aplikasi carrier oil', 'Formulasi topikal atau oral', 'Proses pangan, kosmetik, atau farmasi'],
  },
  'Cosmetic Ingredient': {
    en: 'Specialty ingredient supplied with documentation support for selected manufacturing and formulation requirements.',
    id: 'Bahan khusus dengan dukungan dokumen untuk kebutuhan produksi dan formulasi tertentu.',
    appsEn: ['Specialty formulation', 'Manufacturing procurement', 'Product documentation review'],
    appsId: ['Formulasi khusus', 'Pengadaan untuk produksi', 'Tinjauan dokumen produk'],
  },
};

export function getDisplayDescription(product: Product, lang: Language) {
  const existing = lang === 'id'
    ? product.description_id || product.description_en
    : product.description_en || product.description_id;

  if (existing) return existing;

  const fallback = categoryDescriptions[product.category] || categoryDescriptions.API;
  const category = product.sub_category
    ? `${getCategoryLabel(product.category, lang)} / ${getSubCategoryLabel(product.sub_category, lang)}`
    : getCategoryLabel(product.category, lang);
  const standard = product.pharma_std && product.pharma_std !== '—' ? ` ${lang === 'id' ? 'Standar' : 'Standard'}: ${product.pharma_std}.` : '';
  const origin = product.origin ? ` ${lang === 'id' ? 'Asal' : 'Origin'}: ${product.origin}.` : '';

  if (lang === 'id') {
    return `${product.name_id || product.name_en} adalah ${fallback.id} Kategori: ${category}.${standard}${origin}`;
  }

  return `${product.name_en || product.name_id} is a ${fallback.en} Category: ${category}.${standard}${origin}`;
}

export function getDisplayApplications(product: Product, lang: Language) {
  if (product.applications.length > 0) return product.applications;
  const fallback = categoryDescriptions[product.category] || categoryDescriptions.API;
  return lang === 'id' ? fallback.appsId : fallback.appsEn;
}
