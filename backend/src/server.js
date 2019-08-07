const express = require("express");
const server = express();
const port = 3333;

server.listen(port);

server.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});
