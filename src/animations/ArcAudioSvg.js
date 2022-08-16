import React from "react";
import animations from './productAnimations.module.css';
import { useElementOnScreen } from './animationHooks.js';

export default function ProductAudio() {
  const here = useElementOnScreen();

  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" ref={here.ref}>
      <g id="Group 66">
        <circle id="Ellipse 42" cx="64" cy="64" r="62" fill="white" stroke="black" stroke-width="4"/>
        <rect className={here.isVisible ? animations.rectOne : ""} id="Rectangle 122" x="8" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 123" x="14" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 124" x="20" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 125" x="26" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 126" x="32" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 127" x="38" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 128" x="44" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 129" x="50" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 130" x="56" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 131" x="62" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 132" x="68" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 133" x="74" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 134" x="80" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 135" x="86" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 136" x="92" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 137" x="98" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 138" x="104" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 139" x="110" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
        <rect id="Rectangle 140" x="116" y="62" width="4" height="4" rx="2" fill="#3684C9"/>
      </g>
    </svg>
  );
}
