/* eslint-disable no-unused-vars */
import React from 'react';
import HeroTeaser from '../components/HeroTeaser';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroTeaser
        image="https://via.placeholder.com/1920x1080"
        heading="Welcome to Our Website"
        subheading="Discover the best products and services for your needs"
      />
    </div>
  );
};

export default HomePage;
