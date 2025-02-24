// src/components/BottomNav.js
import React from 'react';
import '../styles/BottomNav.css';

function BottomNav({ navigate }) {
  return (
    <nav className="bottom-nav">
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('play')}>Play</button>
      <button onClick={() => navigate('leaderboard')}>Leaderboard</button>
      <button onClick={() => navigate('settings')}>Settings</button>
    </nav>
  );
}

export default BottomNav;
