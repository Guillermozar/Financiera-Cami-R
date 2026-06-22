import { 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  FileText, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';

/**
 * Dedicated Security Page.
 * Displays details about technical trust, certifications, and an interactive safety checklist.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 */
export default function SecurityPage({ onNavigate }) {
  const [checklist, setChecklist] = useState({
    otp: false,
    password: false,
    url: false,
    biometrics: false
  });

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const scorePercent = (completedCount / 4) * 100;

  const securityMeasures = [
    {
      icon: <Lock size={24} className="text-brand-gold" />,
      title: "Cifrado Militar AES-256",
      desc: "Toda la información personal y financiera transferida entre tu dispositivo y nuestros servidores viaja cifrada con el estándar avanzado AES-256 bits, imposibilitando intercepciones de terceros."
    },
    {
      icon: <ShieldCheck size={24} className="text-brand-gold" />,
      title: "Validación OTP en Transferencias",
      desc: "Implementamos códigos dinámicos (OTP - One Time Password) para autorizar movimientos bancarios de salida. Un token único que se genera en tu dispositivo garantiza que solo tú puedas mover capital."
    },
    {
      icon: <Smartphone size={24} className="text-brand-gold" />,
      title: "Reconocimiento Biométrico",
      desc: "Nuestra aplicación móvil se integra nativamente con FaceID y TouchID. De esta forma, el acceso a tu cuenta requiere una verificación física intransferible para resguardo ante pérdidas de celular."
    },
    {
      icon: <FileText size={24} className="text-brand-gold" />,
      title: "Infraestructura Redundante en Nube",
      desc: "Operamos servidores replicados geográficamente y con tolerancia a fallas. Tu historial y saldos están respaldados automáticamente minuto a minuto en bases de datos blindadas."
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
          <ShieldCheck className="text-brand-gold shrink-0" size={32} />
          <span>Seguridad e Infraestructura</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          Nuestra prioridad absoluta es proteger tus fondos e información personal. Conocé las tecnologías y protocolos que implementamos día a día.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Measures */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityMeasures.map((m, idx) => (
              <div 
                key={idx}
                className="bg-brand-card/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/20 hover:bg-[#121E33]/30 transition-all duration-100"
              >
                <div>
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-brand-gold">
                    {m.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: User Safety Checklist */}
        <div className="bg-brand-card border border-white/5 rounded-3xl p-6 lg:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Auditoría de Seguridad Personal</span>
            </h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              La seguridad depende de ambos. Evaluá tu nivel de protección marcando las buenas prácticas que ya aplicás:
            </p>
          </div>

          {/* Interactive score bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400">Nivel de Seguridad:</span>
              <span className={completedCount === 4 ? "text-emerald-400" : "text-brand-gold-light"}>
                {completedCount === 0 && "Inseguro"}
                {completedCount === 1 && "Bajo"}
                {completedCount === 2 && "Medio"}
                {completedCount === 3 && "Bueno"}
                {completedCount === 4 && "¡Excelente!"}
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-brand-gold to-brand-gold-light transition-all duration-150"
                style={{ width: `${scorePercent}%` }}
              />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <button
              type="button"
              onClick={() => toggleCheck('otp')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.otp ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.otp && <CheckCircle2 size={14} className="stroke-[3]" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">No comparto contraseñas ni OTP</p>
                <p className="text-slate-500 font-light mt-0.5">Jamás comparto códigos SMS, tokens ni contraseñas con nadie.</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => toggleCheck('password')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.password ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.password && <CheckCircle2 size={14} className="stroke-[3]" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">Contraseña Fuerte & Única</p>
                <p className="text-slate-500 font-light mt-0.5">Utilizo una clave exclusiva que no uso en otras redes sociales.</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => toggleCheck('url')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.url ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.url && <CheckCircle2 size={14} className="stroke-[3]" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">Verifico URLs e Indicadores</p>
                <p className="text-slate-500 font-light mt-0.5">Siempre corroboro ingresar a la URL oficial y con candado de seguridad.</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => toggleCheck('biometrics')}
              className="w-full flex items-start gap-3 text-left cursor-pointer group focus:outline-none"
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-100 ${
                checklist.biometrics ? 'bg-brand-gold border-transparent text-brand-dark' : 'border-white/20 group-hover:border-brand-gold/50'
              }`}>
                {checklist.biometrics && <CheckCircle2 size={14} className="stroke-[3]" />}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-200">Uso FaceID / TouchID</p>
                <p className="text-slate-500 font-light mt-0.5">Tengo activa la validación física en mi celular para ingresar a la App.</p>
              </div>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
