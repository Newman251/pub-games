// src/server/routes/messages.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/messages - Save a new message
router.post('/', async (req, res) => {
  try {
    const { userName, pub, message } = req.body;
    const newMessage = new Message({ userName, pub, message });
    await newMessage.save();
    res.status(200).json({ message: 'Message posted successfully', newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/messages - Get recent messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 }).limit(20);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
