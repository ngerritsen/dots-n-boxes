import { atom } from "recoil";
import socket from "./socket";
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

export const connected = atom({
  key: "connected",
  default: false,
  effects_UNSTABLE: [
    ({ setSelf }) => {
      socket.on("connect", () => setSelf(true));
      socket.on("disconnect", () => setSelf(false));
    },
  ],
});

export const currentPlayer = atom({
  key: "currentPlayer",
  default: -1,
  effects_UNSTABLE: [],
});
