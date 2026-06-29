import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// New human-centric corporate page components
import QuienesSomosPage from './components/QuienesSomosPage';
import CreditosPersonalesPage from './components/CreditosPersonalesPage';
import CreditosMicroempresarialesPage from './components/CreditosMicroempresarialesPage';
import DescuentoDocumentosPage from './components/DescuentoDocumentosPage';
import ContactoPage from './components/ContactoPage';

// Language Context provider
import { LanguageProvider } from './context/LanguageContext';

/**
 * Main App component.
 * Manages view switching between 'home', 'quienes-somos', service pages, and 'contacto'.
 */
function App() {
  const [view, setView] = useState('home'); // 'home' | 'quienes-somos' | 'creditos-personales' | 'creditos-microempresariales' | 'descuento-documentos' | 'contacto'
  
  const handleNavigate = (targetView) => {
    setView(targetView);
    // Instant scroll to top of viewport on view switch
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-bg-light text-brand-text-body font-sans antialiased">
        <div className="flex flex-col min-h-screen justify-between">
          <div>
            {/* Sticky Navigation Bar */}
            <Navbar currentView={view} onNavigate={handleNavigate} />

            {/* Dynamic View Rendering */}
            {view === 'home' && (
              <div className="animate-fade-in">
                {/* Hero with integrated lead capture form */}
                <Hero onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'quienes-somos' && (
              <div className="animate-fade-in">
                <QuienesSomosPage onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'creditos-personales' && (
              <div className="animate-fade-in">
                <CreditosPersonalesPage onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'creditos-microempresariales' && (
              <div className="animate-fade-in">
                <CreditosMicroempresarialesPage onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'descuento-documentos' && (
              <div className="animate-fade-in">
                <DescuentoDocumentosPage onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'contacto' && (
              <div className="animate-fade-in">
                <ContactoPage onNavigate={handleNavigate} />
              </div>
            )}
          </div>

          <div>
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
