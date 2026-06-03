import React from 'react';
import { 
  ShieldCheck, 
  Calculator, 
  Smartphone, 
  ChevronRight, 
  TrendingUp 
} from 'lucide-react';

/**
 * HeroSimulator component including the main header and interactive loan calculator.
 * 
 * @param {object} props
 * @param {number} props.loanAmount - Current loan amount.
 * @param {Function} props.setLoanAmount - Callback to update loan amount.
 * @param {number} props.loanTerm - Current term in months.
 * @param {Function} props.setLoanTerm - Callback to update term.
 * @param {number} props.monthlyPayment - Computed monthly payment.
 * @param {Function} props.onOpenModal - Callback to open lead modal.
 */
export default function HeroSimulator({
  loanAmount,
  setLoanAmount,
  loanTerm,
  setLoanTerm,
  monthlyPayment,
  onOpenModal
}) {
  const terms = [6, 12, 24, 36, 48];

  return (
    <header className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Copywriting and CTAs */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck size={16} className="text-emerald-500" aria-hidden="true" />
            <span>Supervisado por el Banco Central del Paraguay</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
            La banca que se adapta a <span className="text-emerald-500 italic block sm:inline">tu ritmo.</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-500 max-w-lg leading-relaxed">
            Sin filas, sin papeles. Una nueva experiencia financiera 100% digital diseñada para potenciar tu capital con transparencia total.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button 
              onClick={onOpenModal}
              className="bg-emerald-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xl shadow-emerald-100 hover:shadow-emerald-200/50 text-center"
              aria-label="Abrir cuenta gratuita ahora"
            >
              Abrir cuenta gratis
            </button>
            
            <div className="flex items-center gap-4 px-6 py-3.5 rounded-2xl border border-slate-100 bg-white shadow-sm" aria-label="Aplicación disponible para iOS y Android">
              <Smartphone className="text-slate-400" size={24} aria-hidden="true" />
              <div className="text-left">
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">App disponible</span>
                <span className="text-sm font-bold text-slate-800">iOS & Android</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Loan Simulator */}
        <div className="w-full max-w-xl mx-auto lg:ml-auto animate-slide-up">
          <div className="bg-slate-50/50 rounded-[3rem] p-1.5 border border-slate-100 shadow-inner">
            <div className="bg-white rounded-[2.8rem] shadow-2xl p-8 lg:p-10">
              
              {/* Header inside simulator */}
              <div className="flex justify-between items-center mb-10">
                <h2 className="font-extrabold text-2xl flex items-center gap-2 text-slate-900">
                  <Calculator className="text-emerald-500" size={24} aria-hidden="true" />
                  <span>Simulador</span>
                </h2>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-wider">
                  Sujeto a aprobación
                </span>
              </div>
              
              <div className="space-y-8">
                {/* Range Slider for Loan Amount */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label htmlFor="loan-amount-slider" className="text-sm font-semibold text-slate-400">
                      ¿Cuánto necesitas?
                    </label>
                    <span className="font-extrabold text-2xl lg:text-3xl text-slate-900" aria-live="polite">
                      Gs. {loanAmount.toLocaleString('es-PY')}
                    </span>
                  </div>
                  <input 
                    id="loan-amount-slider"
                    type="range" 
                    min="1000000" 
                    max="100000000" 
                    step="1000000"
                    value={loanAmount} 
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    aria-valuemin="1000000"
                    aria-valuemax="100000000"
                    aria-valuenow={loanAmount}
                    aria-valuetext={`Gs. ${loanAmount.toLocaleString('es-PY')}`}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  />
                </div>

                {/* Term Selection */}
                <div>
                  <span id="loan-term-label" className="block text-sm font-semibold text-slate-400 mb-4">
                    Plazo preferido
                  </span>
                  
                  <div 
                    role="radiogroup" 
                    aria-labelledby="loan-term-label" 
                    className="grid grid-cols-5 gap-2"
                  >
                    {terms.map((term) => {
                      const isSelected = loanTerm === term;
                      return (
                        <button 
                          key={term} 
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setLoanTerm(term)}
                          className={`py-3.5 rounded-xl text-sm font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 focus:outline-none ${
                            isSelected 
                              ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10 scale-[1.02]' 
                              : 'bg-slate-100 text-slate-400 hover:bg-slate-200/80 hover:text-slate-600'
                          }`}
                          aria-label={`Plazo de ${term} meses`}
                        >
                          {term}m
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Estimated Monthly Payment Display */}
                <div className="bg-slate-900 rounded-3xl p-6 lg:p-8 text-center text-white relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none" aria-hidden="true">
                    <TrendingUp size={100} />
                  </div>
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.2em] relative z-10">
                    Cuota mensual estimada
                  </span>
                  <div className="text-3xl lg:text-4xl font-extrabold mt-2 relative z-10" aria-live="polite">
                    Gs. {monthlyPayment.toLocaleString('es-PY')}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={onOpenModal}
                  className="w-full bg-emerald-500 text-white py-4.5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-600 active:scale-[0.99] transition-all group text-lg shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
                >
                  <span>Solicitar este crédito</span>
                  <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
