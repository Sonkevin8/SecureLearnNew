import React from 'react';
import { BrowswerRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
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
                    <Route path ="/" element = {<Home/>} />
                    <Route path ="/material" element = {<CyberSecurity/>}/>
                    <Route path ="/quizzes" element = {<Quizzes />}/>
                </Routes>
            </div>
        </Router>
    );

}; 
export default App; 
