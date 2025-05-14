import { baseUrl } from "./baseurl";

export const apiRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",

  // --- Authentications  ----

  VERIFY_NUMBER_FOR_REGISTER_USER: `${baseUrl}user/checkMobile`,
  CHECK_NUMBER_FOR_REGISTER_USER: `${baseUrl}api/user/verifyMobile`,
  VARIFY_OTP_FOR_REGISTER_USER: `${baseUrl}api/user/userExistOtpVerifyDevice`,


  // --- Game Endpoints ---
  GET_ALL_GAMES: `${baseUrl}/api/web/games`,
  GET_ALL_STARLINE_GAMES: `${baseUrl}/api/web/startline`,
  GET_ALL_JACKPOT_GAMES: `${baseUrl}/api/web/AbList`,
};

// api/user/sendMobileOtpNew
// api/user/verifyMobile
//  "api/user/registerNew"
// "api/user/userExistOtpVerifyDevice"
// "api/user/checkUsernameNewOne"
