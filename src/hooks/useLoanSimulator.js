import { useState, useMemo } from 'react';

/**
 * Custom hook to manage the state and logic of the loan simulator.
 * Calculates French amortization payment along with Paraguayan bank regulations (IVA, Seguro de Vida, Gastos Adm.)
 * 
 * @param {number} initialAmount - The initial loan amount in Gs.
 * @param {number} initialTerm - The initial loan term in months.
 * @param {number} annualRate - The annual interest rate (e.g. 0.175 for 17.5%).
 */
export const useLoanSimulator = (initialAmount = 15000000, initialTerm = 24, annualRate = 0.175) => {
  const [loanAmount, setLoanAmount] = useState(initialAmount);
  const [loanTerm, setLoanTerm] = useState(initialTerm);

  const calculations = useMemo(() => {
    if (loanAmount <= 0 || loanTerm <= 0) {
      return {
        purePayment: 0,
        interest: 0,
        iva: 0,
        insurance: 0,
        adminFee: 0,
        monthlyPayment: 0
      };
    }

    const monthlyRate = annualRate / 12;
    
    // 1. Pure Payment (French Amortization: Capital + Interest)
    const purePayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
    
    // 2. Interest for the first month
    const interest = loanAmount * monthlyRate;
    
    // 3. IVA on financial interest (10% in Paraguay)
    const iva = interest * 0.10;
    
    // 4. Life Insurance on debtor balance (standard rate of 0.08% monthly)
    const insurance = loanAmount * 0.0008;
    
    // 5. Fixed Administrative Fee (Gs. 7,700)
    const adminFee = 7700;
    
    // 6. Total installment including VAT, insurance, and fees
    const monthlyPayment = purePayment + iva + insurance + adminFee;

    return {
      purePayment: Math.round(purePayment),
      interest: Math.round(interest),
      iva: Math.round(iva),
      insurance: Math.round(insurance),
      adminFee,
      monthlyPayment: Math.round(monthlyPayment)
    };
  }, [loanAmount, loanTerm, annualRate]);

  return {
    loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    purePayment: calculations.purePayment,
    interest: calculations.interest,
    iva: calculations.iva,
    insurance: calculations.insurance,
    adminFee: calculations.adminFee,
    monthlyPayment: calculations.monthlyPayment,
  };
};
