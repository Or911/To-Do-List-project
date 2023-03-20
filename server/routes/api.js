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

router.post("/todoCreate", (req, res) => {
  const Todo = new MonogDB({
      name: req.body.name,
      date: req.body.date,
      description:req.body.description,
      isDone:req.body.isDone
  })
  Todo.save().then((res) => {
      console.log(res+"added to db")
  })
  res.end()
})


router.delete('/deleteTodo/:todoName', function (req, res) {
  let todoName = req.params.todoName
  MonogDB.deleteOne({name:todoName}).then((todo)=>{
      console.log(todo+"daleted");
  })
  res.end()
})

router.put('/editDescription/:todoName', function (req, res) {
  let todoName = req.params.todoName
  MonogDB.find({name:todoName}).then((todo)=>{
      todo.description=todo
  })
  res.end()
})

module.exports = router;