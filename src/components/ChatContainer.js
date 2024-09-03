import React, { useState, useEffect } from 'react';
import { useSocket } from './SocketContext';
import MessageList from './MessageList';
import UserList from './UserList';
import Register from './Register';

const ChatContainer = () => {
  const socket = useSocket();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [registered, setRegistered] = useState(false);
  const [currentUserName, setCurrentUserName] = useState('');
  const [privateRecipient, setPrivateRecipient] = useState('');
  const [typingUser, setTypingUser] = useState('');

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (data) => {
      const { userName, message } = data;
      setMessages((prev) => [...prev, { userName, message }]);
    };

    const handlePrivateMessage = (data) => {
      const { userName, message } = data;
      setMessages((prev) => [...prev, { userName, message, isPrivate: true }]);
    };

    const handleTyping = (data) => {
      setTypingUser(data.userName);
      setTimeout(() => setTypingUser(''), 3000); 
    };

    const handleUserList = (userList) => {
      setUsers(userList);
    };

    socket.on('message', handleMessage);
    socket.on('privateMessage', handlePrivateMessage);
    socket.on('typing', handleTyping);
    socket.on('userList', handleUserList);

    return () => {
      socket.off('message', handleMessage);
      socket.off('privateMessage', handlePrivateMessage);
      socket.off('typing', handleTyping);
      socket.off('userList', handleUserList);
    };
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() === '') return;

    if (privateRecipient) {
      socket.emit('sendPrivateMessage', { recipientUserName: privateRecipient, message });
    } else {
      socket.emit('sendMessage', message);
    }

    setMessage('');
  };

  const handleTyping = () => {
    socket.emit('typing');
  };

  const handleRegister = (userName) => {
    socket.emit('register', { userName });
    setCurrentUserName(userName);
    setRegistered(true);
  };

  return (
    <div>
      {!registered ? (
        <Register onRegister={handleRegister} />
      ) : (
        <>
          <UserList users={users} />
          <MessageList messages={messages} currentUserName={currentUserName} />
          {typingUser && <div style={styles.typing}>{typingUser} is typing...</div>}
          <input
            type="text"
            placeholder="Recipient (for private messages)"
            value={privateRecipient}
            onChange={(e) => setPrivateRecipient(e.target.value)}
          />
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleTyping();
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
          />
          <button onClick={sendMessage}>Send</button>
        </>
      )}
    </div>
  );
};

const styles = {
  typing: {
    fontStyle: 'italic',
    color: '#888',
    marginBottom: '10px',
  },
};

export default ChatContainer;
