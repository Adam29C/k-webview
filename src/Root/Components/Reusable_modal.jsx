// import React from "react";

// const CenterModal = ({
//   id,
//   title,
//   children,
//   onSave,
//   onClose,
//   showBtn,
//   size,
//   ShowModal,
// }) => {
//   return (
//     <>
//       <div
//         className={`modal fade ${ShowModal ? "show" : ""}`}
//         id={id}
//         tabIndex="-1"
//         aria-labelledby={`Label`}
//         aria-hidden="true"
//       >
//         <div
//           className={`modal-dialog modal-dialog-centered ${
//             size ? `modal-${size}` : ""
//           }`}
//         >
//           <div className="modal-content border-none">
//             <div className="modal-header  ">
//               <h6 className="modal-title border-none " id={`Label`}>
//                 {title}
//               </h6>
//               {showBtn && (
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                   onClick={onClose}
//                 ></button>
//               )}
//             </div>
//             <div className="modal-body">{children}</div>

//             {showBtn && (
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn outline-btn p-2"
//                   data-bs-dismiss="modal"
//                   onClick={onClose}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="btn theme-btn p-2"
//                   onClick={onSave}
//                 >
//                   Save
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CenterModal;

import React from "react";
import PropTypes from "prop-types";

const CenterModal = ({
  id,
  title,
  children,
  onSave,
  onClose,
  showBtn = true,
  size = "md",
  ShowModal = false,
}) => {
  return (
    <>
      {ShowModal && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${ShowModal ? "show" : ""}`}
        id={id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`${id}Label`}
        aria-hidden={!ShowModal}
        style={{ display: ShowModal ? "block" : "none" }}
      >
        <div
          className={`modal-dialog modal-dialog-centered modal-${size}`}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${id}Label`}>
                {title}
              </h5>
              {showBtn && (
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              )}
            </div>

            <div className="modal-body">{children}</div>

            {showBtn && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
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

// ✅ PropTypes (optional but recommended)
CenterModal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSave: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  showBtn: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  ShowModal: PropTypes.bool.isRequired,
};

export default CenterModal;
