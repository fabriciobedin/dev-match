const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: `Hello ${req.query.name}` });
});

// routes.post("/devs", (req, res) => {
// console.log(req.body);
// res.json({ ok: 200 });
// });

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
