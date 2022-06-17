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
    <>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
