'use client';

import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const WHATSAPP_NUMBER = '6285888600999';

export default function WhatsAppButton() {
  const { lang } = useLanguage();
  const message = encodeURIComponent(
    lang === 'id'
      ? 'Halo Avira, saya ingin menanyakan bahan baku farmasi.'
      : 'Hello Avira, I would like to enquire about your pharmaceutical raw materials.',
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-13 h-13 bg-brand-green hover:bg-brand-green-dark text-white rounded-full shadow-lg transition-colors duration-200"
      aria-label={lang === 'id' ? 'Hubungi via WhatsApp' : 'Chat on WhatsApp'}
      style={{ width: '52px', height: '52px' }}
    >
      <MessageCircle size={24} fill="white" />
    </a>
  );
}
