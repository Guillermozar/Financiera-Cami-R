import React from 'react';
import { 
  FileText, 
  Lock, 
  ShieldCheck, 
  ShieldAlert 
} from 'lucide-react';

/**
 * Footer component complying with Paraguayan Ley N° 4868/13 (Comercio Electrónico)
 * and Ley N° 1334 (Defensa al Consumidor).
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand & Fraud Call-to-action */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group w-max" aria-label="[Nombre de Marca] Inicio">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold italic shadow-md transition-transform group-hover:scale-105" aria-hidden="true">
                [L]
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">[Nombre de Marca]</span>
            </a>
            
            <p className="text-sm text-slate-500 leading-relaxed">
              Innovación financiera y transparencia total para todos los paraguayos. Accede a tu crédito 100% online y de forma segura.
            </p>

            <div 
              className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-100/80 transition cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Denunciar intento de phishing o fraude"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  alert('Redirigiendo al portal de denuncias de seguridad...');
                }
              }}
              onClick={() => alert('Redirigiendo al portal de denuncias de seguridad...')}
            >
              <ShieldAlert size={16} aria-hidden="true" />
              <span>Reportar Fraude / Phishing</span>
            </div>
          </div>

          {/* Column 2: Transparency documents */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.2em] mb-8 text-slate-400">
              Transparencia
            </h4>
            <ul className="text-sm space-y-4 font-semibold text-slate-600" aria-label="Enlaces de transparencia y contratos">
              <li>
                <a href="#tarifario" className="hover:text-emerald-500 transition-colors flex items-center gap-2.5">
                  <FileText size={16} className="text-slate-400" aria-hidden="true" />
                  <span>Tarifario de Comisiones</span>
                </a>
              </li>
              <li>
                <a href="#contratos" className="hover:text-emerald-500 transition-colors flex items-center gap-2.5">
                  <FileText size={16} className="text-slate-400" aria-hidden="true" />
                  <span>Contratos de Adhesión</span>
                </a>
              </li>
              <li>
                <a href="#privacidad" className="hover:text-emerald-500 transition-colors flex items-center gap-2.5">
                  <Lock size={16} className="text-slate-400" aria-hidden="true" />
                  <span>Política de Privacidad</span>
                </a>
              </li>
              <li>
                <a href="#seguridad-info" className="hover:text-emerald-500 transition-colors flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-slate-400" aria-hidden="true" />
                  <span>Seguridad Informática</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Education */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.2em] mb-8 text-slate-400">
              Atención
            </h4>
            <ul className="text-sm space-y-4 font-semibold text-slate-600" aria-label="Enlaces de soporte al consumidor">
              <li>
                <a href="#reclamos" className="hover:text-emerald-500 transition-colors block">
                  Portal de Reclamos
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-emerald-500 transition-colors block">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#educacion" className="hover:text-emerald-500 transition-colors block">
                  Educación Financiera
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.sedeco.gov.py/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-600 font-extrabold hover:text-emerald-700 transition-colors border-b-2 border-emerald-500 pb-0.5"
                  aria-label="Sitio externo de SEDECO: Secretaría de Defensa al Consumidor y el Usuario"
                >
                  SEDECO: Defensa al Consumidor
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal Registration (Comercio Electrónico Requirement) */}
          <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-100">
            <h4 className="font-extrabold text-xs mb-6 uppercase tracking-widest text-slate-900 italic underline">
              Identificación Legal
            </h4>
            <address className="text-[11px] text-slate-500 space-y-3 leading-relaxed not-italic">
              <div>
                <strong className="text-slate-700">Razón Social:</strong> [Nombre Legal de la Entidad]
              </div>
              <div>
                <strong className="text-slate-700">RUC:</strong> [Número de RUC]
              </div>
              <div>
                <strong className="text-slate-700">Dirección:</strong> [Dirección Física en Paraguay]
              </div>
              <div>
                <strong className="text-slate-700">Rep. Legal:</strong> [Nombre del Representante]
              </div>
              <div>
                <strong className="text-slate-700">Email:</strong> [Email de Contacto Oficial]
              </div>
              <div>
                <strong className="text-slate-700">Teléfono:</strong> [Número de Teléfono Oficial]
              </div>
            </address>
          </div>

        </div>

        {/* Lower Footer: Regulatory frames */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center md:text-left">
          <p>© 2026 [Nombre de Marca]. Todos los derechos reservados. Supervisado por el Banco Central del Paraguay.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span>Ley 4868/13 de Comercio Electrónico</span>
            <span>Ley 1334 de Defensa al Consumidor</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
