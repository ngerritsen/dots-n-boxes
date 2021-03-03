const getGameRoomId = (gameId) => "game/" + gameId;
const isGameRoom = (roomId) => roomId.indexOf("game/") === 0;
const leaveAllGames = (socket) => {
  for (const roomId of socket.rooms) {
    if (isGameRoom(roomId)) {
      socket.leave(roomId);
    }
  }
};
const invariant = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const getPlayerNames = (game, users) => {
  return game
    .getPlayers()
    .map((token) => (users.get(token) ? users.get(token).getName() : ""));
};

module.exports = {
  getGameRoomId,
  leaveAllGames,
  isGameRoom,
  invariant,
  getPlayerNames,
};
