import React from "react";
import animations from './homeAnimations.module.css';
import { useElementOnScreen } from './animationHooks.js';

export default function ProductNetwork() {
  const here = useElementOnScreen();

  return (
    <svg viewBox="0 0 298 97" fill="none" xmlns="http://www.w3.org/2000/svg" ref={here.ref}>
      <g id="ArcNetwork">
        <g id="Teal" className={here.isVisible ? animations.tealNet : ""}>
          <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M46.8567 3.41176C47.6415 2.96529 48.6085 2.96529 49.3933 3.41176L92.9817 28.2081C93.7665 28.6546 94.25 29.4797 94.25 30.3726V79.9653C94.25 80.8582 93.7665 81.6834 92.9817 82.1298L75.9289 91.8307C74.9961 92.3614 73.821 91.5691 73.863 90.5085C73.8733 90.2489 73.8784 89.9879 73.8784 89.7258V86.0866C73.8784 75.1836 64.9082 66.3451 53.8428 66.3451H42.1458C31.0804 66.3451 22.1101 75.1836 22.1101 86.0866V89.7258C22.1101 89.9416 22.1136 90.1565 22.1206 90.3706C22.155 91.4264 20.9852 92.2085 20.0568 91.6804L3.26831 82.1298C2.48348 81.6834 2 80.8582 2 79.9653V30.3726C2 29.4797 2.48348 28.6546 3.26831 28.2081L46.8567 3.41176ZM61.8334 47.7617C61.8334 55.2215 55.696 61.2689 48.1251 61.2689C40.5542 61.2689 34.4167 55.2215 34.4167 47.7617C34.4167 40.302 40.5542 34.2546 48.1251 34.2546C55.696 34.2546 61.8334 40.302 61.8334 47.7617Z" fill="#60E5CD" stroke="black" stroke-width="3"/>
          <path id="Vector 12" d="M67.8362 8.05131V4.50324C67.8362 2.56151 69.9851 1.36137 71.6759 2.35885L82.6546 8.83587C83.4198 9.2873 83.8882 10.1015 83.8882 10.9803V14.4721C83.8882 16.4096 81.7477 17.6103 80.0568 16.6214L69.0781 10.2006C68.3082 9.75033 67.8362 8.93349 67.8362 8.05131Z" fill="#60E5CD" stroke="black" stroke-width="3"/>
        </g>
        <g id="Blue" className={here.isVisible ? animations.blueNet : ""}>
          <path id="Subtract_2" fill-rule="evenodd" clip-rule="evenodd" d="M147.857 3.41176C148.642 2.96529 149.608 2.96529 150.393 3.41176L193.982 28.2081C194.767 28.6546 195.25 29.4797 195.25 30.3726V79.9653C195.25 80.8582 194.767 81.6834 193.982 82.1298L176.929 91.8307C175.996 92.3614 174.821 91.5691 174.863 90.5085C174.873 90.2489 174.878 89.9879 174.878 89.7258V86.0866C174.878 75.1836 165.908 66.3451 154.843 66.3451H143.146C132.08 66.3451 123.11 75.1836 123.11 86.0866V89.7258C123.11 89.9416 123.114 90.1565 123.121 90.3706C123.155 91.4264 121.985 92.2085 121.057 91.6804L104.268 82.1298C103.483 81.6834 103 80.8582 103 79.9653V30.3726C103 29.4797 103.483 28.6546 104.268 28.2081L147.857 3.41176ZM162.833 47.7617C162.833 55.2215 156.696 61.2689 149.125 61.2689C141.554 61.2689 135.417 55.2215 135.417 47.7617C135.417 40.302 141.554 34.2546 149.125 34.2546C156.696 34.2546 162.833 40.302 162.833 47.7617Z" fill="#3684C9" stroke="black" stroke-width="3"/>
          <path id="Vector 12_2" d="M168.836 8.05131V4.50324C168.836 2.56151 170.985 1.36137 172.676 2.35885L183.655 8.83587C184.42 9.2873 184.888 10.1015 184.888 10.9803V14.4721C184.888 16.4096 182.748 17.6103 181.057 16.6214L170.078 10.2006C169.308 9.75033 168.836 8.93349 168.836 8.05131Z" fill="#3684C9" stroke="black" stroke-width="3"/>
        </g>
        <g id="Salmon">
          <path id="Subtract_3" fill-rule="evenodd" clip-rule="evenodd" d="M248.857 3.41176C249.642 2.96529 250.608 2.96529 251.393 3.41176L294.982 28.2081C295.767 28.6546 296.25 29.4797 296.25 30.3726V79.9653C296.25 80.8582 295.767 81.6834 294.982 82.1298L277.929 91.8307C276.996 92.3614 275.821 91.5691 275.863 90.5085C275.873 90.2489 275.878 89.9879 275.878 89.7258V86.0866C275.878 75.1836 266.908 66.3451 255.843 66.3451H244.146C233.08 66.3451 224.11 75.1836 224.11 86.0866V89.7258C224.11 89.9416 224.114 90.1565 224.121 90.3706C224.155 91.4264 222.985 92.2085 222.057 91.6804L205.268 82.1298C204.483 81.6834 204 80.8582 204 79.9653V30.3726C204 29.4797 204.483 28.6546 205.268 28.2081L248.857 3.41176ZM263.833 47.7617C263.833 55.2215 257.696 61.2689 250.125 61.2689C242.554 61.2689 236.417 55.2215 236.417 47.7617C236.417 40.302 242.554 34.2546 250.125 34.2546C257.696 34.2546 263.833 40.302 263.833 47.7617Z" fill="#FFA581" stroke="black" stroke-width="3"/>
          <path id="Vector 12_3" d="M269.836 8.05131V4.50324C269.836 2.56151 271.985 1.36137 273.676 2.35885L284.655 8.83587C285.42 9.2873 285.888 10.1015 285.888 10.9803V14.4721C285.888 16.4096 283.748 17.6103 282.057 16.6214L271.078 10.2006C270.308 9.75033 269.836 8.93349 269.836 8.05131Z" fill="#FFA581" stroke="black" stroke-width="3"/>
        </g>
      </g>
    </svg>
  );
}
