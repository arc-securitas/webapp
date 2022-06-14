import React from "react";
import "./Footer.css"
import { FooterDiv } from "./../styles/style";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <FooterDiv className='overallFooter' style={{backgroundColor: "Black"}}>
      <img src="Logo-blue.png" style={{marginBottom:"-0.025px"}}/>
      <ul className="sitemap">
        <li>Product</li>
        <li>About</li>
        <li>Careers</li>
        <li>FAQ</li>
        <li>Privary Policy</li>
        <li>Terms &#38; Conditions</li>
        <li>Cookie Policy</li>
      </ul>
      <ul className="socials">
        <li>
          <BsInstagram size={25} />
        </li>
        <li>
          <FaLinkedinIn size={25} />
        </li>
        <li>
          <FaFacebookF size={25} />
        </li>
      </ul>
      <p className="cc"> &copy;2022 Arc Security. All rights reserved</p>
    </FooterDiv>
  );
}
