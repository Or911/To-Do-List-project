const express = require("express");
const MonogDB = require("../model/DBschema");
const dataManager=require("../utilities/dataManager");

const router = express.Router();

router.get("/Todo", function (req, res) {
  MonogDB.find({})
  .sort({ date: -1 })
  .then(function (todoCards) {
    res.send(todoCards);
  });
});

router.post("/todoCreate", (req, res) => {
   
   data.addTodoList(req)
   
  res.end()
})


router.delete('/deleteTodo/:todoName', function (req, res) {
  let todoName = req.params.todoName
  MonogDB.deleteOne({name:todoName}).then((todo)=>{
      console.log(todo+"deleted");
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