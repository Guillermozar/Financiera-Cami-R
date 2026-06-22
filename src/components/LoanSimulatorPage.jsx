import { 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  ShieldCheck, 
  ArrowLeft 
} from 'lucide-react';
import { useState } from 'react';
import { useLoanSimulator } from '../hooks/useLoanSimulator';

/**
 * Dedicated Loan Simulator Page.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 * @param {Function} props.onOpenModal - Callback to start loan request.
 */
export default function LoanSimulatorPage({ onNavigate, onOpenModal }) {
  const [showDetails, setShowDetails] = useState(false);
  const loanTerms = [6, 12, 24, 36, 48];

  const {
    loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    purePayment,
    interest,
    iva,
    insurance,
    adminFee,
    monthlyPayment
  } = useLoanSimulator(15000000, 24, 0.175);

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto min-h-[85vh] flex flex-col justify-center animate-fade-in">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
        <span>Volver al Inicio</span>
      </button>

      {/* Header */}
      <div className="text-left mb-12 space-y-3">
        <h1 className="text-4xl font-serif font-normal text-white tracking-tight flex items-center gap-3">
          <Calculator className="text-brand-gold shrink-0" size={32} />
          <span>Simulador de Crédito</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          Calculá tu cuota mensual estimada bajo el sistema de amortización francés, incluyendo gastos e impuestos vigentes en Paraguay.
        </p>
      </div>

      {/* Simulator Content */}
      <div className="bg-brand-card/40 backdrop-blur-md rounded-[2.5rem] p-1 border border-white/5 shadow-2xl">
        <div className="bg-[#0A1220] rounded-[2.3rem] p-6 lg:p-10 border border-white/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Sliders & Controls */}
            <div className="space-y-8 text-left">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="loan-amount-slider" className="text-sm font-semibold text-slate-400">
                    ¿Cuánto dinero necesitas?
                  </label>
                  <span className="font-extrabold text-2xl lg:text-3xl text-brand-gold-light" aria-live="polite">
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
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-2">
                  <span>Gs. 1.000.000</span>
                  <span>Gs. 100.000.000</span>
                </div>
              </div>

              <div>
                <span id="loan-term-label" className="block text-sm font-semibold text-slate-400 mb-4">
                  Plazo de pago preferido
                </span>
                <div role="radiogroup" aria-labelledby="loan-term-label" className="grid grid-cols-5 gap-2">
                  {loanTerms.map((term) => {
                    const isSelected = loanTerm === term;
                    return (
                      <button 
                        key={term} 
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setLoanTerm(term)}
                        className={`py-3 rounded-xl text-xs lg:text-sm font-bold transition-all duration-100 cursor-pointer ${
                          isSelected 
                            ? 'bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark shadow-lg scale-[1.02]' 
                            : 'bg-brand-card/85 text-slate-400 hover:bg-white/5 border border-white/5'
                        }`}
                      >
                        {term}m
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs text-brand-gold-light/80 font-medium bg-brand-gold/5 border border-brand-gold/10 px-4 py-2.5 rounded-xl">
                <ShieldCheck size={16} className="text-brand-gold shrink-0" />
                <span>Tasa anual fija del 17.5% sujeta a aprobación crediticia.</span>
              </div>
            </div>

            {/* Right Column: Payments & Actions */}
            <div className="space-y-6 text-left">
              <div className="bg-brand-card/65 border border-white/5 rounded-3xl p-6 text-center text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.2em] block mb-1">
                  Cuota mensual estimada
                </span>
                <div className="text-3xl lg:text-4xl font-extrabold text-brand-gold-light" aria-live="polite">
                  Gs. {monthlyPayment.toLocaleString('es-PY')}
                </div>
              </div>

              {/* Fee breakdown accordion */}
              <div className="border border-white/5 bg-white/5 rounded-2xl p-4 text-xs space-y-2.5">
                <button 
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full flex items-center justify-between text-slate-400 font-bold hover:text-white transition-colors duration-100 cursor-pointer"
                >
                  <span>Ver desglose de la cuota estimada</span>
                  {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {showDetails && (
                  <div className="pt-2.5 border-t border-white/5 space-y-2 animate-fade-in">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cuota Pura (Capital + Interés):</span>
                      <span className="font-semibold text-slate-200">Gs. {purePayment.toLocaleString('es-PY')}</span>
                    </div>
                    <div className="flex justify-between pl-3 text-[11px] text-slate-500">
                      <span>- Interés estimado 1ra cuota:</span>
                      <span>Gs. {interest.toLocaleString('es-PY')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">IVA s/ Intereses (10%):</span>
                      <span className="font-semibold text-slate-200">Gs. {iva.toLocaleString('es-PY')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Seguro de Vida Deudor (0.08%):</span>
                      <span className="font-semibold text-slate-200">Gs. {insurance.toLocaleString('es-PY')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Gastos Administrativos:</span>
                      <span className="font-semibold text-slate-200">Gs. {adminFee.toLocaleString('es-PY')}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-2 font-bold text-brand-gold-light">
                      <span>Total Cuota Mensual Estimada:</span>
                      <span>Gs. {monthlyPayment.toLocaleString('es-PY')}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Request button redirecting to Request view */}
              <button 
                onClick={() => onOpenModal('loan', {
                  loanAmount,
                  loanTerm,
                  purePayment,
                  interest,
                  iva,
                  insurance,
                  adminFee,
                  monthlyPayment
                })}
                className="w-full bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.99] transition-all duration-100 group text-base shadow-lg cursor-pointer"
              >
                <span>Solicitar este crédito</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-100" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
