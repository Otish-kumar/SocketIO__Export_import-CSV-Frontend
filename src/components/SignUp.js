// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [userId, setUserId] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/auth/signup', {
//         userId,
//         userName,
//         password
//       });
//       localStorage.setItem('accessToken', response.data.accessToken);
//       localStorage.setItem('refreshToken', response.data.refreshToken);
//       navigate('/login');
//     } catch (error) {
//       console.error('Signup failed', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
//       <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleSignUp}>Sign Up</button>
//     </div>
//   );
// };

// export default SignUp;
