/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
// Import Slick Carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use an environment variable if available, otherwise default to localhost
  const apiUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/products/${slug}`);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to fetch product. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, apiUrl]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found.</div>;

  // Slider settings for react-slick with autoplay and animation
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1100,          // Transition speed (ms)
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 3000, // Time before auto-switch (ms)
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };

  return (
    <div className="product-detail-page container">
      <Helmet>
        <title>{product.name} | LUX SKIN Aparati</title>
      </Helmet>
      <div className="row align-items-center py-4">
        <div className="col-md-6">
          {product.images && product.images.length > 0 ? (
            <Slider {...sliderSettings}>
              {product.images.map((imgPath, index) => (
                <div key={index}>
                  <img
                    src={`/${imgPath}`}
                    alt={`${product.name} ${index + 1}`}
                    className="img-fluid slider-image"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="col-sm-12 col-md-6 mt-4 mt-sm-0">
          <div className="tablet-height p-3 p-md-4 d-flex flex-column justify-content-center">
            <header className="mb-2 mb-md-3">
              <h1 className="headline">{product.name}</h1>
              <h2 className="h5 text-muted">{product.price} KM</h2>
            </header>
            <p className="lead">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;