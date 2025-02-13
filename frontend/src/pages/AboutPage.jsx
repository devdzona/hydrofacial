/* eslint-disable no-unused-vars */
import React from 'react';
import HeroTeaser from '../components/HeroTeaser';
import HeroImage from '../assets/hero-placeholder.jpg'

const AboutPage = () => {
  return (
    <div className="container py-4">
      <HeroTeaser
        image={HeroImage}
        heading="About us"
        subheading="Discover the best products and services for your needs"
      />
    </div>
  );
};

export default AboutPage;
