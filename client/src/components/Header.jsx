/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    // Update header style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close the navbar when the route changes
    useEffect(() => {
        setIsNavOpen(false);
    }, [location]);

    const handleToggle = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="My App Logo" className="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleToggle}
                        aria-expanded={isNavOpen}
                        aria-label="Toggle navigation"
                    >
                        {isNavOpen ? (
                            <i className="bi bi-x-lg close-icon" style={{ color: 'rgb(146,146,146)' }}></i>
                        ) : (
                            <span className="navbar-toggler-icon"></span>
                        )}
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={() => setIsNavOpen(false)}>
                                    O nama
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/proizvodi" className="nav-link" onClick={() => setIsNavOpen(false)}>
                                    Proizvodi
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
