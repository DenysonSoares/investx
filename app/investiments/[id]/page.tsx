"use client";

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useInvestments } from '../../contexts/InvestimentContext';

import ModalWithdraw from '@/app/components/customs/ModalWithdraw/ModalWithdraw';
import InvestmentChart from '@/app/components/customs/InvestimentChart/InvestimentChart';
import DateControler from '@/app/components/customs/DateControler/DateControler';

const InvestmentDetail: React.FC = () => {
  const { id } = useParams(); // Recupera o ID dos parâmetros da rota
  const { investments } = useInvestments();

  const investment = investments.find(investment => investment.id === Number(id));

  if (!investment) {
    return <div>Investimento não encontrado</div>;
  }

  const [months, setMonths] = useState<number>(12);

  const handleDateChange = (year: number, month: number) => {
    const investmentDate = new Date(investment.date);
    const selectedDate = new Date(year, month - 1, 1); // Ajustando o mês para ser 0-indexed
    const diffTime = Math.abs(selectedDate.getTime() - investmentDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    setMonths(diffMonths);
  };

  return (
    <div>
        <div className="bg-white grid grid-cols-6  p-5 rounded shadow">
            <p><strong>Nome do Investimento:</strong> {investment.investmentName}</p>
            <p className='ml-3'><strong>Nome do Proprietário:</strong> {investment.ownerName}</p>
            <p className='ml-4'><strong>Data:</strong> <br /> {investment.date}</p>
            <p><strong>Valor Inicial:</strong> <br /> R${investment.value.toFixed(2)}</p>
            <p><strong>Valor Atual:</strong> <br /> R${investment.currentValue?.toFixed(2) || investment.value.toFixed(2)}</p>
            <ModalWithdraw 
                investmentId={investment.id} 
                investmentDate={investment.date} 
                initialValue={investment.value} 
                currentValue={investment.currentValue ?? investment.value} // Aqui está a correção
            />
        </div>
      
      <DateControler onDateChange={handleDateChange} />
      <InvestmentChart initialValue={investment.value} months={months} />
    </div>
  );
};

export default InvestmentDetail;
