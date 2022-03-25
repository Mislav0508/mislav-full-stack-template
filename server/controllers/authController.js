const bcrypt = require('bcrypt')
const db = require("../config/db");
require('dotenv').config()
const jwt = require("jsonwebtoken")

const handleErrors = (err) => {
  // console.log(err.message);
  // console.log(err.errno);
  // console.log(err);
  let errors = { email: "", password: ""}
  // duplicate error code
  if (err.errno === 1062){
    errors.email = "That email is already registered."
    return errors
  }
  return errors
}

const maxAge = 3 * 24 * 60 * 60 
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { 
    expiresIn: maxAge 
  }) 
}

login_post = async (req,res) => {
  const { email, password } = req.body
  let [[user]] = await db.promise().query(`SELECT * FROM mislavtemplate.user WHERE user.email = ?;`, [email])

  if(user){
    console.log(user);
    const auth = await bcrypt.compare(password, user.password)
    if(auth){
      const token = createToken(user.id)
      res.status(201).json({token, user})
      return
    }
    throw Error("incorrect password")
  }
  throw Error("incorrect email")
}

register_post = async (req,res) => {
  const { email, password } = req.body
  try {
    const salt = await bcrypt.genSalt()
    let hashedPassword = await bcrypt.hash(password, salt)
    await db.promise().query('INSERT INTO mislavtemplate.user (email, password, role) VALUES(?, ?, ?)', [email, hashedPassword, 'admin'])
    res.status(201)
  } catch (error) {
    const errors = handleErrors(error)
    console.log("errors: ",errors);
    res.json(errors)
    res.status(400)
  }

}



module.exports = {
  register_post,
  login_post
}