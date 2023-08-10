const express = require("express");
const postControllers = require("../controller/postController");
const singleUpload = require("../middelware/multer");
const router = express.Router();

router.post("/create", singleUpload, postControllers.createPost);
router.get("/", postControllers.fetchPost);
module.exports = router;
