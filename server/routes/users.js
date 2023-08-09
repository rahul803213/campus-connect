const express= require('express');
const userControllers = require("../controller/userController")
const router = express.Router();


router.get("/",(req,res)=>res.send("this is user"));
router.post("/register", userControllers.register);
router.post("/login",userControllers.login);
router.get('/verify',userControllers.email_verifier)

module.exports = router;