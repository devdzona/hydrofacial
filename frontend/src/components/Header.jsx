/* eslint-disable no-unused-vars */
// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="bg-dark text-white">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand">My App</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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