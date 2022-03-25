const express = require("express");
const app = express();
require('dotenv').config()
const session = require('express-session')
const router = express.Router();
const authRoutes = require("./routes/authRoutes")
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

app.listen(PORT, async () => {
  console.log(`App is running on ${PORT}`);
});


app.use(authRoutes)



