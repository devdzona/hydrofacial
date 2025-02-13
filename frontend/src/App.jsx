/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductOverviewPage from './pages/ProductOverviewPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My MERN App</title>
        {/*
          Testing Purposes Only:
          - 'http://localhost:5000' is allowed in connect-src to enable local API calls.
          - 'data:' is allowed in img-src to support inline images.
          In production, remove 'http://localhost:5000' from connect-src and
          any test-specific sources (like data:) from img-src as needed.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; connect-src 'self' http://localhost:5000; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://fastly.picsum.photos;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="Referrer-Policy" content="no-referrer" />
      </Helmet>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1 container py-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductOverviewPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
