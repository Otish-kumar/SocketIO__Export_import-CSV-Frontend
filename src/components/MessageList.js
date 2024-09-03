import React from 'react';

const MessageList = ({ messages, currentUserName }) => {
  return (
    <div id="messages" style={styles.messages}>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            ...styles.message,
            alignSelf: msg.userName === currentUserName ? 'flex-end' : 'flex-start',
            backgroundColor: msg.userName === currentUserName ? '#d4edda' : '#f8d7da',
          }}
        >
          <strong>{msg.userName}:</strong> {msg.message}
        </div>
      ))}
    </div>
  );
};

const styles = {
  messages: {
    height: '300px',
    overflowY: 'scroll',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  message: {
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '70%',
    wordBreak: 'break-word',
    display: 'flex',
    flexDirection: 'column',
  }
};

export default MessageList;
