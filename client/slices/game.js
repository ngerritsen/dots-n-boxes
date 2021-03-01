import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    player: -1,
    boardSize: 4,
    moves: [],
    players: []
  },
  reducers: {
    join: (state) => state,
    joinSucceeded: (state, action) => {
      state.player = action.payload.player;
    },
    create: (state) => state,
    makeMove(state, action) {
      state.moves.push(action.payload.move);
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
    updatePlayers(state, action) {
      state.players = action.payload.players;
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
  updatePlayers,
} = gameSlice.actions;

export default gameSlice.reducer;
