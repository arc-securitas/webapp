import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import About from "./pages/about.js";
import Footer from "./components/Footer.js";
import Landing from "./pages/landing";
import Menu from "./components/Menu"
import Burger from "./components/Burger"
import { HeaderDiv, Button } from "./styles/style";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      {/* Header */}
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

      {/* Footer */}
      <Footer/>
    </Router>
    
  );
}

export default App;
