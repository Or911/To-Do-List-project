const express = require("express");
const router = express.Router();
const usersDB = require("../model/UserSchema");
const securityManager = require("../utilities/securityManager");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await securityManager.authenticateUser(username, password);

  if (!user) {
    return res.status(401).send({ message: "Invalid username or password" });
  }

  const accessToken = securityManager.generateAccessToken(user);

  res.send({ accessToken });
});

router.post("/user", (req, res) => {

  securityManager.addUser(req);

  res.end();
});

const createUser = function (username, password) {
  const user = new usersDB({
    username: username,
    password: bcrypt.hashSync(password, salt),
  });

  user.save().then((user) => {
    console.log(user + "added to db");
  });
};

//ליצור משתמש חדש
// createUser('or' , '1234')

module.exports = router;
