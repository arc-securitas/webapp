import React from "react";
import { NextSteps, ButtonDiv, MainLandingBody } from "./../styles/style";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
export default function Landing() {
  return (
    <MainLandingBody>
      <NextSteps>
        <h2>Step into the future of real estate safety</h2>
        <ButtonDiv>GET STARTED</ButtonDiv>
      </NextSteps>
    </MainLandingBody>
  );
}
