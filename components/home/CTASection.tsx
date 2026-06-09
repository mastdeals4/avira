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
    <section className="py-10 lg:py-14 bg-white">
      <div className="container-main">
        <div className="relative rounded-2xl overflow-hidden bg-brand-navy">
          <MoleculeWatermark className="absolute inset-0 w-full h-full text-white opacity-[0.04] pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-blue/15 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-40 h-40 bg-brand-green/10 rounded-full translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-brand-green text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5">
                {lang === 'id' ? 'Hubungi Kami' : 'Get In Touch'}
              </p>
              <h2 className="font-serif text-[1.5rem] md:text-[1.875rem] text-white mb-2 leading-snug">{t('cta_title')}</h2>
              <p className="text-white/60 text-[14px] leading-relaxed">{t('cta_sub')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={`https://wa.me/6285888600999?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <MessageCircle size={15} />
                {t('cta_whatsapp')}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/45 hover:bg-white/8 text-white/90 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 whitespace-nowrap">
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
