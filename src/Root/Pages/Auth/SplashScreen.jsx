// import React from "react";
// import splash from "../../../assets/svgs/splash-screen.svg";
// const SplashScreen = () => {
//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-12 d-flex justify-content-center align-items-center w-100" style={{ height: "100vh" }}>
//             <img src={splash} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplashScreen;

import React from "react";
import splash from "../../../assets/svgs/khatri-secondary-logo.svg";

const SplashScreen = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center align-items-center w-100"
          style={{ height: "100vh" }}
        >
          <img
            src={splash}
            alt="Splash Screen"
            className="blink-animation"
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
