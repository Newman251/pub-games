// src/components/Sports.js
import React, { useState } from 'react';
import '../styles/Sports.css';

function Sports({ navigate }) {
  const question = "Which country won the 2018 FIFA World Cup?";
  const choices = ["France", "Brazil", "Germany", "Argentina"];
  const correctAnswer = "France";
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (selected === correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  return (
    <div className="sports-container">
      <h2>Sports Trivia</h2>
      <p>{question}</p>
      {choices.map(choice => (
        <div key={choice}>
          <input 
            type="radio" 
            name="sports" 
            value={choice} 
            onChange={(e) => setSelected(e.target.value)} 
          />
          <label>{choice}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Answer</button>
      {feedback && <p>{feedback}</p>}
      <button onClick={() => navigate("home")}>Back to Home</button>
    </div>
  );
}

export default Sports;
