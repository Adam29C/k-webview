import React, { useState, useEffect } from "react";
import Authcontainer from "../../Containers/auth-container";
import InformModal from "../../Components/InformModal";
import OtpInput from "react-otp-input";

import OTPInput from "./LoginMPIN";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { DeviceID } from "../../Config/baseurl";
import { GetFirebseAndDeviceID } from "../../helpers/GetFirebseAndDeviceID";

const VerifyUser = () => {
  const { deviceId, firebaseId, deviceName } = GetFirebseAndDeviceID();

  let location = useLocation();
  let navigate = useNavigate();

  const [SubmitOTP, setSubmitOTP] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(true);
  const [modal, setmodal] = useState(false);
  const [ShowMessage, setShowMessage] = useState("");
  const [ManageOTP, setManageOTP] = useState("");

  PageIndex.useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);



  const handleResend = async () => {
    setSubmitOTP("");
    setTimer(59);
    setCanResend(false);

    let payload = { mobile: location.state.mobileNumber, deviceId: deviceId };

    const res = await PageIndex.commanservice.FOR_POST_REQUEST(
      `${PageIndex.apiRoutes.SEND_OTP_FOR_REGISTER_USER}`,
      payload
    );

    console.log("otp-resend", res);

    // if (res.status) {

    if (res.status) {
      setManageOTP(res.otp);
      toast.success(res.message);
      return;
    } else {
      toast.error(res.data.message);
    }
    if (!res.data.status) {
      toast.error(res.data.message);
      return;
    }
  };

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

    // console.log("response", response);

    if (response.status) {
      navigate("/userverify", {
        replace: true,
        state: {
          mobileNumber: location.state.mobileNumber,
          otp: SubmitOTP,
          newUser: location.state.newUser,
          username: location.state.username,
        },
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
          <span className="otp-send-text">
            Enter the OTP send to &nbsp;{" "}
            <span className="fw-bold"> +91{location.state.mobileNumber}</span>
          </span>
          <OtpInput
            value={SubmitOTP}
            onChange={setSubmitOTP}
            inputStyle="controls"
            numInputs={4}
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
            // onPaste={handlePaste}
            containerStyle="OTP-input"
          />
          {/* <div class="input-group mb-3  mt-4">
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
          </div> */}
          <div className="d-flex  align-items-center my-3 text-secondary">
            {canResend ? (
              <button
                onClick={handleResend}
                className=" text-secondary  btn btn-link fw-bold manaage-otp-font "
              >
                Resend OTP
              </button>
            ) : (
              <span className="manaage-otp-font ">
                Second Remaining - {timer}s
              </span>
            )}
            {/* <span className="fw-bold">Resend OTP</span> */}
          </div>
          <button
            className="   secondary-button  "
            onClick={() => SubmitOTPFunction()}
          >
            Continue
          </button>
          OTP - {ManageOTP || location.state.otp}
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
