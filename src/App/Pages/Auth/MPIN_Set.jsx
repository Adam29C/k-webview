import React, { useState } from "react";
import Authcontainer from "../../Containers/auth-container";
import { GetFirebseAndDeviceID } from "../../helpers/GetFirebseAndDeviceID";
import { useLocation, useNavigate } from "react-router-dom";
import PagesIndex from "../pageIndex";
import toast from "react-hot-toast";

const MPINSet = () => {
  const { deviceId, firebaseId, deviceName } = GetFirebseAndDeviceID();
  let location = useLocation();
  let navigate = useNavigate();

  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [showMpin, setShowMpin] = useState(false);
  const [showConfirmMpin, setShowConfirmMpin] = useState(false);

  // const toggleMpinVisibility = () => setShowMpin(!showMpin);
  // const toggleConfirmMpinVisibility = () =>
  //   setShowConfirmMpin(!showConfirmMpin);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Empty Check
    if (!mpin || !confirmMpin) {
      toast.error("MPIN and Confirm MPIN should not be empty");
      return;
    }

    // Step 2: Length Check (optional - 4/6 digit etc.)
    if (mpin.length < 4 || confirmMpin.length < 4) {
      toast.error("MPIN must be at least 4 digits");
      return;
    }

    // Step 3: Match Check
    if (mpin !== confirmMpin) {
      toast.error("MPIN and Confirm MPIN do not match");
      return;
    }

    // Step 4: Construct payload
    const payload = {
      username: location.state?.username,
      mobile: location.state?.mobileNumber,
      deviceId: deviceId,
      firebaseId: firebaseId,
      deviceVerifyOTP: location.state?.otp,
      deviceName: deviceName,
      userMpin: mpin,
      name: location.state?.username,
    };

    try {
      const Url = PagesIndex.apiRoutes.NEW_REGISTER_USER;
      const response = await PagesIndex.authServices.FOR_POST_REQUEST(
        Url,
        payload
      );

      if (response?.status) {
        localStorage.setItem("token", response.data.token);
        navigate(" home", { replace: true });
      } else {
        toast.error("Something went wrong during registration");
      }

      setShowMpin(JSON.stringify(response));
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
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
            showMpin ={showMpin}
            <button className=" mt-5 primary-button w-100">Submit</button>
          </form>
          <PagesIndex.Toast />
        </>
      }
    />
  );
};

export default MPINSet;
