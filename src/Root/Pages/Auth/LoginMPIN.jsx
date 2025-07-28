import { useState, useEffect } from "react";
import Authcontainer from "../../Containers/auth-container";
import SplashScreen from "./SplashScreen";
import CustomDialog from "../../Components/Custom-modal";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { data, Link, replace, useNavigate } from "react-router-dom";
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
      let Url = PageIndex.apiRoutes.LOGIN_USER_WITH_MPIN;

      const response = await PageIndex.authServices.FOR_POST_REQUEST(
        Url,
        paylaod
      );


      console.log("response.status" ,response);
      
      if (response.status) {
        localStorage.setItem("userData", JSON.stringify(response.data));

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
        icon={true}
        // title="MPIN Registration"
        children={
          <>
         deviceId -- {deviceId}
            <h6 className="otp-login-text">Login With MPIN</h6>
            <div class="floating-phone">
              <i className="fa-solid fa-lock input-icon icon-color"></i>
              <input
                type="password"
                id="phoneInput"
                placeholder=""
                maxLength="4"
                value={MPIN}
                onChange={(e) => setMPIN(e.target.value)}
              />
              <label for="phoneInput" class="float-label">
                Enter MPIN
              </label>
            </div>
            <button className="primary-button " onClick={() => LoginUser()}>
              Get OTP
            </button>

            <Link
              to={"/forgetopt"}
              // onClick={handleResend}
              className="    fw-bold manaage-otp-font "
            >
              Forgot MPIN ??
            </Link>
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
