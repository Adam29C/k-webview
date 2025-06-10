// src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./PublicRoute/PublicRoute.route";
import adminRoutes from "./PrivateRoute/Superadmin.route";
import SplashScreen from "../Pages/Auth/SplashScreen";
import WelcomeScreen from "../Pages/Auth/Welcome-screen";
import OtpVerify from "../Pages/Auth/OtpVerify";
import MPIN_Set from "../Pages/Auth/MPIN_Set";
import LoginMPIN from "../Pages/Auth/LoginMPIN";
import Funddepositehistory from "../Components/Funddepositehistory";
import Fundwithdrowhistory from "../Components/Fundwithdrowhistory";
import Tessting from "../Components/Tessting";
import VerifyUser from "../Pages/Auth/VarifyUsername";
import Testing123 from "../Components/Tessting";
import RedBracket from "../Gamepages/RedBracket/RedBracket";
import DigitBasedjodi from "../Gamepages/DigitBasedJodi/DigitBasedjodi";
import ApprovedDepositHistory from "../Pages/Admin/Funds/FundPages/ApprovedDepositHistory";
// import ErrorPage from "../Pages/Auth/NotFound";
import ForgetOTP from "../Pages/Auth/forgetOTP";
import NastedRoute from "./NastedRoute/NastedRoute";
const router = createBrowserRouter([
  ...publicRoutes,
  ...adminRoutes,
  ...NastedRoute,

  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },

  {
    path: "splash",
    element: <SplashScreen />,
  },
  {
    path: "welcome",
    element: <WelcomeScreen />,
  },
  {
    path: "verify",
    element: <OtpVerify />,
  },
  {
    path: "mpin",
    element: <MPIN_Set />,
  },
  {
    path: "depositehistory",
    element: <Fundwithdrowhistory />,
  },
  {
    path: "withdrawhistory",
    element: <Funddepositehistory />,
  },
  {
    path: "userverify",
    element: <VerifyUser />,
  },
  {
    path: "loginmpin",
    element: <LoginMPIN />,
  },
  {
    path: "/funds/approveddeposithistory",
    element: <ApprovedDepositHistory />,
  },
  {
    path: "test",
    element: <Testing123 />,
  },
  {
    path: "forgetopt",
    element: <ForgetOTP />,
  },
]);

3;

export default router;
