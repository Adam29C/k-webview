import { useState, useEffect } from "react";

import Authcontainer from "../../Containers/auth-container";
import SplashScreen from "./SplashScreen";
import CustomDialog from "../../Components/Custom-modal";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { data, replace, useNavigate } from "react-router-dom";
import { DeviceID } from "../../Config/baseurl";
import { GetFirebseAndDeviceID } from "../../helpers/GetFirebseAndDeviceID";

const Welcome = () => {
  const navigate = useNavigate();
  const { deviceId, firebaseId, deviceName } = GetFirebseAndDeviceID();

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

  const getOTP = async () => {
    if (MobileNumber.length === 0) {
      toast.error("Input Number Only");
    } else if (MobileNumber.length < 10) {
      toast.error("Enter Valid Mobile Number");
    } else {
      // localStorage.setItem("mobile", MobileNumber);
      // window.location.href = "/verify";

      let paylaod = { mobile: MobileNumber, deviceId: deviceId };
      let Url = PageIndex.apiRoutes.VERIFY_NUMBER_FOR_REGISTER_USER;

      const response = await PageIndex.authServices.FOR_POST_REQUEST(
        Url,
        paylaod
      );

      if (response.status) {
        let Url = PageIndex.apiRoutes.SEND_OTP_FOR_REGISTER_USER;

        const response1 = await PageIndex.authServices.FOR_POST_REQUEST(
          Url,
          paylaod
        );

        if (response1.status) {
          // setShowModal(true);
          navigate("/verify", {
            replace: true,
            state: { mobileNumber: MobileNumber, otp: response1.otp },
          });
        } else {
          setShowModal(true);
          setPreRegistedUser(response1.data);
        }
      }
    }
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
                  {/* deviceId = {deviceId} <br />
                  deviceName = {deviceName} <br />
                  firebaseId = {firebaseId} <br /> */}
                  {/* <label htmlFor="basic-addon1">Phone Number</label> */}
                  {/* test--- {first && first} */}
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-phone primary-color icon-color"></i>
                    +91
                  </span>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    aria-describedby="basic-addon1"
                    inputMode="numeric"
                    class="form-control"
                    aria-label="Username"
                    placeholder="Enter Mobile Number"
                    id="mobileNumber"
                    onChange={
                      (e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setMobileNumber(value);
                        }
                      }
                      // setMobileNumber(e.target.value)
                    }
                  />
                </div>
                {/* <button className=" position-absolute  mt-5 primary-button ">Submit</button> */}
                <button className="   primary-button " onClick={() => getOTP()}>
                  Get OTP
                </button>
                {/* otp- {ids.firebaseId} */}
              </>
            }
          />
          <CustomDialog
            setShowModal={setShowModal}
            ShowModal={ShowModal}
            Show_btn={true}
            body={
              <>
                <h6>
                  We Have Found Your ID :
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
