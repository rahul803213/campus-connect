
const express = require('express');
const detailController = require('../controller/detailsController')
const router = express.Router();

router.post("/create",detailController.Create);

module.exports = router