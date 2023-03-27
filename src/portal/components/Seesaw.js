import React from "react";
import styles from './Seesaw.module.css';
import { ReactComponent as ChevronLeft } from '../images/Chevron_Left.svg';
import { ReactComponent as ChevronRight } from '../images/Chevron_Right.svg';

/*
    I don't know why I called it a Seesaw, but this is a component that has two
    buttons on either end, with some text in the middle. I used it to display one
    week at a time, where the buttons take you backwards and forwards in time.
    ----------------------------------------------------------------------------
    EXAMPLE:
    <Seesaw leftHandler={() => changeWeek(-7)} rightHandler={() => changeWeek(7)}>
        {startDay.toString()} - {endDay.toString()}
    </Seesaw>
    ----------------------------------------------------------------------------
    Props:
    leftHandler- Function to be called when the left button is clicked.
    rightHandler- Function to be called when the right button is clicked.
*/

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

