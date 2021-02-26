import { atom } from "recoil";
import storeSelf from "./utils/storeSelf";

export const moves = atom({
  key: "moves",
  default: [],
});

export const board = atom({
  key: "board",
  default: {
    width: 4,
    height: 4,
  },
  effects_UNSTABLE: [storeSelf("board")],
});
