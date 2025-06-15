import express from 'express';

import {PORT} from './config/serverConfig.js'
import connect from './config/database.js';
import apiRoutes from './routes/index.js';

import {UserRepository, TweetRepository} from './repository/index.js';
import {LikeService} from './services/index.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connect();
    console.log('connected to database');

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(0, 10);
    // console.log(tweets);
    const users = await userRepo.getAll();
    const likeService = new LikeService();
    await likeService.toggleLike(tweets[0].id,'Tweet', users[0].id);
});