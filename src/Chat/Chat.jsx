import { useEffect, useState } from 'react';
import { useAuth } from '../utils/useAuth';
import { getAllMessages, createMessage, deleteMessage } from '../services/messageService';
import sanitizeInput from '../utils/sanitizeInput';
import '../Chat/chat.css';

function Chat() {
  const { user, token, isLoggedIn } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getAllMessages(token);
        setMessages(data);
      } catch {
        setError('Kunde inte hämta meddelanden.');
      }
    };

    fetchMessages();
  }, [token]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const clean = sanitizeInput(newMessage.trim());
      const response = await createMessage(token, clean);
      const sent = response.latestMessage;

      sent.username = user.username;
      sent.userId = user.id;
      sent.id = sent.id || Date.now(); // säkerställ att React får en key

      setMessages((prev) => [...prev, sent]);
      setNewMessage('');
    } catch {
      setError('Kunde inte skicka meddelandet.');
    }
  };

  const handleDelete = async (msgId) => {
    try {
      await deleteMessage(token, msgId);
      setMessages((prev) => prev.filter((msg) => msg.id !== msgId));
    } catch {
      setError('Kunde inte radera meddelandet.');
    }
  };

  if (!isLoggedIn) return <p>Du måste vara inloggad för att se chatten.</p>;

  return (
    <div className="chat-wrapper">
      <div className="user-info">
        <p>Inloggad som: {user.username}</p>
        {user.avatar && <img src={user.avatar} alt="avatar" />}
      </div>

      {error && <p className="error">{error}</p>}

      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.userId === user.id ? 'mine' : 'theirs'}`}
          >
            <p>
              <strong>{msg.username}</strong>: {msg.text || msg.content}
            </p>
            {msg.userId === user.id && (
              <button onClick={() => handleDelete(msg.id)}>Radera</button>
            )}
          </div>
        ))}
      </div>

      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Skriv ett meddelande..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          required
        />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}

export default Chat;
