import { ShieldCheck, Award, Users, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Vector SVG of the Banco Central del Paraguay (BCP) Logo
const BcpLogoSvg = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={`${className}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer Ring */}
    <circle cx="100" cy="100" r="95" stroke="#0B2545" strokeWidth="6" fill="#F8F9FA" />
    <circle cx="100" cy="100" r="85" stroke="#134074" strokeWidth="2" />
    
    {/* Circular Text (Banco Central del Paraguay) - stylized with SVG textPath */}
    <path id="textPath" d="M 100,17 A 83,83 0 0,1 100,183 A 83,83 0 0,1 100,17" fill="none" />
    <text fontFamily="Lora, serif" fontSize="11" fontWeight="bold" fill="#0B2545" letterSpacing="2">
      <textPath href="#textPath" startOffset="50%" textAnchor="middle">
        BANCO CENTRAL DEL PARAGUAY
      </textPath>
    </text>
    
    {/* Inner gold circular accent */}
    <circle cx="100" cy="100" r="55" stroke="#8DA9C4" strokeWidth="2" fill="#FFFFFF" />
    
    {/* Star in the center (representing Paraguay) */}
    <path 
      d="M 100,68 L 109,87 L 130,90 L 115,105 L 118,126 L 100,116 L 82,126 L 85,105 L 70,90 L 91,87 Z" 
      fill="#0B2545" 
      stroke="#134074"
      strokeWidth="1"
    />
    
    {/* Olive and Palm branches representation (Laurel wreath) */}
    <path d="M 55,100 C 55,130 75,150 100,150 C 125,150 145,130 145,100" stroke="#8DA9C4" strokeWidth="3" strokeLinecap="round" />
    <path d="M 50,95 L 53,100 L 50,105" stroke="#8DA9C4" strokeWidth="2" strokeLinecap="round" />
    <path d="M 150,95 L 147,100 L 150,105" stroke="#8DA9C4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function QuienesSomosPage({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto min-h-[85vh] animate-fade-in text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
          <Users size={14} />
          <span>{t('quienesSomos.title')}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-text-heading leading-tight">
          {t('quienesSomos.subtitle')}
        </h1>
      </div>

      {/* Main Philosophy & Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-text-heading">
            {t('quienesSomos.historyTitle')}
          </h2>
          <p className="text-brand-text-body text-base leading-relaxed font-light">
            {t('quienesSomos.historyText')}
          </p>
          
          {/* Brand Values Grid */}
          <div className="pt-4">
            <h3 className="font-serif text-lg font-bold text-brand-text-heading mb-4">
              {t('valores.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <h4 className="font-bold text-brand-primary text-sm font-serif">{t('valores.confianzaTitle')}</h4>
                <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.confianzaDesc')}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-brand-primary text-sm font-serif">{t('valores.agilidadTitle')}</h4>
                <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.agilidadDesc')}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-brand-primary text-sm font-serif">{t('valores.transparenciaTitle')}</h4>
                <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.transparenciaDesc')}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-brand-primary text-sm font-serif">{t('valores.compromisoTitle')}</h4>
                <p className="text-xs text-brand-text-body font-light leading-relaxed">{t('valores.compromisoDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Orianza Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-primary/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="font-serif italic text-lg">"En Orianza, entendemos el valor de tu esfuerzo y de tu tiempo."</p>
            <p className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">— Equipo de Asesores Orianza</p>
          </div>
        </div>
      </div>

      {/* Solidity & BCP Regulatory Section */}
      <section className="bg-white rounded-3xl border border-brand-border p-8 lg:p-12 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Logo Column */}
          <div className="flex justify-center lg:justify-start lg:col-span-1">
            <div className="p-4 bg-brand-bg-light rounded-full border border-brand-border shadow-inner">
              <BcpLogoSvg className="w-32 h-32 md:w-40 md:h-40" />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={12} />
              <span>{t('quienesSomos.bcpTitle')}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-brand-text-heading">
              {t('quienesSomos.solidezTitle')}
            </h3>
            <p className="text-brand-text-body text-sm md:text-base leading-relaxed font-light">
              {t('quienesSomos.bcpText')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
