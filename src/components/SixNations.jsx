// src/components/PlayScreen.js
import React, { useState, useEffect } from 'react';
import '../styles/SixNations.css';

const matches = [
  { id: 1, teamA: "England", teamB: "France" },
  { id: 2, teamA: "Ireland", teamB: "Wales" },
  { id: 3, teamA: "Scotland", teamB: "Italy" },
];

function PlayScreen({ navigate }) {
  // Redirect to register if not registered
  useEffect(() => {
    const registration = localStorage.getItem('registration');
    if (!registration) {
      navigate('register');
    }
  }, [navigate]);

  const [userData, setUserData] = useState({
    scores: matches.map(match => ({ matchId: match.id, scoreA: "", scoreB: "" })),
  });

  const handleScoreChange = (matchId, team, value) => {
    setUserData(prevData => {
      const updatedScores = prevData.scores.map(score => {
        if (score.matchId === matchId) {
          return { ...score, [team]: value };
        }
        return score;
      });
      return { ...prevData, scores: updatedScores };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send data to backend here
    alert(`Scores Submitted!\n${JSON.stringify(userData.scores, null, 2)}`);
  };

  return (
    <div className="play-container">
      <h2>Guess This Weekend's Scores</h2>
      <form onSubmit={handleSubmit} className="play-form">
        {matches.map(match => (
          <div key={match.id} className="match-group">
            <h3>{match.teamA} vs {match.teamB}</h3>
            <div className="score-inputs">
              <div className="score-input">
                <label>{match.teamA} Score:</label>
                <input
                  type="number"
                  value={userData.scores.find(s => s.matchId === match.id).scoreA}
                  onChange={(e) => handleScoreChange(match.id, 'scoreA', e.target.value)}
                  required
                />
              </div>
              <div className="score-input">
                <label>{match.teamB} Score:</label>
                <input
                  type="number"
                  value={userData.scores.find(s => s.matchId === match.id).scoreB}
                  onChange={(e) => handleScoreChange(match.id, 'scoreB', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className="button-group">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="back-button" onClick={() => navigate('home')}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlayScreen;
  