const events = require("../shared/events");
const games = require("./games");
const { getGameRoomId, leaveAllGames } = require("./utils");

module.exports = {
  [events.join]: (socket, event) => {
    try {
      const game = games.getGame(event.gameId);
      const player = game.join(event.token);

      leaveAllGames(socket);
      socket.join(getGameRoomId(event.gameId));

      socket.emit(events.joinSucceeded, {
        gameId: event.gameId,
        playerId: player.getId(),
        token: player.getToken(),
        moves: game.getMoves(),
        boardSize: game.getBoardSize(),
      });
    } catch (err) {
      socket.emit(events.joinFailed, {
        message: err.message,
      });
    }
  },
  [events.create]: (socket) => {
    try {
      const gameId = games.newGame();

      socket.emit(events.createSucceeded, { gameId });
    } catch (err) {
      socket.emit(events.createFailed, { message: err.message });
    }
  },
  [events.makeMove]: (socket, event) => {
    try {
      const game = games.getGame(event.gameId);

      game.makeMove(event.move);

      socket.to(getGameRoomId(event.gameId)).emit(events.makeMoveSucceeded, {
        gameId: event.gameId,
        move: event.move,
      });
    } catch (err) {
      socket.emit(events.makeMoveFailed, { message: err.message });
    }
  },
  [events.resetMoves]: (socket, event) => {
    try {
      const game = games.getGame(event.gameId);

      game.resetMoves();

      socket.to(getGameRoomId(event.gameId)).emit(events.resetMovesSucceeded, {
        gameId: event.gameId,
      });
    } catch (err) {
      socket.emit(events.resetMovesFailed, { message: err.message });
    }
  },
  [events.setBoardSize]: (socket, event) => {
    try {
      const game = games.getGame(event.gameId);

      game.setBoardSize(event.size);

      socket
        .to(getGameRoomId(event.gameId))
        .emit(events.setBoardSizeSucceeded, {
          gameId: event.gameId,
          size: game.getBoardSize(),
        });
    } catch (err) {
      socket.emit(events.setBoardSizeFailed, { message: err.message });
    }
  },
};
