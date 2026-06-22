import { 
  BookOpen, 
  TrendingUp, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Percent,
  Coins
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Dedicated Financial Tips Page.
 * Contains 3 well-founded investment and saving tips steering users toward Orianza products.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 */
export default function FinancialTipsPage({ onNavigate }) {
  const { language, t } = useLanguage();

  const tipIcons = [
    <Percent className="text-brand-gold" size={24} />,
    <Coins className="text-brand-gold" size={24} />,
    <TrendingUp className="text-brand-gold" size={24} />
  ];

  const tipClicks = [
    () => onNavigate('productos'),
    () => onNavigate('simular-ahorro'),
    () => onNavigate('simular-ahorro')
  ];

  const tips = t('financialTipsPage.tips') || [];

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
          <BookOpen className="text-brand-gold shrink-0" size={32} />
          <span>{t('financialTipsPage.title')}</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          {t('financialTipsPage.desc')}
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
        {tips.map((tip, idx) => (
          <div 
            key={idx}
            className="bg-brand-card/40 border border-white/5 p-8 rounded-4xl hover:border-brand-gold/30 hover:bg-[#121E33]/30 transition-all duration-100 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold">
                {tipIcons[idx]}
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">{tip.title}</h3>
              
              <div className="space-y-3 text-xs leading-relaxed font-light">
                <div>
                  <strong className="text-slate-300 block mb-1">{t('financialTipsPage.foundationLabel')}</strong>
                  <p className="text-slate-400">{tip.foundation}</p>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <strong className="text-brand-gold-light block mb-1">{t('financialTipsPage.actionLabel')}</strong>
                  <p className="text-slate-300">{tip.actionPlan}</p>
                </div>
              </div>
            </div>

            <button
              onClick={tipClicks[idx]}
              className="w-full mt-8 bg-white/5 text-slate-200 border border-white/10 hover:bg-brand-gold hover:text-brand-dark hover:border-transparent py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1 hover:brightness-105 active:scale-[0.98] transition-all duration-100 cursor-pointer"
            >
              <span>{tip.ctaText}</span>
              <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Trust Callout */}
      <div className="bg-brand-card/75 border border-white/5 p-6 rounded-2xl flex gap-4 items-center">
        <ShieldCheck className="text-brand-gold shrink-0" size={32} />
        <div className="text-xs">
          <p className="font-bold text-slate-200">{language === 'es' ? 'Seguridad Garantizada' : 'Guaranteed Security'}</p>
          <p className="text-slate-400 font-light mt-0.5">{t('securityPage.trustNotice')}</p>
        </div>
      </div>
    </main>
  );
}
