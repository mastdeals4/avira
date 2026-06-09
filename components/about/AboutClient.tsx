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
    { icon: PackageCheck, label: lang === 'id' ? 'Stok Jakarta' : 'Jakarta Stock' },
    { icon: Globe, label: lang === 'id' ? 'Sourcing Global' : 'Global Sourcing' },
    { icon: FileText, label: lang === 'id' ? 'Dukungan Dokumen' : 'Document Support' },
    { icon: ShieldCheck, label: lang === 'id' ? 'Penanganan CDOB' : 'CDOB Handling' },
  ];

  return (
    <div className="bg-white">
      <div className="border-b border-gray-100">
        <div className="container-main py-8 lg:py-10">
          <p className="section-label mb-2">{lang === 'id' ? 'Tentang Kami' : 'About Us'}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-brand-navy mb-3">
            {lang === 'id' ? 'Tentang PT Avira Perkasa Farma' : 'About PT Avira Perkasa Farma'}
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
            {profile[0]}
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 items-start">
            <div>
              <p className="section-label mb-2">{lang === 'id' ? 'Profil Perusahaan' : 'Company Profile'}</p>
              <h2 className="section-title mb-4">
                {lang === 'id' ? 'Distributor Bahan Baku Farmasi' : 'Pharmaceutical Raw Material Distributor'}
              </h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                {profile.map((text) => <p key={text}>{text}</p>)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {strengths.map(({ icon: Icon, label }) => (
                <div key={label} className="border border-gray-200 bg-[#F8FAFC] rounded-lg p-4">
                  <Icon size={18} className="text-brand-blue mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-brand-navy">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-[#F7FAFC]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <section className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="font-serif text-2xl text-brand-navy mb-3">{lang === 'id' ? 'Visi' : 'Vision'}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {lang === 'id'
                  ? 'Menjadi mitra distribusi bahan baku farmasi terpercaya di Indonesia, dikenal atas pasokan yang andal, dokumen mutu, dan dukungan regulasi.'
                  : 'To be Indonesia’s trusted pharmaceutical raw material distribution partner, recognized for reliable supply, quality documentation, and regulatory support.'}
              </p>
            </section>

            <section className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="font-serif text-2xl text-brand-navy mb-3">{lang === 'id' ? 'Misi' : 'Mission'}</h2>
              <ul className="space-y-2">
                {mission.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CircleCheck size={14} className="text-brand-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-main">
          <section className="border-l-4 border-brand-green bg-[#F8FAFC] rounded-r-lg p-6 max-w-4xl">
            <p className="section-label mb-2">{lang === 'id' ? 'Kebijakan Mutu' : 'Quality Policy'}</p>
            <h2 className="section-title mb-3">{lang === 'id' ? 'Kebijakan Mutu' : 'Quality Policy'}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {lang === 'id'
                ? 'PT Avira Perkasa Farma berkomitmen memasok bahan baku farmasi dengan asal yang jelas, dokumentasi yang tepat, dan praktik penanganan yang selaras dengan persyaratan CDOB.'
                : 'PT Avira Perkasa Farma is committed to supplying pharmaceutical raw materials with clear origin, proper documentation, and handling practices aligned with CDOB requirements.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
