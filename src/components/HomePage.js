import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Application</h1>
      <div style={styles.buttonContainer}>
        <Link to="/import-export" style={styles.button}>CSV Import/Export</Link>
        <Link to="/chat" style={styles.button}>Chat Application</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default HomePage;
