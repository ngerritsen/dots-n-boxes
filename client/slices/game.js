import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    playerId: -1,
    boardSize: 4,
    moves: [],
  },
  reducers: {
    join: (state) => state,
    joinSucceeded: (state, action) => {
      state.connecting = false;
      state.playerId = action.payload.playerId;
    },
    create: (state) => state,
    makeMove(state, action) {
      state.moves.push(action.payload);
    },
    resetMoves(state) {
      state.moves = [];
    },
    updateMoves(state, action) {
      state.moves = action.payload.moves;
    },
    setBoardSize(state, action) {
      state.boardSize = action.payload.size;
    },
  },
});

export const {
  join,
  joinSucceeded,
  create,
  makeMove,
  resetMoves,
  updateMoves,
  setBoardSize,
} = gameSlice.actions;

export default gameSlice.reducer;
