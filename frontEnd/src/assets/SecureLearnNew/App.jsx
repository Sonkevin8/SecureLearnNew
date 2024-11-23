import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CyberSecurity from './pages/CyberSecurity';
import Quizzes from './pages/Quizzes';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/material" element ={<CyberSecurity />} />
          <Route path="/quizzes" element ={<Quizzes />} />
        </Routes>
      </div>
    </Router>
  );
};

function App() {
  // Use state to store the user data
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);  // Set the fetched data to the state
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <table>
        <thead>
          <tr>
            <th>user_id</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.user_id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;