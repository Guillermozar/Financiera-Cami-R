import { useState } from 'react';
import Navbar from './components/Navbar';
import InvitationPage from './components/InvitationPage';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';

// New dedicated page components
import LoanSimulatorPage from './components/LoanSimulatorPage';
import SavingsSimulatorPage from './components/SavingsSimulatorPage';
import ProductsPage from './components/ProductsPage';
import ApplicationPage from './components/ApplicationPage';
import SecurityPage from './components/SecurityPage';
import SupportPage from './components/SupportPage';
import FinancialTipsPage from './components/FinancialTipsPage';

// Language Context provider
import { LanguageProvider } from './context/LanguageContext';

/**
 * Main App component.
 * Manages view switching between 'invitation', 'home' (brand dashboard), and dedicated sub-pages.
 */
function App() {
  const [view, setView] = useState('invitation'); // 'invitation' | 'home' | 'simular-credito' | 'simular-ahorro' | 'productos' | 'solicitud' | 'seguridad' | 'soporte'
  
  // Shared state to transfer simulation details to the application wizard
  const [loanDetails, setLoanDetails] = useState({
    loanAmount: 15000000,
    loanTerm: 24,
    monthlyPayment: 835200
  });
  const [savingsDetails, setSavingsDetails] = useState({
    monthlyDeposit: 500000,
    savingsTerm: 12,
    totalDeposits: 6000000,
    totalInterest: 247000,
    maturityValue: 6247000
  });
  const [modalType, setModalType] = useState('loan'); // 'loan' | 'savings'

  const handleOpenApplication = (type = 'loan', data = null) => {
    setModalType(type);
    if (type === 'loan' && data) {
      setLoanDetails(data);
    } else if (type === 'savings' && data) {
      setSavingsDetails(data);
    }
    setView('solicitud');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigate = (targetView, anchorId = null) => {
    setView(targetView);
    
    // Smooth scroll to top of viewport on view switch
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Handle legacy/support anchor scrolling if returning to home
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-dark text-slate-200 font-sans antialiased selection:bg-brand-gold/20 selection:text-brand-gold-light">
      
      {view === 'invitation' ? (
        <InvitationPage onEnter={() => setView('home')} />
      ) : (
        <div className="flex flex-col min-h-screen justify-between">
          <div>
            {/* Sticky Navigation Bar */}
            <Navbar currentView={view} onNavigate={handleNavigate} />

            {/* Dynamic View Rendering */}
            {view === 'home' && (
              <div className="animate-fade-in">
                {/* Brand Dashboard Launcher */}
                <Hero onNavigate={handleNavigate} onOpenModal={handleOpenApplication} />
                
                {/* Product Preview Cards (Inline section for visual depth on home) */}
                <ProductCards onNavigate={handleNavigate} />
                
                {/* Visual Security section on Home */}
                <SecuritySection />
              </div>
            )}

            {view === 'simular-credito' && (
              <div className="animate-fade-in">
                <LoanSimulatorPage onNavigate={handleNavigate} onOpenModal={handleOpenApplication} />
              </div>
            )}

            {view === 'simular-ahorro' && (
              <div className="animate-fade-in">
                <SavingsSimulatorPage onNavigate={handleNavigate} onOpenModal={handleOpenApplication} />
              </div>
            )}

            {view === 'productos' && (
              <div className="animate-fade-in">
                <ProductsPage onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'solicitud' && (
              <div className="animate-fade-in">
                <ApplicationPage 
                  onNavigate={handleNavigate}
                  loanAmount={loanDetails.loanAmount}
                  loanTerm={loanDetails.loanTerm}
                  monthlyPayment={loanDetails.monthlyPayment}
                  modalType={modalType}
                  savingsDetails={savingsDetails}
                />
              </div>
            )}

            {view === 'seguridad' && (
              <div className="animate-fade-in">
                <SecurityPage onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'soporte' && (
              <div className="animate-fade-in">
                <SupportPage onNavigate={handleNavigate} />
              </div>
            )}

            {view === 'consejos' && (
              <div className="animate-fade-in">
                <FinancialTipsPage onNavigate={handleNavigate} />
              </div>
            )}
          </div>

          <div>
            {/* Footer */}
            <Footer />
          </div>
        </div>
      )}
      
      </div>
    </LanguageProvider>
  );
}

export default App;
