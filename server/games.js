const { nanoid } = require("nanoid");
const createGame = require("./game");

let games = {};

const newGame = () => {
  const id = nanoid(8);

  games = { ...games, [id]: createGame() };

  return id;
};

const getGame = (id) => {
  if (!games[id]) {
    throw new Error("Game does not exist.");
  }

  return games[id];
};

module.exports = {
  newGame,
  getGame,
};
