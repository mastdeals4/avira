'use client';

import Link from 'next/link';
import { CircleCheck, FileText, Globe, PackageCheck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const serviceCards = [
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
          <p className="section-label mb-2">{lang === 'id' ? 'Layanan' : 'Services'}</p>
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
              <article key={titleEn} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded border border-brand-blue/15 bg-brand-blue-light flex items-center justify-center">
                    <Icon size={18} className="text-brand-blue" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] text-gray-300 font-semibold tracking-wide">0{idx + 1}</span>
                </div>
                <h2 className="text-sm font-semibold text-brand-navy mb-2 leading-snug">
                  {lang === 'id' ? titleId : titleEn}
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
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
            <div className="bg-brand-navy p-6">
              <div className="flex items-start gap-4 max-w-4xl">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} className="text-brand-blue-light" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-brand-blue-light text-xs font-semibold uppercase tracking-widest mb-2">
                    {lang === 'id' ? 'Kepatuhan' : 'Compliance'}
                  </p>
                  <h2 className="font-serif text-2xl text-white mb-2">
                    {lang === 'id' ? 'Distributor Tersertifikasi CDOB' : 'CDOB Certified Distributor'}
                  </h2>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {lang === 'id'
                      ? 'Aktivitas penyimpanan, penanganan, ketertelusuran, dan distribusi dikelola sejalan dengan prinsip CDOB untuk bahan baku farmasi.'
                      : 'Storage, handling, traceability, and distribution activities are managed in line with CDOB principles for pharmaceutical raw materials.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {complianceItems.map(([label, value]) => (
                <div key={label} className="bg-white p-4">
                  <div className="flex items-start gap-2.5">
                    <CircleCheck size={14} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy">{label}</p>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{value}</p>
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
            <Link href="/contact" className="border border-brand-blue/25 bg-brand-blue-light text-brand-blue hover:bg-white hover:border-brand-blue font-semibold px-5 py-2.5 rounded text-sm transition-colors">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
