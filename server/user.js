const { nanoid } = require("nanoid");
const { invariant } = require("./utils");
const { maxUsernameLength } = require("../shared/constants/user");

const createUser = ({ token = nanoid(), name = "" }) => {
  const toJSON = () => ({ token, name });
  const getToken = () => token;
  const getName = () => name;

  const setName = (newName = "") => {
    const trimmed = newName.trim();

    invariant(trimmed, "Name cannot be empty");
    invariant(
      trimmed.length <= maxUsernameLength,
      `Name cannot be longer than ${maxUsernameLength} characters.`
    );

    name = trimmed;
  };

  return {
    getToken,
    getName,
    setName,
    toJSON,
  };
};

module.exports = createUser;
