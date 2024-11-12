/* eslint-disable no-unused-vars */
// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container-fluid">
                <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
