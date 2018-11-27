import React from 'react';

import './parallax.css';

const Parallax = () => (
  <div className="parallax">
    <div className="parallax-sec sec1">
      <h1>Dennis</h1>
    </div>
    <div className="sec-fill">
      <p>Texto de relleno</p>
    </div>
    <div className="parallax-sec sec2 sec-small">
      <h1>me pones</h1>
    </div>
    <div className="sec-fill">
      <p>Mas relleno</p>
    </div>
    <div className="parallax-sec sec3">
      <h1>100?</h1>
    </div>
  </div>
);

export default Parallax;
