const express = require('express');
const commentController  = require('../controller/commentController');
const router = express.Router();

router.get('/:postId',commentController.fetchComment);
router.post('/create',commentController.CreateComment);
router.get('/',commentController.fetchCommentWithoutId)



module.exports = router;