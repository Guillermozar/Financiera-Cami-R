import { 
  BookOpen, 
  TrendingUp, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Percent,
  Coins
} from 'lucide-react';

/**
 * Dedicated Financial Tips Page.
 * Contains 3 well-founded investment and saving tips steering users toward Orianza products.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 */
export default function FinancialTipsPage({ onNavigate }) {
  const tips = [
    {
      icon: <Percent className="text-brand-gold" size={24} />,
      title: "1. Vencé a la inflación con ahorro activo",
      foundation: "Guardar el dinero 'bajo el colchón' o en cuentas corrientes que no pagan intereses garantiza la pérdida de su poder adquisitivo. En Paraguay, la inflación anual erosiona el valor del guaraní constantemente.",
      actionPlan: "La forma más inteligente de proteger tu liquidez es colocarla en un instrumento que devengue intereses diariamente. Al abrir una Cuenta Digital o activar un Ahorro Programado Orianza, tu capital trabaja para vos con una tasa competitiva que mitiga el efecto inflacionario y mantiene intacta tu capacidad de compra.",
      ctaText: "Ver opciones de Ahorro",
      onClick: () => onNavigate('productos')
    },
    {
      icon: <Coins className="text-brand-gold" size={24} />,
      title: "2. Automatizá la regla del 50/30/20",
      foundation: "Una de las metodologías financieras más sólidas y recomendadas por expertos mundiales consiste en distribuir tus ingresos mensuales de la siguiente forma: 50% para necesidades básicas, 30% para gastos personales y un 20% directo al ahorro o inversión.",
      actionPlan: "El mayor obstáculo para ahorrar es la disciplina manual. Orianza te permite automatizar este proceso: podés configurar un débito automático mensual hacia tu plan de Ahorro Programado. Así, ese 20% recomendado se invierte de forma inmediata antes de que puedas gastarlo, acumulando una rentabilidad garantizada del 7.5% anual.",
      ctaText: "Simular Plan de Ahorro",
      onClick: () => onNavigate('simular-ahorro')
    },
    {
      icon: <TrendingUp className="text-brand-gold" size={24} />,
      title: "3. Aprovechá el poder del interés compuesto",
      foundation: "Albert Einstein definió al interés compuesto como la octava maravilla del mundo. Consiste en acumular los intereses generados a tu capital inicial para que, en el siguiente período, los nuevos intereses se calculen sobre un monto mayor. Esto crea un crecimiento exponencial en el mediano y largo plazo.",
      actionPlan: "En Orianza, los intereses de tu Ahorro Programado se capitalizan mensualmente. Esto significa que cada mes ganás intereses sobre los aportes acumulados más los intereses del mes anterior. Simular un plan a 24 o 36 meses te permitirá visualizar cómo este efecto acelera el crecimiento de tus metas comparado con bancos tradicionales.",
      ctaText: "Ir al Simulador de Ahorro",
      onClick: () => onNavigate('simular-ahorro')
    }
  ];

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto min-h-[85vh] flex flex-col justify-center animate-fade-in text-left">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
        <span>Volver al Inicio</span>
      </button>

      {/* Header */}
      <div className="mb-12 space-y-3">
        <h1 className="text-4xl font-serif font-normal text-white tracking-tight flex items-center gap-3">
          <BookOpen className="text-brand-gold shrink-0" size={32} />
          <span>Educación y Consejos Financieros</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          Tomar decisiones informadas es la base de la libertad financiera. Descubrí cómo estructurar tus finanzas personales y multiplicar tu capital de forma inteligente.
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
        {tips.map((t, idx) => (
          <div 
            key={idx}
            className="bg-brand-card/40 border border-white/5 p-8 rounded-[2rem] hover:border-brand-gold/30 hover:bg-[#121E33]/30 transition-all duration-100 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold">
                {t.icon}
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">{t.title}</h3>
              
              <div className="space-y-3 text-xs leading-relaxed font-light">
                <div>
                  <strong className="text-slate-300 block mb-1">El Fundamento:</strong>
                  <p className="text-slate-400">{t.foundation}</p>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <strong className="text-brand-gold-light block mb-1">Cómo aplicarlo en Orianza:</strong>
                  <p className="text-slate-300">{t.actionPlan}</p>
                </div>
              </div>
            </div>

            <button
              onClick={t.onClick}
              className="w-full mt-8 bg-white/5 text-slate-200 border border-white/10 hover:bg-brand-gold hover:text-brand-dark hover:border-transparent py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1 hover:brightness-105 active:scale-[0.98] transition-all duration-100 cursor-pointer"
            >
              <span>{t.ctaText}</span>
              <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Trust Callout */}
      <div className="bg-brand-card/75 border border-white/5 p-6 rounded-2xl flex gap-4 items-center">
        <ShieldCheck className="text-brand-gold shrink-0" size={32} />
        <div className="text-xs">
          <p className="font-bold text-slate-200">Seguridad Garantizada</p>
          <p className="text-slate-400 font-light mt-0.5">Tus ahorros programados en Orianza cuentan con tasas de interés respaldadas y firmadas por contrato de adhesión, garantizando la rentabilidad pactada desde el primer día.</p>
        </div>
      </div>
    </main>
  );
}
