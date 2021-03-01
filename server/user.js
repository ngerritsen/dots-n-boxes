const { invariant } = require("./utils");
const { maxUsernameLength } = require("../shared/constants/limits");

const createUser = (token, name = "Unknown") => {
  const getToken = () => token;
  const getName = () => name;
  const setName = (newName = "") => {
    const trimmed = newName.trim();

    invariant(trimmed, "Name cannot be empty");
    invariant(trimmed.length <= maxUsernameLength, "Name cannot be longer than 12 characters.");

    name = trimmed;
  };

  return {
    getToken,
    getName,
    setName,
  };
};

module.exports = createUser;
