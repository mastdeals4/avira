'use client';

import { useState } from 'react';
import { X, CircleCheck as CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export type EnquiryItem = {
  id: string;
  name: string;
};

type Props = {
  items: EnquiryItem[];
  onRemove: (id: string) => void;
};

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const empty: FormData = { name: '', company: '', email: '', phone: '', message: '' };
const WHATSAPP_NUMBER = '6285888600999';

export default function EnquiryPanel({ items, onRemove }: Props) {
  const { lang } = useLanguage();
  const [form, setForm] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = lang === 'id' ? 'Wajib diisi' : 'Required';
    if (!form.company.trim()) e.company = lang === 'id' ? 'Wajib diisi' : 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = lang === 'id' ? 'Email valid wajib diisi' : 'Valid email required';
    if (!form.phone.trim()) e.phone = lang === 'id' ? 'Wajib diisi' : 'Required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const productList = items.map((i) => i.name).join(', ');
      const message = [
        lang === 'id'
          ? 'Halo Avira, saya ingin mengirim pertanyaan produk.'
          : 'Hello Avira, I would like to send a product enquiry.',
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Products: ${productList}`,
        form.message ? `Message: ${form.message}` : '',
      ].filter(Boolean).join('\n');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      setSuccess(true);
      setForm(empty);
    } finally {
      setSubmitting(false);
    }
  };

  const field = (
    label: string,
    key: keyof FormData,
    type = 'text',
    placeholder = '',
  ) => (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
        {label} {key !== 'message' && <span className="text-red-400 normal-case">*</span>}
      </label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => {
          setForm((p) => ({ ...p, [key]: e.target.value }));
          if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
        }}
        placeholder={placeholder}
        className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 transition-colors ${
          errors[key]
            ? 'border-red-300 focus:ring-red-300 bg-red-50'
            : 'border-gray-200 focus:ring-brand-blue focus:border-brand-blue'
        }`}
      />
      {errors[key] && <p className="text-red-400 text-xs mt-0.5">{errors[key]}</p>}
    </div>
  );

  if (success) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto">
          <CheckCircle size={24} className="text-brand-green" />
        </div>
        <h3 className="font-semibold text-gray-900 text-sm">{lang === 'id' ? 'Pertanyaan Siap Dikirim' : 'Enquiry Ready'}</h3>
        <p className="text-xs text-gray-500">
          {lang === 'id'
            ? 'WhatsApp telah terbuka dengan detail pertanyaan Anda.'
            : 'WhatsApp has opened with your enquiry details.'}
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-xs text-brand-green hover:underline font-medium"
        >
          {lang === 'id' ? 'Kirim pertanyaan lain' : 'Submit another enquiry'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-brand-navy px-4 py-3">
        <h2 className="text-white font-semibold text-sm">{lang === 'id' ? 'Form Pertanyaan' : 'Enquiry Form'}</h2>
        <p className="text-brand-blue-light text-xs mt-0.5">
          {lang === 'id' ? 'Kirim melalui WhatsApp resmi Avira' : 'Send through the official Avira WhatsApp'}
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Selected products */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {lang === 'id' ? 'Produk' : 'Products'} ({items.length})
          </p>
          {items.length === 0 ? (
            <p className="text-xs text-gray-400 italic py-3 text-center border border-dashed border-gray-200 rounded">
              {lang === 'id' ? 'Klik + pada produk untuk menambahkannya' : 'Click + on any product to add it'}
            </p>
          ) : (
            <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-2 bg-gray-50 rounded px-2.5 py-1.5"
                >
                  <span className="text-xs text-gray-700 font-medium leading-snug flex-1 min-w-0 truncate">
                    {item.name}
                  </span>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-gray-400 hover:text-red-400 flex-shrink-0 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form fields */}
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
            {field(lang === 'id' ? 'Nama' : 'Name', 'name', 'text', lang === 'id' ? 'Nama lengkap Anda' : 'Your full name')}
            {field(lang === 'id' ? 'Perusahaan' : 'Company', 'company', 'text', lang === 'id' ? 'Nama perusahaan' : 'Company name')}
            {field('Email', 'email', 'email', 'email@company.com')}
            {field(lang === 'id' ? 'Nomor Telepon' : 'Phone', 'phone', 'tel', '+62 xxx xxxx xxxx')}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {lang === 'id' ? 'Pesan' : 'Message'}
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              rows={3}
              placeholder={lang === 'id' ? 'Jumlah, spesifikasi, atau kebutuhan lain...' : 'Quantity, specifications, or other requirements...'}
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting || items.length === 0}
            className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded text-sm transition-colors"
          >
            <Send size={13} />
            {submitting
              ? (lang === 'id' ? 'Mengirim...' : 'Sending...')
              : (lang === 'id' ? 'Kirim Pertanyaan' : 'Send Enquiry')}
          </button>
          {items.length === 0 && (
            <p className="text-center text-xs text-gray-400">
              {lang === 'id' ? 'Tambahkan minimal satu produk untuk mengirim pertanyaan' : 'Add at least one product to enquire'}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
