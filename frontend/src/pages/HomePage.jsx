/* eslint-disable no-unused-vars */
import React from 'react';
import HeroTeaser from '../components/HeroTeaser';
import HeroImage from '../assets/hero-placeholder.jpg'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroTeaser
        image={HeroImage}
        heading="Welcome to Our Website"
        subheading="Discover the best products and services for your needs"
      />
    </div>
  );
};

export default HomePage;
