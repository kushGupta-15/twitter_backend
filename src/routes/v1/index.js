import express from 'express'

import {createTweet, toggleLike} from '../../controllers/index.js'

const router = express.Router();

router.post('/tweets', createTweet);
router.post('/likes/toggle', toggleLike);

export default router;