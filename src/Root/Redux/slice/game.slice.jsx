import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  maingames: [],
  starlinegames: [],
  jackpotgames: [],
};

const AllGames = createSlice({
  name: "Allgames",
  initialState: initialState,
  reducers: {
    setMainGames: (state, action) => {
      state.maingames = action.payload;
    },
    setStarlineGames: (state, action) => {
      state.starlinegames = action.payload;
    },
    setJackpotGames: (state, action) => {
      state.jackpotgames = action.payload;
    },
  },
});

export const { setMainGames, setStarlineGames, setJackpotGames } =
  AllGames.actions;

export default AllGames.reducer;
