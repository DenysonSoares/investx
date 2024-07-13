"use client"

import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import "./styles.css"
import InvestmentForm from "../InvestimentForm/InvestimentForm";

const ModalInvestimento = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <>
        <button className="buttonModal rounded bg-gray-800 text-tahiti" onClick={openModal}>Adicionar investimento</button>
        <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Exemplo de Modal"
        >
            <InvestmentForm closeModal={closeModal}/>
            <button className="buttonCloseModal mt-3 mr-3 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10" onClick={closeModal}>Fechar</button>
        </CustomModal>
        </>
    )
}

export default ModalInvestimento