import { 
  TrendingUp, 
  ChevronRight, 
  ArrowLeft,
  DollarSign
} from 'lucide-react';
import { useSavingsSimulator } from '../hooks/useSavingsSimulator';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler
);

/**
 * Dedicated Savings Simulator Page.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 * @param {Function} props.onOpenModal - Callback to start savings plan request.
 */
export default function SavingsSimulatorPage({ onNavigate, onOpenModal }) {
  const {
    monthlyDeposit,
    setMonthlyDeposit,
    savingsTerm,
    setSavingsTerm,
    totalDeposits,
    totalInterest,
    maturityValue,
    chartLabels,
    chartData
  } = useSavingsSimulator(500000, 12, 0.075);

  const savingsChartData = {
    labels: chartLabels,
    datasets: [{
      label: 'Crecimiento de Capital',
      data: chartData,
      fill: true,
      backgroundColor: 'rgba(197, 168, 128, 0.05)',
      borderColor: '#C5A880',
      borderWidth: 2.5,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#C5A880',
      pointBorderColor: '#0E1624',
      pointBorderWidth: 1.5,
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false }, 
      tooltip: { 
        enabled: true,
        backgroundColor: '#060B13',
        titleFont: { family: 'Inter', size: 11, weight: 'bold' },
        bodyFont: { family: 'Inter', size: 12 },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `Valor: Gs. ${context.parsed.y.toLocaleString('es-PY')}`;
          }
        }
      } 
    },
    scales: { 
      x: { 
        grid: { color: 'rgba(255,255,255,0.02)' },
        ticks: { color: '#64748B', font: { size: 10 } }
      }, 
      y: { 
        grid: { color: 'rgba(255,255,255,0.02)' },
        ticks: { color: '#64748B', font: { size: 10 } }
      } 
    }
  };

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
          <TrendingUp className="text-brand-gold shrink-0" size={32} />
          <span>Simulador de Ahorro Programado</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          Visualizá el crecimiento de tus fondos mes a mes con nuestra tasa de interés del 7.5% anual con capitalización mensual.
        </p>
      </div>

      {/* Simulator Content */}
      <div className="bg-brand-card/40 backdrop-blur-md rounded-[2.5rem] p-1 border border-white/5 shadow-2xl">
        <div className="bg-[#0A1220] rounded-[2.3rem] p-6 lg:p-10 border border-white/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Sliders & Projections */}
            <div className="space-y-6 text-left">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="savings-deposit-slider" className="text-sm font-semibold text-slate-400">
                    Ahorro Mensual
                  </label>
                  <span className="font-extrabold text-2xl text-brand-gold-light">
                    Gs. {monthlyDeposit.toLocaleString('es-PY')}
                  </span>
                </div>
                <input 
                  id="savings-deposit-slider"
                  type="range" 
                  min="100000" 
                  max="5000000" 
                  step="100000" 
                  value={monthlyDeposit} 
                  onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>Gs. 100.000</span>
                  <span>Gs. 5.000.000</span>
                </div>
              </div>

              <div>
                <span id="savings-term-label" className="block text-sm font-semibold text-slate-400 mb-3">
                  Plazo del Plan de Ahorro
                </span>
                <div role="radiogroup" aria-labelledby="savings-term-label" className="grid grid-cols-4 gap-2">
                  {[12, 24, 36, 60].map((t) => {
                    const isSelected = savingsTerm === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSavingsTerm(t)}
                        className={`py-2.5 rounded-lg text-xs font-bold transition-all duration-100 cursor-pointer ${
                          isSelected 
                            ? 'bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark shadow-md' 
                            : 'bg-brand-card/85 text-slate-400 hover:bg-white/5 border border-white/5'
                        }`}
                      >
                        {t} meses
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-brand-card/65 p-6 rounded-2xl border border-white/5 space-y-2 text-center relative overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 w-16 h-16 bg-brand-gold/5 rounded-full blur-lg pointer-events-none" />
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Recibirás al vencimiento</span>
                <span className="text-2xl lg:text-3xl font-extrabold text-brand-gold-light block">Gs. {maturityValue.toLocaleString('es-PY')}</span>
                <div className="flex justify-between text-[11px] text-slate-400 pt-3 mt-1 border-t border-white/5 leading-relaxed font-light">
                  <span>Aportes: Gs. {totalDeposits.toLocaleString('es-PY')}</span>
                  <span className="text-brand-gold-light font-medium">+ Interés (7.5%): Gs. {totalInterest.toLocaleString('es-PY')}</span>
                </div>
              </div>

              <button 
                onClick={() => onOpenModal('savings', { 
                  monthlyDeposit, 
                  savingsTerm, 
                  totalDeposits, 
                  totalInterest, 
                  maturityValue 
                })} 
                className="w-full bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.99] transition-all duration-100 group text-base shadow-lg cursor-pointer"
              >
                <span>Comenzar este ahorro</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-100" />
              </button>
            </div>

            {/* Right Column: Projections Chart */}
            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Proyección de Crecimiento</span>
                <span className="text-[10px] font-bold bg-brand-gold/10 text-brand-gold px-2.5 py-1 rounded-full border border-brand-gold/20">7.5% Tasa Fija</span>
              </div>
              <div className="h-64 lg:h-80 w-full relative bg-brand-card/25 rounded-2xl p-4 border border-white/5 shadow-inner" aria-label="Gráfico de rendimiento de ahorro programado">
                <Line data={savingsChartData} options={chartOptions} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
