import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

import About from "./pages/about.js";
import Footer from "./components/Footer.js";
import Landing from "./pages/landing.js";
import { ButtonDiv } from "./styles/style";
function App() {

  return (
    <Router>
      {/* Header */}
      <ReactBootStrap.Navbar classname="navbar" expand="md">
        <ReactBootStrap.Container>
        <img src="Logo-blue.png" />
        <h2 className="title">Arc Security</h2>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Navbar.Offcanvas classname= "offcanvas" id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
              <ReactBootStrap.Offcanvas.Header closeButton >
              </ReactBootStrap.Offcanvas.Header>
              <ReactBootStrap.Offcanvas.Body>
                <ReactBootStrap.Nav className="me-auto">
                  <NavLink exact to="/" id="home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                  <NavLink exact to="/product" id="product" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Product</NavLink>
                  <NavLink exact to="/about" id="about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>            
                  <ButtonDiv>Get Started</ButtonDiv>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Offcanvas.Body>
            </ReactBootStrap.Navbar.Offcanvas>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>

      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Landing />} />
      </Routes>

      {/* Footer */}
      <Footer/>
    </Router>
    
  );
}

export default App;
