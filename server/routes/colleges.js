const express= require('express');
const collegeController = require('../controller/collegeController')
const router = express.Router();


router.get("/",collegeController.fetchCollege);
router.post("/create",collegeController.createCollege);

module.exports = router;