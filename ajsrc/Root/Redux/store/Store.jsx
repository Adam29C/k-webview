import { configureStore } from "@reduxjs/toolkit";
import AllGames from "../slice/game.slice";

export const store = configureStore({
  reducer: {
    AllGames: AllGames,
  },
});
