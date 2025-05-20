import { useState, useEffect } from "react";

import Authcontainer from "../../Containers/auth-container";
import SplashScreen from "./SplashScreen";
import CustomDialog from "../../Components/Custom-modal";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { data, replace, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";

const Welcome = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  const [MobileNumber, setMobileNumber] = useState("");
  const [PreRegistedUser, setPreRegistedUser] = useState("");

  const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);
  const { login, token } = useAuth();

  const getOTP = async () => {
    login("abcd", "abc");
    // setShowModal(true);
    // return;
    // console.log("Mobile Number", MobileNumber.length);

    // if (MobileNumber.length === 0) {
    //   toast.error("Mobile Number Should Not Be Empty");
    // } else if (MobileNumber.length < 10) {
    //   toast.error("Enter Valid Mobile Number");
    // } else {
    //   // localStorage.setItem("mobile", MobileNumber);
    //   // window.location.href = "/verify";

    //   let paylaod = { mobileNumber: MobileNumber };
    //   let Url = PageIndex.apiRoutes.VERIFY_NUMBER_FOR_REGISTER_USER;

    //   const response = await PageIndex.authServices.FOR_POST_REQUEST(
    //     Url,
    //     paylaod
    //   );

    //   if (
    //     response.status === 1 ||
    //     response.status === "success" ||
    //     response.status
    //   ) {
    //     let Url = PageIndex.apiRoutes.CHECK_NUMBER_FOR_REGISTER_USER;

    //     const response1 = await PageIndex.authServices.FOR_POST_REQUEST(
    //       Url,
    //       paylaod
    //     );

    //     console.log("response", response1);

    //     if (response1.status == 0 || response1.status == 0) {
    //       // setShowModal(true);

    //       navigate("/verify", {
    //         replace: true,
    //         state: { mobileNumber: MobileNumber },
    //       });
    //     } else {
    //       setShowModal(true);
    //       setPreRegistedUser(response1.data);
    //     }
    //   }
    // }
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
  };

  const handleCancel = () => {
    console.log("Cancelled.");
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Authcontainer
            title="Welcome To"
            subtitle="India’s best Satta Matka Application Welcomes You !!!"
            icon={true}
            children={
              <>
                <div class="input-group mb-3  mt-4">
                  {/* <label htmlFor="basic-addon1">Phone Number</label> */}
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-phone primary-color icon-color"></i>
                    &nbsp; +91
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="Enter Mobile Number"
                    id="mobileNumber"
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                {/* <button className=" position-absolute  mt-5 primary-button ">Submit</button> */}
                <button className="primary-button" onClick={() => getOTP()}>
                  Get OTP
                </button>
              </>
            }
          />
          <CustomDialog
            setShowModal={setShowModal}
            ShowModal={ShowModal}
            body={
              <>
                <h6>
                  We Have Found Your ID :{" "}
                  <span className=" primary-color h5">
                    {PreRegistedUser?.userName}
                  </span>
                  <br /> With This Mobile Number Would YOu Like To Proceed
                </h6>
              </>
            }
            btn_title="Proceed"
            btn-function={handleConfirm}
          />
        </>
      )}

      <PageIndex.Toast />
    </>
  );
};

export default Welcome;
