import React from "react";
import { NextSteps, Button, MainLandingBody } from "./../styles/style";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import LandingContent from "../components/LandingContent";
export default function Landing() {
  return (
    <MainLandingBody>
      <LandingContent
        isHeader={true}
        heading="Safety, Reimagined"
        body="Helping brokerages prioritize agent safety and productivity"
        img="phones"
        button="Get Started"
      />
      <LandingContent
        heading="The best way to stay safe is to stay connected."
        body="Automatically check in with friends, family, and coworkers when you add them to your safety network!"
        img="multi-arc"
      />

      <LandingContent
        heading="Stay informed about your team's safety"
        body="Our webapp allows managing brokers to see all agent safety metrics and easily manage their subscriptiosn."
        img="timeline"
      />
      <LandingContent
        heading="Verify that your agents are safe, minute by minute."
        body="With Arc’s safety timer, agents can periodically check in on their own customized schedule to stay safe without sacrificing productivity. Schedule safety timers easily when you connect your calendar!"
        img="timer"
      />
      <LandingContent
        heading="Help your agents the right way, right away."
        body="If you feel that you might be in danger, send an alert with a single click. Your safety network will be notified with your most recent location, your calendar event details, and a short audio clip to contextualize the situation."
        img="colorful-hex"
      />
      <NextSteps>
        <h2>Step into the future of real estate safety</h2>
        <Button>GET STARTED</Button>
      </NextSteps>
    </MainLandingBody>
  );
}
