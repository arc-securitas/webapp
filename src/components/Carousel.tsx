/*
  Basically a slideshow. Horizontally scrolls when arrows are clicked.

  Use it like this:
  ---------------------------------------------------------------
    import Carousel, { CarouselItem } from 'wherever'

    <Carousel>
        <CarouselItem>
            {Stuff}
        </CarouselItem>
        <CarouselItem>
            {More Stuff}
        </CarouselItem>
    </Carousel>
  ---------------------------------------------------------------

  Each <CarouselItem> (see below) is its own slide, and the {Stuff} inside is what shows up.
  No props!
*/

import React from 'react';
import './Carousel.css';
import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg';

/*
  Carousel component. Provides functionality to display current item, update current
  item, and animate movement of slides.
*/
class Carousel extends React.Component<{children: any}, {activeItem: number}> {
  itemCount: number;

  constructor(props: {children: any}) {
    super(props);
    this.itemCount = this.props.children.length;
    this.state = {
      activeItem: 0
    };
    this.setActiveItem = this.setActiveItem.bind(this);
  }

  render() {
    return (
      <div className="carousel">
        <img className="arrow-left" src={arrowLeft} onClick={() => this.setActiveItem(this.state.activeItem - 1)} />
        <img className="arrow-right" src={arrowRight} onClick={() => this.setActiveItem(this.state.activeItem + 1)} />
        <div className="inner" style={{ transform: `translateX(-${this.state.activeItem * 100}%)` }}>
          {React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <div className="pips">
          {React.Children.map(this.props.children, (child, index) => {
            return (
              <div className={`${index === this.state.activeItem ? "active-pip" : "inactive-pip"}`} onClick={() => { this.setActiveItem(index); }} />
            );
          })}
        </div>
      </div>
    );
  }

  /**
   * Sets the active item to the specified index
   * @param {number} item - Index to update to. Automatically wraps to stay in bounds
   */
  setActiveItem(item: number) {
    if (item >= this.itemCount) {
      this.setState({activeItem: 0});
    } else if (item < 0) {
      this.setState({activeItem: this.itemCount - 1})
    } else {
      this.setState({activeItem: item});
    }
  }
}

export default Carousel;

// CarouselItem component. Basically just a wrapper with some CSS.
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};
