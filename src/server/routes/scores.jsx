// src/server/routes/scores.js
const express = require('express');
const router = express.Router();
const Score = require('../models/Score'); // Ensure you have this model created

// POST /api/scores/submit
router.post('/submit', async (req, res) => {
  try {
    const { userId, scores } = req.body; // `scores` is an array of objects: { matchId, scoreA, scoreB }
    
    // Save each score entry to the database
    const results = await Promise.all(
      scores.map(async (score) => {
        const newScore = new Score({
          userId,
          matchId: score.matchId,
          scoreA: score.scoreA,
          scoreB: score.scoreB,
        });
        return await newScore.save();
      })
    );
    
    res.status(200).json({ message: 'Scores submitted successfully', results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
