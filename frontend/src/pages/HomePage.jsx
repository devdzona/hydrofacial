/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroTeaser from '../components/HeroTeaser';
import HeroImage from '../assets/hero-placeholder.jpg';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | My MERN App</title>
        <meta
          name="description"
          content="Welcome to our site - discover our amazing products."
        />
        {/*
          Testing Purposes Only:
          The following Content-Security-Policy allows 'http://localhost:5000'
          for API calls and permits inline data images. Remove or adjust these
          settings for production.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; connect-src 'self' http://localhost:5000; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://fastly.picsum.photos;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="Referrer-Policy" content="no-referrer" />
      </Helmet>
      <HeroTeaser
        image={HeroImage}
        heading="Welcome to Our Site"
        subheading="Discover our amazing products"
      />
      <div className="container py-4">
        {/* Additional content can be added here */}
      </div>
    </>
  );
};

export default HomePage;
