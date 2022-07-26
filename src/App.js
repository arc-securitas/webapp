import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Product from "./pages/product.js";

function App(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
