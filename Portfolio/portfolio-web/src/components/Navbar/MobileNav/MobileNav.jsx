import React from "react";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <ul>
                        <li>
                            <a href="/" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="/" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="/" className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a href="/" className="menu-item">Contact Me</a>
                        </li>
                    </ul>
                    <button className="btn" onClick={() => {}}>
                            Hire Me
                        </button>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
