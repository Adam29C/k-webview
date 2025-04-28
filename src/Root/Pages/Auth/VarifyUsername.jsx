import React, { useState, useEffect } from "react";
import Authcontainer from "../../Containers/auth-container";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const VerifyUser = () => {
  let location = useLocation();

  const [SubmitOTP, setSubmitOTP] = useState("");

  const SubmitOTPFunction = async () => {
    if (SubmitOTP.length === 0) {
      toast.error("OTP Should Not Be Empty");
      return;
    }
    let paylaod = {
      mobileNumber: location.state.mobileNumber,
      otp: SubmitOTP,
      deviceId: "d01ef824cc4be6b0",
    };

    let Url = PageIndex.apiRoutes.VARIFY_OTP_FOR_REGISTER_USER;
    const response = await PageIndex.authServices.FOR_POST_REQUEST(
      Url,
      paylaod
    );
    if (
      response.status === 1 ||
      response.status === "success" ||
      response.status
    ) {
      // navigate("/verify", { replace: true });
    }
  };

  return (
    <Authcontainer
      title="Welcome To"
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
              placeholder="Enter User Name "
              id="mobileNumber"
              onChange={(e) => setSubmitOTP(e.target.value)}
            />
          </div>
          <button
            className="   secondary-button mt-5 "
            onClick={() => SubmitOTPFunction()}
          >
            Continue
          </button>
          <PageIndex.Toast />
        </>
      }
    />
  );
};

export default VerifyUser;
