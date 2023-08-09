const express= require('express');
const collegeController = require('../controller/collegeController')
const router = express.Router();


router.get("/",(req,res)=>res.send("this is user"));
router.post("/create",collegeController.createCollege);

module.exports = router;