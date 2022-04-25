import React from "react";
import { HeaderDiv } from "./../styles/style";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
export default function Header() {
  return (
    <HeaderDiv>
      <img src="Logo-blue.png" />
      <h2 className="title">Arc Security</h2>
    </HeaderDiv>
  );
}
