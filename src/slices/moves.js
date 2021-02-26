import { createSlice } from "@reduxjs/toolkit";

const movesSlice = createSlice({
  name: "moves",
  initialState: [],
  reducers: {
    makeMove(state, action) {
      state.push(action.payload);
    },
    resetMoves() {
      return [];
    },
  },
});

export const { makeMove, resetMoves } = movesSlice.actions;
export default movesSlice.reducer;
