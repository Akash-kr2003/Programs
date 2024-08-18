import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <ul>
                        <li>
                            <a className="menu-item" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#experience">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#contact">Contact Me</a>
                        </li>
                        <button className="contact-btn" onClick={() => {}}>
                            Get in touch
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu} aria-label={openMenu ? "Close menu" : "Open menu"}>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
