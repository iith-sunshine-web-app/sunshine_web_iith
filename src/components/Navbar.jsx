import { useState } from 'react';
import './Navbar.css';

const navLinks = ['Home', 'Services', 'Support', 'Resources', 'FAQ', 'Appointment', 'Team', 'Events'];

function Navbar() {

    const [activeTab, setActiveTab] = useState('Home');

    return(
        <nav className="navbar">
            <ul className="navlinks">
                {navLinks.map((link) => (
                    <li key={link} className={activeTab === link ? "activeLink" : ''} onClick={() => setActiveTab(link)}>
                        <a href='#'>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
