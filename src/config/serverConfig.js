import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const PORT = process.env.PORT;
const SALT = bcrypt.genSaltSync(9);
const SECRET_AUTH_KEY = process.env.SECRET_AUTH_KEY;
const MONGODB_URI = process.env.MONGODB_URI;
const AWS_REGION = process.env.AWS_REGION;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
const BUCKET_NAME = process.env.BUCKET_NAME;

export {
    PORT,
    SALT,
    SECRET_AUTH_KEY,
    MONGODB_URI,
    AWS_REGION,
    AWS_SECRET_ACCESS_KEY,
    ACCESS_KEY_ID,
    BUCKET_NAME
}

