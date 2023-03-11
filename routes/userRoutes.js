const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/UserController");
const validateToken = require("../middleware/ValidateTokenHandler");


const router = express.Router();

router.post("/register", registerUser)

router.post("/login", loginUser)

// Using custom middleware validateToken for Authorization
router.get("/",  validateToken, getUser)

module.exports= router;