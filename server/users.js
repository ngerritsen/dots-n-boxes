const { nanoid } = require("nanoid");
const createUser = require("./user");

let users = {};

const get = (token) => users[token];
const register = (name) => {
  const token = nanoid();

  users = {
    ...users,
    [token]: createUser(token, name)
  }

  return token;
};

module.exports = {
  get,
  register,
};
