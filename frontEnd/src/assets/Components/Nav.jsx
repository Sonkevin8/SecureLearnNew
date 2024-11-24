import React from 'react'; 
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar"> 
        <h2>Cybersecurity App</h2>
        <ul> 
            <li><Link to ="/">Introduction</Link></li>
            <li><Link to ="/material">Cybersecurity Material</Link></li>
            <li><Link to ="/quizzes">Quizzes</Link></li>

        </ul>
        </nav>
    );
}; 
export default Navbar; 
