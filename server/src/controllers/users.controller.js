const pino = require('pino');
const NotFoundError = require('../errors/not.found');
const UserModel = require('../models/user.model');

const logger = pino(); // Create the logger instance

const postUser = async (req, res, next) => {
  try {
    const { username, email, hashed_password } = req.body;
    const user = new UserModel({
      username,
      email,
      hashed_password,
    });
    await user.save();
    res.status(201).json({ message: `${user.id} created successfully` });
    logger.info(`User ${user.id} created successfully`);
  } catch (error) {
    next(error);
    logger.error(`Error while creating task: ${error.message}`);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.json(users);
    // Log the number of users retrieved
    logger.info(`Retrieved ${users.length} tasks`);
  } catch (error) {
    next(error);
    logger.error(`Error while fetching tasks: ${error.message}`);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new NotFoundError(`User ID ${id} not found`);
    }
    res.json(user);

    // Log the user retrieval
    logger.info(`User ${id} retrieved successfully`);
  } catch (error) {
    next(error);
    logger.error(`Error while fetching user ${id}: ${error.message}`);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, avatar_url } = req.body;
  try {
    await UserModel.findByIdAndUpdate(
      id,
      {
        username,
        email,
        avatar_url,
      },
      { new: true },
    ).exec();
    res.status(204).send();

    // Log successful update
    logger.info(`User ${id} updated successfully`);
  } catch (error) {
    next(error);
    logger.error(`Error while updating user ${id}: ${error.message}`);
  }
};

//delete User by id
const deleteUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundError(`UserId ${id} not found`);
    }
    res.json({ message: 'User deleted successfully' });
    // Log successful deletion
    logger.info(`User ${id} deleted successfully`);
  } catch (error) {
    next(error);
    logger.error(`Error while deleting user ${id}: ${error.message}`);
  }
};
module.exports = {
  postUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById,
};
