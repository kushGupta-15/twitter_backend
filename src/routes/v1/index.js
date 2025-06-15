import express from 'express'

import {createTweet, getTweet, toggleLike, createComment} from '../../controllers/index.js'

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle', toggleLike);

router.post('/comments', createComment);

export default router;