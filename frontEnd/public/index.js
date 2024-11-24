import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import React from 'react';
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
          <Route path="/" element={<Home />} />
          <Route path="/material" element={<CyberSecurity />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </div>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

