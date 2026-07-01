import { Mail, Phone, MessageSquare, Clock, ArrowLeft, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CONFIG, getWhatsAppLink } from '../config';

export default function ContactoPage({ onNavigate }) {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contacto.errors.name');
    if (!formData.email.trim()) {
      newErrors.email = t('contacto.errors.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contacto.errors.emailInvalid');
    }
    if (!formData.phone.trim()) newErrors.phone = t('contacto.errors.phone');
    if (!formData.message.trim()) newErrors.message = t('contacto.errors.message');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  const handleWhatsAppClick = () => {
    const message = "Hola Orianza, quisiera comunicarme con un asesor de servicio al cliente.";
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto min-h-[85vh] flex flex-col justify-center animate-fade-in text-left">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-brand-text-body hover:text-brand-primary transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
        <span>{t('common.backToHome')}</span>
      </button>

      {/* Header */}
      <div className="mb-12 space-y-3">
        <h1 className="text-4xl font-serif text-brand-text-heading tracking-tight">
          {t('contacto.title')}
        </h1>
        <p className="text-brand-text-body text-sm md:text-base font-light max-w-xl">
          {t('contacto.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Details Card & WhatsApp Button */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-brand-border rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-brand-text-heading flex items-center gap-2">
              <MessageSquare size={20} className="text-brand-primary" />
              <span>{t('contacto.directChannels')}</span>
            </h3>
            
            <div className="space-y-5 text-sm text-brand-text-body">
              {/* WhatsApp Row */}
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3.5 w-full p-3.5 bg-brand-whatsapp/10 text-brand-whatsapp hover:bg-brand-whatsapp/25 rounded-2xl transition-all duration-100 font-bold text-left cursor-pointer"
              >
                <MessageSquare size={20} className="shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold opacity-75">{t('contacto.officialWhatsapp')}</span>
                  <span className="text-sm">{CONTACT_CONFIG.whatsappDisplay || '—'}</span>
                </div>
              </button>

              {/* Phone Row */}
              <a 
                href={CONTACT_CONFIG.telefonoFijo ? `tel:${CONTACT_CONFIG.telefonoFijo.replace(/[^0-9+]/g, '')}` : "#"} 
                className="flex items-center gap-3.5 p-3.5 bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10 rounded-2xl transition-all duration-100 font-bold"
              >
                <Phone size={20} className="shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold opacity-75">{t('contacto.landline')}</span>
                  <span className="text-sm">{CONTACT_CONFIG.telefonoFijo || '—'}</span>
                </div>
              </a>

              {/* Email Row */}
              <a 
                href={CONTACT_CONFIG.email ? `mailto:${CONTACT_CONFIG.email}` : "#"} 
                className="flex items-center gap-3.5 p-3.5 border border-brand-border hover:bg-brand-bg-light rounded-2xl transition-all duration-100 font-bold"
              >
                <Mail size={20} className="shrink-0 text-brand-primary" />
                <div className="flex flex-col text-brand-text-heading">
                  <span className="text-xs font-semibold opacity-75">{t('contacto.emailLabel')}</span>
                  <span className="text-sm">{CONTACT_CONFIG.email || '—'}</span>
                </div>
              </a>

              {/* Location Row */}
              <div 
                className="flex items-center gap-3.5 p-3.5 border border-brand-border rounded-2xl font-bold"
              >
                <MapPin size={20} className="shrink-0 text-brand-primary" />
                <div className="flex flex-col text-brand-text-heading">
                  <span className="text-xs font-semibold opacity-75">{language === 'es' ? 'Dirección' : 'Address'}</span>
                  <span className="text-sm font-normal">{CONTACT_CONFIG.direccion || '—'}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5">
                <Clock size={20} className="text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-text-heading text-sm">{t('contacto.hoursTitle')}</p>
                  <p className="text-xs font-light mt-1">{t('contacto.hoursWeek')}</p>
                  <p className="text-xs font-light">{t('contacto.hoursSat')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-brand-border rounded-3xl p-8 shadow-md">
            {status === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-slide-up">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                <h3 className="font-serif font-bold text-brand-text-heading text-xl">{t('contacto.successTitle')}</h3>
                <p className="text-brand-text-body text-sm font-light leading-relaxed max-w-sm mx-auto">
                  {t('contacto.successDesc')}
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-brand-primary hover:brightness-105 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-100 cursor-pointer mt-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm font-sans">
                <h3 className="text-lg font-serif font-bold text-brand-text-heading flex items-center gap-2 mb-2">
                  <Mail size={20} className="text-brand-primary" />
                  <span>{t('contacto.formTitle')}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-brand-text-heading mb-1.5">{t('contacto.fieldName')}</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                      className="w-full p-3 bg-brand-bg-light border border-brand-border rounded-xl text-brand-text-heading focus:outline-none focus:border-brand-primary text-xs"
                      placeholder="Juan Pérez"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1"><AlertCircle size={10} /><span>{errors.name}</span></p>}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-brand-text-heading mb-1.5">{t('contacto.fieldPhone')}</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                      className="w-full p-3 bg-brand-bg-light border border-brand-border rounded-xl text-brand-text-heading focus:outline-none focus:border-brand-primary text-xs"
                      placeholder="0981 123 456"
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1"><AlertCircle size={10} /><span>{errors.phone}</span></p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-brand-text-heading mb-1.5">{t('contacto.fieldEmail')}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    className="w-full p-3 bg-brand-bg-light border border-brand-border rounded-xl text-brand-text-heading focus:outline-none focus:border-brand-primary text-xs"
                    placeholder="juan@email.com"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1"><AlertCircle size={10} /><span>{errors.email}</span></p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-brand-text-heading mb-1.5">{t('contacto.fieldMessage')}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    className="w-full p-3 bg-brand-bg-light border border-brand-border rounded-xl text-brand-text-heading focus:outline-none focus:border-brand-primary text-xs resize-none"
                    placeholder={language === 'es' ? "Contanos en qué podemos ayudarte..." : "Tell us how we can help you..."}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1"><AlertCircle size={10} /><span>{errors.message}</span></p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-primary hover:brightness-105 text-white py-3.5 rounded-xl font-bold hover:shadow-md transition-all duration-100 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
                >
                  {status === 'submitting' ? t('common.submitting') : t('contacto.submitBtn')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
