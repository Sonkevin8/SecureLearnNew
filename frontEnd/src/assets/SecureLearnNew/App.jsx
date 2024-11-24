import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the BrowserRouter, Routes and Route components
import Navbar from './Components/Nav';
import Home from './Pages/Home';
import CyberSecurity from './Pages/CyberSecurity';
import Quizzes from './Pages/Quizzes';


// Import the Navbar, Home, CyberSecurity and Quizzes components


// Define the App component



function App() {

  // State to store the user data and form inputs
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    // Fetch users from the database
    fetch('http://localhost:8081/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', {
        username: username.trim(), // Ensure no trailing spaces
        password: password.trim()  // Ensure no trailing spaces
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error logging in');
      console.error('Login error:', error);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/material" element={<CyberSecurity />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
        <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
          <h1>Welcome to SKM Bank</h1>
          <h2>Login to Your Account</h2>
          <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginLeft: '10px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginLeft: '10px' }}
              />
            </div>
            <button type="submit">Login</button>
          </form>

          {message && <p>{message}</p>}

          <h2>User Data</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
