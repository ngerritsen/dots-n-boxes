import socket from "../socket";
import events from "../../shared/events";
import {
  create,
  join,
  joinSucceeded,
  makeMove,
  resetMoves,
  setBoardSize,
  updatePlayers,
} from "../slices/game";
import { updateMoves } from "../slices/game";
import { notify } from "../slices/notification";
import { getToken } from "../selectors";

export default ({ getState, dispatch }) => (next) => {
  let history;

  socket.on(events.joinSucceeded, (data) => {
    dispatch(joinSucceeded({ player: data.player }));
    dispatch(updateMoves(fromServer({ moves: data.moves })));
    dispatch(updatePlayers(fromServer({ players: data.players })));
    dispatch(setBoardSize(fromServer({ size: data.boardSize })));
    dispatch(notify({ message: "Joined game", type: "success" }));
  });

  socket.on(events.createSucceeded, (data) => {
    if (history) {
      history.push("/" + data.gameId);
    }
  });

  socket.on(events.makeMoveSucceeded, (data) => {
    dispatch(makeMove(fromServer({ move: data.move })));
  });

  socket.on(events.resetMovesSucceeded, () => {
    dispatch(resetMoves(fromServer()));
  });

  socket.on(events.setBoardSizeSucceeded, (data) => {
    dispatch(setBoardSize(fromServer({ size: data.size })));
  });

  socket.on(events.playersUpdated, (data) => {
    dispatch(updatePlayers({ players: data.players }));
  });

  handleFailedEvent(dispatch, events.setBoardSizeFailed, "Set board size");
  handleFailedEvent(dispatch, events.makeMoveFailed, "Make move");
  handleFailedEvent(dispatch, events.createFailed, "Create game");
  handleFailedEvent(dispatch, events.joinFailed, "Join game");
  handleFailedEvent(dispatch, events.resetMovesFailed, "Reset moves");

  return (action) => {
    if (isServer(action) || isLocal(action)) {
      return next(action);
    }

    if (action.type === String(create)) {
      socket.emit(events.create);
      history = action.payload.history;
    }

    if (action.type === String(join)) {
      socket.emit(events.join, {
        gameId: action.payload.gameId,
        token: getToken(getState()),
      });
    }

    if (action.type === String(makeMove)) {
      socket.emit(events.makeMove, {
        gameId: action.payload.gameId,
        move: action.payload.move,
        token: getToken(getState()),
      });
    }

    if (action.type === String(resetMoves)) {
      socket.emit(events.resetMoves, {
        gameId: action.payload.gameId,
        token: getToken(getState()),
      });
    }

    if (action.type === String(setBoardSize)) {
      socket.emit(events.setBoardSize, {
        gameId: action.payload.gameId,
        size: action.payload.size,
        token: getToken(getState()),
      });
    }

    return next(action);
  };
};

const handleFailedEvent = (dispatch, event, prefix) => {
  socket.on(event, (data) => {
    dispatch(
      notify({ message: prefix + " failed: " + data.message, type: "error" })
    );
  });
};
const isServer = (action) => action.payload && action.payload.server;
const isLocal = (action) => action.payload && action.payload.gameId === "local";
const fromServer = (payload) => ({ ...payload, server: true });
