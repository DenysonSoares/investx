import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import "./styles.css"

interface CustomModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel: string;
    children: ReactNode;
  }

const CustomModal:React.FC<CustomModalProps> = ({ isOpen, onRequestClose, contentLabel, children }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}

      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          minWidth: "600px",
          padding: "50px"
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default CustomModal;
