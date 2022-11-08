import React from "react";
import animations from './productAnimations.module.css';
import { useElementOnScreen } from './animationHooks.js';

export default function ProductCalendar() {
  const here = useElementOnScreen();

  return (
    <svg viewBox="0 0 267 186" fill="none" xmlns="http://www.w3.org/2000/svg" ref={here.ref}>
      <g id="ArcCalendar">
        <path className={here.isVisible ? animations.gearThree : ""} id="Gear3" fillRule="evenodd" clipRule="evenodd" d="M217.695 97L214.008 107.448C210.748 108.281 207.672 109.572 204.852 111.249L194.95 106.513L187.889 113.574L192.625 123.476C190.907 126.366 189.593 129.524 188.763 132.873L179 136.319V146.305L188.763 149.751C189.589 153.08 190.892 156.222 192.595 159.098L187.889 168.937L194.95 175.998L204.747 171.313C207.596 173.02 210.708 174.333 214.008 175.176L217.695 185.624H227.681L231.368 175.176C234.649 174.338 237.744 173.035 240.579 171.342L250.313 175.998L257.374 168.937L252.719 159.202C254.411 156.367 255.714 153.273 256.552 149.992L267 146.304V136.319L256.552 132.631C255.708 129.332 254.396 126.22 252.689 123.372L257.374 113.574L250.313 106.513L240.474 111.219C237.667 109.557 234.608 108.276 231.368 107.448L227.681 97H217.695ZM222.688 158.787C232.339 158.787 240.163 150.963 240.163 141.312C240.163 131.661 232.339 123.837 222.688 123.837C213.037 123.837 205.213 131.661 205.213 141.312C205.213 150.963 213.037 158.787 222.688 158.787Z" fill="black"/>
        <path className={here.isVisible ? animations.gearTwo : ""} id="Gear2" fillRule="evenodd" clipRule="evenodd" d="M27.5195 76.9717L24.8969 84.4023C22.5789 84.9947 20.3913 85.913 18.3857 87.1054L11.3435 83.7374L6.32175 88.7591L9.68977 95.8013C8.4679 97.8564 7.53391 100.103 6.94339 102.485L0 104.935V112.037L6.94344 114.488C7.53054 116.855 8.45712 119.089 9.66854 121.135L6.32175 128.133L11.3435 133.154L18.3112 129.822C20.337 131.036 22.5501 131.97 24.8969 132.569L27.5194 140H34.6212L37.2437 132.569C39.5768 131.973 41.7777 131.047 43.7939 129.843L50.7172 133.154L55.7389 128.132L52.4277 121.209C53.6314 119.193 54.5577 116.992 55.1539 114.659L62.5845 112.037V104.935L55.1538 102.312C54.554 99.9656 53.6204 97.7527 52.4064 95.727L55.7389 88.759L50.7172 83.7373L43.7191 87.0842C41.7234 85.9021 39.548 84.9913 37.2438 84.4024L34.6212 76.9717H27.5195ZM31.0703 120.914C37.9342 120.914 43.4984 115.35 43.4984 108.486C43.4984 101.622 37.9342 96.0576 31.0703 96.0576C24.2065 96.0576 18.6422 101.622 18.6422 108.486C18.6422 115.35 24.2065 120.914 31.0703 120.914Z" fill="black"/>
        <path className={here.isVisible ? animations.gearOne : ""} id="Gear1" fillRule="evenodd" clipRule="evenodd" d="M228.097 0L226.182 5.42643C224.489 5.85906 222.891 6.52966 221.427 7.40048L216.284 4.94092L212.617 8.60818L215.076 13.7509C214.184 15.2517 213.502 16.8921 213.071 18.6314L208 20.421V25.6073L213.071 27.397C213.499 29.1262 214.176 30.7577 215.061 32.2513L212.617 37.3617L216.284 41.029L221.372 38.5954C222.852 39.482 224.468 40.1639 226.182 40.6019L228.097 46.0283H233.283L235.198 40.6019C236.902 40.1665 238.509 39.49 239.982 38.6109L245.038 41.0289L248.705 37.3616L246.287 32.3057C247.166 30.8333 247.842 29.226 248.278 27.5223L253.704 25.6071V20.4208L248.278 18.5056C247.84 16.7919 247.158 15.1759 246.271 13.6966L248.705 8.60812L245.038 4.94086L239.927 7.38498C238.47 6.52171 236.881 5.85651 235.198 5.42644L233.283 0H228.097ZM230.69 32.0902C235.703 32.0902 239.766 28.0267 239.766 23.0142C239.766 18.0016 235.703 13.9382 230.69 13.9382C225.677 13.9382 221.614 18.0016 221.614 23.0142C221.614 28.0267 225.677 32.0902 230.69 32.0902Z" fill="black"/>
        <g id="Group 65">
          <g id="Frame 213">
          <rect x="33" y="19" width="202" height="158" rx="8" fill="white"/>
          <path id="Rectangle 85" d="M41 19H227C231.418 19 235 22.5817 235 27V57H33V27C33 22.5817 36.5817 19 41 19Z" fill="#3684C9" stroke="black" strokeWidth="4"/>
          <rect className={here.isVisible ? animations.scheduleYellow : ""} id="Rectangle 88" x="46" y="74" width="24" height="24" rx="2"/>
          <rect id="Rectangle 93" x="46" y="107" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 98" x="46" y="140" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 89" x="84" y="74" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect className={here.isVisible ? animations.schedulePurple : ""} id="Rectangle 94" x="84" y="107" width="24" height="24" rx="2"/>
          <rect id="Rectangle 99" x="84" y="140" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 90" x="122" y="74" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 95" x="122" y="107" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 100" x="122" y="140" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 91" x="160" y="74" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 96" x="160" y="107" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect className={here.isVisible ? animations.scheduleYellow : ""} id="Rectangle 101" x="160" y="140" width="24" height="24" rx="2"/>
          <rect className={here.isVisible ? animations.schedulePurple : ""} id="Rectangle 92" x="198" y="74" width="24" height="24" rx="2"/>
          <rect id="Rectangle 97" x="198" y="107" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect id="Rectangle 102" x="198" y="140" width="24" height="24" rx="2" fill="#82B3DF"/>
          <rect x="33" y="19" width="202" height="158" rx="8" stroke="black" strokeWidth="4"/>
          </g>
        <rect id="Rectangle 86" x="65" width="4" height="35" rx="2" fill="black"/>
        <rect id="Rectangle 87" x="199" width="4" height="35" rx="2" fill="black"/>
        </g>
      </g>
    </svg>
  );
}
