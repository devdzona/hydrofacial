/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use an environment variable if available, otherwise default to localhost
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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

  return (
    <div className="product-detail-page container">
      <Helmet>
        <title>{product.name} | My MERN App</title>
      </Helmet>
      <div className="row align-items-center py-4">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.category}</p>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          {/* Additional product details or action buttons can be added here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
