import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const PORT = process.env.PORT;
const SALT = bcrypt.genSaltSync(9);
const SECRET_AUTH_KEY = process.env.SECRET_AUTH_KEY;
const MONGODB_URI = process.env.MONGODB_URI;

export {
    PORT,
    SALT,
    SECRET_AUTH_KEY,
    MONGODB_URI
}

