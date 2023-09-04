const express = require("express");
const userControllers = require("../controller/userController");
const router = express.Router();
const singleUpload = require("../middelware/multer");

router.get("/", userControllers.fetchAllUser);
router.post("/register", singleUpload,userControllers.register);
router.post("/login", userControllers.login);
//router.post('/signup',singleUpload,userControllers.signUp)
router.get("/verify", userControllers.email_verifier);
router.post("/:celeb_id/follow",userControllers.follow)
router.post('/sendmail',userControllers.signUpReg);
router.post('/update-password',userControllers.updatePassword);
router.post('/reg-login',userControllers.loginReg);
router.post('/fetch',userControllers.fetchUser);
router.post('/update-profile-picture',singleUpload,userControllers.updateProfilePicture);

module.exports = router;
