const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const port = 3333;
const server = express();
mongoose.connect(
  "mongodb+srv://adminmongo:TcWJFMH6yTMw5RNE@cluster0-m6rv9.mongodb.net/devmatch?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port);
