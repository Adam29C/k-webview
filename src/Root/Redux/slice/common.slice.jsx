import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  getProfile: [],
  starlinegames: [],
  jackpotgames: [],
  selectedProvider: {},
};

const CommonSlice = createSlice({
  name: "CommonSlice",
  initialState: initialState,
  reducers: {
    setProfileDetails: (state, action) => {
      state.getProfile = action.payload;
    },
    setSelectedProvider: (state, action) => {
      state.selectedProvider = action.payload;
    },
    // setStarlineGames: (state, action) => {
    //   state.starlinegames = action.payload;
    // },
    // setJackpotGames: (state, action) => {
    //   state.jackpotgames = action.payload;
    // },
  },
});

export const { setProfileDetails, setSelectedProvider } = CommonSlice.actions;

export default CommonSlice.reducer;
