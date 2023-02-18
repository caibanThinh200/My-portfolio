import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import Lenis from '@studio-freight/lenis'
import { useRect } from "@studio-freight/hamo"
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = props => {
    const [lenis, setLenis] = useState();

    useEffect(() => {
        // ScrollSmoother.create({
        //     content: '#main',
        //     effects: true,           // looks for data-speed and data-lag attributes on elements
        //     smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        // })
    }, [gsap])

    useEffect(() => {
        const initLenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })
        setLenis(initLenis)
        //get scroll value

        function raf(time) {
            initLenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, []);

    return <div>
        {React.cloneElement(props.children, { lenis })}
    </div>
}

export default ScrollComponent;