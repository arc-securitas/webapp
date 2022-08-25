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
// import CookiePolicy from "./pages/cookiePolicy.html";

function App(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/webapp" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/legal/cookiePolicy" render={() => { window.location.href = "cookiePolicy.html" }} /> 
        <Route exact path="/legal/terms-of-use" render={() => { window.location.href = "terms-of-use.html" }} /> 
        <Route exact path="/legal/privacy-policy-web" render={() => { window.location.href = "privacy-policy-web.html" }} /> 
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
