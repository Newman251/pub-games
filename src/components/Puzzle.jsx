// src/components/Puzzle.js
import React, { useState } from 'react';
import '../styles/Puzzle.css';

function Puzzle({ navigate }) {
  const scrambled = "lzeupz"; // scrambled version of "puzzle"
  const correctAnswer = "puzzle";
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (guess.trim().toLowerCase() === correctAnswer) {
      setFeedback("Correct! Well done.");
    } else {
      setFeedback("That's not correct. Try again!");
    }
  };

  return (
    <div className="puzzle-container">
      <h2>Puzzle Challenge</h2>
      <p>Unscramble the word: <strong>{scrambled}</strong></p>
      <input 
        type="text" 
        placeholder="Your answer" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
      />
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p>{feedback}</p>}
      <button onClick={() => navigate("home")}>Back to Home</button>
    </div>
  );
}

export default Puzzle;
