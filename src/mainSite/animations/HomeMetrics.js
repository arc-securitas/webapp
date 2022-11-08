import React from "react";
import animations from './homeAnimations.module.css';
import { useElementOnScreen } from './animationHooks.js';

export default function HomeMetricsSvg() {
  const here = useElementOnScreen();

  return (
    <svg viewBox="0 0 494 142" fill="none" xmlns="http://www.w3.org/2000/svg" ref={here.ref}>
      <g id="Metrics">
        <g id="VennDiagram">
          <circle id="BlueFill" cx="92.5" cy="51.5" r="27.5" fill="#3684C9" fillOpacity="0.75"/>
          <circle id="GreenFill" cx="109.5" cy="79.5" r="27.5" fill="#82DFB2" fillOpacity="0.75"/>
          <circle id="TealFill" cx="74.5" cy="79.5" r="27.5" fill="#43BFDA" fillOpacity="0.75"/>
          <circle id="BlueStroke" cx="92.5" cy="51.5" r="27.5" stroke="black" strokeWidth="2"/>
          <circle id="TealStoke" cx="74.5" cy="79.5" r="27.5" stroke="black" strokeWidth="2"/>
          <circle id="GreenStroke" cx="109.5" cy="79.5" r="27.5" stroke="black" strokeWidth="2"/>
        </g>
        <g id="PieChart">
          <circle id="Circle" cx="394" cy="52.5" r="46.5" fill="#DADADA" stroke="black" strokeWidth="2"/>
          <g id="Wedge">
            <mask id="path-8-inside-1_1003_1740" fill="white">
              <path d="M411.568 8.3684C401.773 4.46904 390.959 3.93918 380.83 6.86229C370.701 9.7854 361.832 15.9953 355.62 24.5139C349.408 33.0324 346.207 43.3754 346.521 53.9134C346.835 64.4515 350.645 74.5857 357.353 82.7196C364.06 90.8536 373.283 96.5249 383.568 98.8403C393.853 101.156 404.617 99.9835 414.163 95.5084C423.708 91.0333 431.494 83.5095 436.293 74.1225C441.092 64.7354 442.632 54.0185 440.67 43.6599L394 52.5L411.568 8.3684Z"/>
            </mask>
            <path d="M411.568 8.3684C401.773 4.46904 390.959 3.93918 380.83 6.86229C370.701 9.7854 361.832 15.9953 355.62 24.5139C349.408 33.0324 346.207 43.3754 346.521 53.9134C346.835 64.4515 350.645 74.5857 357.353 82.7196C364.06 90.8536 373.283 96.5249 383.568 98.8403C393.853 101.156 404.617 99.9835 414.163 95.5084C423.708 91.0333 431.494 83.5095 436.293 74.1225C441.092 64.7354 442.632 54.0185 440.67 43.6599L394 52.5L411.568 8.3684Z" fill="#3684C9" stroke="black" strokeWidth="4" mask="url(#path-8-inside-1_1003_1740)"/>
          </g>
        </g>
        <g id="BarChart">
          <line id="Line 4" x1="202.5" y1="137" x2="302.5" y2="137" stroke="black" strokeWidth="2"/>
          <rect id="DarkBar" x="218.5" y="77" width="28" height="60" fill="#1D5DA7" stroke="black" strokeWidth="2"/>
          <rect id="LightBar" x="258.5" y="43" width="28" height="94" fill="#82B3DF" stroke="black" strokeWidth="2"/>
        </g>
        <rect id="Rectangle 51" x="321.142" y="18.4263" width="10.9117" height="10.9117" transform="rotate(45 321.142 18.4263)" fill="#FFC582" stroke="black" strokeWidth="2"/>
        <rect id="Rectangle 53" width="9.7953" height="9.7953" transform="matrix(0.707106 0.707108 -0.707106 0.707108 53.9263 15)" fill="#FFC582" stroke="black" strokeWidth="2"/>
        <rect id="Rectangle 52" width="14.5441" height="14.5441" transform="matrix(0.707106 0.707108 -0.707106 0.707108 17.2842 104)" fill="#FFC582" stroke="black" strokeWidth="2"/>
        <rect id="Rectangle 50" width="14.5441" height="14.5441" transform="matrix(0.707106 0.707108 -0.707106 0.707108 177.284 90)" fill="#FFC582" stroke="black" strokeWidth="2"/>
        <rect id="Rectangle 49" width="20" height="20" transform="matrix(0.707108 0.707106 -0.707108 0.707106 478.142 107)" fill="#FFC582" stroke="black" strokeWidth="2"/>
        <g>
          <mask id="WipeMask">
            <rect className={animations.metricsLine} x="0" y="0" width="494" height="142" fill="white"/>
          </mask>
          <g mask="url(#WipeMask)">
            <path id="seg1" d="M218 87L165.509 30L136 71.5M65 53.5L1 18" stroke="black" strokeWidth="2"/>
            <path id="seg2" d="M320.5 107.5L287.5 80M258 95L247 100.5" stroke="black" strokeWidth="2"/>
            <path id="seg3" d="M320.5 107.5L333.5 96L360 140L383 98.5" stroke="black" strokeWidth="2"/>
            <path id="seg4" d="M428.5 19L437 3L465.5 57L490 14.5" stroke="black" strokeWidth="2"/>
          </g>
        </g>
      </g>
    </svg>
  );
}
