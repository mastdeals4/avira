'use client';

import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import MoleculeWatermark from '@/components/ui/MoleculeWatermark';

export default function CTASection() {
  const { t, lang } = useLanguage();
  const waMessage = encodeURIComponent(
    lang === 'id'
      ? 'Halo Avira, saya ingin menanyakan bahan baku farmasi.'
      : 'Hello Avira, I would like to enquire about your pharmaceutical raw materials.',
  );

  return (
    <section className="py-8 lg:py-10 bg-[#F7FAFC]">
      <div className="container-main">
        <div className="relative rounded-lg overflow-hidden bg-brand-navy">
          {/* Molecule watermark */}
          <MoleculeWatermark className="absolute inset-0 w-full h-full text-white opacity-[0.05] pointer-events-none" />

          <div className="relative z-10 px-5 md:px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="max-w-xl">
              <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-2">
                {lang === 'id' ? 'Hubungi Kami' : 'Get In Touch'}
              </p>
              <h2 className="font-serif text-xl md:text-2xl text-white mb-1.5 leading-tight">
                {t('cta_title')}
              </h2>
              <p className="text-white/65 text-sm leading-relaxed">
                {t('cta_sub')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={`https://wa.me/6285888600999?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors duration-200 whitespace-nowrap"
              >
                <MessageCircle size={15} />
                {t('cta_whatsapp')}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/10 text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {t('cta_contact')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
