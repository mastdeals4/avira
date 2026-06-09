import type { Metadata } from 'next';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — PT Avira Perkasa Farma',
  description: 'Contact PT Avira Perkasa Farma at sales@avira.co.id or WhatsApp +62 85888600999 for pharmaceutical raw material enquiries, quotations, documentation, and stock availability.',
};

export default function ContactPage() {
  return <ContactClient />;
}
