import React, { useEffect } from "react";
import "../../assets/css/termandcondition.css";
const TermandCondition = ({ isOpen, onClose, title, list, buttontitle }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector(".delete-modal-container1");
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
  const extractedlist = list.split("\n").map((item) => item.trim());
  if (!isOpen) return null;
  return (
    <div className="delete-modal-overlay1">
      <div className="delete-modal-container1">
        <h2 className="delete-modal-title1">{title}</h2>
        {/* <p className="delete-modal-message">{message}</p> */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <ul
            style={{ paddingLeft: "0", marginLeft: "0", listStyleType: "none" }}
          >
            {extractedlist.map((item, index) => (
              <>
                <li key={item} className="list-item">
                  {item}
                </li>
                <br />
              </>
            ))}
          </ul>
        </div>

        <div className="delete-modal-buttons1">
          <button className="delete-btn confirm-btn1" onClick={onClose}>
            {buttontitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermandCondition;
