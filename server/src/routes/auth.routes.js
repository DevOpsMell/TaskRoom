const authRouter = require('express').Router();
const { authenticateLocal } = require('../middleware/auth.middleware');
const { register, login } = require('../controllers/auth.controller');

authRouter.post('/register', register);
authRouter.post('/login', authenticateLocal, login);

module.exports = authRouter;