import React from 'react';

import Showcase from './components/showcase/showcase';
import Header from './components/header/header';
import About from './components/about/about';
import FormControl from './components/form-control/form-control';
import Carousel from './components/carousel/carousel';
import Parallax from './components/parallax/parallax';

const App = () => (
  <div className="body">
    <Showcase cls="grey darken-4">
      <Header />
    </Showcase>
    <Showcase cls="about-showcase grey lighten-2">
      <About />
    </Showcase>
    <Showcase cls="carousel-showcase green accent-2">
      <Carousel />
    </Showcase>
    <Showcase cls="parallax-showcase white" container={false}>
      <Parallax />
    </Showcase>
    <Showcase cls="form-control-showcase white">
      <FormControl />
    </Showcase>
  </div>
);

export default App;
