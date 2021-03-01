import { push } from "connected-react-router";
import socket from "../socket";
import events from "../../shared/events";
import {
  create,
  join,
  joinSucceeded,
  makeMove,
  resetMoves,
  setBoardSize,
} from "../slices/game";
import { updateMoves } from "../slices/game";
import { notify } from "../slices/notification";
import * as tokens from "../storage/tokens";
import { getGameId, isLocal } from "../selectors";
import { createGameRoute } from "../utils/routes";

export default (store) => (next) => {
  socket.on(events.joinSucceeded, (data) => {
    tokens.store(data.gameId, data.token);
    store.dispatch(joinSucceeded(data));
    store.dispatch(updateMoves(fromServer({ moves: data.moves })));
    store.dispatch(setBoardSize(fromServer({ size: data.boardSize })));
    store.dispatch(notify({ message: "Joined game", type: "success" }));
  });

  socket.on(events.createSucceeded, (data) => {
    store.dispatch(push(createGameRoute(data.gameId)));
  });

  socket.on(events.makeMoveSucceeded, (data) => {
    store.dispatch(makeMove(fromServer(data.move)));
  });

  socket.on(events.resetMovesSucceeded, () => {
    store.dispatch(resetMoves(fromServer()));
  });

  socket.on(events.setBoardSizeSucceeded, (data) => {
    store.dispatch(setBoardSize(fromServer({ size: data.size })));
  });

  handleFailedEvent(store, events.setBoardSizeFailed, "Set board size");
  handleFailedEvent(store, events.makeMoveFailed, "Make move");
  handleFailedEvent(store, events.createFailed, "Create game");
  handleFailedEvent(store, events.joinFailed, "Join game");
  handleFailedEvent(store, events.resetMovesFailed, "Reset moves");

  return (action) => {
    if (action.type === String(join)) {
      const gameId = getGameId(store.getState());

      socket.emit(events.join, {
        gameId,
        token: tokens.get(gameId),
      });
    }

    if (action.type === String(create)) {
      socket.emit(events.create);
    }

    if (isServer(action) || isLocal(store.getState())) {
      return next(action);
    }

    if (action.type === String(makeMove)) {
      socket.emit(events.makeMove, {
        gameId: getGameId(store.getState()),
        move: action.payload,
      });
    }

    if (action.type === String(resetMoves)) {
      socket.emit(events.resetMoves, {
        gameId: getGameId(store.getState()),
      });
    }

    if (action.type === String(setBoardSize)) {
      socket.emit(events.setBoardSize, {
        size: action.payload.size,
        gameId: getGameId(store.getState()),
      });
    }

    return next(action);
  };
};

const handleFailedEvent = (store, event, prefix) => {
  socket.on(event, (data) => {
    store.dispatch(
      notify({ message: prefix + " failed: " + data.message, type: "error" })
    );
  });
};
const isServer = (action) => action.payload && action.payload.server;
const fromServer = (payload) => ({ ...payload, server: true });
