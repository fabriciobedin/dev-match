const express = require("express");
const DevController = require("./controllers/DevController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: `Hello ${req.query.name}` });
});

// routes.post("/devs", (req, res) => {
// console.log(req.body);
// res.json({ ok: 200 });
// });

routes.post("/devs", DevController.store);

module.exports = routes;
