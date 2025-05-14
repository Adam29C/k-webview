import React, { useEffect } from "react";
import "../../assets/css/informmodal.css";
const InformModal = ({ isOpen, onClose, title, icon, buttontitle }) => {
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
      <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="delete-modal-title">
          <div
           className="newdiv"
          >
            <i
              className={icon}
              style={{ color: "#237f8a" }}
              aria-hidden="true"
            ></i>
          </div>
        </h2>
        {/* <p className="delete-modal-message">{message}</p> */}
        <div
          className="title"
        >
          {title}
        </div>

        <div className="delete-modal-buttons2">
          <button className="delete-btn2 confirm-btn2" onClick={onClose}>
            {buttontitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformModal;
