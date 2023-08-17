
const express = require('express');
const detailController = require('../controller/detailsController')
const router = express.Router();

router.post("/create",detailController.Create);
router.get('/fetch',detailController.Read);
router.post('/delete',detailController.Delete);

module.exports = router