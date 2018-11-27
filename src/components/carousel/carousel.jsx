import React, { Component } from 'react';

import Slide from './slide/slide';
import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          imageSrc: 'https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181117',
          cls: 'active',
        },
        {
          imageSrc: 'https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181117',
          cls: '',
        },
      ],
    };
  }

  next = () => {
    console.log('next');
  };

  prev = () => {
    console.log('prev');
  }

  render() {
    const compSlides = [];
    const { slides } = this.state;
    for (let i = 0; i < slides.length; i += 1) {
      compSlides.push(<Slide imageSrc={slides[i].imageSrc} cls={slides[i].cls} />);
    }
    return (
      <div className="carousel-container">
        {compSlides}
        <button type="button" className="prev" onClick={this.prev}>&#10094;</button>
        <button type="button" className="next" onClick={this.next}>&#10095;</button>
      </div>
    );
  }
}

export default Carousel;
