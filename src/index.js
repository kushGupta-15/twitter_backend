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

    // const tweet = await Tweet.create({
    //     content: 'First tweet',
    //     userEmail: 'a@b.com'
    // });
    // console.log(tweet); 

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.get('684d5fecc043799caadac59d');
    // console.log(tweet);

    // const tweet = await tweetRepo.create({content: 'my tweet'});
    // console.log(tweet);
    // tweet.comments.push({content: 'first comment'});
    // await tweet.save();
    // console.log(tweet);

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: 'Tweet with comment schema'})
    // console.log(tweet);
    // const comment = await Comment.create({content: 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    // const tweet = await tweetRepo.getWithComments('684d77543ff915f8c041c6aa')
    // console.log(tweet);
});