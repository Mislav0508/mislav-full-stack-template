const express = require("express");
const app = express();
require('dotenv').config()
const db = require("./config/db");

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  console.log(`App is running on ${PORT}`);
  let [users] = await db.promise().query("SELECT * FROM mislavtemplate.user;")
  console.log("users: ",users);
});

