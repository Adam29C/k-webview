import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  getProfile: [],
  starlinegames: [],
  jackpotgames: [],
};

const CommonSlice = createSlice({
  name: "CommonSlice",
  initialState: initialState,
  reducers: {
    setProfileDetails: (state, action) => {
      state.getProfile = action.payload;
    },
    // setStarlineGames: (state, action) => {
    //   state.starlinegames = action.payload;
    // },
    // setJackpotGames: (state, action) => {
    //   state.jackpotgames = action.payload;
    // },
  },
});

export const { setProfileDetails } = CommonSlice.actions;

export default CommonSlice.reducer;
