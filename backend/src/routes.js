const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: `Hello ${req.query.name}` });
});

routes.post("/devs", (req, res) => {
  console.log(req.body);
  res.json({ ok: 200 });
});

module.exports = routes;
