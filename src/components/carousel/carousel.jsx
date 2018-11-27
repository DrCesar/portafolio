import React, { Component } from 'react';


import Slide from './slide/slide';

class Carousel extends Component {
  next = () => {
    console.log('next');
  };

  prev = () => {
    console.log('prev');
  }

  render() {
    return (
      <div className="carousel-container">
        <Slide imageSrc="https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181117" />

        <Slide imageSrc="https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181117" />

        <button type="button" className="prev" onClick={this.prev}>&#10094;</button>
        <button type="button" className="next" onClick={this.next}>&#10095;</button>
      </div>
    );
  }
}

export default Carousel;
