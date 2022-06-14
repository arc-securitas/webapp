import styled, { css } from "styled-components";
import { COLORS, FONTS, FONT_SIZE } from "../constants/style_guide";

export const MainLandingBody = styled.div`
  background: linear-gradient(${COLORS.blue_primary}, #fff);
`;

export const FooterDiv = styled.div`
  width: 100%;
  background-color: ${COLORS.blue_primary};
  padding: 0.1em;
  margin: 0;
  font-family: ${FONTS.body_primary};
  color: ${COLORS.white};
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
    padding: 0.5em;
    font-weight: bold;
  }
  li a:active {
    text-decoration: underline;
  }
  img {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }
  .socials {
    margin-top: 2rem;
    display: inline-flex;
    li {
      margin: 0.75rem;
    }
  }
  .cc {
    position: absolute;
    bottom: auto;
    text-align: center;
    width: 100%;
  }
`;

export const HeaderDiv = styled.div`
  display: inline-flex;
  background-color: ${COLORS.light_blue};
  width: 100%;
  align-items: center;
  position: fixed;
  filter: drop-shadow(4px 2px 4px grey);
  .title {
    color: ${COLORS.blue_primary};
    font-family: ${FONTS.heading_primary};
    font-weight: bold;
  }
  img {
    width: 30.75px;
    height: 30px;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const NextSteps = styled.div`
  display: inline;
  background-color: ${COLORS.blue_primary};
`;

export const Button = styled.button`
  display: inline;
  background-color: ${COLORS.blue_primary};
`;
