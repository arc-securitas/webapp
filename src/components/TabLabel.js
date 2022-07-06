import React from "react";
import './TabLabel.css';

class TabLabel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.isActive) {
      return (
        <div className="active" onClick={this.props.handleClick}>
          {this.props.label}
        </div>
      );
    } else {
      return (
        <div className="inactive" onClick={this.props.handleClick}>
          {this.props.label}
        </div>
      );
    }
  }
}

export default TabLabel;