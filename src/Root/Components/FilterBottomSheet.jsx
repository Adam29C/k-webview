import React, { useEffect, useRef } from "react";
import "../../assets/css/filterbottomsheet.css";

const FilterBottomSheet = ({
  isOpen,
  onClose,
  onSubmit,
  selectedFilters,
  setSelectedFilters,
  gamelist,
  gametype,
}) => {
  const sheetRef = useRef();

  // Click outside to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && sheetRef.current && !sheetRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  const handleCheckbox = (key, value) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      const list = new Set(updated[key]);
      list.has(value) ? list.delete(value) : list.add(value);
      updated[key] = Array.from(list);
      return updated;
    });
  };

  const handleSubmit = () => {
    onSubmit(selectedFilters);
    onClose();
  };

  const isChecked = (key, value) => selectedFilters[key]?.includes(value);
  return (
    <>
      {isOpen && <div className="fbs-backdrop" />}
      <div ref={sheetRef} className={`fbs-sheet ${isOpen ? "fbs-active" : ""}`}>
        <h3 className="fbs-title">Select Filters</h3>
        {gametype && (
          <>
            <div className="fbs-subtitle">By Game Type</div>
            <div className="fbs-section">
              <div>
                <input
                  type="checkbox"
                  checked={isChecked("general", "Open")}
                  onChange={() => handleCheckbox("general", "Open")}
                />
                &nbsp;Open
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={isChecked("general", "Close")}
                  onChange={() => handleCheckbox("general", "Close")}
                />
                &nbsp;Close
              </div>
            </div>
          </>
        )}

        <div className="fbs-subtitle">By Winning Status</div>
        <div className="fbs-section">
          {[
            { name: "Win", value: "0" },
            { name: "Loss", value: "1" },
            { name: "Pending", value: "2" },
          ].map((status) => (
            <div key={status.name}>
              <input
                type="checkbox"
                checked={isChecked("status", status.value)}
                onChange={() => handleCheckbox("status", status.value)}
              />
              &nbsp;{status.name}
            </div>
          ))}
        </div>

        <div className="fbs-subtitle">By Games</div>
        <div className="fbs-games">
          {gamelist.map((game) => (
            <div key={game._id}>
              <input
                type="checkbox"
                checked={isChecked("games", game._id)}
                onChange={() => handleCheckbox("games", game._id)}
              />
              &nbsp;{game.providerName}
            </div>
          ))}
        </div>

        <div className="fbs-actions">
          <button className="fbs-btn fbs-cancel" onClick={onClose}>
            CANCEL
          </button>
          <button className="fbs-btn fbs-submit" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterBottomSheet;
