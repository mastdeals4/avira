import { activeProducts } from '@/src/data/products';
import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.avira.co.id';
const fallbackDate = new Date('2026-04-21T00:00:00.000Z');

const parseDate = (value: string) => {
  const parsed = value ? new Date(value.replace(' ', 'T')) : fallbackDate;
  return Number.isNaN(parsed.getTime()) ? fallbackDate : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/products', '/services', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const productRoutes = activeProducts.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: parseDate(product.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
