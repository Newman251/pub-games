// src/components/Settings.js
import React, { useState } from 'react';
import '../styles/Settings.css';

function Settings({ navigate }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    // Apply theme change (could be improved with context or a CSS variable switch)
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <ul>
        <li>
          Theme: 
          <button onClick={toggleTheme} className="toggle-btn">
            {darkMode ? 'Dark' : 'Light'}
          </button>
        </li>
        <li>Notifications: Coming Soon</li>
        <li>Language: English (Coming Soon)</li>
      </ul>
      <button className="back-button" onClick={() => navigate('home')}>Back</button>
    </div>
  );
}

export default Settings;
