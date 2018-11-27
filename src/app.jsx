import React from 'react';

import Showcase from './components/showcase/showcase';
import Header from './components/header/header';
import About from './components/about/about';
import FormControl from './components/form-control/form-control';
import Carousel from './components/carousel/carousel';

const App = () => (
  <div className="body">
    <Showcase cls="grey darken-4">
      <Header />
    </Showcase>
    <Showcase cls="about-showcase grey lighten-2">
      <About />
    </Showcase>
    <Showcase cls="carousel-showcase green accent-4">
      <Carousel />
    </Showcase>
    <Showcase cls="form-control-showcase white">
      <FormControl />
    </Showcase>
  </div>
);

export default App;
