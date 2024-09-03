// src/ConnectionManager.js
import React, { useEffect, useState } from 'react';
import { useSocket } from './SocketContext';

const ConnectionManager = () => {
  const socket = useSocket();
  const [status, setStatus] = useState('Connected');

  useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      setStatus('Connected');
    });

    socket.on('disconnect', () => {
      setStatus('Disconnected');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, [socket]);

  return (
    <div>
      <p>Status: {status}</p>
    </div>
  );
};

export default ConnectionManager;
