import { useState, useEffect } from "react";

import Authcontainer from "../../Containers/auth-container";
import SplashScreen from "./SplashScreen";

const Welcome = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Authcontainer
          title="Welcome To"
          subtitle="India’s best Satta Matka Application Welcomes You !!!"
          icon={true}
          children={
            <>
              <div class="input-group mb-3  mt-4">
                {/* <label htmlFor="basic-addon1">Phone Number</label> */}
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-solid fa-phone me-3"></i>+91
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  placeholder="Enter Mobile Number"
                  id="mobile"
                />
              </div>
              {/* <button className=" position-absolute  mt-5 primary-button ">Submit</button> */}
              <button className="   primary-button ">Get OTP</button>
            </>
          }
        />
      )}
    </>
  );
};

export default Welcome;
