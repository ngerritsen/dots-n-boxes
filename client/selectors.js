import { createSelector } from "@reduxjs/toolkit";
import gameStateUtils from "../shared/utils/game";

export const getMoves = (state) => state.game.moves;
export const getBoardSize = (state) => state.game.boardSize;
export const getPlayer = (state) => state.game.player;
export const getNotification = (state) => state.notification;
export const getToken = (state) => state.user.token;
export const getName = (state) => state.user.name;
export const getPlayers = (state) => state.game.players;
export const getGameState = createSelector(
  getMoves,
  getBoardSize,
  (moves, size) => gameStateUtils.calculateGameState(moves, size)
);
