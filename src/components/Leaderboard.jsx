import React, { useEffect, useState } from 'react';
import '../styles/Leaderboard.css';


function Leaderboard({ navigate }) {
  const [individuals, setIndividuals] = useState([]);
  const [pubs, setPubs] = useState([]);
  useEffect(() => {
    // Simulate fetching data with a delay
    const individualData = [
      { rank: 1, name: "Alice", score: 95 },
      { rank: 2, name: "Bob", score: 90 },
      { rank: 3, name: "Charlie", score: 85 },
    ];


    const pubData = [
      { rank: 1, name: "The Cork and Cavan", score: 250 },
      { rank: 2, name: "O'Sullivan's Bastille", score: 230 },
      { rank: 3, name: "The Galway", score: 210 },
      { rank: 4, name: "Corcoran's - Grand Boulevard", score: 205 },
      { rank: 5, name: "Corcoran's - Montmarte", score: 200 },
      { rank: 5, name: "O'Sullivan's - Pigalle", score: 200 },






    ];


    setTimeout(() => {
      setIndividuals(individualData);
      setPubs(pubData);
    }, 500);
  }, []);


  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
     
      <div className="leaderboard-wrapper">
        <div className="leaderboard-section">
          <h3>Individuals</h3>
          <ul className="leaderboard-list">
            {individuals.map(item => (
              <li key={item.rank} className="fade-in">
                <span className="rank">{item.rank}.</span> {item.name} - {item.score} pts
              </li>
            ))}
          </ul>
        </div>
       
        <div className="leaderboard-section">
          <h3>Pubs</h3>
          <ul className="leaderboard-list">
            {pubs.map(item => (
              <li key={item.rank} className="fade-in">
                <span className="rank">{item.rank}.</span> {item.name} - {item.score} pts
              </li>
            ))}
          </ul>
        </div>
      </div>
     
      <button className="back-button" onClick={() => navigate('home')}>Back</button>
    </div>
  );
}


export default Leaderboard;
