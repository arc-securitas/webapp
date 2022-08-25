import React from "react";
import "./Footer.css"
import { FooterDiv } from "./../styles/style";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import logo from "../images/LogoWhite.svg";

import {
  Link as RouterLink,
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
  useNavigate
} from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterDiv className='overallFooter' style={{backgroundColor: "Black"}}>
      <a href="/"><img id="footerLogo" src={logo} style={{marginBottom:"-0.025px"}} alt="Arc Security Logo"/></a>
      <ul className="sitemap">
          <li><a style={{"textDecoration": "none", "color": "white"}} onClick={() => navigate("/Product")} href="">Product</a></li>
          <li><a style={{"textDecoration": "none", "color": "white"}} onClick={() => navigate("/About")} href="">About</a></li>
          {/* <li>Careers</li> */}
          {/* <li>FAQ</li> */}
          <li><a style={{"textDecoration": "none", "color": "white"}} target="_blank" href={process.env.PUBLIC_URL + "/privacy-policy-web.html"}>Privacy Policy</a></li>
          {/* <li onClick={() => navigate("webapp/legal/privacy-policy-web.html")}>Privacy Policy</li> */}
          <li><a style={{"textDecoration": "none", "color": "white"}} target="_blank" href={process.env.PUBLIC_URL + "/terms-of-use.html"} >Terms of Use</a></li>
          <li><a style={{"textDecoration": "none", "color": "white"}} target="_blank" href={process.env.PUBLIC_URL + "/cookiePolicy.html"}>Cookie Policy</a></li>

      </ul>
      <ul className="socials" style={{"marginTop": "0px"}}>
        <li>
        <a style={{"textDecoration": "none", "color": "white"}} href="https://www.instagram.com/arc.security/"><BsInstagram size={25} /></a>
        </li>
        <li>
          <a style={{"textDecoration": "none", "color": "white"}} href="https://www.linkedin.com/company/arc-security"><FaLinkedinIn size={25} /></a>
        </li>
        <li>
        <a style={{"textDecoration": "none", "color": "white"}} href="https://www.facebook.com/arcsecure.it"><FaFacebookF size={25} /></a>
        </li>
      </ul>
      <p className="cc"> &copy;2022 Arc Security. All rights reserved</p>
      <br />
    </FooterDiv>
  );
}
