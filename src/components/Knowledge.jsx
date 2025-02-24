// src/components/Knowledge.js
import React, { useState } from 'react';
import '../styles/Knowledge.css';

function Knowledge({ navigate }) {
  const question = "What is the capital of France?";
  const choices = ["Paris", "Rome", "Berlin", "Madrid"];
  const correctAnswer = "Paris";
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (selected === correctAnswer) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. Try again!");
    }
  };

  return (
    <div className="knowledge-container">
      <h2>Knowledge Quiz</h2>
      <p>{question}</p>
      {choices.map(choice => (
        <div key={choice}>
          <input
            type="radio"
            id={choice}
            name="knowledge"
            value={choice}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor={choice}>{choice}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Answer</button>
      {result && <p>{result}</p>}
      <button onClick={() => navigate("home")}>Back to Home</button>
    </div>
  );
}

export default Knowledge;
