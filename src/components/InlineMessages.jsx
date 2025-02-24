// src/components/InlineMessages.js
import React, { useState, useEffect } from 'react';
import '../styles/InlineMessages.css';

function InlineMessages({ registration }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/messages');
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async () => {
    if (!message.trim()) return;
    if (!registration) {
      alert("Please register before sending messages");
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: registration.userName,
          pub: registration.pub,
          message: message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("");
        fetchMessages();
      } else {
        console.error("Error posting message:", data.error);
      }
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return (
    <div className="inline-messages-container">
      <h3>Messages</h3>
      <div className="messages-list">
        {messages.map(msg => (
          <div key={msg._id} className="message-item">
            <strong>{msg.userName}</strong> ({msg.pub}): {msg.message}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input 
          type="text" 
          placeholder="Type your message..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default InlineMessages;
