const MonogDB = require("../model/DBschema");
const axios = require('axios')

const addTodoCard = function (req) {

  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=EX9I4uLmMB6tFIS7x2JwuyBDixgp20qE&q=${req.body.name}&limit=1&offset=0&rating=g&lang=en`)
  .then(function (gif) {

    const gifUrl = gif.data.data[0]?.images.original.url

    const Todo = new MonogDB({
      name: req.body.name,
      date: new Date(req.body.date),
      description: req.body.description,
      isDone: req.body.isDone,
      gifUrl: gifUrl
    });

    Todo.save().then((res) => {
      console.log(res + "added to db");
    });

  })

};

module.exports = { addTodoCard };
