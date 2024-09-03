import React, { useState } from 'react';
import { useSocket } from './SocketContext';

const Register = ({ onRegister }) => {
  const [userName, setUserName] = useState('');
  const socket = useSocket();

  const handleRegister = () => {
    if (userName) {
      socket.emit('register', { userName });
      onRegister(userName);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
