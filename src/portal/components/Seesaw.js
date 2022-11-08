import React from "react";
import styles from './Seesaw.module.css';
import { ReactComponent as ChevronLeft } from '../images/Chevron_Left.svg';
import { ReactComponent as ChevronRight } from '../images/Chevron_Right.svg';

class Seesaw extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div className={styles.seesaw}>
              <ChevronLeft className={styles.arrow} onClick={this.props.leftHandler} />
              <div>
                  {this.props.children}
              </div>
              <ChevronRight className={styles.arrow} onClick={this.props.rightHandler} />
          </div>
      );
  }
}

export default Seesaw;

