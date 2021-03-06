const events = require("../shared/events");
const games = require("./games");
const users = require("./users");
const {
  getGameRoomId,
  leaveAllGames,
  getPlayerNames,
  invariant,
  getActiveGameId,
} = require("./utils");

module.exports = (io) => ({
  [events.register]: async (socket, event) => {
    try {
      const user = await users.get(event.token);

      if (!user) {
        socket.emit(events.registerSucceeded, {
          token: await users.register(event.name),
          name: "",
        });

        return;
      }

      socket.emit(events.registerSucceeded, {
        token: user.getToken(),
        name: user.getName(),
      });
    } catch (err) {
      socket.emit(events.registerFailed, { message: err.message });
    }
  },
  [events.updateName]: async (socket, event) => {
    try {
      const user = await users.get(event.token);

      invariant(user, "User not found");

      user.setName(event.name);

      await users.store(user);

      socket.emit(events.updateNameSucceeded);

      const gameId = getActiveGameId(socket);

      if (gameId) {
        const game = await games.get(gameId);

        io.in(getGameRoomId(game.getId())).emit(events.playersUpdated, {
          players: await getPlayerNames(users, game.getPlayers()),
        });
      }
    } catch (err) {
      socket.emit(events.updateNameFailed, { message: err.message });
    }
  },
  [events.join]: async (socket, event) => {
    try {
      const game = await games.get(event.gameId);
      const player = game.join(event.token);
      const players = await getPlayerNames(users, game.getPlayers());

      leaveAllGames(socket);
      socket.join(getGameRoomId(event.gameId));

      await games.store(game);

      socket.emit(events.joinSucceeded, {
        player: player,
        moves: game.getMoves(),
        boardSize: game.getBoardSize(),
        players,
      });

      socket.to(getGameRoomId(game.getId())).emit(events.playersUpdated, {
        players: await getPlayerNames(users, game.getPlayers()),
      });
    } catch (err) {
      socket.emit(events.joinFailed, {
        message: err.message,
      });
    }
  },
  [events.create]: async (socket) => {
    try {
      const gameId = await games.create();

      socket.emit(events.createSucceeded, { gameId });
    } catch (err) {
      socket.emit(events.createFailed, { message: err.message });
    }
  },
  [events.makeMove]: async (socket, event) => {
    try {
      const game = await games.get(event.gameId);

      game.makeMove(event.token, event.move);

      await games.store(game);

      io.in(getGameRoomId(event.gameId)).emit(events.makeMoveSucceeded, {
        gameId: event.gameId,
        move: event.move,
      });
    } catch (err) {
      socket.emit(events.makeMoveFailed, { message: err.message });
    }
  },
  [events.resetMoves]: async (socket, event) => {
    try {
      const game = await games.get(event.gameId);

      game.resetMoves(event.token);

      await games.store(game);

      io.in(getGameRoomId(event.gameId)).emit(events.resetMovesSucceeded, {
        gameId: event.gameId,
      });
    } catch (err) {
      socket.emit(events.resetMovesFailed, { message: err.message });
    }
  },
  [events.setBoardSize]: async (socket, event) => {
    try {
      const game = await games.get(event.gameId);

      game.setBoardSize(event.token, event.size);

      await games.store(game);

      io.in(getGameRoomId(event.gameId)).emit(events.setBoardSizeSucceeded, {
        gameId: event.gameId,
        size: game.getBoardSize(),
      });
    } catch (err) {
      socket.emit(events.setBoardSizeFailed, { message: err.message });
    }
  },
});
