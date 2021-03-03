const events = require("../shared/events");
const games = require("./games");
const users = require("./users");
const { getGameRoomId, leaveAllGames, getPlayerNames } = require("./utils");

module.exports = (io) => ({
  [events.register]: (socket, event) => {
    try {
      const user = users.get(event.token);

      if (!user) {
        socket.emit(events.registerSucceeded, {
          token: users.register(event.name),
        });
        return;
      }

      socket.emit(events.registerSucceeded, { token: user.getToken() });
    } catch (err) {
      socket.emit(events.registerFailed, { message: err.message });
    }
  },
  [events.updateName]: (socket, event) => {
    try {
      const user = users.get(event.token);

      if (!user) {
        throw new Error("User not found");
      }

      user.setName(event.name);

      socket.emit(events.updateNameSucceeded);

      games.getAll().forEach((game) => {
        if (!game.hasPlayer(event.token)) {
          return;
        }

        io.in(getGameRoomId(game.getId())).emit(events.playersUpdated, {
          players: getPlayerNames(game, users),
        });
      });
    } catch (err) {
      socket.emit(events.updateNameFailed, { message: err.message });
    }
  },
  [events.join]: (socket, event) => {
    try {
      const game = games.get(event.gameId);
      const player = game.join(event.token);
      const players = getPlayerNames(game, users);

      leaveAllGames(socket);
      socket.join(getGameRoomId(event.gameId));

      socket.emit(events.joinSucceeded, {
        player: player,
        moves: game.getMoves(),
        boardSize: game.getBoardSize(),
        players,
      });

      socket
        .to(getGameRoomId(event.gameId))
        .emit(events.playersUpdated, players);
    } catch (err) {
      socket.emit(events.joinFailed, {
        message: err.message,
      });
    }
  },
  [events.create]: (socket) => {
    try {
      const gameId = games.create();

      socket.emit(events.createSucceeded, { gameId });
    } catch (err) {
      socket.emit(events.createFailed, { message: err.message });
    }
  },
  [events.makeMove]: (socket, event) => {
    try {
      const game = games.get(event.gameId);

      game.makeMove(event.token, event.move);

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
      const game = games.get(event.gameId);

      game.resetMoves(event.token);

      socket.to(getGameRoomId(event.gameId)).emit(events.resetMovesSucceeded, {
        gameId: event.gameId,
      });
    } catch (err) {
      socket.emit(events.resetMovesFailed, { message: err.message });
    }
  },
  [events.setBoardSize]: (socket, event) => {
    try {
      const game = games.get(event.gameId);

      game.setBoardSize(event.token, event.size);

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
});
