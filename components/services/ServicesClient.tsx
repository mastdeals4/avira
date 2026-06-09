'use client';

import Link from 'next/link';
import { CircleCheck, ClipboardCheck, Globe as Globe2, ShieldCheck, Warehouse } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import MoleculeWatermark from '@/components/ui/MoleculeWatermark';

const serviceCards = [
  {
    icon: Warehouse,
    titleEn: 'LOCAL STOCK, FAST FULFILMENT',
    titleId: 'STOK LOKAL, PEMENUHAN CEPAT',
    descEn: 'We hold stock of fast-moving APIs and excipients in Jakarta, so regular requirements ship quickly without per-order import lead times.',
    descId: 'Kami menyimpan stok API dan eksipien fast-moving di Jakarta, sehingga kebutuhan rutin dapat dikirim cepat tanpa lead time impor per pesanan.',
  },
  {
    icon: Globe2,
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

export default function ServicesClient() {
  const { lang } = useLanguage();

  const complianceItems = lang === 'id' ? [
    ['Nomor Sertifikat CDOB', 'CDOB5310/S/3-0684/03/2026'],
    ['Berlaku Hingga', '18 March 2031'],
    ['Dukungan COA / MSDS / SDS', 'Tersedia untuk tinjauan dokumen'],
    ['Dukungan Pernyataan GMP', 'Sesuai ketersediaan dokumen pabrikan'],
    ['Dukungan Certificate of Origin', 'Sesuai ketersediaan dan kebutuhan impor'],
    ['Dukungan Dokumentasi Impor BPOM', 'Untuk proses terkait regulasi'],
  ] : [
    ['CDOB Certificate Number', 'CDOB5310/S/3-0684/03/2026'],
    ['Valid Until', '18 March 2031'],
    ['COA / MSDS / SDS Support', 'Available for documentation review'],
    ['GMP Statement Support', 'Subject to manufacturer document availability'],
    ['Certificate of Origin Support', 'Subject to availability and import requirements'],
    ['BPOM Import Documentation Support', 'For regulatory-related processes'],
  ];

  return (
    <div className="bg-white">
      <div className="border-b border-gray-100">
        <div className="container-main py-8 lg:py-10">
          <p className="text-brand-navy/50 text-xs font-semibold uppercase tracking-widest mb-2">{lang === 'id' ? 'Layanan' : 'Services'}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-brand-navy mb-3">
            {lang === 'id' ? 'Dukungan Pasokan & Dokumentasi' : 'Supply & Documentation Support'}
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
            {lang === 'id'
              ? 'Dukungan ringkas untuk stok lokal, sourcing global, operasional sesuai CDOB, dan kebutuhan dokumen procurement, QA, serta BPOM.'
              : 'Practical support for local stock, global sourcing, CDOB-compliant operations, and documentation needs across procurement, QA, and BPOM-related processes.'}
          </p>
        </div>
      </div>

      <div className="section-padding bg-[#F7FAFC]">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {serviceCards.map(({ icon: Icon, titleEn, titleId, descEn, descId }, idx) => (
              <article key={titleEn} className="bg-white border border-gray-200 rounded-lg p-5 hover:border-brand-navy/20 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg border border-brand-navy/10 bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand-navy" strokeWidth={1.4} />
                  </div>
                  <span className="text-[10px] text-gray-300 font-bold tracking-widest mt-1">0{idx + 1}</span>
                </div>
                <div className="w-6 h-px bg-brand-green mb-3" />
                <h2 className="text-xs font-bold text-brand-navy mb-2 leading-snug tracking-wide uppercase">
                  {lang === 'id' ? titleId : titleEn}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {lang === 'id' ? descId : descEn}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-main">
          <section className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative bg-brand-navy p-6 overflow-hidden">
              <MoleculeWatermark className="absolute inset-0 w-full h-full text-white opacity-[0.06] pointer-events-none" />
              <div className="relative z-10 flex items-start gap-4 max-w-4xl">
                <div className="w-10 h-10 rounded border border-white/15 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} className="text-brand-green" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-2">
                    {lang === 'id' ? 'Kepatuhan' : 'Compliance'}
                  </p>
                  <h2 className="font-serif text-2xl text-white mb-2">
                    {lang === 'id' ? 'Distributor Tersertifikasi CDOB' : 'CDOB Certified Distributor'}
                  </h2>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {lang === 'id'
                      ? 'Aktivitas penyimpanan, penanganan, ketertelusuran, dan distribusi dikelola sejalan dengan prinsip CDOB untuk bahan baku farmasi.'
                      : 'Storage, handling, traceability, and distribution activities are managed in line with CDOB principles for pharmaceutical raw materials.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
              {complianceItems.map(([label, value]) => (
                <div key={label} className="bg-white p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-2.5">
                    <CircleCheck size={14} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy">{label}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary px-5 py-2.5">
              {lang === 'id' ? 'Lihat Produk' : 'Browse Products'}
            </Link>
            <Link href="/contact" className="border border-brand-navy/20 bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10 font-semibold px-5 py-2.5 rounded text-sm transition-colors">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
