/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import HeroTeaser from '../components/HeroTeaser';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <HeroTeaser
        image="https://via.placeholder.com/1920x1080"
        heading="404"
        subheading="Oops! The page you’re looking for doesn’t exist."
      />
      <Link to="/" className="button">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
