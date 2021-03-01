import { createSelector } from "@reduxjs/toolkit";
import gameStateUtils from "../shared/utils/game";
import * as routeUtils from "./utils/routes";

export const getMoves = (state) => state.game.moves;
export const getBoardSize = (state) => state.game.boardSize;
export const getPlayerId = (state) => state.game.playerId;
export const getNotification = (state) => state.notification;
export const getPathname = (state) => state.router.location.pathname;
export const getGameId = (state) => routeUtils.getGameId(getPathname(state));
export const isLocal = (state) => routeUtils.isLocal(getPathname(state));
export const getGameState = createSelector(
  getMoves,
  getBoardSize,
  (moves, size) => gameStateUtils.calculateGameState(moves, size)
);
