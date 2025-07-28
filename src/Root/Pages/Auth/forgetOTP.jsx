import React, { useEffect, useState } from "react";
import Authcontainer from "../../Containers/auth-container";
import OtpInput from "react-otp-input";
import PagesIndex from "../pageIndex";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { GetFirebseAndDeviceID } from "../../helpers/GetFirebseAndDeviceID";
const ForgetOTP = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const { deviceId, firebaseId, deviceName } = GetFirebseAndDeviceID();

  const { getProfile } = PagesIndex.useSelector((state) => state.CommonSlice);

  const [otp, setOtp] = useState("");
  const [showOtp, setshowOtp] = useState("");

  const [Details, setDetails] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(true);

  // useEffect(() => {
  //   if (timer === 0) {
  //     setCanResend(true);
  //     return;
  //   }

  //   const interval = setInterval(() => {
  //     setTimer((prev) => prev - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [timer]);

  // const sendOTP = async () => {
  //   const payload = {
  //     deviceId: deviceId,
  //   };

  //   const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
  //     `${PagesIndex.apiRoutes.FORGET_OTP_SEND}`,
  //     payload
  //   );
  // };

  const handleResend = async () => {
    setTimer(59);
    setCanResend(false);

    const payload = {
      deviceId: deviceId,
    };

    const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
      `${PagesIndex.apiRoutes.FORGET_OTP_SEND}`,
      payload
    );


    console.log("res.status" ,res);
    

    if (res.status) {
      setDetails(res);
      setshowOtp(res.otp);
      toast.success(res.message);
    } else {
      toast.error(res.data.message);
    }
    // if (!res.data.status) {
    //   toast.error(res.data.message);
    // }
  };

  PagesIndex.useEffect(() => {
    return handleResend();
  }, []);

  const SubmitOTP = async () => {
    const payload = {
      mobileNumber: Details?.mobile && Details?.mobile,
      otp: otp,
    };

    const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
      `${PagesIndex.apiRoutes.VERIFY_OTP_SEND}`,
      payload
    );

    if (res.status) {
      navigate("/mpin", {
        replace: true,
        state: {
          username: Details?.userName,
          mobileNumber: Details?.mobile,
          otp: otp,
        },
      });

      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <Authcontainer
        title2="OTP Verification"
        subtitle="India’s best Satta Matka Application Welcomes You !!!"
        icon={false}
        children={
          <>
            showOtp- {showOtp}
            <div className="d-flex justify-content-center align-items-center  rounded-4">
              <OtpInput
                value={otp}
                onChange={setOtp}
                inputStyle="controls"
                numInputs={4}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                // onPaste={handlePaste}
                containerStyle="OTP-input"
                inputType="number"
              />
            </div>
            <div className="d-flex  align-items-center my-1 text-secondary">
              {canResend ? (
                <span
                  onClick={handleResend}
                  className=" text-secondary fw-bold manaage-otp-font "
                >
                  Resend OTP
                </span>
              ) : (
                <span className="manaage-otp-font">Resend in - {timer}s</span>
              )}
              {/* <span className="fw-bold">Resend OTP</span> */}
            </div>
            <button
              className="primary-button mt-4 "
              onClick={() => SubmitOTP()}
            >
              SUBMIT
            </button>
            <PagesIndex.Toast position={"bottom-center"} />
          </>
        }
      />
    </>
  );
};

export default ForgetOTP;
