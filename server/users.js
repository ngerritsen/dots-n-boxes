const client = require("./redis");
const createUser = require("./user");

const register = async (name) => {
  const user = createUser({ name });

  await store(user);

  return user.getToken();
};

const get = async (token) => {
  const data = await client.getAsync(getKey(token));

  if (!data) {
    return null;
  }

  return createUser(JSON.parse(data));
};

const store = async (user) => {
  await client.setAsync(getKey(user.getToken()), JSON.stringify(user));
};

const getKey = (token) => "user/" + token;

module.exports = {
  get,
  register,
  store,
};
