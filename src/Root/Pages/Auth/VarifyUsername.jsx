import React, { useState, useEffect } from "react";
import Authcontainer from "../../Containers/auth-container";
import PageIndex from "../pageIndex";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { DeviceID } from "../../Config/baseurl";
import InformModal from "../../Components/InformModal";
import { Name_regex } from "../../helpers/Valid_rejex";
// import { GetFirebseAndDeviceID } from "../../helpers/GetFirebseAndDeviceID";

const VerifyUser = () => {
  let location = useLocation();
  let navigate = useNavigate();
  // const { deviceId, firebaseId, deviceName } = GetFirebseAndDeviceID();

  const [first, setfirst] = useState("");

  const [username, setUsername] = useState("");
  const [modal, setmodal] = useState(false);
  const [ShowMessage, setShowMessage] = useState("");

  const SubmitOTPFunction = async () => {
    const hasRouteUsername = !!location?.state?.username;

    if (!hasRouteUsername && username?.trim().length === 0) {
      toast.error("Username must not be empty");
      return;
    }

    let paylaod = {
      username: username,
    };

    let Url = PageIndex.apiRoutes.CHECK_USERNAME_FOR_REGISTER_USER;
    const response = await PageIndex.authServices.FOR_POST_REQUEST(
      Url,
      paylaod
    );

    if (response.status) {
      navigate("/mpin", {
        replace: true,
        state: {
          username: username,
          mobileNumber: location?.state?.mobileNumber,
          otp: location?.state?.otp,
        },
      });
    } else {
      setmodal(true);
      setShowMessage(response?.message);
    }
  };

  return (
    <Authcontainer
      title="Welcome To"
      subtitle="India’s best Satta Matka Application Welcomes You !!!"
      icon={false}
      children={
        <>
          <div class="floating-phone ">
            <i class="fa-solid fa-user  phone-icon icon-color"></i>

            <input
              type="text"
              id="phoneInput"
              placeholder=""
              disabled={location?.state?.username ? true : false}
              value={location?.state?.username || username}
              onChange={(e) =>
                setUsername(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))
              }
            />
            <label for="phoneInput" class="float-label">
              Enter User Name
            </label>
          </div>

          <button
            className="   secondary-button mt-5 "
            onClick={() => SubmitOTPFunction()}
          >
            Continue
          </button>
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
