import { baseUrl } from "./baseurl";

export const apiRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",

  // --- Authentications  ----

  VERIFY_NUMBER_FOR_REGISTER_USER: `${baseUrl}/api/user`,

  

  // --- Game Endpoints ---
  GET_ALL_GAMES: `${baseUrl}/api/web/games`,
  GET_ALL_STARLINE_GAMES: `${baseUrl}/api/web/startline`,
  GET_ALL_JACKPOT_GAMES: `${baseUrl}/api/web/AbList`,
};
