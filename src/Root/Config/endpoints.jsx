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
  LOGIN_USER_WITH_MPIN: `${baseUrl}/user/login`,

  // --- Game Endpoints ---
  GET_ALL_GAMES: `${baseUrl}/api/web/games`,
  GET_ALL_STARLINE_GAMES: `${baseUrl}/api/web/startline`,
  GET_ALL_JACKPOT_GAMES: `${baseUrl}/api/web/AbList`,

  // game providers

  GET_ALL_GAMES_PROVIDERS: `${baseUrl}/gameBids/main-game-provider`,
  GET_ALL_STARLINE_GAMES_PROVIDERS: `${baseUrl}/starlineBids/starline-game-provider`,
  GET_ALL_JACKPOT_GAMES_PROVIDERS: `${baseUrl}/andarBharBids/GameProvider`,

  // start from....14may
  GET_HEADLINE: `${baseUrl}/appSetting/getHeadLine`,
  GET_GAMEBID_HISTORY: `${baseUrl}/gameBids/history?`,
  GET_GAMERESULT_HISTORY: `${baseUrl}/gameBids/result-history?date=`,
  GET_STARLINEBID_HISTORY: `${baseUrl}/starlineBids/history?`,
  GET_STARLINERESULT_HISTORY: `${baseUrl}/starlineBids/result-history?date=`,
  // 15may
  GET_ANDARBAHARBID_HISTORY: `${baseUrl}/andarBharBids/history?`,
  GET_ANDARBAHARRESULT_HISTORY: `${baseUrl}/andarBharBids/result-history?date=`,
  GET_USERBALANCE: `${baseUrl}/profile/getBal`,
  GET_NOTIFICATION_STATUS: `${baseUrl}/appSetting/userNotificationStatus`,
  POST_NOTIFICATIONCHANGE_STATUS: `${baseUrl}/appSetting/appNotification`,
  GET_NOTIFICATIONS: `${baseUrl}/appSetting/getNotification`,
  // 16may

  GET_STARLINE_GAMETYPE: `${baseUrl}/starlineBids/gameType`,
  GET_STARRLINE_STARLINERESULT: `${baseUrl}/starlineBids/starLineResult`,
  GET_GAME_GAMERESULT: `${baseUrl}/gameBids/game-result`,

  GET_ANDARBAHARGAME_RESULT: `${baseUrl}/andarBharBids/ABgameResult`,
  GET_ANDARBAHAR_GAMETYPE: `${baseUrl}/andarBharBids/gameType`,
  GET_NOTIFICATION_UNREAD: `${baseUrl}/appSetting/notificationsUnread`,
  // 19may
  POST_NOTIFICATION_READ: `${baseUrl}/appSetting/notificationsRead`,
  GET_WITHDRAW_TEXT: `${baseUrl}/withdraw/text`,
  GET_FUND_HISTORY: `${baseUrl}/resultHistory/fund?`,
  GET_DEBIT_HISTORY: `${baseUrl}/resultHistory/debit?`,
  GET_CREDIT_HISTORY: `${baseUrl}/resultHistory/credit?`,
  GET_GAME_RATES: `${baseUrl}/sidebar/gameRates`,
  GET_HOW_TO_PLAY: `${baseUrl}/sidebar/howToPlay`,
  // 20 may
  GET_NOTICE_BOARD: `${baseUrl}/sidebar/noticeBoard`,
  POST_USER_IDEAS: `${baseUrl}/sidebar/userIdeas`,
  POST_CHANGE_MPIN: `${baseUrl}/sidebar/changeMpin`,
  GET_WALLET_HISTORY: `${baseUrl}/wallet/history?`,
  POST_WITHDRAW_FUND_UPI: `${baseUrl}/withdraw/withdrawFundUPI`,
  POST_ADD_FUND: `${baseUrl}/addFund/paymentInitiate`,

  // ----- add bank details -----

  CHECK_BANK_ACCOUNT_AVAILABLTY: `${baseUrl}/profile/checkRequest`,
  ADD_BANK_ACCOUNT: `${baseUrl}/profile/checkAccountNumber`,
};
