const usersDB = require("../model/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "my_secret_key";
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

function generateAccessToken(user) {
  return jwt.sign(user, secretKey);
}

async function authenticateUser(username, password) {
  const user = await usersDB.findOne({ username: username });
  if (!user) {
    return null;
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  return { id: user._id, username: user.username };
}

const addUser = function (req) {
  const user = new usersDB({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, salt),
  });

  user.save().then((user) => {
    console.log(user + "added to db");
  });
};

module.exports = { generateAccessToken, authenticateUser , addUser };
