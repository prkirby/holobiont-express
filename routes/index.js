var express = require("express");
var router = express.Router();
const socket = require("../socket");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/stop", (req, res, next) => {
  socket.stop();
  res.redirect("/");
});

router.post("/start", (req, res, next) => {
  socket.start();
  res.redirect("/");
});

router.post("/reset", (req, res, next) => {
  socket.reset();
  res.redirect("/");
});

module.exports = router;
