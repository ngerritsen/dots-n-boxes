const getGameRoomId = (gameId) => "game/" + gameId;
const isGameRoom = (roomId) => roomId.indexOf("game/") === 0;
const toGameId = (roomId) => roomId.replace(/^game\//, "");

const leaveAllGames = (socket) => {
  for (const roomId of socket.rooms) {
    if (isGameRoom(roomId)) {
      socket.leave(roomId);
    }
  }
};

const getActiveGameId = (socket) => {
  for (const roomId of socket.rooms) {
    if (isGameRoom(roomId)) {
      return toGameId(roomId);
    }
  }
};

const invariant = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const getPlayerNames = async (users, tokens) =>
  Promise.all(
    tokens.map(async (token) => {
      const user = await users.get(token);
      return user ? user.getName() : "";
    })
  );

module.exports = {
  getGameRoomId,
  leaveAllGames,
  invariant,
  getPlayerNames,
  getActiveGameId,
};
