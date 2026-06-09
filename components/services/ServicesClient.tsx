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
      <div className="bg-brand-navy">
        <div className="container-main py-14 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-brand-green text-[11px] font-bold uppercase tracking-[0.15em] mb-3">
              {lang === 'id' ? 'Layanan' : 'Services'}
            </p>
            <h1 className="font-serif text-[2.25rem] md:text-[2.75rem] text-white leading-tight mb-4">
              {lang === 'id' ? 'Dukungan Pasokan & Dokumentasi' : 'Supply & Documentation Support'}
            </h1>
            <p className="text-white/65 text-[15px] leading-relaxed max-w-2xl">
              {lang === 'id'
                ? 'Dukungan ringkas untuk stok lokal, sourcing global, operasional sesuai CDOB, dan kebutuhan dokumen procurement, QA, serta BPOM.'
                : 'Practical support for local stock, global sourcing, CDOB-compliant operations, and documentation needs across procurement, QA, and BPOM-related processes.'}
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-18 bg-[#F4F7FA]">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {serviceCards.map(({ icon: Icon, titleEn, titleId, descEn, descId }, idx) => (
              <article key={titleEn} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-navy/20 hover:shadow-[0_8px_32px_rgba(12,35,64,0.12)] transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-navy/6 flex items-center justify-center flex-shrink-0">
                    <Icon size={21} className="text-brand-navy" strokeWidth={1.4} />
                  </div>
                  <span className="text-[11px] text-gray-200 font-bold tracking-widest mt-1">0{idx + 1}</span>
                </div>
                <div className="w-8 h-[3px] bg-brand-green rounded-full mb-4" />
                <h2 className="text-[11.5px] font-bold text-brand-navy mb-2.5 leading-snug tracking-wide uppercase">
                  {lang === 'id' ? titleId : titleEn}
                </h2>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  {lang === 'id' ? descId : descEn}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-18 bg-white">
        <div className="container-main">
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="relative bg-brand-navy p-8 overflow-hidden">
              <MoleculeWatermark className="absolute inset-0 w-full h-full text-white opacity-[0.04] pointer-events-none" />
              <div className="relative z-10 flex items-start gap-4 max-w-4xl">
                <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={21} className="text-brand-green" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-brand-green text-[11px] font-bold uppercase tracking-[0.15em] mb-2">
                    {lang === 'id' ? 'Kepatuhan' : 'Compliance'}
                  </p>
                  <h2 className="font-serif text-[1.5rem] md:text-2xl text-white mb-2">
                    {lang === 'id' ? 'Distributor Tersertifikasi CDOB' : 'CDOB Certified Distributor'}
                  </h2>
                  <p className="text-white/65 text-[14px] leading-relaxed">
                    {lang === 'id'
                      ? 'Aktivitas penyimpanan, penanganan, ketertelusuran, dan distribusi dikelola sejalan dengan prinsip CDOB untuk bahan baku farmasi.'
                      : 'Storage, handling, traceability, and distribution activities are managed in line with CDOB principles for pharmaceutical raw materials.'}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
              {complianceItems.map(([label, value]) => (
                <div key={label} className="bg-white p-5 hover:bg-[#F4F7FA] transition-colors">
                  <div className="flex items-start gap-3">
                    <CircleCheck size={14} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[11.5px] font-semibold uppercase tracking-wide text-brand-navy">{label}</p>
                      <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary px-6 py-3">
              {lang === 'id' ? 'Lihat Produk' : 'Browse Products'}
            </Link>
            <Link href="/contact" className="border border-brand-navy/20 bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10 font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
