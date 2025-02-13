/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <div className="container py-4">
      <Helmet>
        <title>404 Not Found | My MERN App</title>
        {/* 
          For production, consider removing this meta tag if you want search engines to index your site.
          Here we tell search engines not to index the 404 page.
        */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="mt-5">404 - Page Not Found</h1>
      <p>
        The page youre looking for does not exist. It might have been removed or the URL might be incorrect.
      </p>
    </div>
  );
};

export default NotFoundPage;
