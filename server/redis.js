const { promisify } = require("util");
const redis = require("redis");

const client = redis.createClient(process.env.REDIS_URL);

client.getAsync = promisify(client.get).bind(client);
client.setAsync = promisify(client.set).bind(client);

module.exports = client;
