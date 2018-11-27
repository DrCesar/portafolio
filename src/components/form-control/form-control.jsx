import React from 'react';

import './form-control.css';

const FormControl = () => (
  <div className="form-control-container">
    <div className="marquee"><h1 className="title">Llena esta forma</h1></div>
    <div className="row">
      <div className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Juan" id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input placeholder="Lopez" id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="juanlopez@gane_el_curso.com" id="email_input" type="email" className="validate" />
            <label htmlFor="email_input">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="juanlopez@gane_el_curso.com" id="email_input" type="email" className="validate" />
            <label htmlFor="email_input">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Password" id="pass_input" type="password" className="validate" />
            <label htmlFor="pass_input">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className="btn waves-effect waves-light" type="button" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FormControl;
