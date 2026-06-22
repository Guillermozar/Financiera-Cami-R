import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';
import { useState } from 'react';

/**
 * Dedicated Support Page.
 * Displays interactive FAQ accordion, a support contact/claims form, and office hours.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 */
export default function SupportPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'consulta', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const faqs = [
    {
      q: "¿Cuáles son los requisitos para solicitar un crédito?",
      a: "Sólo necesitas contar con tu Cédula de Identidad paraguaya vigente y ser mayor de 18 años. Nuestro análisis es 100% digital e inmediato a través de tu perfil biométrico en la App."
    },
    {
      q: "¿Cómo se abonan los intereses del Ahorro Programado?",
      a: "Los intereses se capitalizan de forma mensual a una tasa nominal del 7.5% anual en Guaraníes. Verás reflejado el rendimiento directamente en tu balance al finalizar cada mes calendario."
    },
    {
      q: "¿Tiene algún costo el mantenimiento de la Cuenta Digital?",
      a: "Ninguno. La apertura y el mantenimiento de tu Cuenta Digital Orianza son completamente gratuitos. No exigimos saldos mínimos ni penalizaciones por inactividad."
    },
    {
      q: "¿Cómo puedo realizar depósitos en mi cuenta?",
      a: "Puedes fondear tu cuenta mediante transferencias SIPAP (24/7) desde cualquier entidad financiera del Paraguay, o realizando depósitos en efectivo en las redes de cobranza habilitadas."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje no puede estar vacío';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'consulta', message: '' });
    }, 1200);
  };

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
          <HelpCircle className="text-brand-gold shrink-0" size={32} />
          <span>Atención al Cliente</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          ¿Tienes alguna consulta, sugerencia o reclamo? Ponte en contacto con nuestro equipo o explora las preguntas frecuentes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: FAQ Accordion & Sedeco Information */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-normal text-white border-b border-white/5 pb-3">Preguntas Frecuentes</h2>
            <div className="space-y-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-white/5 bg-brand-card/30 rounded-2xl overflow-hidden transition-all duration-100"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 flex justify-between items-center text-slate-200 font-bold hover:bg-white/5 hover:text-white transition-colors duration-100 text-sm cursor-pointer"
                    >
                      <span className="text-left">{faq.q}</span>
                      {isOpen ? <ChevronUp size={16} className="text-brand-gold shrink-0" /> : <ChevronDown size={16} className="text-brand-gold shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 text-slate-400 text-xs md:text-sm font-light leading-relaxed border-t border-white/5 bg-brand-card/10 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SEDECO frame */}
          <div className="bg-[#131D2E]/60 border border-brand-gold/15 p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-brand-gold-light uppercase tracking-widest block">Defensa al Consumidor</span>
              <h3 className="font-bold text-white text-sm">SEDECO: Secretaría de Defensa del Consumidor</h3>
              <p className="text-slate-400 text-xs font-light max-w-md leading-relaxed">
                Por cualquier disconformidad con el servicio, puedes formalizar tu reclamo en el Portal de SEDECO de forma gratuita.
              </p>
            </div>
            <a 
              href="https://www.sedeco.gov.py/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-gold/15 text-brand-gold-light hover:bg-brand-gold hover:text-brand-dark px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-100 cursor-pointer shrink-0"
            >
              Visitar SEDECO
            </a>
          </div>

        </div>

        {/* Right Column: Support Form & Details */}
        <div className="space-y-6">
          
          {/* Contact Details Card */}
          <div className="bg-brand-card border border-white/5 rounded-3xl p-6 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare size={18} className="text-brand-gold" />
              <span>Canales Directos</span>
            </h3>
            
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-slate-500 shrink-0" />
                <span>+595 21 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-slate-500 shrink-0" />
                <span>soporte@orianza.com.py</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Horario de Atención</p>
                  <p className="text-slate-500 font-light mt-0.5">Lunes a Viernes: 08:00 a 17:00 hs.</p>
                  <p className="text-slate-500 font-light">Sábados: 08:00 a 12:00 hs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-brand-card border border-white/5 rounded-3xl p-6 shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-6 space-y-4 animate-slide-up">
                <CheckCircle2 size={36} className="text-brand-gold mx-auto" />
                <h3 className="font-bold text-white text-sm">¡Mensaje Enviado!</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Recibimos tu ticket de soporte. Un asesor de Orianza te responderá vía correo electrónico en las próximas 24 horas hábiles.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-white/5 text-slate-300 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-100 cursor-pointer"
                >
                  Enviar otro ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
                  <Mail size={18} className="text-brand-gold" />
                  <span>Envíanos un Mensaje</span>
                </h3>

                <div>
                  <label htmlFor="support-name" className="block text-[9px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">Nombre Completo *</label>
                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    className="w-full p-3 bg-slate-950/80 border border-white/5 rounded-xl text-white focus:outline-none focus:border-brand-gold text-xs"
                    placeholder="Juan Pérez"
                  />
                  {errors.name && <p className="text-[10px] text-red-400 mt-1 font-semibold flex items-center gap-1"><AlertCircle size={10} /><span>{errors.name}</span></p>}
                </div>

                <div>
                  <label htmlFor="support-email" className="block text-[9px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">Email de Contacto *</label>
                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    className="w-full p-3 bg-slate-950/80 border border-white/5 rounded-xl text-white focus:outline-none focus:border-brand-gold text-xs"
                    placeholder="juan@email.com"
                  />
                  {errors.email && <p className="text-[10px] text-red-400 mt-1 font-semibold flex items-center gap-1"><AlertCircle size={10} /><span>{errors.email}</span></p>}
                </div>

                <div>
                  <label htmlFor="support-subject" className="block text-[9px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">Motivo del Contacto</label>
                  <select
                    id="support-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    className="w-full p-3 bg-slate-950 border border-white/5 rounded-xl text-slate-300 focus:outline-none focus:border-brand-gold text-xs"
                  >
                    <option value="consulta">Consulta General</option>
                    <option value="reclamo">Reclamo Formal (Defensa al Consumidor)</option>
                    <option value="sugerencia">Sugerencia o Felicitación</option>
                    <option value="soporte">Soporte Técnico en la App</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="support-message" className="block text-[9px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">Detalle de tu Mensaje *</label>
                  <textarea
                    id="support-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    className="w-full p-3 bg-slate-950/80 border border-white/5 rounded-xl text-white focus:outline-none focus:border-brand-gold text-xs resize-none"
                    placeholder="Describe en detalle tu consulta..."
                  />
                  {errors.message && <p className="text-[10px] text-red-400 mt-1 font-semibold flex items-center gap-1"><AlertCircle size={10} /><span>{errors.message}</span></p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-3.5 rounded-xl font-bold hover:brightness-105 active:scale-[0.98] transition-all duration-100 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
