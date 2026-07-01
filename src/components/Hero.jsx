import { MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../config';
import heroBgUrl from '../assets/hero_bg.png';

/**
 * Hero Section component.
 * Displays the key brand slogan and message on top of the sunset countryside background.
 * Triggers the lead capture modal on main CTA button click.
 *
 * @param {object} props
 * @param {function} props.onOpenModal - Callback to open the lead capture form modal.
 */
export default function Hero({ onOpenModal }) {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = "Hola Orianza, quisiera conversar con un asesor para solicitar un crédito.";
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <header className="pt-32 pb-16 px-6 relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src={heroBgUrl} 
          alt="Orianza Campo" 
          className="w-full h-full object-cover object-[70%_center] opacity-95" 
        />
        {/* Horizontal overlay for text readability (left to right) - lighter to cover less of the image */}
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/60 to-transparent lg:from-white/95 lg:via-white/30 lg:to-transparent" />
        {/* Vertical overlay to blend with the bottom page sections */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Headline and sub-text */}
        <div className="max-w-lg lg:max-w-xl space-y-5 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-heading leading-tight font-normal">
            {t('hero.title')}
          </h1>
          <p className="text-brand-text-body text-sm md:text-base font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="space-y-2 pt-1 text-brand-text-body">
            <p className="text-xs md:text-sm font-medium text-brand-secondary">
              {t('hero.communicationText')}
            </p>
            <p className="text-[11px] md:text-xs opacity-90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('contacto.subtitle')}: <strong className="font-semibold text-brand-primary">{t('hero.languages')}</strong></span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-3">
            <button 
              onClick={onOpenModal}
              className="bg-brand-primary hover:brightness-105 text-white px-6 py-3 rounded-lg font-bold text-xs md:text-sm transition-all shadow-md shadow-brand-primary/10 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>{t('franjaDestacada.button')}</span>
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-brand-whatsapp/10 text-brand-whatsapp hover:bg-brand-whatsapp/20 px-6 py-3 rounded-lg font-bold text-xs md:text-sm transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Hablemos por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

