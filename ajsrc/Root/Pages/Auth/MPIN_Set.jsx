import React, { useState } from "react";
import Authcontainer from "../../Containers/auth-container";

const MPINSet = () => {
  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [showMpin, setShowMpin] = useState(false);
  const [showConfirmMpin, setShowConfirmMpin] = useState(false);

  // const toggleMpinVisibility = () => setShowMpin(!showMpin);
  // const toggleConfirmMpinVisibility = () =>
  //   setShowConfirmMpin(!showConfirmMpin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mpin === confirmMpin) {
      alert("MPIN Set Successfully!");
    } else {
      toast.error("OTP Should Not Be Empty");


      // alert("MPINs do not match!");
    }
  };

  return (
    <Authcontainer
      title="MPIN Registration"
      subtitle="Please provide a 4 digit numeric MPIN to protect your account against unauthorized access"
      icon={false}
      children={
        <>
          <form
            onSubmit={handleSubmit}
            className="p-3  ms-2 rounded shadow-sm w-100"
          >
            <div className="mb-3">
              <div className="input-container">
                <i className="fa-solid fa-lock input-icon"></i>
                <input
                  type="password"
                  className="styled-input"
                  placeholder="Enter MPIN"
                  maxLength="4"
                  value={mpin}
                  onChange={(e) => setMpin(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              {/* <label className="form-label">MPIN</label> */}

              <div className="input-container">
                <i className="fa-solid fa-lock input-icon"></i>
                <input
                  type="password"
                  className="styled-input"
                  placeholder="Confirm MPIN"
                  maxLength="4"
                  value={confirmMpin}
                  onChange={(e) => setConfirmMpin(e.target.value)}
                />
              </div>
            </div>

            <button className=" mt-5 primary-button w-100">Submit</button>
          </form>
        </>
      }
    />
  );
};

export default MPINSet;
