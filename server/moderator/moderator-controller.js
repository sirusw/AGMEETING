var express = require("express");
var router = express.Router();
const Moderator = require("./models/Moderator");

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.send("got moderators");
});

module.exports = router;
