class dataManager {
    addTodoList(req) {
        const Todo = new MonogDB({
            name: req.body.name,
            date: req.body.date,
            description: req.body.description,
            isDone: req.body.isDone
        })
        Todo.save().then((res) => {
            console.log(res + "added to db")
        })
    }
}

data= new dataManager

module.exports = router;