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
  position: sticky;
  top: 0; 
  background-color: ${COLORS.light_blue};
  width: 100%;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(4px 2px 4px grey);
  .title {
    color: ${COLORS.blue_primary};
    font-family: ${FONTS.heading_primary};
    font-weight: bold;
    margin-right: 2rem;
  }
  img {
    width: 30.75px;
    height: 30px;
    margin-right: 1rem;
  }
  .nav a {
    color: ${COLORS.black};
    font-family: ${FONTS.body_primary};
    margin-right: 1rem;
    margin-left: 1rem;
  }
  .nav a.active {
    font-weight: bold;
  }
  .nav a.inactive {
    text-decoration: none;
  }
`;

export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${COLORS.blue_primary};
    border-radius: 10px;
    transition: all 0.0s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    margin-left: 95%
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: top;
  background: ${COLORS.white};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  display: ${({ open }) => open ? '' : 'none'};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem;
    font-family: ${FONTS.body_primary};
    font-weight: bold;
    color: ${COLORS.black};
    text-decoration: none;
    transition: color 0.3s linear;
    
    &:hover {
      color: ${COLORS.blue_primary};
    }
  }
`;


export const NextSteps = styled.div`
  display: inline;
  background-color: ${COLORS.blue_primary};
`;

export const Button = styled.button`
  display: inline;
  background-color: ${COLORS.blue_primary};
  border: none;
  border-radius: 4px;
  font-family: ${FONTS.heading_primary};
  color: ${COLORS.white};
  padding: 12px 20px;
  text-align: center;
  gap: 4px;
  justify-content: center;
  margin-left: 10rem;
`;
