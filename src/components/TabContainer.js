import React from "react";
import TabLabel from "./TabLabel.js";
import './TabContainer.css';

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLabel: this.props.children[0].props.label};
    this.setActiveLabel = this.setActiveLabel.bind(this);
  }

  render () {
    let activeTab;
    const labels = [];
    React.Children.forEach(this.props.children, child => {
      const isActive = (this.state.activeLabel === child.props.label);
      labels.push(<TabLabel key={child.props.label}
                            label={child.props.label}
                            handleClick={() => this.setActiveLabel(child.props.label)}
                            isActive={isActive} />);
      if (isActive) {
        activeTab = child.props.children;
      }
    });

    return (
      <div className="tab-container">
          <div className="row">
            {labels}
          </div>
          <div className="pane">
            {activeTab}
          </div>
      </div>
    );
  }

  setActiveLabel(label) {
    this.setState({activeLabel: label});
  }
}

export default TabContainer;