import { selector } from "recoil";
import { moves, board } from "./atoms";
import { calculateGameViewState } from "./utils/game";

export const game = selector({
  key: "game",
  get: ({ get }) =>
    calculateGameViewState({ moves: get(moves), ...get(board) }),
  set: ({ set, get }, move) => set(moves, [...get(moves), move]),
});
