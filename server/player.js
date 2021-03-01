const { nanoid } = require("nanoid");

const createPlayer = (id, token = nanoid()) => {
  const getId = () => id;
  const getToken = () => token;
  return {
    getId,
    getToken,
  };
};

module.exports = createPlayer;
