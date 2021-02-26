import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: { width: 4, height: 4 },
  reducers: {
    setBoard(_, action) {
      return action.payload;
    },
  },
});

export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer;
