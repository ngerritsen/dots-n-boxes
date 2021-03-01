export const getGameId = (pathname) => pathname.slice(1);
export const isLocal = (pathname) => getGameId(pathname) === "local";
export const createGameRoute = (gameId) => "/" + gameId;
