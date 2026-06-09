'use client';

import { useState } from 'react';
import { Globe, Mail, MapPin, MessageCircle, Clock, CircleCheck as CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
};

const WHATSAPP_NUMBER = '6285888600999';
const EMAIL = 'sales@avira.co.id';
const WEBSITE = 'www.avira.co.id';

export default function ContactClient() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = lang === 'id' ? 'Nama wajib diisi' : 'Name is required';
    if (!form.company.trim()) newErrors.company = lang === 'id' ? 'Nama perusahaan wajib diisi' : 'Company is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = lang === 'id' ? 'Email valid wajib diisi' : 'Valid email is required';
    if (!form.phone.trim()) newErrors.phone = lang === 'id' ? 'Nomor telepon wajib diisi' : 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const message = [
        lang === 'id'
          ? 'Halo Avira, saya ingin mengirim pertanyaan produk.'
          : 'Hello Avira, I would like to send a product enquiry.',
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        form.product ? `Product: ${form.product}` : '',
        form.quantity ? `Quantity: ${form.quantity}` : '',
        form.message ? `Message: ${form.message}` : '',
      ].filter(Boolean).join('\n');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      setSuccess(true);
      setForm(initialForm);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition-colors ${
      errors[field]
        ? 'border-red-400 focus:ring-red-400'
        : 'border-gray-200 focus:ring-brand-green focus:border-brand-green'
    }`;

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-14">
          <div className="max-w-2xl">
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
              {lang === 'id' ? 'Hubungi Kami' : 'Get In Touch'}
            </p>
            <h1 className="font-serif text-4xl text-brand-green mb-4">{t('contact_title')}</h1>
            <p className="text-gray-500 leading-relaxed">{t('contact_sub')}</p>
          </div>
        </div>
      </div>

      <div className="container-main py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="card-base p-8">
              <h2 className="font-serif text-2xl text-brand-green mb-6">
                {lang === 'id' ? 'Kirim Pertanyaan' : 'Send an Enquiry'}
              </h2>

              {success ? (
                <div className="flex flex-col items-center text-center py-10 gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-green-light flex items-center justify-center">
                    <CheckCircle size={28} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-brand-green mb-2">
                      {lang === 'id' ? 'Pertanyaan Siap Dikirim' : 'Enquiry Ready'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {lang === 'id'
                        ? 'WhatsApp telah terbuka dengan detail pertanyaan Anda. Tim Avira akan menindaklanjuti melalui kanal resmi.'
                        : 'WhatsApp has opened with your enquiry details. The Avira team will follow up through the official channel.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 text-sm text-brand-green font-medium hover:underline"
                  >
                    {lang === 'id' ? 'Kirim pertanyaan lain' : 'Submit another enquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        {t('form_name')} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass('name')}
                        placeholder={lang === 'id' ? 'Nama Anda' : 'Your name'}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        {t('form_company')} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass('company')}
                        placeholder={lang === 'id' ? 'Nama perusahaan Anda' : 'Your company name'}
                      />
                      {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        {t('form_email')} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass('email')}
                        placeholder="email@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        {t('form_phone')} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass('phone')}
                        placeholder="+62 xxx xxxx xxxx"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        {t('form_product')}
                      </label>
                      <input
                        type="text"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className={inputClass('product')}
                        placeholder={lang === 'id' ? 'mis. Paracetamol, Metformin HCl' : 'e.g. Paracetamol, Metformin HCl'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        {t('form_quantity')}
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className={inputClass('quantity')}
                        placeholder={lang === 'id' ? 'mis. 100 kg, 500 kg/bulan' : 'e.g. 100 kg, 500 kg/month'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                      {t('form_message')}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={`${inputClass('message')} resize-none`}
                      placeholder={lang === 'id' ? 'Tuliskan kebutuhan spesifik Anda...' : 'Describe your specific requirements...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded text-sm transition-colors duration-200"
                  >
                    {submitting
                      ? (lang === 'id' ? 'Mengirim...' : 'Sending...')
                      : t('form_submit')}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-base p-6 space-y-5">
              <h3 className="font-serif text-lg text-brand-green">
                {lang === 'id' ? 'Informasi Kontak' : 'Contact Information'}
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-brand-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Alamat' : 'Address'}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Rukan Plaza Sunter Terrace, No. C12,<br />
                    Jl. Danau Sunter Utara, Sunter Agung,<br />
                    Tanjung Priok, Jakarta Utara 14350,<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={14} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'WhatsApp / Pertanyaan' : 'WhatsApp / Enquiries'}
                  </p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-brand-green transition-colors">
                    +62 85888600999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a href={`mailto:${EMAIL}`} className="text-sm text-gray-700 hover:text-brand-green transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  <Globe size={14} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Website
                  </p>
                  <a href={`https://${WEBSITE}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-brand-green transition-colors">
                    {WEBSITE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-brand-green-light flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {lang === 'id' ? 'Jam Operasional' : 'Business Hours'}
                  </p>
                  <p className="text-sm text-gray-700">
                    {lang === 'id' ? 'Senin – Jumat' : 'Monday – Friday'}: 08:00 – 17:00<br />
                    {lang === 'id' ? 'Sabtu' : 'Saturday'}: 08:00 – 13:00
                  </p>
                </div>
              </div>
            </div>

            <div className="card-base overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Rukan%20Plaza%20Sunter%20Terrace%20No.%20C12%2C%20Jl.%20Danau%20Sunter%20Utara%2C%20Sunter%20Agung%2C%20Tanjung%20Priok%2C%20Jakarta%20Utara%2014350%2C%20Indonesia&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT Avira Perkasa Farma Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
