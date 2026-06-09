import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.avira.co.id'),
  title: 'PT Avira Perkasa Farma — Pharmaceutical Product Catalogue',
  description: 'PT Avira Perkasa Farma supplies APIs, pharmaceutical excipients, nutraceutical raw materials, herbal ingredients, probiotics, and oils with CDOB-compliant distribution and documentation support.',
  keywords: 'PT Avira Perkasa Farma, pharmaceutical product catalogue, API distributor Indonesia, bahan aktif farmasi, eksipien farmasi, CDOB, BPOM support, nutraceutical raw materials',
  openGraph: {
    title: 'PT Avira Perkasa Farma — Pharmaceutical Product Catalogue',
    description: 'Global sourcing, reliable supply, local stock, CDOB-compliant operations, and documentation support for Indonesian pharmaceutical manufacturers.',
    url: 'https://www.avira.co.id',
    siteName: 'PT Avira Perkasa Farma',
    type: 'website',
    emails: ['sales@avira.co.id'],
    phoneNumbers: ['+62 85888600999'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PT Avira Perkasa Farma',
  url: 'https://www.avira.co.id',
  email: 'sales@avira.co.id',
  telephone: '+62 85888600999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rukan Plaza Sunter Terrace, No. C12, Jl. Danau Sunter Utara, Sunter Agung, Tanjung Priok',
    addressLocality: 'Jakarta Utara',
    postalCode: '14350',
    addressCountry: 'ID',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62 85888600999',
    email: 'sales@avira.co.id',
    contactType: 'sales enquiries',
    areaServed: 'ID',
    availableLanguage: ['English', 'Indonesian'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
