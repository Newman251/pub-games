// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Knowledge from './components/Knowledge';
import Riddle from './components/Riddle';
import Puzzle from './components/Puzzle';
import Music from './components/Music';
import Sports from './components/Sports';
import Messages from './components/Messages';
import SixNations from './components/SixNations';
import Leaderboard from './components/Leaderboard';
import './styles/App.css';

function App() {
  const [screen, setScreen] = useState('home');
  const [registration, setRegistration] = useState(() => {
    const stored = localStorage.getItem('registration');
    return stored ? JSON.parse(stored) : null;
  });

  const navigate = (target, params) => {
    // You can store params if needed later
    setScreen(target);
  };

  let content;
  switch (screen) {
    case 'home':
      content = <Home navigate={navigate} />;
      break;
    case 'register':
      content = <Register navigate={navigate} registration={registration} setRegistration={setRegistration} />;
      break;
    case 'knowledge':
      content = <Knowledge navigate={navigate} />;
      break;
    case 'riddle':
      content = <Riddle navigate={navigate} />;
      break;
    case 'puzzle':
      content = <Puzzle navigate={navigate} />;
      break;
    case 'music':
      content = <Music navigate={navigate} />;
      break;
    case 'sports':
      content = <Sports navigate={navigate} />;
      break;
    case 'messages':
      content = <Messages navigate={navigate} />;
      break;
    case 'sixnations':
      content = <SixNations navigate={navigate} />;
      break;
    case 'leaderboard':
      content = <Leaderboard navigate={navigate} />;
      break;
    default:
      content = <Home navigate={navigate} />;
  }

  return (
    <div className="app-container">
      <Header navigate={navigate} registration={registration} />
      <main className="main-content">{content}</main>
    </div>
  );
}

export default App;
