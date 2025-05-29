import { useState, useEffect } from "react";

import Authcontainer from "../../Containers/auth-container";
import SplashScreen from "./SplashScreen";
import CustomDialog from "../../Components/Custom-modal";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { data, replace, useNavigate } from "react-router-dom";
import { DeviceID } from "../../Config/baseurl";
import { GetFirebseAndDeviceID } from "../../helpers/GetFirebseAndDeviceID";
import secoLogo from "../../../assets/svgs/logo-third.svg";

const Welcome = () => {
  const navigate = useNavigate();
  const { deviceId, firebaseId, deviceName } = GetFirebseAndDeviceID();

  const [showSplash, setShowSplash] = useState(true);
  const [MPIN, setMPIN] = useState("");
  const [PreRegistedUser, setPreRegistedUser] = useState("");
  const [ShowModal, setShowModal] = useState(false);

  const LoginUser = async () => {
    if (MPIN.length === 0) {
      toast.error("Input Number Only");
    } else if (MPIN.length != 4) {
      toast.error("Enter Valid MPIN");
    } else {
      let paylaod = {
        deviceId: deviceId,
        isMpin: true,
        mpin: MPIN,
        firebaseId: firebaseId,
      };
      let Url = PageIndex.apiRoutes.LOGIN_USER_WITH_MPIN
      ;

      const response = await PageIndex.authServices.FOR_POST_REQUEST(
        Url,
        paylaod
      );

      if (response.status) {
        navigate("/home", {
          replace: true,
          // state: { mobileNumber: MobileNumber, otp: response.otp },
        });

        // let Url = PageIndex.apiRoutes.SEND_OTP_FOR_REGISTER_USER;

        // const response1 = await PageIndex.authServices.FOR_POST_REQUEST(
        //   Url,
        //   paylaod
        // );

        // if (response1.status) {
        //   // setShowModal(true);
        //   navigate("/verify", {
        //     replace: true,
        // state: { mobileNumber: MobileNumber, otp: response1.otp },
        //   });
        // } else {
        //   setShowModal(true);
        //   setPreRegistedUser(response1.data);
        // }
      } else {
        setShowModal(true);
        setPreRegistedUser(response.data);
      }
    }
  };

  useEffect(() => {
    if (MPIN.length === 4) {
      LoginUser();
    }
  }, [MPIN]);

  return (
    <>
      <Authcontainer
        icon={false}
        children={
          <>
            <img src={secoLogo} alt="" className=" ms-2" />

            <div class="input-group mb-3  mt-4">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa-solid fa-unlock-keyhole primary-color icon-color"></i>
              </span>
              <input
                type="text"
                pattern="[0-9]*"
                aria-describedby="basic-addon1"
                inputMode="numeric"
                class="form-control"
                aria-label="Username"
                placeholder="Login With MPIN"
                id="mobileNumber"
                onChange={
                  (e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setMPIN(value);
                    }
                  }
                  // setMobileNumber(e.target.value)
                }
              />
            </div>
            {/* <button className=" position-absolute  mt-5 primary-button ">Submit</button> */}
            <button className="   primary-button " onClick={() => LoginUser()}>
              Get OTP
            </button>
            {/* otp- {ids.firebaseId} */}
          </>
        }
      />
      {/* <CustomDialog
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
      /> */}

      <PageIndex.Toast />
    </>
  );
};

export default Welcome;
