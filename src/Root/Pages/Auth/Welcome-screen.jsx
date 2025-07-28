import { useState, useEffect } from "react";

import Authcontainer from "../../Containers/auth-container";
import SplashScreen from "./SplashScreen";
import CustomDialog from "../../Components/Custom-modal";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { data, replace, useNavigate } from "react-router-dom";
import { DeviceID } from "../../Config/baseurl";
import { GetFirebseAndDeviceID } from "../../helpers/GetFirebseAndDeviceID";
import { Mobile_regex } from "../../helpers/Valid_rejex";

const Welcome = () => {
  // let deviceId = "";
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
    } else if (MobileNumber.length != 10) {
      toast.error("Enter Valid Mobile Number");
    } else {
      let paylaod = { mobile: MobileNumber, deviceId: deviceId };
      let Url = PageIndex.apiRoutes.VERIFY_NUMBER_FOR_REGISTER_USER;

      const response = await PageIndex.authServices.FOR_POST_REQUEST(
        Url,
        paylaod
      );

      if (response.status === 0) {
        let Url = PageIndex.apiRoutes.SEND_OTP_FOR_REGISTER_USER;
        const response1 = await PageIndex.authServices.FOR_POST_REQUEST(
          Url,
          paylaod
        );

        // let isNewUser = false;

        // if (response1.data.newDeviceId === response1.data.oldDeviceId) {
        //   isNewUser = true;
        // } else {
        //   isNewUser = false;
        // }

        // return
        navigate("/verify", {
          replace: true,
          state: {
            mobileNumber: MobileNumber,
            otp: response1.otp,
            // newUser: isNewUser,
            // username: response1.data.userName,
          },
        });

        // }

        // if (response?.data?.type === "already") {
        //   setShowModal(true);
        //   setPreRegistedUser(response.data);
        // } else {
        //   navigate("/verify", {
        //     replace: true,
        //     state: { mobileNumber: MobileNumber, otp: response.otp },
        //   });
        // }

        // navigate("/verify", {
        //   replace: true,
        //   state: { mobileNumber: MobileNumber, otp: response.otp },
        // });

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

  const handleConfirm = async () => {
    console.log("PreRegistedUser", PreRegistedUser);

    let paylaod = { mobile: MobileNumber, deviceId: deviceId };
    let Url = PageIndex.apiRoutes.SEND_OTP_FOR_REGISTER_USER;
    const response12 = await PageIndex.authServices.FOR_POST_REQUEST(
      Url,
      paylaod
    );

    let isNewUser = false;

    if (PreRegistedUser.newDeviceId === PreRegistedUser.oldDeviceId) {
      isNewUser = true;
    } else {
      isNewUser = false;
    }

    if (response12.status) {
      navigate("/verify", {
        replace: true,
        state: {
          mobileNumber: MobileNumber,
          otp: response12.otp,
          newUser: isNewUser,
          username: PreRegistedUser.userName,
        },
      });
    }
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
            title="Login"
            subtitle="India’s best Satta Matka Application Welcomes You !!!"
            icon={true}
            children={
              <>
                {/* <h6>Login</h6> */}

                <div class="floating-phone ">
                  <div className="border-end-4 bg-dark">
                    <i class="fa-solid fa-phone primary-color icon-color phone-icon  "></i>
                    <span class="phone-prefix mx-1 primary-color">+91</span>
                  </div>
                  <input
                    type="number"
                    id="phoneInput"
                    placeholder=""
                    maxLength="10"
                    value={MobileNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value) && value.length <= 10) {
                        setMobileNumber(value);
                      }
                    }}
                  />
                  <label for="phoneInput" class="float-label">
                    Phone Number
                  </label>
                </div>

                {/* <div class="input-group mb-3  mt-4">
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
                </div> */}
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
            btnFunction={() => handleConfirm()}
          />
        </>
      )}

      <PageIndex.Toast />
    </>
  );
};

export default Welcome;
