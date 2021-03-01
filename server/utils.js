const getGameRoomId = (gameId) => "game/" + gameId;
const isGameRoom = (roomId) => roomId.indexOf("game/") === 0;
const leaveAllGames = (socket) => {
  for (const roomId of socket.rooms) {
    if (isGameRoom(roomId)) {
      socket.leave(roomId);
    }
  }
};

module.exports = {
  getGameRoomId,
  leaveAllGames,
  isGameRoom,
};
