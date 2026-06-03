import { useState, useMemo } from 'react';

/**
 * Custom hook to manage the state and logic of the loan simulator.
 * 
 * @param {number} initialAmount - The initial loan amount in Gs.
 * @param {number} initialTerm - The initial loan term in months.
 * @param {number} annualRate - The annual interest rate (e.g. 0.15 for 15%).
 */
export const useLoanSimulator = (initialAmount = 15000000, initialTerm = 24, annualRate = 0.15) => {
  const [loanAmount, setLoanAmount] = useState(initialAmount);
  const [loanTerm, setLoanTerm] = useState(initialTerm);

  // Memoized monthly payment calculation to optimize performance
  const monthlyPayment = useMemo(() => {
    if (loanAmount <= 0 || loanTerm <= 0) return 0;
    const monthlyRate = annualRate / 12;
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
    return Math.round(payment);
  }, [loanAmount, loanTerm, annualRate]);

  return {
    loanAmount,
    setLoanAmount,
    loanTerm,
    setLoanTerm,
    monthlyPayment,
  };
};
