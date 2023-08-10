const express = require("express");
const userControllers = require("../controller/userController");
const router = express.Router();
const singleUpload = require("../middelware/multer");

router.get("/", (req, res) => res.send("this is user"));
router.post("/register", singleUpload, userControllers.register);
router.post("/login", userControllers.login);
router.get("/verify", userControllers.email_verifier);

module.exports = router;
