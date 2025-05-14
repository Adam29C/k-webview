import React from 'react';
import '../../assets/css/modal.css'; // Import CSS for styling

// The Modal component accepts isOpen and onClose as props
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-body">
          {children} {/* Render any content passed as children */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
