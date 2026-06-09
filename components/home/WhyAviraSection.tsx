'use client';

import { useState, useEffect } from 'react';
import { Warehouse, Globe, ShieldCheck, ClipboardCheck } from 'lucide-react';

import { useLanguage } from '@/lib/i18n';

const items = [
  {
    icon: Warehouse,
    titleEn: 'LOCAL STOCK, FAST FULFILMENT',
    titleId: 'STOK LOKAL, PEMENUHAN CEPAT',
    descEn: 'We hold stock of fast-moving APIs and excipients in Jakarta, so regular requirements ship quickly without per-order import lead times.',
    descId: 'Kami menyimpan stok API dan eksipien fast-moving di Jakarta, sehingga kebutuhan rutin dapat dikirim cepat tanpa lead time impor per pesanan.',
  },
  {
    icon: Globe,
    titleEn: 'GLOBAL SOURCING NETWORK',
    titleId: 'JARINGAN SOURCING GLOBAL',
    descEn: 'Direct relationships with GMP-certified manufacturers in India, China, and Europe for consistent quality across the full catalogue.',
    descId: 'Hubungan langsung dengan produsen bersertifikat GMP di India, Tiongkok, dan Eropa untuk kualitas yang konsisten di seluruh katalog.',
  },
  {
    icon: ShieldCheck,
    titleEn: 'CDOB-COMPLIANT OPERATIONS',
    titleId: 'OPERASIONAL SESUAI CDOB',
    descEn: 'Storage, handling, and distribution run under CDOB licensing at every step.',
    descId: 'Penyimpanan, penanganan, dan distribusi berjalan di bawah perizinan CDOB pada setiap tahap.',
  },
  {
    icon: ClipboardCheck,
    titleEn: 'DOCUMENTATION & BPOM SUPPORT',
    titleId: 'DUKUNGAN DOKUMEN & BPOM',
    descEn: 'COA, MSDS/SDS, GMP statements, and Certificate of Origin provided, with hands-on BPOM import documentation support.',
    descId: 'COA, MSDS/SDS, pernyataan GMP, dan Certificate of Origin disediakan, dengan dukungan langsung untuk dokumentasi impor BPOM.',
  },
];

export default function WhyAviraSection() {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div className="max-w-2xl min-w-0">
            <p className="text-brand-navy/50 text-xs font-semibold uppercase tracking-widest mb-3">
              {lang === 'id' ? 'Keunggulan Layanan' : 'Supply Support'}
            </p>
            <h2 className="section-title break-words">{lang === 'id' ? 'Pasokan, Sourcing, dan Dokumen' : 'Supply, Sourcing, and Documentation'}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, titleEn, titleId, descEn, descId }, idx) => (
            <div key={titleEn} className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-brand-navy/25 hover:shadow-md transition-all duration-200 min-w-0">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg border border-brand-navy/12 bg-brand-navy/5 group-hover:bg-brand-navy/8 flex items-center justify-center flex-shrink-0 transition-colors">
                  {mounted && <Icon size={20} className="text-brand-navy" strokeWidth={1.4} />}
                </div>
                <span className="text-[10px] text-gray-300 font-bold tracking-widest mt-1">0{idx + 1}</span>
              </div>
              <div className="w-6 h-px bg-brand-green mb-3" />
              <h3 className="text-xs font-bold text-brand-navy mb-2 leading-snug tracking-wide uppercase">
                {lang === 'id' ? titleId : titleEn}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed break-words">
                {lang === 'id' ? descId : descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
