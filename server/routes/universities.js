const express= require('express');
const router = express.Router();
const universityController = require('../controller/universityController')

router.post("/create",universityController.createUniversity);
router.get('/',universityController.fetchUniversity)

module.exports = router;