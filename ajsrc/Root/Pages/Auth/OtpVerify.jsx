// // import React, { useState } from "react";
// import Authcontainer from "../../Containers/auth-container";
// // import OtpInput from "react-otp-input";
// // imp
// // const OtpVerify = () => {
// //   const [otp, setOtp] = useState("");

// //   const handlePaste = (event) => {
// //     const data = event.clipboardData.getData("text");
// //     console.log(data);
// //   };

// //   return (
// //     <>
// //       <Authcontainer
// //         title="OTP Verification"
// //         subtitle="India’s best Satta Matka Application Welcomes You !!!"
// //         icon={false}
// //         children={
// //           <>
// //             <div className="d-flex justify-content-center align-items-center mt-5">
// //               <OtpInput
// //                 value={otp}
// //                 onChange={setOtp}
// //                 inputStyle="controls"
// //                 numInputs={4}
// //                 renderSeparator={<span>-</span>}
// //                 renderInput={(props) => <input {...props} />}
// //                 onPaste={handlePaste}
// //               />
// //             </div>
// //           </>
// //         }
// //       />
// //     </>
// //   );
// // };

// // export default OtpVerify;

// import React, { useState, useEffect } from "react";
// import OTPInput from "./text";

// const VerifyUser = () => {
//   const [timer, setTimer] = useState(59);
//   const [isDisabled, setIsDisabled] = useState(true);

//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(interval);
//     } else {
//       setIsDisabled(false);
//     }
//   }, [timer]);

//   // Handle OTP Submit
//   const handleSubmit = (pin) => {
//     console.log(pin);
//   };

//   // Reset timer on resend
//   const handleResend = () => {
//     setTimer(59);
//     setIsDisabled(true);
//   };

//   return (
//     <Authcontainer
//       title="OTP Verification"
//       subtitle="India’s best Satta Matka Application Welcomes You !!!"
//       icon={false}
//       children={
//         <>
//           <OTPInput length={4} onComplete={handleSubmit} />
//           <div className="d-flex justify-content-around align-items-center mt-2">
//             <span className="Resend-btn mt-3">Resend OTP : {timer}s</span>

//             <button
//               className="btn btn-primary mt-4 d-flex ms-auto me-3 center"
//               onClick={handleResend}
//               disabled={isDisabled}
//             >
//               Resend
//             </button>
//           </div>
//         </>
//       }
//     />
//   );
// };

// export default VerifyUser;

// import React, { useState } from "react";
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
import Authcontainer from "../../Containers/auth-container";

import OTPInput from "./text";
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
      title="OTP Verification"
      subtitle="India’s best Satta Matka Application Welcomes You !!!"
      icon={false}
      children={
        <>
          <div class="input-group mb-3  mt-4">
            {/* <label htmlFor="basic-addon1">Phone Number</label> */}
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
          <PageIndex.Toast />
        </>
      }
    />
  );
};

export default VerifyUser;
