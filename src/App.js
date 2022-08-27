import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./_mainSite/pages/home.js";
import About from "./_mainSite/pages/about.js";
import Product from "./_mainSite/pages/product.js";
import Dashboard from "./_portal/pages/dashboard.js";
import Events from "./_portal/pages/events.js";
import Alerts from "./_portal/pages/alerts.js";
import Agents from "./_portal/pages/agents.js";
import Payment from "./_portal/pages/payment.js";

function App(props) {
  return (
    <Router>
      <Routes>
        {/* Static Pages */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/webapp" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product" element={<Product />} />

        {/* Legal Pages */}
        <Route exact path="/legal/cookiePolicy" render={() => { window.location.href = "cookiePolicy.html" }} />
        <Route exact path="/legal/terms-and-conditions" render={() => { window.location.href = "terms-and-conditions.html" }} />
        <Route exact path="/legal/privacy-policy-web" render={() => { window.location.href = "privacy-policy-web.html" }} />

        {/* Portal Pages */}
        <Route exact path="/TempToPortal" element={<Dashboard />} />
        <Route exact path="/portal/dashboard" element={<Dashboard />} />
        <Route exact path="/portal/alerts" element={<Alerts />} />
        <Route exact path="/portal/events" element={<Events />} />
        <Route exact path="/portal/agents" element={<Agents />} />
        <Route exact path="/portal/payment" element={<Payment />} />
      </Routes>
    </Router>

  );
}

export default App;
