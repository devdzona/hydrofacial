/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import HeroTeaser from '../components/HeroTeaser';

const ProductOverviewPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/products');
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="home-page">
            <HeroTeaser
                image="https://via.placeholder.com/1920x1080"
                heading="Product overview"
                subheading="This is page about our current products"
            />
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.slug} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductOverviewPage;
