import ProductsClient from '@/components/products/ProductsClient';
import ProductsPageIntro from '@/components/products/ProductsPageIntro';
import { filterProducts, getProductSubCategories, productCategories } from '@/src/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Catalog — PT Avira Perkasa Farma',
  description: 'Browse PT Avira Perkasa Farma pharmaceutical product catalogue including APIs, excipients, herbal extracts, nutraceuticals, probiotics, and oils with CDOB documentation support.',
};

type Props = {
  searchParams: { category?: string; sub_category?: string };
};

export default function ProductsPage({ searchParams }: Props) {
  const category = searchParams.category || '';
  const subCategory = searchParams.sub_category || '';
  const products = filterProducts({ category, subCategory });

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="container-main py-6 lg:py-8 overflow-hidden">
        <ProductsPageIntro />
        <ProductsClient
          products={products}
          categories={productCategories}
          subCategories={getProductSubCategories(category)}
          initialCategory={category}
          initialSubCategory={subCategory}
        />
      </div>
    </div>
  );
}
