"use client";

import { useInvestments } from '../../../contexts/InvestimentContext';
import React, { useState } from 'react';


const InvestmentForm = ({ closeModal }: any) => {
  const { addInvestment } = useInvestments();

  const [investmentName, setInvestmentName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInvestment = {
      investmentName,
      ownerName,
      date,
      value: parseFloat(value),
    };
    addInvestment(newInvestment);
    setInvestmentName('');
    setOwnerName('');
    setDate('');
    setValue('');
    closeModal()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <h2 className="text-center font-bold mb-4">Adicione um novo investimento</h2>
        <input
          className="border w-full rounded h-10 mb-3 pl-3"
          placeholder="Título do investimento"
          type="text"
          id="investmentName"
          value={investmentName}
          onChange={(e) => setInvestmentName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          className="border w-full rounded h-10 mb-3 pl-3"
          placeholder="Nome do proprietário"
          type="text"
          id="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          className="border w-full rounded h-10 mb-3 pl-3"
          placeholder="00/00/0000"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          className="border w-full rounded h-10 mb-3 pl-3"
          placeholder="Valor"
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>
      <button className="float-right bg-green-700 rounded px-10 py-2 text-white" type="submit">Enviar</button>
    </form>
  );
};

export default InvestmentForm;
