import React, { useState, useEffect } from "react";
import Authcontainer from "../../Containers/auth-container";
import InformModal from "../../Components/InformModal";

import OTPInput from "./LoginMPIN";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { DeviceID } from "../../Config/baseurl";

const VerifyUser = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const [SubmitOTP, setSubmitOTP] = useState("");

  const [modal, setmodal] = useState(false);
  const [ShowMessage, setShowMessage] = useState("");

  const SubmitOTPFunction = async () => {
    if (SubmitOTP.length === 0) {
      toast.error("OTP Should Not Be Empty");
      return;
    }
    let paylaod = {
      mobileNumber: location.state.mobileNumber,
      otp: SubmitOTP,
      deviceId: DeviceID,
    };

    let Url = PageIndex.apiRoutes.VARIFY_OTP_FOR_REGISTER_USER;
    const response = await PageIndex.authServices.FOR_POST_REQUEST(
      Url,
      paylaod
    );

    console.log("response", response);

    if (response.status) {
      navigate("/userverify", {
        replace: true,
        state: { mobileNumber: location.state.mobileNumber, otp: SubmitOTP },
      });
      // navigate("/userverify", { replace: true });
    } else {
      toast.error(response.message);
      setShowMessage(response.message);
    }
  };

  return (
    <Authcontainer
      title="OTP Verification"
      subtitle="India’s best Satta Matka Application Welcomes You !!!"
      icon={false}
      children={
        <>
          <div class="input-group mb-3  mt-4">
           
            <span class="input-group-text" id="basic-addon1">
              <i class="fa-solid fa-user icon-color"></i>
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              placeholder="Enter OTP"
              id="mobileNumber"
              onChange={(e) => setSubmitOTP(e.target.value)}
            />
          </div>
          <div class="form-check mt-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="checkDefault"
              required
            />
            <label class="form-check-label  " for="checkDefault">
              I Agree to Khatri Terms & Conditions
            </label>
          </div>
          {/* <button className=" position-absolute  mt-5 primary-button ">Submit</button> */}
          <button
            className="   secondary-button mt-5 "
            onClick={() => SubmitOTPFunction()}
          >
            Continue
          </button>
          OTP - {location.state.otp}
          <PageIndex.Toast />
          <InformModal
            isOpen={modal}
            onClose={() => setmodal(!modal)}
            title={ShowMessage && ShowMessage}
            icon={"fa fa-info-circle"}
            buttontitle={"OK"}
            Show_btn={true}
          />
        </>
      }
    />
  );
};

export default VerifyUser;
