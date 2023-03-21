const express = require("express");
const MonogDB = require("../model/DBschema");
const dataManager = require("../utilities/dataManager");
const securityManager = require("../utilities/securityManager");

const router = express.Router();

const authToken = securityManager.authenticateToken

router.get("/Todo", authToken , function (req, res) {
  MonogDB.find({})
    .sort({ date: -1 })
    .then(function (todoCards) {
      res.send(todoCards);
    });
});

router.get("/Todo/:name", authToken, function (req, res) {
  MonogDB.findOne({name : req.params.name})
    .then(function (todoCard) {
      res.send(todoCard);
    });
});

router.post("/Todo", authToken , (req, res) => {

  dataManager.addTodoCard(req)

  res.end();
});

router.delete("/Todo/:name", authToken , function (req, res) {
  let todoName = req.params.name;

  MonogDB.deleteOne({ name: todoName }).then((todo) => {
    console.log(todo + "daleted");
  });
  res.end();
});

router.put("/Todo/:name", authToken , function (req, res) {
  let todoName = req.params.name;
  let description = req.body.description;

  MonogDB.findOneAndUpdate({ name: todoName } , {description : description} ).then((todo) => {
    console.log(todo);
  });

  res.end();
});
module.exports = router;
