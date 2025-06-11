// controllers/userController.js
const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { username, email, bio } = req.body;
  try {
    const user = await User.create({ username, email, bio, achievements: [] });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
