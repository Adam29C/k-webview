import { configureStore } from "@reduxjs/toolkit";
import AllGames from "../slice/game.slice";
import CommonSlice from "../slice/common.slice";

export const store = configureStore({
  reducer: {
    AllGames: AllGames,
    CommonSlice: CommonSlice,
  },
});
