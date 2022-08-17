import React from "react";
import animations from './productAnimations.module.css';
import { useElementOnScreen } from './animationHooks.js';

export default function ProductAudio() {
  const here = useElementOnScreen();

  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" ref={here.ref}>
      <g id="Group 67">
        <circle id="Ellipse 41" cx="64" cy="64" r="62" fill="white" stroke="black" stroke-width="4"/>
        <rect className={here.isVisible ? animations.bob1 : ""} id="Rectangle 103" x="8" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob2 : ""} id="Rectangle 105" x="14" y="58" width="4" height="12" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob3 : ""} id="Rectangle 106" x="20" y="52" width="4" height="24" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 107" x="26" y="60" width="4" height="8" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob2 : ""} id="Rectangle 108" x="32" y="56" width="4" height="16" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob3 : ""}id="Rectangle 109" x="38" y="49" width="4" height="30" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob1 : ""} id="Rectangle 110" x="44" y="52" width="4" height="24" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 111" x="50" y="41" width="4" height="46" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob3 : ""} id="Rectangle 112" x="74" y="46" width="4" height="36" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob1 : ""} id="Rectangle 113" x="62" y="33" width="4" height="62" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob2 : ""} id="Rectangle 114" x="68" y="56" width="4" height="16" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 115" x="56" y="52" width="4" height="24" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob1 : ""} id="Rectangle 116" x="80" y="58" width="4" height="12" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob2 : ""} id="Rectangle 117" x="86" y="49" width="4" height="30" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob3 : ""} id="Rectangle 118" x="92" y="54" width="4" height="20" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 119" x="98" y="58" width="4" height="12" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob2 : ""} id="Rectangle 120" x="104" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob3 : ""} id="Rectangle 121" x="110" y="60" width="4" height="8" rx="2" fill="#3684C9"/>
        <rect className={here.isVisible ? animations.bob1 : ""} id="Rectangle 104" x="116" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
      </g>
    </svg>
  );
}
