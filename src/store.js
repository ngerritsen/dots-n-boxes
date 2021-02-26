import { configureStore } from "@reduxjs/toolkit";
import moves from "./slices/moves";
import board from "./slices/board";

export default configureStore({
  reducer: {
    moves,
    board,
  },
});
