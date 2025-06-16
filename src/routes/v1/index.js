import express from 'express'

import {
    createTweet, 
    getTweet, 
    toggleLike, 
    createComment, 
    signup,
    login
} from '../../controllers/index.js'

import { authenticate } from '../../middleware/index.js'

const router = express.Router();

router.post('/tweets', authenticate, createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle', authenticate, toggleLike);

router.post('/comments', authenticate, createComment);

router.post('/signup', signup);
router.post('/login', login);

export default router;