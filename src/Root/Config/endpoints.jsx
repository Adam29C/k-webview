import { baseUrl } from "./baseurl";

export const apiRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",

  // --- Authentications  ----

  VERIFY_NUMBER_FOR_REGISTER_USER: `${baseUrl}/user/checkMobile`,
  SEND_OTP_FOR_REGISTER_USER: `${baseUrl}/user/sendMobileOtp`,
  VARIFY_OTP_FOR_REGISTER_USER: `${baseUrl}/user/existOtpVerify`,
  CHECK_USERNAME_FOR_REGISTER_USER: `${baseUrl}/user/checkUsername`,
  NEW_REGISTER_USER: `${baseUrl}/user/registerNew`,



  // --- Game Endpoints ---
  GET_ALL_GAMES: `${baseUrl}/api/web/games`,
  GET_ALL_STARLINE_GAMES: `${baseUrl}/api/web/startline`,
  GET_ALL_JACKPOT_GAMES: `${baseUrl}/api/web/AbList`,
};
