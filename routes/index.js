var express = require("express");
var router = express.Router();
const socket = require("../socket");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/stop", (req, res, next) => {
  socket.stop(Math.random());
  res.redirect("/");
});

module.exports = router;
