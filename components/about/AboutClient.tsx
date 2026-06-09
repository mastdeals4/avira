'use client';

import { CircleCheck, FileText, Globe, PackageCheck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function AboutClient() {
  const { lang } = useLanguage();

  const mission = lang === 'id' ? [
    'Memasok API, eksipien, bahan nutrasetikal, ekstrak herbal, probiotik, dan minyak dari sumber yang andal',
    'Menjaga praktik penyimpanan, penanganan, ketertelusuran, dan distribusi sesuai CDOB',
    'Mendukung pelanggan dengan ketersediaan stok lokal dan pemenuhan responsif',
    'Menyediakan dukungan dokumen untuk procurement, QA, dan proses terkait BPOM',
  ] : [
    'Supply APIs, excipients, nutraceutical ingredients, herbal extracts, probiotics, and oils from reliable sources',
    'Maintain CDOB-compliant storage, handling, traceability, and distribution practices',
    'Support customers with local stock availability and responsive fulfilment',
    'Provide documentation support for procurement, QA, and BPOM-related processes',
  ];

  const profile = lang === 'id' ? [
    'PT Avira Perkasa Farma adalah perusahaan perdagangan dan distribusi farmasi yang melayani produsen Indonesia dengan Active Pharmaceutical Ingredients, eksipien, bahan nutrasetikal, ekstrak herbal, probiotik, dan minyak.',
    'Perusahaan menggabungkan ketersediaan stok lokal dengan jaringan sourcing global untuk mendukung pasokan bahan baku, kesiapan dokumen, dan pemenuhan responsif untuk kebutuhan rutin maupun proyek.',
  ] : [
    'PT Avira Perkasa Farma is a pharmaceutical trading and distribution company serving Indonesian manufacturers with Active Pharmaceutical Ingredients, excipients, nutraceutical ingredients, herbal extracts, probiotics, and oils.',
    'The company combines local stock availability with a global sourcing network to support reliable raw material supply, documentation readiness, and responsive fulfilment for routine and project-based requirements.',
  ];

  const strengths = [
    { icon: PackageCheck, label: lang === 'id' ? 'Stok Jakarta' : 'Jakarta Stock', desc: lang === 'id' ? 'Pemenuhan cepat' : 'Fast fulfilment' },
    { icon: Globe, label: lang === 'id' ? 'Sourcing Global' : 'Global Sourcing', desc: lang === 'id' ? 'India, Tiongkok, Eropa' : 'India, China, Europe' },
    { icon: FileText, label: lang === 'id' ? 'Dukungan Dokumen' : 'Document Support', desc: 'COA, MSDS, GMP' },
    { icon: ShieldCheck, label: lang === 'id' ? 'Penanganan CDOB' : 'CDOB Handling', desc: lang === 'id' ? 'Tersertifikasi' : 'Certified' },
  ];

  return (
    <div className="bg-white">
      <div className="bg-brand-navy">
        <div className="container-main py-14 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-brand-green text-[11px] font-bold uppercase tracking-[0.15em] mb-3">
              {lang === 'id' ? 'Tentang Kami' : 'About Us'}
            </p>
            <h1 className="font-serif text-[2.25rem] md:text-[2.75rem] text-white leading-tight mb-4">
              {lang === 'id' ? 'Tentang PT Avira Perkasa Farma' : 'About PT Avira Perkasa Farma'}
            </h1>
            <p className="text-white/65 text-[15px] leading-relaxed max-w-2xl">{profile[0]}</p>
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-18 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 items-start">
            <div>
              <p className="section-label">{lang === 'id' ? 'Profil Perusahaan' : 'Company Profile'}</p>
              <div className="section-divider" />
              <h2 className="section-title mb-5">
                {lang === 'id' ? 'Distributor Bahan Baku Farmasi' : 'Pharmaceutical Raw Material Distributor'}
              </h2>
              <div className="space-y-4 text-[14.5px] text-gray-600 leading-relaxed">
                {profile.map((text) => <p key={text}>{text}</p>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-[#F4F7FA] border border-gray-200 rounded-xl p-5 hover:border-brand-navy/20 transition-all duration-200">
                  <div className="w-10 h-10 bg-brand-navy/7 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={18} className="text-brand-navy" strokeWidth={1.5} />
                  </div>
                  <p className="text-[13.5px] font-semibold text-brand-navy mb-0.5">{label}</p>
                  <p className="text-[12px] text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-18 bg-[#F4F7FA]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
              <div className="w-8 h-[3px] bg-brand-green rounded-full mb-4" />
              <h2 className="font-serif text-2xl text-brand-navy mb-3">{lang === 'id' ? 'Visi' : 'Vision'}</h2>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {lang === 'id'
                  ? 'Menjadi mitra distribusi bahan baku farmasi terpercaya di Indonesia, dikenal atas pasokan yang andal, dokumen mutu, dan dukungan regulasi.'
                  : "To be Indonesia's trusted pharmaceutical raw material distribution partner, recognized for reliable supply, quality documentation, and regulatory support."}
              </p>
            </section>
            <section className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
              <div className="w-8 h-[3px] bg-brand-green rounded-full mb-4" />
              <h2 className="font-serif text-2xl text-brand-navy mb-4">{lang === 'id' ? 'Misi' : 'Mission'}</h2>
              <ul className="space-y-3">
                {mission.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                    <CircleCheck size={15} className="text-brand-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-18 bg-white">
        <div className="container-main">
          <div className="bg-brand-navy rounded-2xl p-8 lg:p-10 max-w-4xl">
            <p className="text-brand-green text-[11px] font-bold uppercase tracking-[0.15em] mb-3">
              {lang === 'id' ? 'Kebijakan Mutu' : 'Quality Policy'}
            </p>
            <h2 className="font-serif text-2xl text-white mb-4">{lang === 'id' ? 'Komitmen Kualitas' : 'Quality Commitment'}</h2>
            <p className="text-white/70 text-[14.5px] leading-relaxed">
              {lang === 'id'
                ? 'PT Avira Perkasa Farma berkomitmen memasok bahan baku farmasi dengan asal yang jelas, dokumentasi yang tepat, dan praktik penanganan yang selaras dengan persyaratan CDOB.'
                : 'PT Avira Perkasa Farma is committed to supplying pharmaceutical raw materials with clear origin, proper documentation, and handling practices aligned with CDOB requirements.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
