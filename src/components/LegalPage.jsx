import { ArrowLeft, FileText, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Unified LegalPage component.
 * Displays Terms & Conditions or Privacy Policy dynamically based on the `type` prop.
 *
 * @param {object} props
 * @param {'terminos' | 'privacidad'} props.type - The legal document type.
 * @param {function} props.onNavigate - Callback to navigate back to other views.
 */
export default function LegalPage({ type, onNavigate }) {
  const { t } = useLanguage();
  const isTerms = type === 'terminos';
  const dataKey = isTerms ? 'terminos' : 'privacidad';
  const sections = t(`${dataKey}.sections`) || [];

  return (
    <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto min-h-[85vh] animate-fade-in text-left">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-brand-text-body hover:text-brand-primary transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
        <span>{t('common.backToHome')}</span>
      </button>

      <div className="space-y-8 bg-white border border-brand-border rounded-3xl p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="space-y-4 border-b border-brand-border pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
            {isTerms ? <FileText size={12} /> : <Lock size={12} />}
            <span>{isTerms ? t('footer.links.terms') : t('footer.links.privacy')}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-text-heading leading-tight">
            {t(`${dataKey}.title`)}
          </h1>
          <p className="text-sm text-brand-text-body font-light">
            {t(`${dataKey}.subtitle`)}
          </p>
          <p className="text-xs text-brand-accent italic font-semibold">
            {t(`${dataKey}.lastUpdated`)}
          </p>
        </div>

        {/* Sections Content */}
        <div className="space-y-8 text-brand-text-body">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-brand-text-heading">
                {section.title}
              </h2>
              <p className="text-sm font-light leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
