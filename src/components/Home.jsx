import { ArrowRight, Sparkles, Clock, FileCheck2, UserCheck, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Hero from './Hero';

export default function Home({ onNavigate }) {
  const { t } = useLanguage();

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-capture-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Small delay to let scroll finish before focusing input
      setTimeout(() => {
        formElement.querySelector('input')?.focus();
      }, 500);
    }
  };

  // Why choose us icons mapping
  const featureIcons = [
    <Sparkles className="text-brand-primary w-6 h-6" />,
    <Clock className="text-brand-primary w-6 h-6" />,
    <FileCheck2 className="text-brand-primary w-6 h-6" />,
    <UserCheck className="text-brand-primary w-6 h-6" />
  ];

  const features = [
    {
      title: t('porqueElegir.cuotasTitle'),
      desc: t('porqueElegir.cuotasDesc'),
    },
    {
      title: t('porqueElegir.aprobacionTitle'),
      desc: t('porqueElegir.aprobacionDesc'),
    },
    {
      title: t('porqueElegir.requisitosTitle'),
      desc: t('porqueElegir.requisitosDesc'),
    },
    {
      title: t('porqueElegir.atencionTitle'),
      desc: t('porqueElegir.atencionDesc'),
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Franja destacada (Highlighted Banner) */}
      <section className="bg-brand-primary text-white py-8 px-6 border-y border-white/10 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute right-0 top-0 w-96 h-full bg-brand-secondary/40 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-sm md:text-base lg:text-lg font-medium text-center md:text-left leading-relaxed max-w-3xl">
            {t('franjaDestacada.text')}
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-brand-primary hover:bg-brand-bg-light px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            {t('franjaDestacada.button')}
          </button>
        </div>
      </section>

      {/* ¿Por qué elegir Orianza? Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-text-heading font-normal">
            {t('porqueElegir.title')}
          </h2>
          <div className="w-16 h-1 bg-brand-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white border border-brand-border rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 text-left group"
            >
              <div className="p-3 bg-brand-bg-light group-hover:bg-brand-primary/5 w-max rounded-xl transition-colors duration-300">
                {featureIcons[idx]}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-brand-text-heading text-base font-serif">
                  {feature.title}
                </h3>
                <p className="text-xs text-brand-text-body font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creemos en las oportunidades Section */}
      <section className="py-20 px-6 bg-white border-y border-brand-border overflow-hidden relative">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Heart size={12} className="text-brand-primary" />
              <span>Propósito Orianza</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-text-heading leading-tight font-normal">
              {t('oportunidades.title')}
            </h2>
            <p className="text-brand-text-body text-base md:text-lg font-light leading-relaxed">
              {t('oportunidades.text')}
            </p>
          </div>
          {/* Aesthetic graphics or image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-brand-primary/5 rounded-3xl blur-xl pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border h-[320px] bg-brand-bg-light flex flex-col justify-end p-8 text-left group">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" 
                alt="Oportunidades Orianza" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-primary/70 via-brand-primary/20 to-transparent" />
              <div className="relative z-10 text-white space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent">Bella Vista, Itapúa</span>
                <p className="font-serif italic text-lg">"Construimos relaciones de confianza que duran toda la vida."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen Historia & Valores Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story intro */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <span>{t('quienesSomos.historyTitle')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-text-heading font-normal">
              {t('quienesSomos.historyTitle')}
            </h2>
            <p className="text-brand-text-body text-sm md:text-base font-light leading-relaxed line-clamp-4">
              {t('quienesSomos.historyText')}
            </p>
            <div>
              <button 
                onClick={() => onNavigate('quienes-somos')}
                className="text-brand-primary hover:text-brand-secondary font-bold text-sm inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Leer la historia completa</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Values Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Confianza */}
            <div className="p-5 bg-white border border-brand-border rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-brand-text-heading text-sm font-serif">{t('valores.confianzaTitle')}</h4>
              <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.confianzaDesc')}</p>
            </div>
            {/* Agilidad */}
            <div className="p-5 bg-white border border-brand-border rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-brand-text-heading text-sm font-serif">{t('valores.agilidadTitle')}</h4>
              <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.agilidadDesc')}</p>
            </div>
            {/* Transparencia */}
            <div className="p-5 bg-white border border-brand-border rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-brand-text-heading text-sm font-serif">{t('valores.transparenciaTitle')}</h4>
              <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.transparenciaDesc')}</p>
            </div>
            {/* Compromiso */}
            <div className="p-5 bg-white border border-brand-border rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-brand-text-heading text-sm font-serif">{t('valores.compromisoTitle')}</h4>
              <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.compromisoDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
