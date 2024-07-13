"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Investment {
  id: number;
  investmentName: string;
  ownerName: string;
  date: string;
  value: number;
  currentValue?: number;
}

interface InvestmentContextType {
  investments: Investment[];
  addInvestment: (investment: Omit<Investment, 'id'>) => void;
  removeInvestment: (id: number) => void;
  calculateInvestmentReturns: (year: number, month: number) => void;
}

const InvestmentContext = createContext<InvestmentContextType | undefined>(undefined);

const initialInvestments: Investment[] = [
  {
    id: 1,
    investmentName: 'Investimento A',
    ownerName: 'Proprietário 1',
    date: '2023-01-01',
    value: 1000,
  },
  {
    id: 2,
    investmentName: 'Investimento B',
    ownerName: 'Proprietário 2',
    date: '2023-02-01',
    value: 2000,
  },
];

export const InvestmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [investments, setInvestments] = useState<Investment[]>(initialInvestments);

  const addInvestment = (investment: Omit<Investment, 'id'>) => {
    const newInvestment: Investment = {
      ...investment,
      id: investments.length > 0 ? investments[investments.length - 1].id + 1 : 1,
    };
    setInvestments([...investments, newInvestment]);
  };

  const removeInvestment = (id: number) => {
    setInvestments(prev => prev.filter(investment => investment.id !== id));
  };

  const calculateInvestmentReturns = (year: number, month: number) => {
    const today = new Date(year, month - 1);
    
    const updatedInvestments = investments.map(investment => {
      const investmentStartDate = new Date(investment.date);
      const diffTime = Math.abs(today.getTime() - investmentStartDate.getTime());
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      
      // Cálculo do valor final do investimento com rendimento composto de 0,52% ao mês
      const finalValue = investment.value * Math.pow(1.0052, diffMonths);

      let taxRate = 0.225;
      if (diffMonths > 24) {
        taxRate = 0.15;
      } else if (diffMonths > 12) {
        taxRate = 0.185;
      }

      const valueAfterTax = finalValue * (1 - taxRate);
      
      return {
        ...investment,
        currentValue: valueAfterTax,
      };
    });

    setInvestments(updatedInvestments);
  };

  return (
    <InvestmentContext.Provider value={{ investments, addInvestment, removeInvestment, calculateInvestmentReturns }}>
      {children}
    </InvestmentContext.Provider>
  );
};

export const useInvestments = (): InvestmentContextType => {
  const context = useContext(InvestmentContext);
  if (context === undefined) {
    throw new Error('useInvestments must be used within an InvestmentProvider');
  }
  return context;
};
