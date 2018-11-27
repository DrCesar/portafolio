import React from 'react';
import PropTypes from 'prop-types';

import './showcase.css';

const Showcase = ({ children, cls, container }) => (
  <div className={`section ${cls}`}>
    <div className={container ? 'container' : ''}>
      {children}
    </div>
  </div>
);

Showcase.propTypes = {
  cls: PropTypes.string,
  children: PropTypes.node.isRequired,
  container: PropTypes.bool,
};

Showcase.defaultProps = {
  cls: 'grey lighten-2',
  container: true,
};

export default Showcase;
