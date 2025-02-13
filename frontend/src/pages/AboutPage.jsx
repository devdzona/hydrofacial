/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroTeaser from '../components/HeroTeaser';
import HeroImage from '../assets/hero-placeholder.jpg';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | My MERN App</title>
        <meta
          name="description"
          content="Learn more about our site and discover our amazing products and services."
        />
        {/*
          Testing Purposes Only:
          - 'http://localhost:5000' is allowed in connect-src for local API calls.
          - 'data:' is allowed in img-src to support inline images.
          In production, remove 'http://localhost:5000' from connect-src and adjust
          test-specific sources (like data:) as needed.
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
        {/* Additional content for the About page can go here */}
      </div>
    </>
  );
};

export default AboutPage;
