import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageSrc }) => (
  <div className="slide fade">
    <img src={imageSrc} alt="" />
  </div>
);

Slide.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default Slide;
