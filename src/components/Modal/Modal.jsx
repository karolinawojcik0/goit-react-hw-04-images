import React, { useEffect } from 'react';
import { ModalWindow, Overlay } from './Modal.css';

export const Modal = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleClose}>
        <ModalWindow>
          <img src={imageUrl} alt="" />
        </ModalWindow>
      </Overlay>
    </>
  );
};
