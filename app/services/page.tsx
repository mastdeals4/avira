import type { Metadata } from 'next';
import ServicesClient from '@/components/services/ServicesClient';

export const metadata: Metadata = {
  title: 'Services — PT Avira Perkasa Farma',
  description: 'PT Avira Perkasa Farma provides local stock, fast fulfilment, global sourcing, CDOB-compliant operations, and documentation plus BPOM support for pharmaceutical raw materials.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
