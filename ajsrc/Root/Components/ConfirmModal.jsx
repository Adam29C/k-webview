import React, { useEffect } from "react";
import "../../assets/css/confirmmodal.css";
const ConfirmModal = ({ isOpen, onClose, title, message,buttontitle }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector(".delete-modal-container");
      if (modal && !modal.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal-container">
        <h2 className="delete-modal-title">{title}</h2>
        <p className="delete-modal-message">{message}</p>
        <div className="delete-modal-buttons">
          <button className="delete-btn confirm-btn" onClick={onClose}>
           {buttontitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
