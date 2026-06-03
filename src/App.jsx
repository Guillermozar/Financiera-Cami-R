import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSimulator from './components/HeroSimulator';
import ProductCards from './components/ProductCards';
import SecuritySection from './components/SecuritySection';
import LeadModal from './components/LeadModal';
import Footer from './components/Footer';
import { useLoanSimulator } from './hooks/useLoanSimulator';

/**
 * Main App component.
 * Coordinates global states, connects the loan simulator custom hook,
 * and renders all sub-components.
 */
function App() {
  const [showLeadModal, setShowLeadModal] = useState(false);

  // Invoke the loan simulator hook (Initializes at 15M Gs., 24 months, 15% APR)
  const {
    loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    monthlyPayment
  } = useLoanSimulator(15000000, 24, 0.15);

  const handleOpenModal = () => setShowLeadModal(true);
  const handleCloseModal = () => setShowLeadModal(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 2. Hero Area + Interactive Loan Simulator */}
      <HeroSimulator 
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        loanTerm={loanTerm}
        setLoanTerm={setLoanTerm}
        monthlyPayment={monthlyPayment}
        onOpenModal={handleOpenModal}
      />

      {/* 3. Product Features Cards (with Responsive Chart.js graph) */}
      <ProductCards onOpenModal={handleOpenModal} />

      {/* 4. Technical Trust and Security Módulo */}
      <SecuritySection />

      {/* 5. Lead Capture Modal (Conditionally rendered, keyboard focus trapped) */}
      <LeadModal 
        isOpen={showLeadModal} 
        onClose={handleCloseModal}
        loanAmount={loanAmount}
        loanTerm={loanTerm}
        monthlyPayment={monthlyPayment}
      />

      {/* 6. Regulatory & Institutional Compliance Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
