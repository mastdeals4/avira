'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle, FileText, TrendingUp, Package } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import MoleculeWatermark from '@/components/ui/MoleculeWatermark';

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const trustPoints = lang === 'id' ? [
    'API dan eksipien fast-moving tersedia dari stok Jakarta',
    'COA, MSDS/SDS, pernyataan GMP, dan Certificate of Origin',
    'Sourcing global dari produsen GMP di India, Tiongkok, dan Eropa',
  ] : [
    'Fast-moving APIs and excipients available from Jakarta stock',
    'COA, MSDS/SDS, GMP statements, and Certificate of Origin',
    'Global sourcing from GMP-certified manufacturers in India, China, and Europe',
  ];

  const stats = [
    { icon: Package, value: '140+', label: lang === 'id' ? 'Produk' : 'Products' },
    { icon: TrendingUp, value: '6', label: lang === 'id' ? 'Kategori' : 'Categories' },
    { icon: FileText, value: 'CDOB', label: lang === 'id' ? 'Tersertifikasi' : 'Certified' },
  ];

  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <MoleculeWatermark className="absolute inset-0 w-full h-full text-white opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/8 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 py-14 lg:py-20 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/80 text-[11px] font-semibold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-[0.13em]">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              Jakarta, Indonesia
            </div>

            <h1 className="font-serif text-[2.1rem] md:text-[2.75rem] lg:text-[3.2rem] text-white leading-[1.07] mb-5 break-words">
              {t('hero_headline')}
            </h1>

            <p className="text-white/65 text-[15px] leading-relaxed mb-6 max-w-xl">{t('hero_sub')}</p>

            <ul className="space-y-3 mb-8">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[14px] text-white/80 min-w-0">
                  <span className="w-5 h-5 rounded-full bg-brand-green/20 border border-brand-green/45 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {mounted && <CheckCircle size={11} className="text-brand-green" strokeWidth={2.5} />}
                  </span>
                  <span className="min-w-0 break-words">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/products" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-px">
                {t('hero_browse')}
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/45 hover:bg-white/8 text-white/90 font-semibold px-7 py-3.5 rounded-lg text-sm transition-all duration-200">
                {t('hero_rfq')}
              </Link>
            </div>

            <div className="flex items-center gap-0 border border-white/12 rounded-xl overflow-hidden bg-white/5 w-fit">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={label} className={`flex items-center gap-3 px-5 py-3.5 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    {mounted && <Icon size={15} className="text-brand-green" strokeWidth={1.8} />}
                  </div>
                  <div>
                    <p className="text-white text-base font-bold leading-none">{value}</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-white/8">
              <img
                src="https://images.pexels.com/photos/3825530/pexels-photo-3825530.jpeg?auto=compress&cs=tinysrgb&w=900&h=580&fit=crop"
                alt="Pharmaceutical laboratory — raw material quality analysis"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white rounded-lg p-3.5 shadow-2xl border border-gray-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand-navy/8 rounded-lg flex items-center justify-center flex-shrink-0">
                    {mounted && <FileText size={17} className="text-brand-navy" strokeWidth={1.6} />}
                  </div>
                  <div>
                    <p className="text-[11.5px] font-semibold text-brand-navy leading-tight">
                      {lang === 'id' ? 'Tersertifikasi CDOB' : 'CDOB Certified Distributor'}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">No. CDOB5310/S/3-0684/03/2026 · {lang === 'id' ? 'Berlaku' : 'Valid'} 2031</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-green text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              GMP Sourcing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
