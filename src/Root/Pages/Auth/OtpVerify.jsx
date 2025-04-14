// import React, { useState } from "react";
import Authcontainer from "../../Containers/auth-container";
// import OtpInput from "react-otp-input";
// imp
// const OtpVerify = () => {
//   const [otp, setOtp] = useState("");

//   const handlePaste = (event) => {
//     const data = event.clipboardData.getData("text");
//     console.log(data);
//   };

//   return (
//     <>
//       <Authcontainer
//         title="OTP Verification"
//         subtitle="India’s best Satta Matka Application Welcomes You !!!"
//         icon={false}
//         children={
//           <>
//             <div className="d-flex justify-content-center align-items-center mt-5">
//               <OtpInput
//                 value={otp}
//                 onChange={setOtp}
//                 inputStyle="controls"
//                 numInputs={4}
//                 renderSeparator={<span>-</span>}
//                 renderInput={(props) => <input {...props} />}
//                 onPaste={handlePaste}
//               />
//             </div>
//           </>
//         }
//       />
//     </>
//   );
// };

// export default OtpVerify;


import React, { useState, useEffect } from "react";
import OTPInput from "./text";

const VerifyUser = () => {
  const [timer, setTimer] = useState(59);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsDisabled(false);
    }
  }, [timer]);

  // Handle OTP Submit
  const handleSubmit = (pin) => {
    console.log(pin);
  };

  // Reset timer on resend
  const handleResend = () => {
    setTimer(59);
    setIsDisabled(true);
  };

  return (
    <Authcontainer
      title="OTP Verification"
      subtitle="India’s best Satta Matka Application Welcomes You !!!"
      icon={false}
      children={
        <>
          <OTPInput length={4} onComplete={handleSubmit} />
          <div className="d-flex justify-content-around align-items-center mt-2">
            <span className="Resend-btn mt-3">Resend OTP : {timer}s</span>

            <button
              className="btn btn-primary mt-4 d-flex ms-auto me-3 center"
              onClick={handleResend}
              disabled={isDisabled}
            >
              Resend
            </button>
          </div>
        </>
      }
    />
  );
};

export default VerifyUser;
