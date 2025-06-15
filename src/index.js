import express from 'express';

import {PORT} from './config/serverConfig.js'
import connect from './config/database.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connect();
    console.log('connected to database');
});