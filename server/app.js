const express = require("express");
const app = express();
require('dotenv').config()
const db = require("./config/db");
const session = require('express-session')
const bcrypt = require('bcrypt')
const router = express.Router();
const cors = require('cors')

const PORT = process.env.PORT || 4000;

// CORS MIDDLEWARE
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);  
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const handleErrors = (err) => {
  console.log(err.message);
  console.log(err.errno);
  console.log(err);
  let errors = { email: "", password: ""}
  // duplicate error code
  if (err.errno === 1062){
    errors.email = "that email is already registered"
    return errors
  }
  return errors
}

app.post("/login", async (req,res) => {
  const { email, password } = req.body
  let [[user]] = await db.promise().query(`SELECT * FROM mislavtemplate.user WHERE user.email = ?;`, [email])
  console.log(user);
})

app.post("/register", async (req,res) => {
  const { email, password } = req.body
  try {
    const salt = await bcrypt.genSalt()
    let hashedPassword = await bcrypt.hash(password, salt)
    await db.promise().query('INSERT INTO mislavtemplate.user (email, password, role) VALUES(?, ?, ?)', [email, hashedPassword, 'admin'])
  } catch (error) {
    const errors = handleErrors(error)
    res.status(400).json(errors)
  }

})

app.listen(PORT, async () => {
  console.log(`App is running on ${PORT}`);
});

