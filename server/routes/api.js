const express = require("express");
const MonogDB = require("../model/DBschema");

const router = express.Router();

router.get("/Todo", function (req, res) {
  MonogDB.find({})
  .sort({ date: -1 })
  .then(function (todoCards) {
    res.send(todoCards);
  });
});

module.exports = router;