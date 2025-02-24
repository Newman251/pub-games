// src/server/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { teamName, pub } = req.body;
    
    // Check if the user already exists
    let user = await User.findOne({ teamName });
    
    if (user) {
      // If user exists, update their pub info
      user.pub = pub;
    } else {
      // Otherwise, create a new user
      user = new User({ teamName, pub });
    }
    
    await user.save();
    res.status(200).json({ message: 'Registration successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
