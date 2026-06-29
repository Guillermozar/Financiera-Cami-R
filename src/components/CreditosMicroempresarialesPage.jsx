import { CheckCircle, ArrowLeft, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../config';

export default function CreditosMicroempresarialesPage({ onNavigate }) {
  const { t } = useLanguage();
  const benefits = t('creditosMicro.benefits') || [];

  const handleWhatsAppClick = () => {
    const message = "Hola Orianza, quisiera recibir información y solicitar asesoría sobre los Créditos Microempresariales para mi negocio.";
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto min-h-[85vh] animate-fade-in text-left">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-brand-text-body hover:text-brand-primary transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
        <span>{t('common.backToHome')}</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Orianza Emprendedores
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-text-heading leading-tight">
              {t('creditosMicro.title')}
            </h1>
            <p className="text-lg text-brand-text-body font-normal italic">
              {t('creditosMicro.subtitle')}
            </p>
          </div>

          <p className="text-brand-text-body text-base leading-relaxed font-light">
            {t('creditosMicro.desc')}
          </p>

          {/* Benefits Bullet Points */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-serif font-bold text-brand-text-heading">
              {t('creditosMicro.benefitsTitle')}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Beneficios de Créditos Microempresariales">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-text-body font-medium leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2.5 bg-brand-whatsapp hover:brightness-105 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-brand-whatsapp/10 active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare size={18} />
              <span>{t('common.whatsappCTA')}</span>
            </button>
            
            <button
              onClick={() => onNavigate('contacto')}
              className="border border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5 px-8 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.98] cursor-pointer"
            >
              Completar Formulario de Contacto
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-brand-border h-[450px]">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
            alt="Microempresariales Orianza" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-primary/20 to-transparent" />
        </div>
      </div>
    </main>
  );
}
