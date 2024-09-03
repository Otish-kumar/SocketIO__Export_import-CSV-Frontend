import React from 'react';
import gravatar from 'gravatar';

const UserList = ({ users }) => {
  return (
    <div style={styles.userList}>
      <h2>Online Users</h2>
      {users.map((user, index) => (
        <div key={index} style={styles.user}>
          <img
            src={gravatar.url(user.userName, { s: '40px', r: 'x', d: 'retro' })}
            alt={user.userName}
            style={styles.avatar}
          />
          {user.userName} ({user.status})
        </div>
      ))}
    </div>
  );
};

const styles = {
  userList: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '10px',
    backgroundColor: '#fafafa',
  },
  user: {
    padding: '5px',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    marginRight: '10px',
  },
};

export default UserList;
