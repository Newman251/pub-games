// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

function Home({ navigate }) {
  const handleCategorySelect = (category) => {
    // Navigate to a page dedicated to the chosen category.
    // For example, converting the category to lowercase to match route names.
    navigate(category.toLowerCase());
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Choose Your Category</h1>
      <div className="categories">
        <button className="category-btn" onClick={() => handleCategorySelect('Knowledge')}>
          Knowledge
        </button>
        <button className="category-btn" onClick={() => handleCategorySelect('Riddle')}>
          Riddle
        </button>
        <button className="category-btn" onClick={() => handleCategorySelect('Puzzle')}>
          Puzzle
        </button>
        <button className="category-btn" onClick={() => handleCategorySelect('Music')}>
          Music
        </button>
        <button className="category-btn" onClick={() => handleCategorySelect('Sports')}>
          Sports
        </button>
        <button className="category-btn" onClick={() => handleCategorySelect('Messages')}>
          Messages
        </button>
      </div>
      <div className="featured-games">
        <h2>Featured Games</h2>
        <button className="featured-btn" onClick={() => navigate('sixnations')}>
          Six Nations Predictor
        </button>
      </div>
    </div>
  );
}

export default Home;
