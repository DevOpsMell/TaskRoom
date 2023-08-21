const passport = require('passport');
const { jwtStrategy, localStrategy } = require('../config/passport');

passport.use(jwtStrategy);
passport.use(localStrategy);

const authenticateJWT = passport.authenticate('jwt', { session: false });
const authenticateLocal = passport.authenticate('local', { session: false });

module.exports = {
  authenticateJWT,
  authenticateLocal,
};
