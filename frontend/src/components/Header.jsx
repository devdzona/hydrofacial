/* eslint-disable no-unused-vars */
// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isNavOpen) {
            setNavHeight(navRef.current.scrollHeight);
            setIsNavOpen(true)
        } else {
            setNavHeight(0);
            setIsNavOpen(false) // Set height to 0 on close
        }
    }, [isNavOpen]);

    const handleToggle = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleToggle}
                        aria-expanded={isNavOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        {isNavOpen ? (
                            <i className="bi bi-x-lg close-icon"></i> // Bootstrap close icon
                        ) : (
                            <span className="navbar-toggler-icon"></span>
                        )}
                    </button>
                    <div
                        ref={navRef}
                        className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
                        style={{
                            height: isNavOpen ? `${navHeight}px` : '0',
                            transition: 'height 0.5s ease',
                            overflow: 'hidden',
                        }}
                        id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
