import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import Lenis from "@studio-freight/lenis";
import React, { useEffect, useState } from "react";

const ScrollComponent = (props) => {
  const [lenis, setLenis] = useState();

  useEffect(() => {
    const initLenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    setLenis(initLenis);
    //get scroll value

    function raf(time) {
      initLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="h-full w-full">
      {React.cloneElement(props.children, { lenis })}
    </div>
  );
};

export default ScrollComponent;
