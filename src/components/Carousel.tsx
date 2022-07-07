import React from "react";
import './Carousel.css';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

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
      <div className="carousel" onClick={() => this.setActiveItem(this.state.activeItem + 1)}>
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