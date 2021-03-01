const { nanoid } = require("nanoid");
const createGame = require("./game");
const { invariant } = require("./utils");

let games = {};

const create = () => {
  const id = nanoid(8);

  games = { ...games, [id]: createGame(id) };

  return id;
};

const get = (id) => {
  invariant(games[id], "Game does not exist.");

  return games[id];
};

const getAll = () => Object.values(games);

module.exports = {
  create,
  get,
  getAll,
};
