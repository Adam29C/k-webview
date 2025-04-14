import React, { useState } from "react";
import Authcontainer from "../../Containers/auth-container";

const MPINSet = () => {
  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [showMpin, setShowMpin] = useState(false);
  const [showConfirmMpin, setShowConfirmMpin] = useState(false);

  const toggleMpinVisibility = () => setShowMpin(!showMpin);
  const toggleConfirmMpinVisibility = () =>
    setShowConfirmMpin(!showConfirmMpin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mpin === confirmMpin) {
      alert("MPIN Set Successfully!");
    } else {
      alert("MPINs do not match!");
    }
  };

  return (
    <Authcontainer
      title="MPIN Registration"
      subtitle="Please provide a 4 digit numeric MPIN to protect your account against unauthorized access"
      icon={false}
      children={
        <>
          <form onSubmit={handleSubmit} className="p-3  rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label">MPIN</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i class="fa-solid fa-lock"></i>
                </span>
                <input
                  type={showMpin ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter MPIN"
                  maxLength="4"
                  value={mpin}
                  onChange={(e) => setMpin(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={toggleMpinVisibility}
                >
                  {showMpin ? (
                    <i class="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i class="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm MPIN</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i class="fa-solid fa-lock"></i>
                </span>
                <input
                  type={showConfirmMpin ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter MPIN"
                  maxLength="4"
                  value={confirmMpin}
                  onChange={(e) => setConfirmMpin(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={toggleConfirmMpinVisibility}
                >
                  {showConfirmMpin ? (
                    <i class="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i class="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
            </div>

            <button  className=" mt-5 primary-button w-100">
              Submit
            </button>
          </form>
        </>
      }
    />
  );
};

export default MPINSet;
