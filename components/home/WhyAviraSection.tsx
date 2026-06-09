'use client';

import { FileText, Globe, PackageCheck, ShieldCheck } from 'lucide-react';

import { useLanguage } from '@/lib/i18n';

const items = [
  {
    icon: PackageCheck,
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
    icon: FileText,
    titleEn: 'DOCUMENTATION & BPOM SUPPORT',
    titleId: 'DUKUNGAN DOKUMEN & BPOM',
    descEn: 'COA, MSDS/SDS, GMP statements, and Certificate of Origin provided, with hands-on BPOM import documentation support.',
    descId: 'COA, MSDS/SDS, pernyataan GMP, dan Certificate of Origin disediakan, dengan dukungan langsung untuk dokumentasi impor BPOM.',
  },
];

export default function WhyAviraSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div className="max-w-2xl min-w-0">
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
              {lang === 'id' ? 'Keunggulan Layanan' : 'Supply Support'}
            </p>
            <h2 className="section-title break-words">{lang === 'id' ? 'Pasokan, Sourcing, dan Dokumen' : 'Supply, Sourcing, and Documentation'}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, titleEn, titleId, descEn, descId }, idx) => (
            <div key={titleEn} className="bg-white border border-gray-200 rounded-lg p-5 hover:border-brand-blue/30 hover:shadow-sm transition-all min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded border border-brand-blue/15 bg-brand-blue-light flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-blue" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] text-gray-300 font-semibold tracking-wide">0{idx + 1}</span>
              </div>
              <h3 className="text-sm font-semibold text-brand-navy mb-2 leading-snug">
                {lang === 'id' ? titleId : titleEn}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed break-words">
                {lang === 'id' ? descId : descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
