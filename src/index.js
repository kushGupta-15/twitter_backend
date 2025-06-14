const express = require('express');
const connect = require('./config/database');

// const Tweet = require('./models/tweet');
// const TweetRepository = require('./repository/tweet-repository');
// const Comment = require('./models/comment');

const app = express();


app.listen(3000, async () => {
    console.log('listening on port 3000');
    await connect();
    console.log('connected to database');

    
});