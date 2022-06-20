import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from "./../styles/style";
import "./../App.css"

export default function Burger({ open, setOpen }) {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};