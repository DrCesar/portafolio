import React, { Component } from 'react';

import Slide from './slide/slide';
import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          imageSrc: 'http://s1.1zoom.me/big0/927/405408-blackangel.jpg',
          cls: '',
        },
        {
          imageSrc: 'https://cdn.hipwallpaper.com/i/14/52/VHcLiN.jpg',
          cls: '',
        },
        {
          imageSrc: 'http://assets2.ignimgs.com/2014/10/17/mariojpeg-9a7106_1280w.jpg',
          cls: '',
        },
        {
          imageSrc: 'http://i.imgur.com/vZvH4Qx.jpg',
          cls: '',
        },
      ],
      active: 1,
    };
  }

  next = () => {
    const { slides, active } = this.state;
    this.setState({ active: (active + 1) % slides.length });
  };

  prev = () => {
    const { slides } = this.state;
    let { active } = this.state;
    if (active === 0) {
      active = slides.length;
    }
    this.setState({ active: (active - 1) % slides.length });
  }

  render() {
    const compSlides = [];
    const { slides, active } = this.state;
    for (let i = 0; i < slides.length; i += 1) {
      let { cls } = slides[i].cls;
      if (active === i) {
        cls += ' active';
      }
      compSlides.push(<Slide imageSrc={slides[i].imageSrc} cls={cls} />);
    }
    return (
      <div className="carousel-container">
        <h1 className="title">Favorite Games</h1>
        <div className="slide-container">
          {compSlides}
          <button type="button" className="prev" onClick={this.prev}>&#10094;</button>
          <button type="button" className="next" onClick={this.next}>&#10095;</button>
        </div>
      </div>
    );
  }
}

export default Carousel;
