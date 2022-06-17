import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import { HeaderDiv, Button } from "./../styles/style";
import "./Header.css"
import Menu from "./Menu"
import Burger from "./Burger"
import About from "../pages/about.js";
import Landing from "../pages/landing";
//import Product from "../pages/product";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <HeaderDiv className='overallHeader'>
        <img src="Logo-blue.png" />
        <h2 className="title">Arc Security</h2>
        <div className="nav">
          <NavLink exact to="/" id="home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
          <NavLink exact to="/product" id="product" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Product</NavLink>
          <NavLink exact to="/about" id="about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
        </div>
        
        <div className="getStarted">
          <Button>Get Started</Button>
        </div>

        <div className ="dropdown" style={{marginLeft: 50}}>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
      </HeaderDiv>

      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}
