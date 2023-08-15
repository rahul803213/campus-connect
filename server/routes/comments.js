const express = require('express');
const commentController  = require('../controller/commentController');
const router = express.Router();

router.get('/:postId',commentController.fetchComment);
router.post('/create',commentController.CreateComment);




module.exports = router;