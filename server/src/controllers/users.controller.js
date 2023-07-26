const UserModel = require('../models/user.model')

const postUser = async (req, res, next) => {
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓Example code only↓↓↓↓↓↓↓↓↓↓↓↓↓
  const user = new UserModel(req.body)
  try {
    await user.save()
    res.status(201).json({ message: `${user.id} created successfully` })
  }

  catch (error) {
    next(error)
  }
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}

module.exports = {
  postUser,
}