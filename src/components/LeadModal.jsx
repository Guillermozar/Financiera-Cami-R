import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

/**
 * LeadModal component for lead capture with simulated validation and loading.
 * 
 * @param {object} props
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Callback to close the modal.
 * @param {number} props.loanAmount - Selected loan amount for context.
 * @param {number} props.loanTerm - Selected loan term for context.
 * @param {number} props.monthlyPayment - Calculated monthly payment for context.
 */
export default function LeadModal({
  isOpen,
  onClose,
  loanAmount,
  loanTerm,
  monthlyPayment
}) {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', ci: '', whatsapp: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  // Escape key handler to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap implementation
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        // Focus initial element
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        // Timeout to ensure modal has finished mounting/transitioning
        setTimeout(() => firstElement.focus(), 50);

        const handleTabKey = (e) => {
          if (e.key !== 'Tab') return;
          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        };

        window.addEventListener('keydown', handleTabKey);
        return () => window.removeEventListener('keydown', handleTabKey);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation: Must contain at least two words and 5 characters
    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed) {
      newErrors.name = 'El nombre y apellido son obligatorios';
    } else if (nameTrimmed.length < 5) {
      newErrors.name = 'Por favor ingresa tu nombre completo (mínimo 5 caracteres)';
    } else if (!nameTrimmed.includes(' ')) {
      newErrors.name = 'Ingresa tanto tu nombre como tu apellido, separados por un espacio';
    }

    // CI validation: Paraguayan CI is between 5 and 8 digits
    const ciNum = Number(formData.ci);
    if (!formData.ci) {
      newErrors.ci = 'La Cédula de Identidad es obligatoria';
    } else if (isNaN(ciNum) || ciNum < 100000 || ciNum > 99999999) {
      newErrors.ci = 'Ingresa una Cédula de Identidad válida (de 6 a 8 dígitos)';
    }

    // WhatsApp validation: Must match Paraguayan mobile scheme (starts with 09, total 10 digits e.g. 0981 123 456)
    const whatsappClean = formData.whatsapp.replace(/\D/g, ''); // strip non-digits
    if (!formData.whatsapp) {
      newErrors.whatsapp = 'El WhatsApp es obligatorio';
    } else if (!/^09[5-9]\d{7}$/.test(whatsappClean)) {
      newErrors.whatsapp = 'Ingresa un WhatsApp válido en Paraguay (ej. 0981 234 567)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate API request to backend (1.5 seconds loading state)
    setTimeout(() => {
      // Simulate random error 10% of the time, success 90%
      if (Math.random() < 0.1) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', ci: '', whatsapp: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-lg rounded-[2.5rem] p-8 lg:p-12 relative shadow-2xl overflow-hidden animate-scale-in max-h-[95vh] overflow-y-auto"
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 lg:top-8 lg:right-8 text-slate-400 hover:text-slate-700 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-full p-1.5 transition-all duration-200"
          aria-label="Cerrar modal de solicitud"
        >
          <X size={24} aria-hidden="true" />
        </button>

        {status === 'success' ? (
          /* SUCCESS STATE PANEL */
          <div className="text-center py-10 space-y-6 animate-slide-up">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 size={48} aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 id="modal-title" className="text-3xl font-extrabold text-slate-900">
                ¡Solicitud Recibida!
              </h3>
              <p id="modal-desc" className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                ¡Excelente! Hemos recibido tus datos y tu simulación de préstamo. Un asesor se comunicará contigo vía WhatsApp en los próximos minutos.
              </p>
            </div>
            {/* Simulation Context Recap */}
            <div className="bg-slate-50 rounded-2xl p-5 text-left text-xs text-slate-600 border border-slate-100 max-w-sm mx-auto">
              <p className="font-extrabold text-slate-800 uppercase tracking-wider mb-2">Simulación enviada:</p>
              <div className="flex justify-between mb-1">
                <span>Monto Solicitado:</span>
                <span className="font-bold text-slate-900">Gs. {loanAmount.toLocaleString('es-PY')}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Plazo Seleccionado:</span>
                <span className="font-bold text-slate-900">{loanTerm} meses</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 mt-2">
                <span>Cuota Mensual:</span>
                <span className="font-bold text-emerald-600">Gs. {monthlyPayment.toLocaleString('es-PY')}</span>
              </div>
            </div>
            <button 
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-slate-800 transition-all w-full max-w-xs"
            >
              Entendido
            </button>
          </div>
        ) : status === 'error' ? (
          /* ERROR STATE PANEL */
          <div className="text-center py-10 space-y-6 animate-slide-up">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-md">
              <AlertCircle size={48} aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 id="modal-title" className="text-3xl font-extrabold text-slate-900">
                Ocurrió un error
              </h3>
              <p id="modal-desc" className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                Hubo un inconveniente al procesar tu solicitud. Por favor, vuelve a intentarlo en un momento.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <button 
                onClick={() => setStatus('idle')}
                className="flex-1 bg-emerald-500 text-white py-3.5 rounded-2xl font-bold hover:bg-emerald-600 transition-all"
              >
                Reintentar
              </button>
              <button 
                onClick={onClose}
                className="flex-1 bg-slate-100 text-slate-700 py-3.5 rounded-2xl font-bold hover:bg-slate-200 transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          /* FORM / LOADING STATE PANEL */
          <div className="animate-fade-in">
            <div className="mb-6">
              <h3 id="modal-title" className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Comienza Hoy
              </h3>
              <p id="modal-desc" className="text-slate-500 text-sm leading-relaxed">
                Completa tus datos básicos para que un asesor te contacte y guíe en tu proceso 100% digital.
              </p>
            </div>

            {/* Display Simulator State inside the Modal (CRO Touchpoint) */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4.5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  Crédito Simulado
                </span>
                <span className="text-sm font-bold text-slate-700 block">
                  Gs. {loanAmount.toLocaleString('es-PY')} a {loanTerm} meses
                </span>
              </div>
              <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  Cuota Estimada
                </span>
                <span className="text-base font-extrabold text-emerald-600 block">
                  Gs. {monthlyPayment.toLocaleString('es-PY')}
                </span>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Field 1: Name and Surname */}
              <div>
                <label 
                  htmlFor="name-field" 
                  className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2"
                >
                  Nombre y Apellido *
                </label>
                <input 
                  id="name-field"
                  name="name"
                  type="text" 
                  required
                  disabled={status === 'submitting'}
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full p-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 ${
                    errors.name ? 'border-red-400 ring-2 ring-red-400/10' : 'border-slate-100'
                  }`} 
                  placeholder="Juan Pérez" 
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-500 mt-1.5 font-semibold flex items-center gap-1 animate-slide-up">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Identity Card (Cédula de Identidad) */}
              <div>
                <label 
                  htmlFor="ci-field" 
                  className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2"
                >
                  Cédula de Identidad *
                </label>
                <input 
                  id="ci-field"
                  name="ci"
                  type="text" 
                  required
                  disabled={status === 'submitting'}
                  value={formData.ci}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.ci}
                  aria-describedby={errors.ci ? "ci-error" : undefined}
                  className={`w-full p-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 ${
                    errors.ci ? 'border-red-400 ring-2 ring-red-400/10' : 'border-slate-100'
                  }`} 
                  placeholder="Ej. 1234567" 
                />
                {errors.ci && (
                  <p id="ci-error" className="text-xs text-red-500 mt-1.5 font-semibold flex items-center gap-1 animate-slide-up">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errors.ci}</span>
                  </p>
                )}
              </div>

              {/* Field 3: WhatsApp Number */}
              <div>
                <label 
                  htmlFor="whatsapp-field" 
                  className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2"
                >
                  WhatsApp *
                </label>
                <input 
                  id="whatsapp-field"
                  name="whatsapp"
                  type="tel" 
                  required
                  disabled={status === 'submitting'}
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                  className={`w-full p-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 ${
                    errors.whatsapp ? 'border-red-400 ring-2 ring-red-400/10' : 'border-slate-100'
                  }`} 
                  placeholder="Ej. 0981 123 456" 
                />
                {errors.whatsapp && (
                  <p id="whatsapp-error" className="text-xs text-red-500 mt-1.5 font-semibold flex items-center gap-1 animate-slide-up">
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errors.whatsapp}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-emerald-500 text-white py-4.5 rounded-2xl font-bold shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:bg-emerald-600 disabled:bg-emerald-300 disabled:cursor-not-allowed transition-all text-lg flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} aria-hidden="true" />
                    <span>Procesando solicitud...</span>
                  </>
                ) : (
                  <span>Enviar Solicitud</span>
                )}
              </button>

              {/* Legal Disclaimer */}
              <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed italic">
                Tus datos serán tratados conforme a la Ley N° 6534/20 de Protección de Datos Personales en Paraguay.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
