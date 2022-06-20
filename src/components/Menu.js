import React from 'react';
import { bool } from 'prop-types';
import {
    NavLink,
} from "react-router-dom";
import { StyledMenu, Button } from "./../styles/style";
import "./../App.css"

export default function Menu({ open }) {
    return (
        <StyledMenu open={open}>
            <div className="hiddenNav">
                <NavLink exact to="/" id="home" activeClassName='active'>Home</NavLink><br/><br/>
                <NavLink exact to="/" id="product" activeClassName='active'>Product</NavLink><br/><br/>
                <NavLink exact to="/" id="about" activeClassName='active'>About</NavLink><br/><br/>
                <Button calssname="hiddenGetStarted">Get Started</Button>
            </div>
        </StyledMenu>
    );
}

Menu.propTypes = {
    open: bool.isRequired,
}