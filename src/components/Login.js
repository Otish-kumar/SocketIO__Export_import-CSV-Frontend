
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ onLogin }) => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', {
//         userId,
//         password,
//       });

//       const { accessToken, refreshToken } = response.data;

//       // Store tokens in localStorage (or use a more secure method)
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);

//       onLogin(userId); // Pass userId or redirect to chat
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;
