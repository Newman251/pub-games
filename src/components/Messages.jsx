// src/components/Messages.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Messages.css';

function Messages({ navigate }) {
  const [userName, setUserName] = useState("");
  const [pub, setPub] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Fetch the latest messages on mount
  useEffect(() => {
    fetch(`${API_URL}/api/messages`)
      .then(res => res.json())
      .then(data => setChat(data))
      .catch(err => console.error('Error fetching messages:', err));
  }, [API_URL]);

  const handleSend = () => {
    if (message.trim()) {
      // Use default values if the optional fields are empty
      const newMessagePayload = {
        userName: userName.trim() || "Anonymous",
        pub: pub.trim() || "General",
        message: message.trim(),
      };

      fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessagePayload),
      })
        .then(res => res.json())
        .then(data => {
          // Prepend the new message since your GET returns messages sorted descending
          setChat(prev => [data.newMessage, ...prev]);
          setMessage("");
        })
        .catch(err => console.error('Error sending message:', err));
    }
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div 
        className="chat-box" 
        style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'scroll' }}
      >
        {chat.map(msg => (
          <p key={msg._id}>
            <strong>{msg.userName}</strong> ({msg.pub}): {msg.message}
          </p>
        ))}
      </div>
      <div className="message-inputs">
        <input 
          type="text" 
          placeholder="Your Name (optional)" 
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Pub (optional)" 
          value={pub}
          onChange={e => setPub(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Type your message..." 
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
      <button onClick={() => navigate("home")}>Back to Home</button>
    </div>
  );
}

export default Messages;
