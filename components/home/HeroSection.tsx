'use client';

import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function HeroSection() {
  const { t, lang } = useLanguage();
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
    <section className="bg-white border-b border-gray-100 overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1.04fr_0.96fr] gap-8 lg:gap-12 py-8 lg:py-14 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 bg-brand-blue-light border border-brand-blue/20 text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
              Jakarta, Indonesia
            </div>

            <h1 className="font-serif text-[2rem] md:text-4xl lg:text-[2.75rem] text-brand-navy leading-[1.12] mb-4 break-words">
              {t('hero_headline')}
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
              {t('hero_sub')}
            </p>

            <ul className="space-y-2.5 mb-6">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700 min-w-0">
                  <span className="w-5 h-5 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={13} className="text-brand-green" strokeWidth={2.5} />
                  </span>
                  <span className="min-w-0 break-words">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200 shadow-sm"
              >
                {t('hero_browse')}
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-brand-blue/25 bg-brand-blue-light text-brand-blue hover:border-brand-blue hover:bg-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200"
              >
                {t('hero_rfq')}
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img
                src="https://images.pexels.com/photos/8460378/pexels-photo-8460378.jpeg?auto=compress&cs=tinysrgb&w=900&h=520&fit=crop"
                alt="Pharmaceutical quality documentation and raw material review"
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/96 rounded-md p-3.5 shadow-lg border border-gray-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand-blue-light rounded flex items-center justify-center flex-shrink-0">
                    <FileText size={17} className="text-brand-blue" strokeWidth={1.6} />
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
