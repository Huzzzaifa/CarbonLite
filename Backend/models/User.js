// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  bio: String,
  achievements: [String],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
