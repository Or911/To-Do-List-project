const express = require("express");
const MonogDB = require("../model/DBschema");
const dataManager = require("../utilities/dataManager");

const router = express.Router();

router.get("/Todo", function (req, res) {
  MonogDB.find({})
    .sort({ date: -1 })
    .then(function (todoCards) {
      res.send(todoCards);
    });
});

router.get("/Todo/:name", function (req, res) {
  MonogDB.findOne({name : req.params.name})
    .then(function (todoCard) {
      res.send(todoCard);
    });
});

router.post("/Todo", (req, res) => {

<<<<<<< HEAD
  dataManager.addTodoCard(req)
=======
router.delete('/deleteTodo/:todoName', function (req, res) {
  let todoName = req.params.todoName
  MonogDB.deleteOne({name:todoName}).then((todo)=>{
      console.log(todo+"deleted");
  })
  res.end()
})
>>>>>>> d8271403a31b1c59f96963fc1c3aa16e05dfc164

  res.end();
});

router.delete("/Todo/:name", function (req, res) {
  let todoName = req.params.name;
  MonogDB.deleteOne({ name: todoName }).then((todo) => {
    console.log(todo + "daleted");
  });
  res.end();
});

router.put("/Todo/:name", function (req, res) {
  let todoName = req.params.name;
  let description = req.body.description;

  MonogDB.findOneAndUpdate({ name: todoName } , {description : description} ).then((todo) => {
    console.log(todo);
  });

  res.end();
});

module.exports = router;
