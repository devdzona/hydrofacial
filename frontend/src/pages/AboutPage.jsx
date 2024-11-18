/* eslint-disable no-unused-vars */
// src/pages/AboutPage.jsx
import React from 'react';
import HeroTeaser from '../components/HeroTeaser';

const AboutPage = () => {
  return (
    <div className="container py-4">
      <HeroTeaser
        image="https://via.placeholder.com/1920x1080"
        heading="About us"
        subheading="Discover the best products and services for your needs"
      />
    </div>
  );
};

export default AboutPage;
