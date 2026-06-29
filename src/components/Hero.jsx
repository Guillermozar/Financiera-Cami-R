import { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../config';

export default function Hero({ onNavigate }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', product: '', consent: false });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t('hero.errors.nameEmpty');
    } else if (formData.name.trim().length < 5) {
      newErrors.name = t('hero.errors.nameShort');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('hero.errors.phoneEmpty');
    } else if (!/^\+?[0-9\s-]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = t('hero.errors.phoneInvalid');
    }

    if (!formData.product) {
      newErrors.product = t('hero.errors.productEmpty');
    }

    if (!formData.consent) {
      newErrors.consent = t('hero.errors.consentRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSuccess(true);
    
    // Construct WhatsApp message
    const productName = formData.product === 'personal' 
      ? 'Crédito Personal' 
      : formData.product === 'micro' 
        ? 'Crédito Microempresarial' 
        : 'Descuento de Documentos';
        
    const message = `Hola Orianza, mi nombre es ${formData.name}. Quisiera solicitar información y asesoría sobre: ${productName}. Mi número de contacto es ${formData.phone}.`;

    // Open WhatsApp in a new tab after a brief delay so the user sees the success state
    setTimeout(() => {
      window.open(getWhatsAppLink(message), '_blank');
      // Reset form
      setFormData({ name: '', phone: '', product: '', consent: false });
      setIsSuccess(false);
    }, 2000);
  };

  const handleWhatsAppClick = () => {
    const message = "Hola Orianza, quisiera conversar con un asesor para solicitar un crédito.";
    window.open(getWhatsAppLink(message), '_blank');
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-capture-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      formElement.querySelector('input')?.focus();
    }
  };

  return (
    <header className="pt-32 pb-16 px-6 bg-linear-to-b from-brand-bg-light to-white relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline and sub-text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-text-heading leading-tight font-normal">
            {t('hero.title')}
          </h1>
          <p className="text-brand-text-body text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={scrollToForm}
              className="bg-brand-primary hover:brightness-105 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-md shadow-brand-primary/10 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Solicitar mi Crédito Ahora</span>
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-brand-whatsapp/10 text-brand-whatsapp hover:bg-brand-whatsapp/20 px-8 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Hablemos por WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Right Column: Lead Capture Form */}
        <div className="lg:col-span-5 w-full">
          <div 
            id="lead-capture-form"
            className="bg-white border border-brand-border rounded-3xl p-8 shadow-xl relative overflow-hidden transition-all duration-300"
          >
            {isSuccess ? (
              <div className="text-center py-12 space-y-4 animate-scale-in">
                <CheckCircle2 size={56} className="text-emerald-500 mx-auto" />
                <h3 className="font-serif font-bold text-brand-text-heading text-xl">{t('common.success')}</h3>
                <p className="text-brand-text-body text-sm font-light leading-relaxed">
                  {t('hero.successMessage')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <h3 className="font-serif font-bold text-brand-text-heading text-lg">
                    {t('hero.formTitle')}
                  </h3>
                  <p className="text-xs text-brand-text-body mt-1">
                    {t('hero.formSubtitle')}
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-bold text-brand-text-heading mb-1">{t('hero.fieldName')}</label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-brand-bg-light border border-brand-border rounded-xl text-brand-text-heading focus:outline-none focus:border-brand-primary text-xs"
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle size={10} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-bold text-brand-text-heading mb-1">{t('hero.fieldPhone')}</label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-brand-bg-light border border-brand-border rounded-xl text-brand-text-heading focus:outline-none focus:border-brand-primary text-xs"
                    placeholder="0981 123 456"
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle size={10} />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Type of Credit Dropdown */}
                <div>
                  <label htmlFor="lead-product" className="block text-xs font-bold text-brand-text-heading mb-1">{t('hero.fieldProduct')}</label>
                  <select
                    id="lead-product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-brand-bg-light border border-brand-border rounded-xl text-brand-text-heading focus:outline-none focus:border-brand-primary text-xs cursor-pointer"
                  >
                    <option value="">{t('hero.selectPrompt')}</option>
                    <option value="personal">{t('navbar.personal')}</option>
                    <option value="micro">{t('navbar.micro')}</option>
                    <option value="documents">{t('navbar.documents')}</option>
                  </select>
                  {errors.product && (
                    <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle size={10} />
                      <span>{errors.product}</span>
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-0.5 rounded border-brand-border text-brand-primary focus:ring-brand-primary cursor-pointer"
                    />
                    <span className="text-[10px] text-brand-text-body leading-normal">
                      {t('hero.consent')}
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[10px] text-red-500 mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle size={10} />
                      <span>{errors.consent}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:brightness-105 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer text-center"
                >
                  {t('common.submit')}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
