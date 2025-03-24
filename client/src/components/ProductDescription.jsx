/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ description }) => {
    const paragraphs = description.split('\n').filter(para => para.trim() !== '');

    return (
        <div className="product-card-description-content">
            {paragraphs.map((para, idx) => <p key={idx}>{para}</p>)}
        </div>
    );
};

ProductDescription.propTypes = {
    description: PropTypes.string.isRequired,
};

export default ProductDescription;

