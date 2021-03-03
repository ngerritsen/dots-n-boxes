const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const path = require("path");
const createHandlers = require("./handlers");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 8008;

app.use(express.static("dist"));

app.get("/*", (_, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

io.on("connection", (socket) => {
  const handlers = createHandlers(io);

  Object.keys(handlers).forEach((key) =>
    socket.on(key, (event) => handlers[key](socket, event))
  );
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
