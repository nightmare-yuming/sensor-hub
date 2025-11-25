import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    SENSOR<span className="logo-highlight">HUB</span>
                </a>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
                    <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={() => setIsOpen(false)}>
                            首頁
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/applications" className="nav-links" onClick={() => setIsOpen(false)}>
                            應用
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/research" className="nav-links" onClick={() => setIsOpen(false)}>
                            研究
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/news" className="nav-links" onClick={() => setIsOpen(false)}>
                            新聞
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-links dropdown-toggle">理論與原理</span>
                        <div className="dropdown-content">
                            <a href="/theories" onClick={() => setIsOpen(false)}>感測器理論</a>
                            <a href="/structures" onClick={() => setIsOpen(false)}>結構與原理</a>
                            <a href="/electronics" onClick={() => setIsOpen(false)}>電子學</a>
                            <a href="/circuits" onClick={() => setIsOpen(false)}>電路學</a>
                            <a href="/electromagnetics" onClick={() => setIsOpen(false)}>電磁學</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
