import React from "react";

const CenterModal = ({
  id,
  title,
  children,
  onSave,
  onClose,
  showBtn,
  size,
  ShowModal,
}) => {
  return (
    <>
      <div
        className={`modal fade ${ShowModal ? "show" : ""}`}
        id={id}
        tabIndex="-1"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${
            size ? `modal-${size}` : ""
          }`}
        >
          <div className="modal-content border-none">
            <div className="modal-header  ">
              <h6 className="modal-title border-none " id={`${id}Label`}>
                {title}
              </h6>
              {showBtn && (
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                ></button>
              )}
            </div>
            <div className="modal-body">{children}</div>

            {showBtn && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn outline-btn p-2"
                  data-bs-dismiss="modal"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn theme-btn p-2"
                  onClick={onSave}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterModal;
