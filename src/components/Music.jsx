// src/components/Music.js
import React, { useState } from 'react';
import '../styles/Music.css';

function Music({ navigate }) {
  const lyric = "Just a small town girl, living in a lonely world...";
  const correctAnswer = "Don't Stop Believin'";
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (guess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect, try again!");
    }
  };

  return (
    <div className="music-container">
      <h2>Music Quiz</h2>
      <p>Guess the song from this lyric snippet:</p>
      <blockquote>{lyric}</blockquote>
      <input 
        type="text" 
        placeholder="Your answer" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Answer</button>
      {feedback && <p>{feedback}</p>}
      <button onClick={() => navigate("home")}>Back to Home</button>
    </div>
  );
}

export default Music;
