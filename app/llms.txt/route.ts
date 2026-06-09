import { activeProducts, productCategories } from '@/src/data/products';

export const dynamic = 'force-static';

export function GET() {
  const featured = activeProducts.slice(0, 50).map((product) => (
    `- ${product.name_en}${product.inn ? ` (${product.inn})` : ''}: ${product.category}${product.sub_category ? ` / ${product.sub_category}` : ''}`
  ));

  const body = [
    '# PT Avira Perkasa Farma',
    '',
    'PT Avira Perkasa Farma is an Indonesia-based distributor of pharmaceutical raw materials including APIs, excipients, herbal extracts, nutraceuticals, cosmetic ingredients, probiotics, and refined oils.',
    '',
    '## Product Categories',
    ...productCategories.map((category) => `- ${category}`),
    '',
    '## Product Catalog Sample',
    ...featured,
    '',
    '## Important URLs',
    '- /products',
    '- /about',
    '- /services',
    '- /contact',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
}
