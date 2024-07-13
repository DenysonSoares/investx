"use client";

import React, { useState } from 'react';

import { useInvestments } from '../../../contexts/InvestimentContext';
import CustomModal from '../CustomModal/CustomModal';

interface ModalWithdrawProps {
  investmentId: number;
  investmentDate: string;
  initialValue: number;
  currentValue: number;
}

const ModalWithdraw: React.FC<ModalWithdrawProps> = ({ investmentId, investmentDate, initialValue, currentValue }) => {
  const { removeInvestment } = useInvestments();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [withdrawValue, setWithdrawValue] = useState<number | null>(null);

  const openModal = () => {
    const today = new Date();
    const investmentStartDate = new Date(investmentDate);
    const diffTime = Math.abs(today.getTime() - investmentStartDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    let taxRate = 0.225;
    if (diffMonths > 24) {
      taxRate = 0.15;
    } else if (diffMonths > 12) {
      taxRate = 0.185;
    }

    const valueAfterTax = currentValue * (1 - taxRate);
    setWithdrawValue(valueAfterTax);

    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleWithdraw = () => {
    removeInvestment(investmentId);
    closeModal();
    window.location.href = "http://localhost:3000/"
  };

  return (
    <>
      <button className="buttonModal rounded bg-gray-800 text-tahiti float-right" onClick={openModal}>Retirar investimento</button>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Retirar Investimento"
      >
        <div className="text-center">
            <h2 className="text-lg font-bold mb-3">Confirmar Retirada</h2>
            <p>Valor Atual: R${currentValue.toFixed(2)}</p>
            {withdrawValue !== null && <p>Valor após impostos: R${withdrawValue.toFixed(2)}</p>}
            <button className="buttonConfirm rounded bg-gray-800 text-tahiti mt-6 mr-3 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10" onClick={handleWithdraw}>Confirmar Retirada</button>
            <button className="buttonCloseModal mt-3 mr-3 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10" onClick={closeModal}>Fechar</button>
        </div>
      </CustomModal>
    </>
  );
};

export default ModalWithdraw;
