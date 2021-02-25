import { atom } from "recoil";

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
});
