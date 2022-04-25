import React from "react";
import { LandingItem } from "./../styles/style";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
export default function LandingContent(props) {
  return (
    <LandingItem type={props.type} isHeader={props.isHeader}>
      <h2>{props.heading}</h2>
      <p>{props.body}</p>
      {props.isHeader ? (
        <div className="button-wrapper">
          <div className="button">
            {" "}
            <a href={props.to}>{props.button}</a>
          </div>
        </div>
      ) : (
        <></>
      )}
      <img src={"images/" + props.img + ".svg"} />
    </LandingItem>
  );
}
