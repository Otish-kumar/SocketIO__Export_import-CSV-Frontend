import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SocketProvider } from './components/SocketContext';
import HomePage from './components/HomePage';
import ImportExportPage from './components/ImportExportPage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <SocketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/import-export" element={<ImportExportPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </SocketProvider>
  );
}

export default App;
