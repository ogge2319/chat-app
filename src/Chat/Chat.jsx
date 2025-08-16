import React, { useEffect, useState } from 'react'
import { useAuth } from '../utils/useAuth'
import { getAllMessages } from '../services/messageService';
import "../Chat/chat.css"



function Chat() {
  const { user, token, isLoggedIn } = useAuth();
  const { messages, setMessages } = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getAllMessages(token);
        setMessages(data);
      } catch (err) {
        setError("Kunde inte hämta meddelanden.")
      }
    }
    fetchMessages();
  }, [token])
  if (!isLoggedIn) return <p>Du måste vara inloggad för att se chatten.</p>;

  return (
    <div className="chat-wrapper">
      <div className="user-info">
        <p>Inloggad som: {user.username}</p>
        <img src={user.avatar} alt="avatar" />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`message ${msg.userId === user.id ? "mine" : "theirs"}`}
          >
            <p><strong>{msg.username}</strong>: {msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat