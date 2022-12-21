import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./mainSite/pages/home.js";
import About from "./mainSite/pages/about.js";
import Product from "./mainSite/pages/product.js";
import Dashboard from "./portal/pages/dashboard.js";
import Events from "./portal/pages/events.js";
import EventSolo from "./portal/pages/eventSolo.js";
import Alerts from "./portal/pages/alerts.js";
import AlertSolo from './portal/pages/AlertSolo.js';
import Agents from "./portal/pages/agents.js";
import Payment from "./portal/pages/payment.js";

import BackendTest from "./mainSite/pages/backendTest.js";
import Edit from "./mainSite/pages/edit.js";
import AddEvent from "./mainSite/pages/addEvent";
import AlertsTest from "./mainSite/pages/alertsTest";

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
        <Route exact path="/portal/dashboard" element={<Dashboard />} />
        <Route exact path="/portal/alerts/" element={<Alerts />} />
        <Route exact path="/portal/alerts/:id" element={<AlertSolo />} />
        <Route exact path="/portal/events" element={<Events />} />
        <Route exact path="/portal/events/:id" element={<EventSolo />} />
        <Route exact path="/portal/agents" element={<Agents />} />
        <Route exact path="/portal/payment" element={<Payment />} />

        {/* Below links just for testing purposes - Need to remove before deployment */}
        <Route exact path="/backendTest" element={<BackendTest />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/addEvent/:id" element={<AddEvent />} />
        <Route exact path="/alertsTest" element={<AlertsTest />} />
      </Routes>
    </Router>
  );
}

export default App;
