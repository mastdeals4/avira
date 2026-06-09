import type { Metadata } from 'next';
import AboutClient from '@/components/about/AboutClient';

export const metadata: Metadata = {
  title: 'About Us — PT Avira Perkasa Farma',
  description: 'Learn about PT Avira Perkasa Farma, a pharmaceutical trading and distribution company specializing in APIs, excipients, nutraceutical raw materials, and CDOB-compliant supply support.',
};

export default function AboutPage() {
  return <AboutClient />;
}
