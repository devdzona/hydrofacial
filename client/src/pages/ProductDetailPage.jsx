/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
// Import Slick Carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductDescription from '../components/ProductDescription';

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

      {/* Top Full-Width Headline */}
      <div className="row">
        <div className="col-12 my-3 text-center">
          <h1>{product.name}</h1>
        </div>
      </div>

      {/* Two-Column Layout on Desktop, Stacked on Tablet/Mobile */}
      <div className="row two-column pb-5">
        {/* Left Column: Image Slider */}
        <div className="col-12 col-lg-6">
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

        {/* Right Column: Product Details */}
        <div className="col-12 col-lg-6">
          {/* Desktop: Inline Price and "Add to Cart" button */}
          <div className="d-none d-lg-flex justify-content-between align-items-center mb-3">
            <p className="fs-3 fw-bold mb-0 price">{product.price} KM</p>
            <button className="btn btn-dark btn-lg add-to-cart">
              Naruci odmah
            </button>
          </div>
          {/* Mobile/Tablet: Stack Price and Button Vertically */}
          <div className="d-block d-lg-none text-center mb-3 mt-4 price-cart">
            <p className="fs-3 fw-bold price">{product.price} KM</p>
            <button className="btn btn-dark btn-lg add-to-cart">
              Naruci odmah
            </button>
          </div>
          {/* Product Description */}
          <ProductDescription description={product.description} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;