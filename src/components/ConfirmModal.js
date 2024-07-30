import React from 'react';
import './Modal.css';

const ConfirmModal = ({ showModal, handleClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content confirmation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>&times;</button>
        <h2>Подтверждение участия</h2>
        <p>Пожалуйста, подтвердите ваше участие на свадьбе.</p>
        <button onClick={handleClose}>Подтвердить</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
