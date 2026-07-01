import { Mail, Phone, MessageSquare, ShieldCheck, FileText, Lock } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CONFIG, getWhatsAppLink } from '../config';

// Vector SVG of the Banco Central del Paraguay (BCP) Logo (light/contrast version for the dark footer)
const BcpLogoSvgLight = ({ className = 'w-16 h-16' }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={`${className}`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer Ring */}
    <circle cx="100" cy="100" r="95" stroke="#FFFFFF" strokeWidth="6" fill="#0B2545" />
    <circle cx="100" cy="100" r="85" stroke="#8DA9C4" strokeWidth="2" />
    
    {/* Circular Text (Banco Central del Paraguay) */}
    <path id="footerTextPath" d="M 100,17 A 83,83 0 0,1 100,183 A 83,83 0 0,1 100,17" fill="none" />
    <text fontFamily="Lora, serif" fontSize="11" fontWeight="bold" fill="#FFFFFF" letterSpacing="2">
      <textPath href="#footerTextPath" startOffset="50%" textAnchor="middle">
        BANCO CENTRAL DEL PARAGUAY
      </textPath>
    </text>
    
    {/* Inner gold/light circular accent */}
    <circle cx="100" cy="100" r="55" stroke="#8DA9C4" strokeWidth="2" fill="#0B2545" />
    
    {/* Star in the center (representing Paraguay) */}
    <path 
      d="M 100,68 L 109,87 L 130,90 L 115,105 L 118,126 L 100,116 L 82,126 L 85,105 L 70,90 L 91,87 Z" 
      fill="#FFFFFF" 
      stroke="#8DA9C4"
      strokeWidth="1"
    />
    
    {/* Olive and Palm branches representation (Laurel wreath) */}
    <path d="M 55,100 C 55,130 75,150 100,150 C 125,150 145,130 145,100" stroke="#8DA9C4" strokeWidth="3" strokeLinecap="round" />
    <path d="M 50,95 L 53,100 L 50,105" stroke="#8DA9C4" strokeWidth="2" strokeLinecap="round" />
    <path d="M 150,95 L 147,100 L 150,105" stroke="#8DA9C4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = "Hola Orianza, quisiera realizar una consulta.";
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <footer className="bg-brand-primary text-white border-t border-white/10 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Human-centric mission */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 group w-max" aria-label="Orianza Inicio">
              <Logo size="md" showSubtitle={true} lightTheme={false} className="transition-transform group-hover:scale-[1.02]" />
            </a>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {t('footer.desc')}
            </p>
          </div>

          {/* Column 2: Legal Identification */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-brand-accent">
              {t('footer.legalId')}
            </h4>
            <address className="text-xs text-slate-300 space-y-2 leading-relaxed not-italic font-light font-sans">
              <div>
                <strong className="text-white">Razón Social:</strong> {CONTACT_CONFIG.razonSocial || '—'}
              </div>
              <div>
                <strong className="text-white">RUC:</strong> {CONTACT_CONFIG.ruc || '—'}
              </div>
              <div>
                <strong className="text-white">Dirección:</strong> {CONTACT_CONFIG.direccion || '—'}
              </div>
              <div>
                <strong className="text-white">Email:</strong> {CONTACT_CONFIG.email || '—'}
              </div>
              <div>
                <strong className="text-white">Teléfono:</strong> {CONTACT_CONFIG.telefonoFijo || '—'}
              </div>
            </address>
          </div>

          {/* Column 3: Contact Info & Action */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-brand-accent">
              {t('contacto.directChannels')}
            </h4>
            <ul className="text-xs text-slate-300 space-y-2.5 font-light">
              {CONTACT_CONFIG.telefonoFijo && (
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-brand-accent" />
                  <span>{CONTACT_CONFIG.telefonoFijo}</span>
                </li>
              )}
              {CONTACT_CONFIG.email && (
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-brand-accent" />
                  <span>{CONTACT_CONFIG.email}</span>
                </li>
              )}
              <li className="text-[10px] text-slate-400 italic">
                {t('contacto.subtitle')}
              </li>
              <li className="pt-1">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-brand-whatsapp hover:brightness-105 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all font-bold text-xs cursor-pointer"
                >
                  <MessageSquare size={12} />
                  <span>{t('common.whatsappBtn')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: BCP Mention & BCP Logo */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <BcpLogoSvgLight className="w-12 h-12 shrink-0" />
              <div className="space-y-0.5">
                <h4 className="font-serif font-bold text-xs text-white">Regulado por el BCP</h4>
                <p className="text-[10px] text-slate-300 leading-tight">Supervisado por el Banco Central del Paraguay</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-300 leading-normal font-light">
              {t('footer.bcpNotice')}
            </p>
          </div>

        </div>

        {/* Lower Footer: Rights, Terms, and Privacy */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
          <p>{t('footer.rights')}</p>
          
          <div className="flex gap-6">
            <a href="#terminos" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FileText size={14} className="text-brand-accent" />
              <span>{t('footer.links.terms')}</span>
            </a>
            <a href="#privacidad" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Lock size={14} className="text-brand-accent" />
              <span>{t('footer.links.privacy')}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
