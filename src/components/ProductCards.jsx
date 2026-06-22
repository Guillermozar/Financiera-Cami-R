import { 
  CreditCard, 
  TrendingUp, 
  Smartphone, 
  CheckCircle2 
} from 'lucide-react';

/**
 * ProductCards component illustrating different financial products.
 * Includes three balanced columns: Cuentas Digitales, Ahorro Programado, and Créditos al Toque.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Callback to navigate between views.
 */
export default function ProductCards({ onNavigate }) {
  return (
    <section id="productos" className="py-24 bg-[#0A1220]/60 border-y border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-serif font-normal text-white tracking-tight">
            Soluciones a tu medida
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light font-sans">
            Diseñamos productos financieros con las tasas más competitivas del mercado y transparencia total en cada contrato.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Cuentas Digitales */}
          <div className="group bg-brand-card/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-gold/40 hover:bg-[#121E33]/70 transition-all duration-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white/5 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-100" aria-hidden="true">
                <CreditCard size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cuentas Digitales</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm lg:text-base font-light font-sans">
                Apertura en minutos solo con tu Cédula. Sin costos de mantenimiento ni saldos mínimos requeridos.
              </p>
            </div>
            
            <ul className="space-y-4 mb-8" aria-label="Beneficios de Cuentas Digitales">
              {['Transferencias SIPAP 24/7', 'Tarjeta Mastercard Debit', 'Control de gastos en App'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-gold shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => onNavigate('simuladores')}
              className="w-full py-4 rounded-2xl bg-white/5 text-slate-200 border border-white/10 font-bold text-sm hover:bg-brand-gold hover:text-brand-dark hover:border-transparent active:scale-[0.98] transition-all duration-100 cursor-pointer"
              aria-label="Ir al simulador de Cuenta Digital"
            >
              Solicitar Cuenta
            </button>
          </div>

          {/* Card 2: Ahorro Programado (Destacado) */}
          <div className="group bg-brand-card p-10 rounded-[2.5rem] border-2 border-brand-gold relative shadow-2xl hover:shadow-brand-gold/5 transition-all duration-100 flex flex-col justify-between">
            <div className="absolute -top-4 left-10 bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
              Recomendado
            </div>
            
            <div>
              <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mb-8" aria-hidden="true">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ahorro Programado</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm lg:text-base font-light font-sans">
                Haz que tu dinero trabaje para ti con rendimientos del 7.5% anual en Paraguay. Planifica tus metas de ahorro a mediano y largo plazo.
              </p>
            </div>

            <ul className="space-y-4 mb-8" aria-label="Beneficios de Ahorro Programado">
              {['Tasa de interés fija de 7.5%', 'Capitalización mensual', 'Depósito mensual automatizado'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-gold shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onNavigate('simuladores')}
              className="w-full py-4 rounded-2xl bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark font-bold text-sm hover:brightness-105 active:scale-[0.98] transition-all duration-100 shadow-lg shadow-brand-gold/10 cursor-pointer"
              aria-label="Ir al simulador de ahorro programado"
            >
              Simular Ahorro
            </button>
          </div>

          {/* Card 3: Créditos al Toque */}
          <div className="group bg-brand-card/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-gold/40 hover:bg-[#121E33]/70 transition-all duration-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white/5 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-100" aria-hidden="true">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Créditos al Toque</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm lg:text-base font-light font-sans">
                Aprobación inmediata mediante análisis de datos en tiempo real. Desembolso directo a tu cuenta bancaria.
              </p>
            </div>

            <ul className="space-y-4 mb-8" aria-label="Beneficios de Créditos al Toque">
              {['Tasa fija en Guaraníes', 'Hasta 48 cuotas mensuales', 'Sin penalización por precancelar'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-gold shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onNavigate('simuladores')}
              className="w-full py-4 rounded-2xl bg-white/5 text-slate-200 border border-white/10 font-bold text-sm hover:bg-brand-gold hover:text-brand-dark hover:border-transparent active:scale-[0.98] transition-all duration-100 cursor-pointer"
              aria-label="Ir al simulador de crédito"
            >
              Simular Crédito
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
