// src/components/Riddle.js
import React, { useState } from 'react';
import '../styles/Riddle.css';

function Riddle({ navigate }) {
  const riddle = "I speak without a mouth and hear without ears. What am I?";
  const correctAnswer = "Echo";
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect, try again!");
    }
  };

  return (
    <div className="riddle-container">
      <h2>Riddle Time</h2>
      <p>{riddle}</p>
      <input 
        type="text" 
        placeholder="Your answer" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
      />
      <button onClick={handleSubmit}>Submit Answer</button>
      {feedback && <p>{feedback}</p>}
      <button onClick={() => navigate("home")}>Back to Home</button>
    </div>
  );
}

export default Riddle;
