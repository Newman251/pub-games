// src/components/Register.js
import React, { useState, useEffect } from 'react';
import '../styles/Register.css';

function Register({ navigate, registration, setRegistration }) {
  const [formData, setFormData] = useState({
    teamName: '',
    pub: '',
  });

  // Load initial data if registration exists
  useEffect(() => {
    if (registration) {
      setFormData(registration);
    }
  }, [registration]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Save registration data in localStorage
    localStorage.setItem('registration', JSON.stringify(formData));
    // Update global registration state
    setRegistration(formData);
    navigate('play');
  };

  return (
    <div className="register-container">
      <h2>{registration ? "Update Your Profile" : "Register to Play"}</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pub">Pub:</label>
          <select
            id="pub"
            name="pub"
            value={formData.pub}
            onChange={handleChange}
            required
          >
            <option value="">Select a pub</option>
            <option value="Cork and Cavan">Cork and Cavan</option>
            <option value="O'Sullivans (Grand Boulevards)">O'Sullivans (Grand Boulevards)</option>
            <option value="Corcorans (Montmartre)">Corcorans (Montmartre)</option>
          </select>
        </div>
        <button type="submit" className="register-button">
          {registration ? "Update Profile" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
