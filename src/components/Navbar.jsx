import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

/**
 * Navbar component for navigation with responsive mobile menu.
 * Integrates navigation callbacks to transition views instead of static page anchors.
 * 
 * @param {object} props
 * @param {string} props.currentView - Current active page view.
 * @param {Function} props.onNavigate - Callback to navigate between views.
 */
export default function Navbar({ currentView, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (view, anchorId = null) => {
    setIsOpen(false);
    onNavigate(view, anchorId);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 transition-all duration-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand/Logo (Click to go home) */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 rounded-lg p-1" 
          aria-label="Orianza Inicio"
        >
          <Logo size="sm" showSubtitle={true} className="transition-transform group-hover:scale-[1.02]" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-400">
          <button 
            onClick={() => handleNavClick('productos')} 
            className={`hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md px-1 ${
              currentView === 'productos' ? 'text-brand-gold-light' : ''
            }`}
          >
            {t('navbar.products')}
          </button>
          
          <button 
            onClick={() => handleNavClick('simular-credito')} 
            className={`hover:text-white transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md px-2 py-0.5 ${
              currentView === 'simular-credito' || currentView === 'simular-ahorro'
                ? 'text-brand-gold-light border border-brand-gold/20 bg-brand-gold/5 rounded-lg' 
                : ''
            }`}
          >
            {t('navbar.simulators')}
          </button>
          
          <button 
            onClick={() => handleNavClick('seguridad')} 
            className={`hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md px-1 ${
              currentView === 'seguridad' ? 'text-brand-gold-light' : ''
            }`}
          >
            {t('navbar.security')}
          </button>
          
          <button 
            onClick={() => handleNavClick('soporte')} 
            className={`hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md px-1 ${
              currentView === 'soporte' ? 'text-brand-gold-light' : ''
            }`}
          >
            {t('navbar.support')}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 shrink-0" role="group" aria-label="Idioma / Language">
            <button
              onClick={language === 'en' ? toggleLanguage : undefined}
              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition-all duration-100 cursor-pointer ${
                language === 'es' ? 'bg-brand-gold text-brand-dark' : 'text-slate-400 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              onClick={language === 'es' ? toggleLanguage : undefined}
              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition-all duration-100 cursor-pointer ${
                language === 'en' ? 'bg-brand-gold text-brand-dark' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button 
            onClick={() => handleNavClick('simular-credito')}
            className="bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark px-6 py-2.5 rounded-full hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/25 cursor-pointer font-bold shrink-0"
            aria-label="Acceder al simulador de crédito"
          >
            {t('navbar.simulateNow')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg cursor-pointer"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 w-full bg-brand-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-100 ease-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 text-base font-semibold text-slate-300">
          <button 
            onClick={() => handleNavClick('productos')} 
            className={`text-left hover:text-white py-2 border-b border-white/5 transition-colors cursor-pointer ${
              currentView === 'productos' ? 'text-brand-gold-light font-extrabold' : ''
            }`}
          >
            {t('navbar.products')}
          </button>
          
          <button 
            onClick={() => handleNavClick('simular-credito')} 
            className={`text-left hover:text-white py-2 border-b border-white/5 transition-colors cursor-pointer ${
              currentView === 'simular-credito' || currentView === 'simular-ahorro' ? 'text-brand-gold-light font-extrabold' : ''
            }`}
          >
            {t('navbar.simulators')}
          </button>
          
          <button 
            onClick={() => handleNavClick('seguridad')} 
            className={`text-left hover:text-white py-2 border-b border-white/5 transition-colors cursor-pointer ${
              currentView === 'seguridad' ? 'text-brand-gold-light font-extrabold' : ''
            }`}
          >
            {t('navbar.security')}
          </button>
          
          <button 
            onClick={() => handleNavClick('soporte')} 
            className={`text-left hover:text-white py-2 border-b border-white/5 transition-colors cursor-pointer ${
              currentView === 'soporte' ? 'text-brand-gold-light font-extrabold' : ''
            }`}
          >
            {t('navbar.support')}
          </button>
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-sm font-semibold text-slate-400">Idioma / Language</span>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5" role="group">
              <button
                onClick={language === 'en' ? toggleLanguage : undefined}
                className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all duration-100 cursor-pointer ${
                  language === 'es' ? 'bg-brand-gold text-brand-dark' : 'text-slate-400 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={language === 'es' ? toggleLanguage : undefined}
                className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all duration-100 cursor-pointer ${
                  language === 'en' ? 'bg-brand-gold text-brand-dark' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button 
            onClick={() => handleNavClick('simular-credito')}
            className="w-full bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark py-3 rounded-xl font-bold hover:brightness-105 active:scale-95 transition-all text-center shadow-lg shadow-brand-gold/10 cursor-pointer"
          >
            {t('navbar.simulateNow')}
          </button>
        </div>
      </div>
    </nav>
  );
}
