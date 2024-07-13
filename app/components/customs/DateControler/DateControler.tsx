"use client";

import { useInvestments } from '../../../contexts/InvestimentContext';
import React, { useState, useEffect } from 'react';

interface DateControlerProps {
  onDateChange?: (year: number, month: number) => void;
}

const DateControler: React.FC<DateControlerProps> = ({ onDateChange }) => {
  const { calculateInvestmentReturns } = useInvestments();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value, 10);
    setYear(newYear);
    calculateInvestmentReturns(newYear, month);
    if (onDateChange) {
      onDateChange(newYear, month);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    setMonth(newMonth);
    calculateInvestmentReturns(year, newMonth);
    if (onDateChange) {
      onDateChange(year, newMonth);
    }
  };

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 40 }, (_, i) => currentYear - 30 + i);

  useEffect(() => {
    if (onDateChange) {
      onDateChange(year, month);
    }
  }, [year, month, onDateChange]);

  return (
    <div className="mt-5">
      <div>
        <h4 className="font-bold mb-1">Rentabilidade:</h4>
      </div>
      <div>
        Anual
        <select className="h-8 rounded ml-1 mr-3 px-2" value={year} onChange={handleYearChange}>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        Mensal
        <select className="h-8 rounded ml-1 mr-3 px-2" value={month} onChange={handleMonthChange}>
          {months.map((m, index) => (
            <option key={m} value={index + 1}>{m}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateControler;
