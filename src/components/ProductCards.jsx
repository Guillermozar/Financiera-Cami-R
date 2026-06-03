import React from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  Smartphone, 
  CheckCircle2 
} from 'lucide-react';
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

// Register necessary Chart.js modules
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
 * ProductCards component illustrating different financial products.
 * 
 * @param {object} props
 * @param {Function} props.onOpenModal - Callback to trigger opening the lead modal.
 */
export default function ProductCards({ onOpenModal }) {
  // Capital growth simulation data
  const savingsData = {
    labels: ['Mes 1', 'Mes 3', 'Mes 6', 'Mes 9', 'Mes 12'],
    datasets: [{
      label: 'Crecimiento de Capital',
      data: [100, 108, 115, 125, 140],
      fill: true,
      backgroundColor: 'rgba(16, 185, 129, 0.08)',
      borderColor: '#10b981',
      borderWidth: 2.5,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#10b981',
      pointBorderColor: '#ffffff',
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
        backgroundColor: '#0f172a',
        titleFont: { family: 'Inter', size: 11, weight: 'bold' },
        bodyFont: { family: 'Inter', size: 12 },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `Valor: ${context.parsed.y}%`;
          }
        }
      } 
    },
    scales: { 
      x: { display: false }, 
      y: { display: false } 
    }
  };

  return (
    <section id="productos" className="py-24 bg-slate-50/50 border-y border-slate-100 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Soluciones a tu medida
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Diseñamos productos financieros con las tasas más competitivas del mercado y transparencia total en cada contrato.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Cuentas Digitales */}
          <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <CreditCard size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Cuentas Digitales</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm lg:text-base">
                Apertura en minutos solo con tu Cédula. Sin costos de mantenimiento ni saldos mínimos requeridos.
              </p>
            </div>
            
            <ul className="space-y-4 mb-8" aria-label="Beneficios de Cuentas Digitales">
              {['Transferencias SIPAP 24/7', 'Tarjeta Mastercard Debit', 'Control de gastos en App'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={onOpenModal}
              className="w-full py-4 rounded-2xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-slate-900 hover:text-white active:scale-[0.98] transition-all duration-200"
              aria-label="Solicitar apertura de Cuenta Digital"
            >
              Solicitar Cuenta
            </button>
          </div>

          {/* Card 2: Ahorro Programado (Destacado) */}
          <div className="group bg-white p-10 rounded-[2.5rem] border-2 border-slate-900 relative shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
            <div className="absolute -top-4 left-10 bg-slate-900 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
              Recomendado
            </div>
            
            <div>
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8" aria-hidden="true">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Ahorro Programado</h3>
              <p className="text-slate-500 mb-6 leading-relaxed text-sm lg:text-base">
                Haz que tu dinero trabaje para ti con rendimientos superiores. Capitalización diaria de intereses.
              </p>
            </div>

            {/* Line Chart Container - Responsive heights */}
            <div className="h-28 w-full relative mb-8" aria-label="Gráfico de rendimiento de ahorro estimado">
              <Line data={savingsData} options={chartOptions} />
            </div>

            <button 
              onClick={onOpenModal} 
              className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-slate-900/10"
              aria-label="Ver planes de inversión para ahorro programado"
            >
              Ver Planes de Inversión
            </button>
          </div>

          {/* Card 3: Créditos al Toque */}
          <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Créditos al Toque</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm lg:text-base">
                Aprobación inmediata mediante análisis de datos en tiempo real. Desembolso directo a tu cuenta bancaria.
              </p>
            </div>

            <ul className="space-y-4 mb-8" aria-label="Beneficios de Créditos al Toque">
              {['Tasa fija en Guaraníes', 'Hasta 48 cuotas mensuales', 'Sin penalización por precancelar'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={onOpenModal}
              className="w-full py-4 rounded-2xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-slate-900 hover:text-white active:scale-[0.98] transition-all duration-200"
              aria-label="Solicitar Crédito al Toque"
            >
              Simular Crédito
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
