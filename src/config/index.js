import connect from "./database.js";
import { PORT, SALT, SECRET_AUTH_KEY } from "./serverConfig.js";
import { passportAuth } from "./jwt-middleware.js";

export {
    connect,
    PORT,
    SALT,
    SECRET_AUTH_KEY,
    passportAuth,
}