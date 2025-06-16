import JWT from 'passport-jwt';

import { SECRET_AUTH_KEY } from './serverConfig.js';
import { User } from '../models/index.js';

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_AUTH_KEY,
};

const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user) {
            done(null, false);
        } else {
            done(null, user);
        }
    }));
};

export {
    passportAuth
}