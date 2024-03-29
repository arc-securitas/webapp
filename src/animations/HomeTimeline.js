import React from "react";
import animations from './homeAnimations.module.css';
import { useElementOnScreen } from './animationHooks.js';

export default function HomeTimeline() {
  const here = useElementOnScreen();

  return (
    <svg viewBox="-24 0 456 100" fill="none" xmlns="http://www.w3.org/2000/svg" ref={here.ref}>
      <g id="ArcTimeline">
        <rect id="div1" x="136" y="18.6667" width="2" height="80" fill="black"/>
        <rect id="div2" x="269.333" y="18.6667" width="2" height="80" fill="black"/>
        <g id="check1" className={here.isVisible ? animations.checkOne : ""}>
          <rect id="Rectangle 81" x="4" y="19" width="132" height="79" fill="#82DFB2"/>
          <g id="Interface / Check">
            <path id="Vector" d="M61.9183 58.5L67.6329 64.2788L79.0621 52.7212" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </g>
        <g id="check2" className={here.isVisible ? animations.checkTwo : ""}>
          <rect id="Rectangle 84" x="138" y="19" width="131.333" height="79.3333" fill="#82DFB2"/>
          <g id="Interface / Check_2">
            <path id="Vector_2" d="M195.626 58.6667L201.312 64.4698L212.683 52.8635" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </g>
        <g id="check3" className={here.isVisible ? animations.checkThree : ""}>
          <rect id="Rectangle 83" x="271" y="19" width="132" height="79.3333" fill="#82DFB2"/>
          <g id="Interface / Check_3">
            <path id="Vector_3" d="M328.918 58.6667L334.633 64.4698L346.062 52.8635" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </g>
        <g id="ArcBar" className={here.isVisible ? animations.arcBar : ""}>
          <rect id="Rectangle 81_2" x="5" y="19" width="398" height="79" fill="#3684C9"/>
          <g id="Logo">
            <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M202.082 42.6703C202.365 42.5115 202.713 42.5115 202.995 42.6703L218.672 51.4882C218.955 51.6469 219.129 51.9404 219.129 52.2579V69.8937C219.129 70.2112 218.955 70.5046 218.672 70.6634L212.539 74.1132C212.203 74.3019 211.781 74.0201 211.796 73.643C211.8 73.5506 211.801 73.4578 211.801 73.3646V72.0705C211.801 68.1932 208.575 65.0501 204.595 65.0501H200.388C196.408 65.0501 193.182 68.1933 193.182 72.0705V73.3646C193.182 73.4414 193.183 73.5178 193.186 73.5939C193.198 73.9694 192.777 74.2475 192.443 74.0597L186.405 70.6634C186.123 70.5046 185.949 70.2112 185.949 69.8937V52.2579C185.949 51.9404 186.123 51.6469 186.405 51.4882L202.082 42.6703ZM207.469 58.4417C207.469 61.0945 205.262 63.245 202.539 63.245C199.816 63.245 197.608 61.0945 197.608 58.4417C197.608 55.7889 199.816 53.6384 202.539 53.6384C205.262 53.6384 207.469 55.7889 207.469 58.4417Z" fill="white"/>
            <path id="Vector 12" d="M209.628 44.3202V43.0585C209.628 42.368 210.401 41.9412 211.009 42.2959L214.958 44.5992C215.233 44.7597 215.402 45.0493 215.402 45.3618V46.6035C215.402 47.2925 214.632 47.7195 214.024 47.3678L210.075 45.0845C209.798 44.9244 209.628 44.6339 209.628 44.3202Z" fill="white"/>
          </g>
        </g>
        <g id="playhead" className={here.isVisible ? animations.scrub : ""}>
          <path id="Line 7" d="M4 4L4 99" stroke="black" stroke-width="2"/>
          <circle id="Ellipse 38" cx="4" cy="4" r="3.5" fill="black" stroke="black"/>
        </g>
        <rect id="barFull" x="4" y="18.6667" width="400" height="80" rx="2.66667" stroke="black" stroke-width="2"/>
      </g>
    </svg>
  );
}
