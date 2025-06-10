import React, { useState } from "react";
import Authcontainer from "../../Containers/auth-container";
import OtpInput from "react-otp-input";
import PagesIndex from "../pageIndex";
import toast from "react-hot-toast";
const OtpVerify = () => {
  const { getProfile } = PagesIndex.useSelector((state) => state.CommonSlice);

  console.log("getProfile", getProfile);

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(true);

  const SubmitOTP = async (event) => {
    const payload = {
      mobileNumber: getProfile.mobile,
      otp: otp,
    };

    const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
      `${PagesIndex.apiRoutes.VERIFY_OTP_SEND}`,
      payload
    );

    if (res.status) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  PagesIndex.useEffect(() => {
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
    setTimer(30);
    setCanResend(false);

    const payload = {
      mobileNumber: getProfile.mobile,
    };

    const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
      `${PagesIndex.apiRoutes.FORGET_OTP_SEND}`,
      payload
    );

    // if (res.status) {

    if (res.status) {
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
  // };

  return (
    <>
      <Authcontainer
        title="OTP Verification"
        subtitle="India’s best Satta Matka Application Welcomes You !!!"
        icon={false}
        children={
          <>
            <div className="d-flex justify-content-center align-items-center mt-5 rounded-4">
              <OtpInput
                value={otp}
                onChange={setOtp}
                inputStyle="controls"
                numInputs={4}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                // onPaste={handlePaste}
                containerStyle="OTP-input"
              />
            </div>
            <div className="d-flex  align-items-center my-3 text-secondary">
              {canResend ? (
                <button
                  onClick={handleResend}
                  className=" text-secondary  btn btn-link"
                >
                  Resend OTP
                </button>
              ) : (
                <span>Resend in - {timer}s</span>
              )}
              {/* <span className="fw-bold">Resend OTP</span> */}
            </div>
            <button className="primary-button  " onClick={() => SubmitOTP()}>
              submit
            </button>
            <PagesIndex.Toast position={"top-center"} />
          </>
        }
      />
    </>
  );
};

export default OtpVerify;
