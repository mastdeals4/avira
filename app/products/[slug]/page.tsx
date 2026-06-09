import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import { activeProducts, getProductBySlug, getProductDescription, getRelatedProducts } from '@/src/data/products';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return activeProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found' };
  const description = getProductDescription(product, 'en') || `${product.name_en} pharmaceutical raw material supplied by PT Avira Perkasa Farma.`;
  return {
    title: `${product.name_en} — PT Avira Perkasa Farma`,
    description,
    openGraph: {
      title: `${product.name_en} — PT Avira Perkasa Farma`,
      description,
      type: 'website',
      url: `/products/${product.slug}`,
      siteName: 'PT Avira Perkasa Farma',
      emails: ['sales@avira.co.id'],
      phoneNumbers: ['+62 85888600999'],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product, 3);
  const description = getProductDescription(product, 'en') || `${product.name_en} pharmaceutical raw material.`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name_en,
    alternateName: product.name_id || product.inn || undefined,
    description,
    category: [product.category, product.sub_category].filter(Boolean).join(' / ') || undefined,
    sku: product.hs_code || undefined,
    manufacturer: product.source_company || undefined,
    brand: {
      '@type': 'Organization',
      name: 'PT Avira Perkasa Farma',
      url: 'https://www.avira.co.id',
      email: 'sales@avira.co.id',
      telephone: '+62 85888600999',
    },
    seller: {
      '@type': 'Organization',
      name: 'PT Avira Perkasa Farma',
      url: 'https://www.avira.co.id',
      email: 'sales@avira.co.id',
      telephone: '+62 85888600999',
    },
    additionalProperty: [
      { name: 'INN', value: product.inn },
      { name: 'CAS Number', value: product.cas_number },
      { name: 'HS Code', value: product.hs_code },
      { name: 'Pharmacopoeia Standard', value: product.pharma_std },
      { name: 'Grade', value: product.grade },
      { name: 'Origin', value: product.origin },
    ].filter((item) => item.value),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
