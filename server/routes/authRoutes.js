const { Router } = require("express")
const authController = require("../controllers/authController")
const router = Router()

router.post("/api/auth/register", authController.register_post)
router.post("/api/auth/login", authController.login_post)

module.exports = router