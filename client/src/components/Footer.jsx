/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <div className="container-fluid">
                <div className="row align-items-center text-center">
                    {/* Left column */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        &copy; {new Date().getFullYear()} - Sva prava zadrzana.
                    </div>
                    {/* Center column */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        Radujemo se što ćemo biti deo vašeg uspeha!
                    </div>
                    {/* Right column */}
                    <div className="col-md-4">
                        <a href="https://facebook.com" className="text-white me-3">
                            <FaFacebookF size={25} />
                        </a>
                        <a href="https://instagram.com" className="text-white">
                            <FaInstagram size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
