import React, { useEffect, useRef } from "react";
import "../../assets/css/bottomsheetfilter.css";

const BottomSheetFilter = ({ isOpen, onClose, title, children }) => {
  const sheetRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target)) {
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

  return (
    <>
      {/* Optional: Backdrop */}
      {isOpen && <div className="mybs-backdrop" />}

      <div
        ref={sheetRef}
        className={`mybs-bottom-sheet ${isOpen ? "mybs-active" : ""}`}
      >
        <button className="mybs-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="mybs-content">
          {title && <h3 className="mybs-title">{title}</h3>}
          {children}
        </div>
      </div>
    </>
  );
};

export default BottomSheetFilter;
