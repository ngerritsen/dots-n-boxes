import { calculateGameViewState } from "./utils/game";

export const getGame = (state) =>
  calculateGameViewState({
    moves: state.moves,
    ...getBoard(state),
  });

export const getBoard = (state) => state.board;
