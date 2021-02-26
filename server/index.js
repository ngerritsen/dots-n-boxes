const express = require("express");

const app = express();
const port = process.env.PORT || 1234;

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
