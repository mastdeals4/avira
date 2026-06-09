import type { Language } from '@/lib/i18n';

const categoryLabels: Record<string, { en: string; id: string }> = {
  API: { en: 'API', id: 'Bahan Aktif Farmasi' },
  Excipient: { en: 'Excipient', id: 'Eksipien Farmasi' },
  'Herbal Extract': { en: 'Herbal Extract', id: 'Ekstrak Herbal' },
  Nutraceutical: { en: 'Nutraceutical', id: 'Nutrasetikal' },
  Probiotic: { en: 'Probiotic', id: 'Probiotik' },
  'Refined Oil': { en: 'Oil', id: 'Minyak' },
  'Cosmetic Ingredient': { en: 'Specialty Ingredient', id: 'Bahan Khusus' },
};

const subCategoryLabels: Record<string, { en: string; id: string }> = {
  'Amino Acid': { en: 'Amino Acid', id: 'Asam Amino' },
  Aminoglycoside: { en: 'Aminoglycoside', id: 'Aminoglikosida' },
  Antibiotic: { en: 'Antibiotic', id: 'Antibiotik' },
  Antihistamine: { en: 'Antihistamine', id: 'Antihistamin' },
  Antihypertensive: { en: 'Antihypertensive', id: 'Antihipertensi' },
  Antipyretic: { en: 'Antipyretic', id: 'Antipiretik' },
  Binder: { en: 'Binder', id: 'Pengikat' },
  Carotenoid: { en: 'Carotenoid', id: 'Karotenoid' },
  Coating: { en: 'Coating', id: 'Penyalut' },
  Coenzyme: { en: 'Coenzyme', id: 'Koenzim' },
  'Cosmetic Ingredient': { en: 'Cosmetic Ingredient', id: 'Bahan Kosmetik' },
  Disintegrant: { en: 'Disintegrant', id: 'Disintegran' },
  Electrolyte: { en: 'Electrolyte', id: 'Elektrolit' },
  Emulsifier: { en: 'Emulsifier', id: 'Pengemulsi' },
  Enzyme: { en: 'Enzyme', id: 'Enzim' },
  'Essential Oil': { en: 'Essential Oil', id: 'Minyak Atsiri' },
  Filler: { en: 'Filler', id: 'Pengisi' },
  'Herbal Extract': { en: 'Herbal Extract', id: 'Ekstrak Herbal' },
  Lubricant: { en: 'Lubricant', id: 'Pelumas Tablet' },
  Mineral: { en: 'Mineral', id: 'Mineral' },
  Oil: { en: 'Oil', id: 'Minyak' },
  Preservative: { en: 'Preservative', id: 'Pengawet' },
  Probiotic: { en: 'Probiotic', id: 'Probiotik' },
  Solubilizer: { en: 'Solubilizer', id: 'Pelarut/Peningkat Kelarutan' },
  Solvent: { en: 'Solvent', id: 'Pelarut' },
  Sweetener: { en: 'Sweetener', id: 'Pemanis' },
  Vitamin: { en: 'Vitamin', id: 'Vitamin' },
};

const specLabels: Record<string, { en: string; id: string }> = {
  productNameEn: { en: 'Product Name (EN)', id: 'Nama Produk (EN)' },
  productNameId: { en: 'Product Name (ID)', id: 'Nama Produk (ID)' },
  category: { en: 'Category', id: 'Kategori' },
  subCategory: { en: 'Sub Category', id: 'Subkategori' },
  hsCode: { en: 'HS Code', id: 'Kode HS' },
};

export function getCategoryLabel(category: string, lang: Language) {
  return categoryLabels[category]?.[lang] || category;
}

export function getSubCategoryLabel(subCategory: string, lang: Language) {
  return subCategoryLabels[subCategory]?.[lang] || subCategory;
}

export function getSpecLabel(key: keyof typeof specLabels, lang: Language) {
  return specLabels[key][lang];
}

export function getEnquiryMessage(productName: string, lang: Language) {
  return encodeURIComponent(
    lang === 'id'
      ? `Halo Avira, saya ingin menanyakan produk ${productName}.`
      : `Hello Avira, I would like to enquire about ${productName}.`,
  );
}

export const DOCUMENT_TRUST = {
  en: [
    'COA Available',
    'MSDS/SDS Available',
    'Certificate of Origin',
    'GMP Documentation',
    'BPOM Import Support',
  ],
  id: [
    'COA Tersedia',
    'MSDS/SDS Tersedia',
    'Certificate of Origin',
    'Dokumentasi GMP',
    'Dukungan Impor BPOM',
  ],
} as const;

