import mongoose from 'mongoose';
import {MONGODB_URI} from './serverConfig.js'

const connect = async () => {
    await mongoose.connect(MONGODB_URI);
}

export default connect;