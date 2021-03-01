export const store = (gameId, token) =>
  localStorage.setItem(getKey(gameId), token);
export const get = (gameId) => localStorage.getItem(getKey(gameId));
const getKey = (gameId) => "game." + gameId;
