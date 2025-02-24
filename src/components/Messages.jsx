// src/components/Messages.js
import React, { useState } from 'react';
import '../styles/Messages.css';

function Messages({ navigate }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, message]);
      setMessage("");
    }
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="chat-box" style={{ border: "1px solid #ccc", padding: "10px", height: "200px", overflowY: "scroll" }}>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Type your message..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={handleSend}>Send</button>
      <button onClick={() => navigate("home")}>Back to Home</button>
    </div>
  );
}

export default Messages;
