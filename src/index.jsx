import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import App from './app';
import './index.css';

const div = document.createElement('div');
div.setAttribute('id', 'root');
div.setAttribute('class', 'body');
document.body.append(div);

WebFont.load({
  google: {
    families: ['Titillium Web', 'sans-serif', 'Black Han Sans', 'Chakra Petch', 'Roboto Mono', 'Oswald'],
  },
});

render(
  <App />,
  document.getElementById('root'),
);
