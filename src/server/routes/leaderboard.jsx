// src/server/routes/leaderboard.js
const express = require('express');
const router = express.Router();
const Score = require('../models/Score');
const User = require('../models/User');

// GET /api/leaderboard
router.get('/', async (req, res) => {
  try {
    // Aggregate total scores per user
    const leaderboard = await Score.aggregate([
      {
        $group: {
          _id: "$userId",
          totalScore: { $sum: { $add: ["$scoreA", "$scoreB"] } }
        }
      },
      { $sort: { totalScore: -1 } },
      { $limit: 10 }
    ]);

    // Populate user details
    const populatedLeaderboard = await Promise.all(leaderboard.map(async (entry) => {
      const user = await User.findById(entry._id);
      return {
        teamName: user ? user.teamName : "Unknown",
        pub: user ? user.pub : "",
        totalScore: entry.totalScore
      };
    }));

    res.status(200).json(populatedLeaderboard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
