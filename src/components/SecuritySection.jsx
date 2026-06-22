import { 
  Lock, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2 
} from 'lucide-react';

/**
 * SecuritySection component highlighting safety features, certifications, and standards.
 */
export default function SecuritySection() {
  const safetyFeatures = [
    {
      icon: <Lock size={28} className="text-brand-gold" />,
      title: "Protección SIPAP con OTP",
      description: "Validación obligatoria mediante código dinámico para cada transferencia realizada, garantizando que solo tú tengas el control."
    },
    {
      icon: <ShieldCheck size={28} className="text-brand-gold" />,
      title: "Revocación de Débitos",
      description: "Puedes suspender o cancelar cualquier débito automático desde tu App de forma gratuita y en un clic."
    },
    {
      icon: <ShieldAlert size={28} className="text-red-500" />,
      bgIcon: "bg-red-500/10",
      title: "Prevención de Fraudes",
      description: "Monitoreo activo 24/7 y canal exclusivo de denuncias para proteger tu identidad y tus activos financieros."
    }
  ];

  const certifiedSpecs = [
    'Cifrado de grado militar AES-256', 
    'Validación biométrica facial', 
    'Infraestructura redundante en nube'
  ];

  return (
    <section id="seguridad" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left Column: Core Protections */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-normal text-white tracking-tight leading-tight">
              Tu seguridad es nuestra mayor inversión.
            </h2>
            <p className="text-slate-400 max-w-lg leading-relaxed font-light">
              Implementamos protocolos avanzados y cumplimos con altos estándares de seguridad para que operes con total tranquilidad.
            </p>
          </div>

          <div className="space-y-2" role="list" aria-label="Características de seguridad">
            {safetyFeatures.map((item, idx) => (
              <div 
                key={idx} 
                role="listitem"
                className="flex gap-6 p-6 rounded-3xl hover:bg-brand-card/60 border border-transparent hover:border-white/5 transition-all duration-100 group"
              >
                <div className={`shrink-0 w-14 h-14 ${item.bgIcon || 'bg-white/5'} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105`} aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Status Card & Specs */}
        <div className="relative animate-fade-in">
          {/* Background blurred glow to give a premium touch */}
          <div className="absolute -inset-1 bg-linear-to-r from-brand-gold to-brand-gold-light rounded-[3.6rem] opacity-10 blur-xl pointer-events-none" aria-hidden="true"></div>
          
          <div className="relative bg-brand-card text-slate-200 p-10 lg:p-12 rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/5">
            {/* Absolute circular element to embellish */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
            
            {/* Live Certified indicator */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" aria-hidden="true"></div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">
                Sistema Certificado Activo
              </span>
            </div>

            {/* List of active tech certifications */}
            <div className="space-y-4 mb-10" aria-label="Certificaciones y protocolos técnicos">
              {certifiedSpecs.map((text, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 text-sm font-semibold transition-colors duration-100"
                >
                  <span className="text-slate-200">{text}</span>
                  <CheckCircle2 size={18} className="text-brand-gold shrink-0" aria-hidden="true" />
                </div>
              ))}
            </div>

            <button 
              className="w-full bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-4.5 rounded-2xl font-extrabold hover:brightness-105 active:scale-[0.99] transition-all text-center focus-visible:ring-offset-brand-card cursor-pointer"
              aria-label="Ver todas las políticas de privacidad y seguridad bancaria"
            >
              Ver Políticas de Seguridad
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
