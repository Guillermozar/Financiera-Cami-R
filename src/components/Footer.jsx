import { 
  FileText, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

/**
 * Footer component complying with Paraguayan Ley N° 4868/13 (Comercio Electrónico)
 * and Ley N° 1334 (Defensa al Consumidor).
 */
export default function Footer() {
  const { t } = useLanguage();
  const laws = t('footer.laws') || [];

  return (
    <footer className="bg-[#050912] border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand & Fraud Call-to-action */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group w-max" aria-label="Orianza Inicio">
              <Logo size="md" showSubtitle={true} className="transition-transform group-hover:scale-[1.02]" />
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              {t('footer.desc')}
            </p>
          </div>

          {/* Column 2: Transparency documents */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.2em] mb-8 text-slate-500">
              {t('footer.transparency')}
            </h4>
            <ul className="text-sm space-y-4 font-semibold text-slate-400" aria-label="Enlaces de transparencia y contratos">
              <li>
                <a href="#tarifario" className="hover:text-white transition-colors flex items-center gap-2.5">
                  <FileText size={16} className="text-slate-500" aria-hidden="true" />
                  <span>{t('footer.links.tarifario')}</span>
                </a>
              </li>
              <li>
                <a href="#contratos" className="hover:text-white transition-colors flex items-center gap-2.5">
                  <FileText size={16} className="text-slate-500" aria-hidden="true" />
                  <span>{t('footer.links.contratos')}</span>
                </a>
              </li>
              <li>
                <a href="#privacidad" className="hover:text-white transition-colors flex items-center gap-2.5">
                  <Lock size={16} className="text-slate-500" aria-hidden="true" />
                  <span>{t('footer.links.privacidad')}</span>
                </a>
              </li>
              <li>
                <a href="#seguridad-info" className="hover:text-white transition-colors flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-slate-500" aria-hidden="true" />
                  <span>{t('footer.links.seguridad')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Education */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.2em] mb-8 text-slate-500">
              {t('footer.support')}
            </h4>
            <ul className="text-sm space-y-4 font-semibold text-slate-400" aria-label="Enlaces de soporte al consumidor">
              <li>
                <a href="#reclamos" className="hover:text-white transition-colors block">
                  {t('footer.links.reclamos')}
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors block">
                  {t('footer.links.faqs')}
                </a>
              </li>
              <li>
                <a href="#educacion" className="hover:text-white transition-colors block">
                  {t('footer.links.educacion')}
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.sedeco.gov.py/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-gold-light font-extrabold hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-0.5"
                  aria-label="Sitio externo de SEDECO: Secretaría de Defensa al Consumidor y el Usuario"
                >
                  {t('footer.links.sedeco')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal Registration (Comercio Electrónico Requirement) */}
          <div className="bg-brand-card p-6 rounded-3xl border border-white/5">
            <h4 className="font-serif font-normal text-xs mb-6 uppercase tracking-widest text-white italic underline">
              {t('footer.legalId')}
            </h4>
            <address className="text-[11px] text-slate-400 space-y-3 leading-relaxed not-italic">
              <div>
                <strong className="text-slate-200">Razón Social:</strong> —
              </div>
              <div>
                <strong className="text-slate-200">RUC:</strong> —
              </div>
              <div>
                <strong className="text-slate-200">Dirección:</strong> —
              </div>
              <div>
                <strong className="text-slate-200">Rep. Legal:</strong> —
              </div>
              <div>
                <strong className="text-slate-200">Email:</strong> —
              </div>
              <div>
                <strong className="text-slate-200">Teléfono:</strong> —
              </div>
            </address>
          </div>

        </div>

        {/* Lower Footer: Regulatory frames */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center md:text-left">
          <p>{t('footer.rights')}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {laws.map((lawText, i) => (
              <span key={i}>{lawText}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
