// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(() => {
//     const token = localStorage.getItem('accessToken');
//     return token ? { token } : null;
//   });

//   const login = async (userId, password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { userId, password });
//       const { accessToken, refreshToken } = response.data;
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);
//       setAuth({ token: accessToken });
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     setAuth(null);
//   };

//   const refreshToken = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/auth/refresh', {
//         refreshToken: localStorage.getItem('refreshToken')
//       });
//       const { accessToken } = response.data;
//       localStorage.setItem('accessToken', accessToken);
//       setAuth({ token: accessToken });
//     } catch (error) {
//       console.error('Token refresh failed:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout, refreshToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
