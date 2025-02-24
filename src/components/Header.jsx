// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

function Header({ navigate, registration }) {
  return (
    <header className="header">
      <button className="header-btn" onClick={() => navigate('leaderboard')}>
        Leaderboards
      </button>
      <div className="header-title" onClick={() => navigate('home')}>
        PubQuiz
      </div>
      <button className="header-btn" onClick={() => navigate('register')}>
        {registration ? registration.teamName : "Register"}
      </button>
    </header>
  );
}

export default Header;
