import { 
  Calculator, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  HelpCircle, 
  Zap, 
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

/**
 * Hero component redesigned as a premium App-like Dashboard Launcher.
 * Allows quick navigation to sections/views via stylized card buttons with ultra-fast transitions.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Callback to navigate between views.
 * @param {Function} props.onOpenModal - Callback to open lead capture modal.
 */
export default function Hero({ onNavigate, onOpenModal }) {
  const launcherButtons = [
    {
      title: "Simular Crédito",
      description: "Calculá tu cuota mensual estimada y plazos en un par de clics.",
      icon: <Calculator className="text-brand-gold group-hover:scale-110 transition-transform duration-100" size={24} />,
      badge: "Más Solicitado",
      onClick: () => onNavigate('simular-credito')
    },
    {
      title: "Simular Ahorro",
      description: "Proyectá tus ganancias con nuestra tasa del 7.5% anual.",
      icon: <TrendingUp className="text-brand-gold group-hover:scale-110 transition-transform duration-100" size={24} />,
      onClick: () => onNavigate('simular-ahorro')
    },
    {
      title: "Nuestros Productos",
      description: "Explorá tarjetas de crédito digital premium y préstamos a medida.",
      icon: <Layers className="text-brand-gold group-hover:scale-110 transition-transform duration-100" size={24} />,
      onClick: () => onNavigate('productos')
    },
    {
      title: "Solicitud de Crédito",
      description: "Completá tus datos para una pre-aprobación en minutos.",
      icon: <Zap className="text-brand-gold group-hover:scale-110 transition-transform duration-100" size={24} />,
      badge: "Express",
      onClick: () => onOpenModal('loan')
    },
    {
      title: "Consejos Financieros",
      description: "Fundamentos clave de ahorro e inversión inteligente para multiplicar tu capital.",
      icon: <BookOpen className="text-brand-gold group-hover:scale-110 transition-transform duration-100" size={24} />,
      onClick: () => onNavigate('consejos')
    },
    {
      title: "Portal de Seguridad",
      description: "Conocé cómo protegemos tu cuenta con encriptación AES-256.",
      icon: <ShieldCheck className="text-brand-gold group-hover:scale-110 transition-transform duration-100" size={24} />,
      onClick: () => onNavigate('seguridad')
    },
    {
      title: "Atención al Cliente",
      description: "Portal de reclamos, preguntas frecuentes y asistencia oficial.",
      icon: <HelpCircle className="text-brand-gold group-hover:scale-110 transition-transform duration-100" size={24} />,
      onClick: () => onNavigate('soporte')
    }
  ];

  return (
    <header id="inicio" className="pt-36 pb-20 px-6 bg-linear-to-b from-brand-dark via-brand-card to-brand-dark relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 text-center space-y-12 animate-fade-in">
        {/* Welcome Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold-light text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} className="text-brand-gold" />
            <span>Orianza Digital Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-white leading-tight">
            ¿Qué deseas hacer hoy?
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Bienvenido a tu portal financiero digital. Selecciona una de nuestras opciones rápidas para simular, solicitar o explorar servicios.
          </p>
        </div>

        {/* Dashboard Grid Launcher */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {launcherButtons.map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.onClick}
              className="group text-left p-6 rounded-3xl bg-brand-card/30 hover:bg-brand-card/85 border border-white/5 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-100 active:scale-[0.98] cursor-pointer flex flex-col justify-between h-[170px] relative overflow-hidden focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
            >
              {/* Corner accent line */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-linear-to-br from-brand-gold/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
              
              <div className="flex justify-between items-start w-full">
                <div className="p-3 bg-white/5 group-hover:bg-brand-gold/10 rounded-2xl transition-colors duration-100">
                  {btn.icon}
                </div>
                {btn.badge && (
                  <span className="text-[9px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold-light border border-brand-gold/20 animate-pulse">
                    {btn.badge}
                  </span>
                )}
              </div>
              
              <div className="space-y-1 mt-4">
                <h3 className="font-bold text-white text-base flex items-center gap-1 group-hover:text-brand-gold-light transition-colors duration-100">
                  <span>{btn.title}</span>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-100" />
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                  {btn.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
