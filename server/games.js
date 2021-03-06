const client = require("./redis");
const createGame = require("./game");
const { invariant } = require("./utils");

const dayInSeconds = 60 * 60 * 24;

const create = async () => {
  const game = createGame();

  await store(game);

  return game.getId();
};

const get = async (id) => {
  const data = await client.getAsync(getKey(id));

  invariant(data, "Game does not exist.");

  return createGame(JSON.parse(data));
};

const store = async (game) => {
  await client.setAsync(
    getKey(game.getId()),
    JSON.stringify(game),
    "EX",
    dayInSeconds
  );
};

const getKey = (id) => "game/" + id;

module.exports = {
  create,
  get,
  store,
};
