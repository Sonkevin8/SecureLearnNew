import React from 'react'; 
import { link } from 'react-router-dom'; 
import './Navbar.css';

const navbar = () => {
    return ( 
        <nav className ="navbar"> 
        <h2>Cybersecurity App</h2>
        <ul> 
            <li><Link to ="/">Introduction</Link></li>
            <li><Link to ="/material">Cybersecurity Material</Link></li>
            <li><Link to ="/Quizzes">Quizzes</Link></li>

        </ul>
        </nav>
    );
}; 
export default navbar; 
