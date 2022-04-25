import styled, { css } from "styled-components";
import { COLORS, FONTS, FONT_SIZE } from "../constants/style_guide";

export const MainLandingBody = styled.div`
  background: linear-gradient(${COLORS.light_blue}, #fff);
  display: flow-root;
  positon: relative;
  top: 0;
`;

export const FooterDiv = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  padding: 0.1em;
  margin: 0;
  font-family: ${FONTS.body_primary};
  color: ${COLORS.black};
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
    margin-bottom: 1rem;
  }
  .cc {
    position: absolute;
    bottom: auto;
    text-align: center;
    width: 100%;
    font-size: 0.75rem;
    padding-bottom: 1rem;
  }
`;

export const HeaderDiv = styled.div`
  display: inline-flex;
  background-color: ${COLORS.light_blue};
  width: 100%;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
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

export const Button = styled.button`
  display: inline;
  background-color: ${COLORS.white};
  font-family: ${FONTS.body_primary};
  width: fit-content;
  padding: 0.5rem;
  justify-content: center;
  border-radius: 4px;
  color: ${COLORS.blue_primary};
  text-transformation: uppercase;
  border: 0;
  font-weight: bold;
`;

export const NextSteps = styled.div`
  text-align: center;
  padding: 6rem 1rem;
  margin-top: 1rem;
  color: ${COLORS.white};
  justify-content: center;
  background-color: ${COLORS.blue_highlight_dark};
  ${Button} {
    text-align: center;
    justify-content: center;
  }
`;

export const LandingItem = styled.div`
  padding: 0em 2em;

  h2 {
    text-align: ${(props) => (props.isHeader ? `center` : `left`)};
    font-family: ${FONTS.heading_primary};
    font-size: ${(props) => (props.isHeader ? `1.75rem` : `1.125rem`)};
  }
  p {
    font-family: ${FONTS.body_primary};
    font-size: ${(props) => (props.isHeader ? `1rem` : `0.875rem`)};

    text-align: ${(props) => (props.isHeader ? `center` : `left`)};
  }
  img {
    position: relative;
    left: 50%;
    -webkit-transform: translateY(-0%) translateX(-50%);
  }
  .button-wrapper {
    width: 100%;
    text-align: -webkit-center;
  }
  .button {
    font-family: ${FONTS.body_primary};
    width: fit-content;
    padding: 0.5rem;
    justify-content: center;
    border-radius: 4px;
    color: ${COLORS.white};
    background-color: ${COLORS.blue_primary};
  }
`;

export const LandingHeading = styled(LandingItem)`
  .button {
    font-family: ${FONTS.body_serif};
    padding: 0.5rem;
    background-color: ${COLORS.blue_primary};
  }
`;
