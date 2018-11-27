import React from 'react';
import PropTypes from 'prop-types';

import './showcase.css';

const Showcase = ({ children, cls }) => (
  <div className={`section ${cls}`}>
    <div className="container">
      {children}
    </div>
  </div>
);

Showcase.propTypes = {
  cls: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Showcase.defaultProps = {
  cls: 'grey lighten-2',
};

export default Showcase;
