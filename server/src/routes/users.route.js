const express = require('express');
const {
  postUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById
} = require('../controllers/users.controller');
// const { validateUser } = require('../middleware/userValidation');

const userRouter = express.Router();

userRouter.post('/', postUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUserById);

module.exports = userRouter;
