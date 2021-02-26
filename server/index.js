const express = require("express");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 8008;

app.use(express.static("dist"));

io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
