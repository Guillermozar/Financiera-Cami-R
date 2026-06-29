import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ currentView, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (view) => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    onNavigate(view);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola Orianza, quisiera hablar con un asesor.");
    window.open(`https://wa.me/595981123456?text=${message}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-border transition-all duration-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand/Logo (Click to go home) */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 rounded-lg p-1" 
          aria-label="Orianza Inicio"
        >
          <Logo size="sm" showSubtitle={true} lightTheme={true} className="transition-transform group-hover:scale-[1.02]" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-brand-text-body">
          {/* Quiénes Somos */}
          <button 
            onClick={() => handleNavClick('quienes-somos')} 
            className={`hover:text-brand-primary transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md px-1 py-1 ${
              currentView === 'quienes-somos' ? 'text-brand-primary font-bold' : ''
            }`}
          >
            {t('navbar.about')}
          </button>
          
          {/* Créditos Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`hover:text-brand-primary transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md px-2 py-1 flex items-center gap-1 ${
                currentView === 'creditos-personales' || currentView === 'creditos-microempresariales'
                  ? 'text-brand-primary font-bold' 
                  : ''
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>{t('navbar.credits')}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute left-0 mt-2 w-56 bg-white border border-brand-border rounded-2xl shadow-xl py-2 transition-all duration-150 origin-top-left ${
              isDropdownOpen 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              <button
                onClick={() => handleNavClick('creditos-personales')}
                className="w-full text-left px-4 py-2.5 text-xs text-brand-text-body hover:bg-brand-bg-light hover:text-brand-primary transition-colors font-semibold cursor-pointer"
              >
                {t('navbar.personal')}
              </button>
              <button
                onClick={() => handleNavClick('creditos-microempresariales')}
                className="w-full text-left px-4 py-2.5 text-xs text-brand-text-body hover:bg-brand-bg-light hover:text-brand-primary transition-colors font-semibold cursor-pointer"
              >
                {t('navbar.micro')}
              </button>
            </div>
          </div>
          
          {/* Descuento de Documentos */}
          <button 
            onClick={() => handleNavClick('descuento-documentos')} 
            className={`hover:text-brand-primary transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md px-1 py-1 ${
              currentView === 'descuento-documentos' ? 'text-brand-primary font-bold' : ''
            }`}
          >
            {t('navbar.documents')}
          </button>
          
          {/* Contacto */}
          <button 
            onClick={() => handleNavClick('contacto')} 
            className={`hover:text-brand-primary transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md px-1 py-1 ${
              currentView === 'contacto' ? 'text-brand-primary font-bold' : ''
            }`}
          >
            {t('navbar.contact')}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-brand-bg-light border border-brand-border rounded-full p-0.5 shrink-0" role="group" aria-label="Idioma / Language">
            <button
              onClick={language === 'en' ? toggleLanguage : undefined}
              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition-all duration-100 cursor-pointer ${
                language === 'es' ? 'bg-brand-primary text-white' : 'text-brand-text-body hover:text-brand-primary'
              }`}
            >
              ES
            </button>
            <button
              onClick={language === 'es' ? toggleLanguage : undefined}
              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition-all duration-100 cursor-pointer ${
                language === 'en' ? 'bg-brand-primary text-white' : 'text-brand-text-body hover:text-brand-primary'
              }`}
            >
              EN
            </button>
          </div>

          {/* WhatsApp Action Button */}
          <button 
            onClick={handleWhatsAppClick}
            className="bg-brand-whatsapp hover:brightness-105 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer font-bold shrink-0 text-xs"
            aria-label="Hablar por WhatsApp"
          >
            <MessageSquare size={14} />
            <span>{t('common.whatsappBtn')}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-brand-text-body hover:text-brand-primary focus:outline-none rounded-lg cursor-pointer"
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
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-border shadow-2xl transition-all duration-150 ease-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 text-base font-semibold text-brand-text-body">
          {/* Quiénes Somos */}
          <button 
            onClick={() => handleNavClick('quienes-somos')} 
            className={`text-left hover:text-brand-primary py-2 border-b border-brand-border transition-colors cursor-pointer ${
              currentView === 'quienes-somos' ? 'text-brand-primary font-bold' : ''
            }`}
          >
            {t('navbar.about')}
          </button>
          
          {/* Créditos (Expandible en móvil) */}
          <div className="flex flex-col border-b border-brand-border pb-2">
            <span className="text-xs font-bold text-brand-text-body/60 uppercase tracking-wider mb-2">
              {t('navbar.credits')}
            </span>
            <button 
              onClick={() => handleNavClick('creditos-personales')} 
              className={`text-left hover:text-brand-primary py-2 pl-4 transition-colors cursor-pointer ${
                currentView === 'creditos-personales' ? 'text-brand-primary font-bold' : ''
              }`}
            >
              — {t('navbar.personal')}
            </button>
            <button 
              onClick={() => handleNavClick('creditos-microempresariales')} 
              className={`text-left hover:text-brand-primary py-2 pl-4 transition-colors cursor-pointer ${
                currentView === 'creditos-microempresariales' ? 'text-brand-primary font-bold' : ''
              }`}
            >
              — {t('navbar.micro')}
            </button>
          </div>
          
          {/* Descuento de Documentos */}
          <button 
            onClick={() => handleNavClick('descuento-documentos')} 
            className={`text-left hover:text-brand-primary py-2 border-b border-brand-border transition-colors cursor-pointer ${
              currentView === 'descuento-documentos' ? 'text-brand-primary font-bold' : ''
            }`}
          >
            {t('navbar.documents')}
          </button>
          
          {/* Contacto */}
          <button 
            onClick={() => handleNavClick('contacto')} 
            className={`text-left hover:text-brand-primary py-2 border-b border-brand-border transition-colors cursor-pointer ${
              currentView === 'contacto' ? 'text-brand-primary font-bold' : ''
            }`}
          >
            {t('navbar.contact')}
          </button>
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between py-2 border-b border-brand-border">
            <span className="text-sm font-semibold text-brand-text-body">Idioma / Language</span>
            <div className="flex items-center bg-brand-bg-light border border-brand-border rounded-full p-0.5" role="group">
              <button
                onClick={language === 'en' ? toggleLanguage : undefined}
                className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all duration-100 cursor-pointer ${
                  language === 'es' ? 'bg-brand-primary text-white' : 'text-brand-text-body hover:text-brand-primary'
                }`}
              >
                ES
              </button>
              <button
                onClick={language === 'es' ? toggleLanguage : undefined}
                className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all duration-100 cursor-pointer ${
                  language === 'en' ? 'bg-brand-primary text-white' : 'text-brand-text-body hover:text-brand-primary'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile WhatsApp Button */}
          <button 
            onClick={handleWhatsAppClick}
            className="w-full bg-brand-whatsapp hover:brightness-105 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
          >
            <MessageSquare size={16} />
            <span>{t('common.whatsappBtn')}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
