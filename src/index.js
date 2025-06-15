import express from 'express';
import connect from './config/database.js';
const app = express();

import apiRoutes from './routes/index.js';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('listening on port 3000');
    await connect();
    console.log('connected to database');

});