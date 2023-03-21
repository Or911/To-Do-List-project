const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ToDoSchema = new schema({
    name:String ,
    date:Date ,
    description:String,
    isDone:{type :Boolean , default : false},
    gifUrl : String

})

const listToDo = mongoose.model('ToDo', ToDoSchema);
module.exports = listToDo;


