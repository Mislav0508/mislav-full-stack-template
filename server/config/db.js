const mysql = require('mysql2');

let db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  database: process.env.db_name,
  password: process.env.db_password
})

db.connect((err) => {
  if(err) {
    console.log("Database connection failed", err);
  } else {
    console.log("Connected to database.");
  }
})

module.exports = db