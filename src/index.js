import express from 'express';
import connect from './config/database.js';

const app = express();

app.listen(3000, async () => {
    console.log('listening on port 3000');
    await connect();
    console.log('connected to database');
});