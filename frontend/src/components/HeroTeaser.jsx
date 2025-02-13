/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const HeroTeaser = ({ image, heading, subheading }) => (
    <div
        className="hero-teaser"
        style={{ backgroundImage: `url(${image})` }}
    >
        <div className="hero-content">
            <h1>{heading}</h1>
            {subheading && <p>{subheading}</p>}
        </div>
    </div>
);

HeroTeaser.propTypes = {
    image: PropTypes.string.isRequired, // Image URL must be a string
    heading: PropTypes.string.isRequired, // Heading must be a string
    subheading: PropTypes.string,         // Subheading is optional
};

export default HeroTeaser;
