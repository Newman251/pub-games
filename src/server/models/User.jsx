// src/server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  pub: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
