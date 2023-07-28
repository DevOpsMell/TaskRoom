const express = require('express');
const { postUser,  getAllUsers, getUserById, } = require('../controllers/users.controller');
// const { validateUser } = require('../middleware/userValidation');

const userRouter = express.Router();

userRouter.post('/', postUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);

module.exports = userRouter;
