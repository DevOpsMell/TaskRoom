const UserModel = require('../models/user.model')

const postUser = async (req, res, next) => {
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓Example code only↓↓↓↓↓↓↓↓↓↓↓↓↓
  const { username, email, hashed_password } = req.body
  try {
    const user = new UserModel(username, email, hashed_password )

    await user.save()
    res.status(201).json({ message: `${user.id} created successfully` })
  }

  catch (error) {
    next(error)
  }
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await UserModel.findById(id)
    if (!user) {
      throw new NotFoundError(`User Id ${id} not found`)
    }
    res.json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  postUser,
  getAllUsers,
  getUserById,
  postUser
}