/*
  Contains definitions of hooks related to animations.
*/

import { useRef, useEffect, useState } from "react";

/*
  useElementOnScreen():

  Used to detect if an element has intersected with another element.

  Usage:
  Returns an object of the form: {containerRef, isVisible}. Catch this inside of a variable
  (say, x), and add a property `ref={x.containerRef}` to the element that you want to
  watch. Then, refer to `x.isVisible` to check if it is visible or not.

  Example:
  import { useElementOnScreen } from '../animations/animationHooks.js';

  const About () => {
    const titleOnScreen = useElementOnScreen();

    return (
      <div>
        <p>{titleOnScreen.isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</p>
        <p ref={titleOnScreen.ref}>Title</p>
      </div>
    );
  }

  When the Title paragraph is visible in the viewport, the top paragraph will say
  "IN VIEWPORT", otherwise it will say "NOT IN VIEWPORT".
*/

const useElementOnScreen = () => {
  let played = false;
  const containerRef = useRef(null);
  const [ isVisible, setIsVisible ] = useState(false);

  const callbackFunction = (entries) => {
    if (!played) {
      const [ entry ] = entries;
      let intersecting = entry.isIntersecting;
      if (intersecting) {
        played = true;
      }
      setIsVisible(intersecting);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return {ref: containerRef, isVisible: isVisible};
};

export {useElementOnScreen};