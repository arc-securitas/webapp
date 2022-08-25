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
import BackendTest from "./pages/backendTest.js";
import Edit from "./pages/edit.js";
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
        <Route exact path="/legal/terms-and-conditions" render={() => { window.location.href = "terms-and-conditions.html" }} /> 
        <Route exact path="/legal/privacy-policy-web" render={() => { window.location.href = "privacy-policy-web.html" }} /> 


        {/* Below links just for testing purposes - Need to remove before deployment */}
        <Route exact path="/backendTest" element={<BackendTest />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
