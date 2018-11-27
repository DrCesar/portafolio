import React from 'react';

import './about.css';
import perfil from '../../perfil.jpeg';

const About = () => (
  <div className="about-container">
    <h1 className="name-title">Josue Jacobs</h1>
    <div className="row">
      <div className="col s9 left-sec">
        <img alt="" src={perfil} />
      </div>
      <div className="col s3 right-sec">
        <p className="description ">
          Humano residente del planeta Tierra.
          <br />
          Solo digo Suave la Nave. Y no se complique. Porque el que mucho la piensa poco la vive.
        </p>
      </div>
    </div>
  </div>
);

export default About;
