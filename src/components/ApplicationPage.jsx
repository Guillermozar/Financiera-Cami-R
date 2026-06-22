import { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Loader2, 
  AlertCircle, 
  User, 
  Briefcase, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Dedicated Full-Page Multi-Step Application Wizard.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 * @param {number} props.loanAmount - Shared simulated amount.
 * @param {number} props.loanTerm - Shared simulated term.
 * @param {number} props.monthlyPayment - Shared simulated monthly payment.
 * @param {string} props.modalType - Active application type ('loan' | 'savings').
 * @param {object} props.savingsDetails - Shared savings details.
 */
export default function ApplicationPage({
  onNavigate,
  loanAmount = 15000000,
  loanTerm = 24,
  monthlyPayment = 835200,
  modalType = 'loan',
  savingsDetails = null
}) {
  const { language, t } = useLanguage();
  const [step, setStep] = useState(1); // 1: Personal Data, 2: Financial Profile, 3: Processing / Success
  const [formData, setFormData] = useState({
    name: '',
    ci: '',
    whatsapp: '',
    employment: 'asalariado', // asalariado | independiente | profesional | comerciante
    income: '3000000-5000000', // income brackets
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const isLoan = modalType === 'loan';

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed) {
      newErrors.name = t('applicationPage.errors.nameEmpty');
    } else if (nameTrimmed.length < 5) {
      newErrors.name = t('applicationPage.errors.nameShort');
    } else if (!nameTrimmed.includes(' ')) {
      newErrors.name = t('applicationPage.errors.nameSpace');
    }

    const ciNum = Number(formData.ci);
    if (!formData.ci) {
      newErrors.ci = t('applicationPage.errors.ciEmpty');
    } else if (isNaN(ciNum) || ciNum < 100000 || ciNum > 99999999) {
      newErrors.ci = t('applicationPage.errors.ciInvalid');
    }

    const whatsappClean = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp) {
      newErrors.whatsapp = t('applicationPage.errors.whatsappEmpty');
    } else if (!/^09[5-9]\d{7}$/.test(whatsappClean)) {
      newErrors.whatsapp = t('applicationPage.errors.whatsappInvalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = t('applicationPage.errors.terms');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setStatus('submitting');
    setStep(3);

    // Simulate backend post submission (1.5 seconds loading)
    setTimeout(() => {
      if (Math.random() < 0.05) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    }, 1500);
  };

  return (
    <main className="pt-28 pb-20 px-6 max-w-xl mx-auto min-h-[85vh] flex flex-col justify-center animate-fade-in text-left">
      {/* Back Button */}
      {status !== 'success' && status !== 'submitting' && (
        <button 
          onClick={step === 2 ? handlePrevStep : () => onNavigate('home')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
          <span>{step === 2 ? t('applicationPage.backStep') : t('applicationPage.cancel')}</span>
        </button>
      )}

      {/* Stepper Indicator */}
      {status !== 'success' && status !== 'submitting' && (
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 1 ? 'bg-brand-gold text-brand-dark' : 'bg-brand-gold/20 text-brand-gold-light'
            }`}>1</span>
            <span className="text-xs font-bold text-slate-300">{t('applicationPage.step1')}</span>
          </div>
          <div className="h-px bg-white/10 flex-1" />
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 2 ? 'bg-brand-gold text-brand-dark' : 'bg-white/5 text-slate-500'
            }`}>2</span>
            <span className="text-xs font-bold text-slate-400">{t('applicationPage.step2')}</span>
          </div>
        </div>
      )}

      {/* Main Form Container */}
      <div className="bg-brand-card/40 backdrop-blur-md rounded-[2.5rem] p-1 border border-white/5 shadow-2xl overflow-hidden">
        <div className="bg-[#0A1220] rounded-[2.3rem] p-8 lg:p-10 border border-white/10">
          
          {status === 'success' ? (
            /* SUCCESS PANEL */
            <div className="text-center py-6 space-y-6 animate-slide-up">
              <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-serif font-normal text-white">{t('applicationPage.successTitle')}</h2>
                <p className="text-slate-400 text-xs md:text-sm max-w-sm mx-auto leading-relaxed font-light">
                  {isLoan
                    ? t('applicationPage.successDescLoan')
                    : t('applicationPage.successDescSavings')
                  }
                </p>
              </div>

              {/* Shared Summary Card */}
              {isLoan ? (
                <div className="bg-[#131D2E]/80 rounded-2xl p-5 text-left text-xs text-slate-300 border border-white/5 max-w-sm mx-auto">
                  <p className="font-extrabold text-brand-gold-light uppercase tracking-wider mb-2">{t('applicationPage.recapLoan')}</p>
                  <div className="flex justify-between mb-1">
                    <span>{t('applicationPage.recapAmount')}</span>
                    <span className="font-bold text-white">Gs. {loanAmount.toLocaleString('es-PY')}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>{t('applicationPage.recapTerm')}</span>
                    <span className="font-bold text-white">{loanTerm} {language === 'es' ? 'meses' : 'months'}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-2 mt-2">
                    <span>{t('applicationPage.recapPayment')}</span>
                    <span className="font-bold text-brand-gold">Gs. {monthlyPayment.toLocaleString('es-PY')}</span>
                  </div>
                </div>
              ) : (
                <div className="bg-[#131D2E]/80 rounded-2xl p-5 text-left text-xs text-slate-300 border border-white/5 max-w-sm mx-auto">
                  <p className="font-extrabold text-brand-gold-light uppercase tracking-wider mb-2">{t('applicationPage.recapSavings')}</p>
                  <div className="flex justify-between mb-1">
                    <span>{t('applicationPage.recapDeposit')}</span>
                    <span className="font-bold text-white">Gs. {savingsDetails?.monthlyDeposit.toLocaleString('es-PY')}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>{t('applicationPage.recapTermSavings')}</span>
                    <span className="font-bold text-white">{savingsDetails?.savingsTerm} {language === 'es' ? 'meses' : 'months'}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-2 mt-2">
                    <span>{t('applicationPage.recapMaturity')}</span>
                    <span className="font-bold text-brand-gold">Gs. {savingsDetails?.maturityValue.toLocaleString('es-PY')}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => onNavigate('home')}
                className="bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-3.5 rounded-2xl font-bold hover:brightness-105 active:scale-95 transition-all duration-100 w-full max-w-xs cursor-pointer block mx-auto text-sm"
              >
                {t('applicationPage.returnHub')}
              </button>
            </div>
          ) : status === 'error' ? (
            /* ERROR PANEL */
            <div className="text-center py-6 space-y-6 animate-slide-up">
              <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto shadow-md">
                <AlertCircle size={40} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-serif font-normal text-white">{t('applicationPage.errorTitle')}</h2>
                <p className="text-slate-400 text-xs md:text-sm max-w-sm mx-auto leading-relaxed font-light">
                  {t('applicationPage.errorDesc')}
                </p>
              </div>
              <div className="flex gap-3 max-w-xs mx-auto">
                <button
                  onClick={() => {
                    setStatus('idle');
                    setStep(2);
                  }}
                  className="flex-1 bg-brand-gold text-brand-dark py-3 rounded-xl font-bold hover:brightness-105 cursor-pointer text-xs"
                >
                  {t('applicationPage.retry')}
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="flex-1 bg-white/5 text-slate-300 py-3 rounded-xl font-bold hover:bg-white/10 cursor-pointer text-xs"
                >
                  {t('applicationPage.exit')}
                </button>
              </div>
            </div>
          ) : status === 'submitting' ? (
            /* PROCESSING / EVALUATION PANEL */
            <div className="text-center py-12 space-y-6">
              <Loader2 className="animate-spin text-brand-gold mx-auto" size={48} />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{t('applicationPage.evaluating')}</h3>
                <p className="text-slate-400 text-xs font-light max-w-xs mx-auto">
                  {t('applicationPage.evaluatingDesc')}
                </p>
              </div>
            </div>
          ) : (
            /* STEPPED FORM PANEL */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* STEP 1: PERSONAL DATA */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="mb-4">
                    <h2 className="text-2xl font-serif font-normal text-white mb-2">{t('applicationPage.title')}</h2>
                    <p className="text-slate-400 text-xs font-light">{t('applicationPage.desc')}</p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">{t('applicationPage.nameLabel')}</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 bg-slate-950/80 border rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/10 focus:border-brand-gold transition-all duration-100 text-sm ${
                          errors.name ? 'border-red-500/50 ring-2 ring-red-500/10' : 'border-white/5'
                        }`}
                        placeholder="Juan Pérez"
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-400 mt-1.5 font-semibold flex items-center gap-1"><AlertCircle size={12} /><span>{errors.name}</span></p>}
                  </div>

                  <div>
                    <label htmlFor="ci" className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">{t('applicationPage.ciLabel')}</label>
                    <div className="relative">
                      <FileText size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        id="ci"
                        name="ci"
                        type="text"
                        value={formData.ci}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 bg-slate-950/80 border rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/10 focus:border-brand-gold transition-all duration-100 text-sm ${
                          errors.ci ? 'border-red-500/50 ring-2 ring-red-500/10' : 'border-white/5'
                        }`}
                        placeholder="Ej: 1234567"
                      />
                    </div>
                    {errors.ci && <p className="text-xs text-red-400 mt-1.5 font-semibold flex items-center gap-1"><AlertCircle size={12} /><span>{errors.ci}</span></p>}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">{t('applicationPage.whatsappLabel')}</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">+595</span>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className={`w-full pl-16 pr-4 py-4 bg-slate-950/80 border rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/10 focus:border-brand-gold transition-all duration-100 text-sm ${
                          errors.whatsapp ? 'border-red-500/50 ring-2 ring-red-500/10' : 'border-white/5'
                        }`}
                        placeholder="0981 123456"
                      />
                    </div>
                    {errors.whatsapp && <p className="text-xs text-red-400 mt-1.5 font-semibold flex items-center gap-1"><AlertCircle size={12} /><span>{errors.whatsapp}</span></p>}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.99] transition-all duration-100 text-sm cursor-pointer shadow-lg shadow-brand-gold/10"
                  >
                    <span>{t('applicationPage.next')}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              {/* STEP 2: FINANCIAL PROFILE */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="mb-4">
                    <h2 className="text-2xl font-serif font-normal text-white mb-2">{t('applicationPage.step2')}</h2>
                    <p className="text-slate-400 text-xs font-light">{t('applicationPage.disclaimer')}</p>
                  </div>

                  <div>
                    <label htmlFor="employment" className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">{t('applicationPage.employmentLabel')}</label>
                    <select
                      id="employment"
                      name="employment"
                      value={formData.employment}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-slate-950 border border-white/5 rounded-2xl text-slate-200 focus:outline-none focus:border-brand-gold text-sm cursor-pointer"
                    >
                      <option value="asalariado">{t('applicationPage.employmentOptions.asalariado')}</option>
                      <option value="independiente">{t('applicationPage.employmentOptions.independiente')}</option>
                      <option value="comerciante">{t('applicationPage.employmentOptions.comerciante')}</option>
                      <option value="jubilado">{t('applicationPage.employmentOptions.jubilado')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="income" className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">{t('applicationPage.incomeLabel')}</label>
                    <select
                      id="income"
                      name="income"
                      value={formData.income}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-slate-950 border border-white/5 rounded-2xl text-slate-200 focus:outline-none focus:border-brand-gold text-sm cursor-pointer"
                    >
                      <option value="menos-3000000">{t('applicationPage.incomeOptions.less3')}</option>
                      <option value="3000000-5000000">{t('applicationPage.incomeOptions.bracket1')}</option>
                      <option value="5000000-10000000">{t('applicationPage.incomeOptions.bracket2')}</option>
                      <option value="10000000-20000000">{t('applicationPage.incomeOptions.bracket3')}</option>
                      <option value="mas-20000000">{t('applicationPage.incomeOptions.more20')}</option>
                    </select>
                  </div>

                  {/* Terms acceptance */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 text-xs text-slate-400 cursor-pointer select-none">
                      <input
                        name="acceptTerms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-4.5 h-4.5 rounded-sm bg-slate-950 border-white/10 text-brand-gold focus:ring-0 focus:ring-offset-0 accent-brand-gold"
                      />
                      <span className="leading-relaxed font-light">
                        {t('applicationPage.legalText')}
                      </span>
                    </label>
                    {errors.acceptTerms && <p className="text-xs text-red-400 mt-1.5 font-semibold flex items-center gap-1"><AlertCircle size={12} /><span>{errors.acceptTerms}</span></p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-4.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.99] transition-all duration-100 text-sm cursor-pointer shadow-lg shadow-brand-gold/10"
                  >
                    <span>{t('applicationPage.step3')}</span>
                  </button>
                </div>
              )}

            </form>
          )}

        </div>
      </div>
    </main>
  );
}
