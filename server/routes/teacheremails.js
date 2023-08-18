
const express = require('express');
const teacherDetailsController = require("../controller/teacherDetailsController")
const router = express.Router();

router.post("/create",teacherDetailsController.Create);
router.get('/fetch',teacherDetailsController.Read);
router.post('/delete',teacherDetailsController.Delete);

module.exports = router