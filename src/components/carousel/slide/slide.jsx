import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageSrc, cls }) => (
  <div className={`slide fade ${cls}`}>
    <img src={imageSrc} alt="" />
  </div>
);

Slide.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
};

export default Slide;
