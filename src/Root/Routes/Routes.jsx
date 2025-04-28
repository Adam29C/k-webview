// src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./PublicRoute/PublicRoute.route";
import adminRoutes from "./PrivateRoute/Superadmin.route";
import SplashScreen from "../Pages/Auth/SplashScreen";
import WelcomeScreen from "../Pages/Auth/Welcome-screen";
import OtpVerify from "../Pages/Auth/OtpVerify";
import MPIN_Set from "../Pages/Auth/MPIN_Set";
import Funddepositehistory from "../Components/Funddepositehistory";
import Fundwithdrowhistory from "../Components/Fundwithdrowhistory";
import Tessting from "../Components/Tessting";
import VerifyUser from "../Pages/Auth/VarifyUsername";
// import ErrorPage from "../Pages/Auth/NotFound";

const router = createBrowserRouter([
  ...publicRoutes,
  ...adminRoutes,
  // {
  //   path: "*",
  // //  element: <ErrorPage />,
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
    path: "test",
    element: <Tessting />,
  },
]);

export default router;
