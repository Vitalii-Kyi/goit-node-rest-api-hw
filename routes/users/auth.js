const express = require("express");
const authControllers = require("../../controllers/auth");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", authControllers.registerUser);

router.get("/verify/:verificationToken", authControllers.verifyEmail);

router.post("/verify", authControllers.resendVerifyEmail);

router.post("/login", authControllers.loginUser);

router.post("/logout", authMiddleware, authControllers.logout);

router.get("/current", authMiddleware, authControllers.currentUser);

router.patch("/", authMiddleware, authControllers.updateSub);

module.exports = router;
