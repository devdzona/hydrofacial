/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import HeroTeaser from '../components/HeroTeaser';
import HeroImage from '../assets/heroImage.jpg';

const ProductOverviewPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Use an environment variable if available, otherwise default to localhost
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const { data } = await axios.get(`${apiUrl}/api/products`);
                setProducts(data);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to fetch products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="home-page">
            {/* Helmet meta tags for additional security (Testing purposes only)
          - 'http://localhost:5000' in connect-src is allowed for local API calls.
          - 'data:' is allowed in img-src for inline images.
          Remove these allowances or adjust them for production. */}
            <Helmet>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self'; connect-src 'self' http://localhost:5000; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://fastly.picsum.photos;"
                />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="Referrer-Policy" content="no-referrer" />
            </Helmet>
            <HeroTeaser
                image={HeroImage}
                heading="Product overview"
                subheading="This is page about our current products"
            />
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductOverviewPage;
