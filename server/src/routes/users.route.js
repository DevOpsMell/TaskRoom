const express = require('express');
const { postUser } = require('../controllers/users.controller');
// const { validateUser } = require('../middleware/userValidation');

const userRouter = express.Router();

userRouter.post('/', postUser);

module.exports = userRouter;
