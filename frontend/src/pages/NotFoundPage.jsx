/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import HeroTeaser from '../components/HeroTeaser';
import HeroImage from '../assets/hero-placeholder.jpg'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <HeroTeaser
        image={HeroImage}
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
