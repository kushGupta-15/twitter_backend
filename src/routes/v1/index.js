import express from 'express'

import {
    createTweet, 
    getTweet, 
    toggleLike, 
    createComment, 
    signup
} from '../../controllers/index.js'

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle', toggleLike);

router.post('/comments', createComment);

router.post('/signup', signup);

export default router;