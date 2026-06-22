import { 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  FileText, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Dedicated Security Page.
 * Displays details about technical trust, certifications, and an interactive safety checklist.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 */
export default function SecurityPage({ onNavigate }) {
  const { t } = useLanguage();
  const [checklist, setChecklist] = useState({
    otp: false,
    password: false,
    url: false,
    biometrics: false
  });

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const scorePercent = (completedCount / 4) * 100;

  const securityIcons = [
    <Lock size={24} className="text-brand-gold" />,
    <ShieldCheck size={24} className="text-brand-gold" />,
    <Smartphone size={24} className="text-brand-gold" />,
    <FileText size={24} className="text-brand-gold" />
  ];

  const securityMeasures = t('securityPage.measures') || [];

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto min-h-[85vh] flex flex-col justify-center animate-fade-in text-left">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
        <span>{t('common.backToHome')}</span>
      </button>

      {/* Header */}
      <div className="mb-12 space-y-3">
        <h1 className="text-4xl font-serif font-normal text-white tracking-tight flex items-center gap-3">
          <ShieldCheck className="text-brand-gold shrink-0" size={32} />
          <span>{t('securityPage.title')}</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          {t('securityPage.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Measures */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityMeasures.map((m, idx) => (
              <div 
                key={idx}
                className="bg-brand-card/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/20 hover:bg-[#121E33]/30 transition-all duration-100"
              >
                <div>
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-brand-gold">
                    {securityIcons[idx]}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: User Safety Checklist */}
        <div className="bg-brand-card border border-white/5 rounded-3xl p-6 lg:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{t('securityPage.checklistTitle')}</span>
            </h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              {t('securityPage.checklistDesc')}
            </p>
          </div>

          {/* Interactive score bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400">{t('securityPage.scoreLabel')}</span>
              <span className={completedCount === 4 ? "text-emerald-400" : "text-brand-gold-light"}>
                {t('securityPage.scoreLevels.' + completedCount)}
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-brand-gold to-brand-gold-light transition-all duration-150"
                style={{ width: `${scorePercent}%` }}
              />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <button
              type="button"
              onClick={() => toggleCheck('otp')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus-visible:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.otp ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.otp && <CheckCircle2 size={14} className="stroke-3" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">{t('securityPage.checklistItems.otpTitle')}</p>
                <p className="text-slate-500 font-light mt-0.5">{t('securityPage.checklistItems.otpDesc')}</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => toggleCheck('password')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus-visible:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.password ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.password && <CheckCircle2 size={14} className="stroke-3" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">{t('securityPage.checklistItems.passwordTitle')}</p>
                <p className="text-slate-500 font-light mt-0.5">{t('securityPage.checklistItems.passwordDesc')}</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => toggleCheck('url')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus-visible:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.url ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.url && <CheckCircle2 size={14} className="stroke-3" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">{t('securityPage.checklistItems.urlTitle')}</p>
                <p className="text-slate-500 font-light mt-0.5">{t('securityPage.checklistItems.urlDesc')}</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => toggleCheck('biometrics')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus-visible:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.biometrics ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.biometrics && <CheckCircle2 size={14} className="stroke-3" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">{t('securityPage.checklistItems.biometricsTitle')}</p>
                <p className="text-slate-500 font-light mt-0.5">{t('securityPage.checklistItems.biometricsDesc')}</p>
              </div>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
