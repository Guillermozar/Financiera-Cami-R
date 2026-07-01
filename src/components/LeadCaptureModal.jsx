import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../config';

/**
 * LeadCaptureModal component.
 * Displays the "Solicitá tu crédito" form in a premium modal dialog.
 *
 * @param {object} props
 * @param {boolean} props.isOpen - Whether the modal is visible.
 * @param {function} props.onClose - Callback to close the modal.
 */
export default function LeadCaptureModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', product: '', consent: false });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Restore scrolling
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    
    const productName = formData.product === 'personal' 
      ? 'Crédito Personal' 
      : formData.product === 'micro' 
        ? 'Crédito Microempresarial' 
        : 'Descuento de Documentos';
        
    const message = `Hola Orianza, mi nombre es ${formData.name}. Quisiera solicitar información y asesoría sobre: ${productName}. Mi número de contacto es ${formData.phone}.`;

    setTimeout(() => {
      window.open(getWhatsAppLink(message), '_blank');
      setFormData({ name: '', phone: '', product: '', consent: false });
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-brand-border rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-scale-in"
        onClick={(e) => e.stopPropagation()} // Prevent click-outside closing when clicking on form
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text-body hover:text-brand-primary p-2 rounded-xl transition-colors cursor-pointer"
          aria-label="Cerrar formulario"
        >
          <X size={20} />
        </button>

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
              <label htmlFor="modal-name" className="block text-xs font-bold text-brand-text-heading mb-1">{t('hero.fieldName')}</label>
              <input
                id="modal-name"
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
              <label htmlFor="modal-phone" className="block text-xs font-bold text-brand-text-heading mb-1">{t('hero.fieldPhone')}</label>
              <input
                id="modal-phone"
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
              <label htmlFor="modal-product" className="block text-xs font-bold text-brand-text-heading mb-1">{t('hero.fieldProduct')}</label>
              <select
                id="modal-product"
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
    </div>,
    document.body
  );
}
