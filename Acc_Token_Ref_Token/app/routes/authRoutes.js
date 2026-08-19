const express = require("express")

const AuthController = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router()

router.post('/auth/register',AuthController.adduser)
router.post('/auth/login',AuthController.loginUser)
router.post('/auth/logout', protect, AuthController.logoutUser)
router.post('/auth/refresh' , AuthController.refreshToken)

module.exports = router