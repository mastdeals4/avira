'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import MoleculeWatermark from '@/components/ui/MoleculeWatermark';

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const trustPoints = lang === 'id' ? [
    'API dan eksipien fast-moving tersedia dari stok Jakarta',
    'Dukungan COA, MSDS/SDS, pernyataan GMP, dan Certificate of Origin',
    'Sourcing global dari produsen GMP di India, Tiongkok, dan Eropa',
  ] : [
    'Fast-moving APIs and excipients available from Jakarta stock',
    'COA, MSDS/SDS, GMP statements, and Certificate of Origin support',
    'Global sourcing from GMP-certified manufacturers in India, China, and Europe',
  ];

  return (
    <section className="relative bg-brand-navy overflow-hidden border-b border-white/10">
      {/* Molecule watermark */}
      <MoleculeWatermark className="absolute inset-0 w-full h-full text-white opacity-[0.045] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 py-10 lg:py-16 items-center">

          {/* Left: Text content */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
              Jakarta, Indonesia
            </div>

            <h1 className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white leading-[1.1] mb-4 break-words">
              {t('hero_headline')}
            </h1>

            <p className="text-white/70 text-sm md:text-[15px] leading-relaxed mb-5 max-w-2xl">
              {t('hero_sub')}
            </p>

            <ul className="space-y-2.5 mb-7">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white/85 min-w-0">
                  <span className="w-5 h-5 rounded-full bg-brand-green/25 border border-brand-green/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {mounted && <CheckCircle size={12} className="text-brand-green" strokeWidth={2.5} />}
                  </span>
                  <span className="min-w-0 break-words">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200 shadow-sm"
              >
                {t('hero_browse')}
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200"
              >
                {t('hero_rfq')}
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/3825530/pexels-photo-3825530.jpeg?auto=compress&cs=tinysrgb&w=900&h=520&fit=crop"
                alt="Pharmaceutical laboratory — raw material quality analysis"
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-brand-navy/15 to-transparent" />

              {/* CDOB badge overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/97 rounded-md p-3.5 shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand-navy/8 rounded flex items-center justify-center flex-shrink-0">
                    {mounted && <FileText size={17} className="text-brand-navy" strokeWidth={1.6} />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-navy">
                      {lang === 'id' ? 'Tersertifikasi CDOB' : 'CDOB Certified'}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      No. CDOB5310/S/3-0684/03/2026 · {lang === 'id' ? 'Berlaku hingga' : 'Valid until'} 18 March 2031
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
