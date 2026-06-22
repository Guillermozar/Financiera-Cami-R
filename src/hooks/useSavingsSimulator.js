import { useState, useMemo } from 'react';

/**
 * Custom hook to calculate compound interest savings (Ahorro Programado).
 * Uses standard future value of an annuity formula at 7.5% annual rate in Paraguay.
 * 
 * @param {number} initialDeposit - The initial monthly deposit in Gs.
 * @param {number} initialTerm - The initial term in months (12, 24, 36, 60).
 * @param {number} annualRate - The annual active savings interest rate (7.5%).
 */
export const useSavingsSimulator = (initialDeposit = 500000, initialTerm = 12, annualRate = 0.075) => {
  const [monthlyDeposit, setMonthlyDeposit] = useState(initialDeposit);
  const [savingsTerm, setSavingsTerm] = useState(initialTerm);

  const calculations = useMemo(() => {
    if (monthlyDeposit <= 0 || savingsTerm <= 0) {
      return {
        totalDeposits: 0,
        totalInterest: 0,
        maturityValue: 0,
        chartLabels: [],
        chartData: []
      };
    }

    const r = annualRate / 12; // monthly rate
    const n = savingsTerm;
    
    const totalDeposits = monthlyDeposit * n;
    
    // Future value of an annuity due (since deposits are at the start of each month)
    const maturityValue = monthlyDeposit * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInterest = Math.max(0, maturityValue - totalDeposits);

    // Generate chart data steps (5 steps for smooth visualization)
    const chartData = [];
    const chartLabels = [];
    const stepSize = Math.max(1, Math.round(n / 5));
    
    for (let i = 1; i <= n; i += stepSize) {
      const val = monthlyDeposit * ((Math.pow(1 + r, i) - 1) / r) * (1 + r);
      chartData.push(Math.round(val));
      chartLabels.push(`Mes ${i}`);
    }
    // Make sure to add the last month if it was skipped due to step rounding
    if ((n - 1) % stepSize !== 0) {
      chartData.push(Math.round(maturityValue));
      chartLabels.push(`Mes ${n}`);
    }

    return {
      totalDeposits: Math.round(totalDeposits),
      totalInterest: Math.round(totalInterest),
      maturityValue: Math.round(maturityValue),
      chartLabels,
      chartData
    };
  }, [monthlyDeposit, savingsTerm, annualRate]);

  return {
    monthlyDeposit,
    setMonthlyDeposit,
    savingsTerm,
    setSavingsTerm,
    totalDeposits: calculations.totalDeposits,
    totalInterest: calculations.totalInterest,
    maturityValue: calculations.maturityValue,
    chartLabels: calculations.chartLabels,
    chartData: calculations.chartData,
  };
};
