import React from "react";
import { NextSteps, Button, MainLandingBody } from "./../styles/style";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
export default function Landing() {
  return (
    <MainLandingBody>
      <NextSteps>
        <h2>Step into the future of real estate safety</h2>
        <Button>GET STARTED</Button>
      </NextSteps>
    </MainLandingBody>
  );
}
