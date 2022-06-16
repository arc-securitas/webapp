import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";
import About from "./pages/about.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Landing from "./pages/landing";
function App() {
  return (
    <Router>
      
      <Header/>
      
      <ul className="navBar">
        <li>
          <NavLink exact to="/" id="home">ARC</NavLink>
        </li>
      </ul>

      <Routes>
        <Route exact path="/" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
