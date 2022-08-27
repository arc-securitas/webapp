/*
  Tabs!
  ---------------------------------------------------------------
    import TabContainer, { Tab } from 'wherever'

    <TabContainer>
        <Tab label="foo">
            {Stuff}
        </Tab>
        <Tab label="bar">
            {More Stuff}
        </Tab>
    </TabContainer>
  ---------------------------------------------------------------
  Each <Tab> in a <TabContainer> gets a clickable button along the top of the object
  with the corresponding label as its text. When clicked, the content nested within
  is rendered.

  Labels must be unique.
*/

import React from "react";
import styles from './TabContainer.module.css';
import labelStyles from './TabLabel.module.css';

/*
  TabContainer component. Allows users to navigate bewteen different sets of subcontent
  by clicking labeled Tabs. Tracks active tab via State.
*/
class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeLabel: this.props.children[0].props.label};
    this.setActiveLabel = this.setActiveLabel.bind(this);
  }

  render () {
    let activeTab;
    const labels = [];
    // Create mini navbar of TabLabels
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
      <div className={styles.tab_container}>
          <div className={styles.row1}>
            {labels}
          </div>
          <div className={styles.pane}>
            {activeTab}
          </div>
      </div>
    );
  }

  /**
   * Sets active label. Surprise!
   * @param {string} label - Label to set activeLabel to
   */
  setActiveLabel(label) {
    this.setState({activeLabel: label});
  }
}

export default TabContainer;

// Tab component. Just a wrapper (for semantics)
export const Tab = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

// TabLabel component, used internally by TabContainer to create nav bar.
class TabLabel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.isActive) {
      return (
        <div className={labelStyles.active} onClick={this.props.handleClick}>
          {this.props.label}
        </div>
      );
    } else {
      return (
        <div className={labelStyles.inactive} onClick={this.props.handleClick}>
          {this.props.label}
        </div>
      );
    }
  }
}