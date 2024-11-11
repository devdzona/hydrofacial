/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="title">404</h1>
      <p className="message">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="button">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
