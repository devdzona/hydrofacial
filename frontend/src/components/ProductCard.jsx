/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    // Destructure product properties for clarity
    const { slug, image, name, description, price } = product;

    return (
        <Link to={`/product/${slug}`} className="product-card-link-wrapper">
            <div className="product-card">
                <img src={image} alt={name} className="product-card-image" />
                <h3 className="product-card-title">{name}</h3>
                <div className="product-card-content">
                    <p className="product-card-description">{description}</p>
                    <p className="product-card-price">${price}</p>
                </div>
            </div>
        </Link>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
