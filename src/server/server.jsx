// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
console.log('MONGO_URI:', process.env.MONGO_URI);
// src/server/server.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// For debugging: print the connection string
console.log('MONGO_URI:', process.env.MONGO_URI);

const authRoutes = require('./routes/auth');
const scoreRoutes = require('./routes/scores');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Set up API endpoints
app.use('/api/auth', authRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
