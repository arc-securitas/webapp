import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import About from "./pages/about.js";
import Home from "./pages/home.js";
import Footer from "./components/Footer.js";
// import Header from "./components/Header.js";
// import Landing from "./pages/landing";
function App() {
  return (
    <Router>
      <ul className="navBar">
        <li>
          <NavLink exact to="webapp/" id="home">Home</NavLink>
          <NavLink exact to="webapp/about" id="about">About Us</NavLink>
        </li>
      </ul>

      <Routes>
        <Route exact path="webapp/" element={<Home />} />
        <Route exact path="webapp/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
