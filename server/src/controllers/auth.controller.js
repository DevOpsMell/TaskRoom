const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');

const User = require('../models/user.model');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username: name,
      email,
      hashed_password: hashedPassword,
    });

    !user && res.status(400).json({ message: 'User could not be created' });

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    next(err);
  }
};

const login = (req, res) => {
  const token = generateToken(req.user);
  return res.json({ token });
};

module.exports = {
  register,
  login,
};
