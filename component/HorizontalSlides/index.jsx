import { useRect } from "@studio-freight/hamo"
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useWindowSize } from "use-hooks"
import { clamp, mapRange } from "../../lib/math"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
    motion,
    useScroll,
    useAnimationFrame,
    useMotionValueEvent,
    useMotionValue,
    useVelocity,
    useSpring,
    useInView
} from "framer-motion"

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlides = props => {
    const [wrapperRectRef, wrapperRect] = useRect();
    const [nodeRectRef, nodeRect] = useRect();
    const wrapperRef = useRef();
    const { height: windowHieght, width: windowWidth } = useWindowSize();
    const { scrollY } = useScroll();
    const x = useMotionValue(600)
    const isInView = useInView(wrapperRef);

    useEffect(() => {
        wrapperRef.current.style.height = `${wrapperRect.width}px`
    }, [wrapperRect]);

    // useMotionValueEvent(scrollY, 'change', (latest) => {
    //     if (isInView) {
    //         x.set(x.get() - 5)
    //     }
    // })

    useEffect(() => {
        handleHorizontalScroll();
    })

    useAnimationFrame((time, delta) => {
        // console.log(time, delta)
        // console.log(delta)
        // x.set(x.get() + 5)
    })

    const handleHorizontalScroll = useCallback(() => {
        props?.lenis?.on("scroll", ({ scroll }) => {
            const start = wrapperRect.top - windowHieght
            const end = wrapperRect.top + wrapperRect.height - windowHieght;
            let progress = mapRange(start, end, scroll, 0, 1);
            progress = clamp(0, progress, 1)
            const position = progress * (nodeRect.width - windowWidth) - 100
            gsap.fromTo(wrapperRef.current,
                {
                    x: 600
                },
                {
                    // scrollTrigger: wrapperRef.current,
                    x: -position,
                    stagger: 0.033,
                    ease: "ease-in-out",
                    duration: 0,
                })
        })
    }, [props.lenis, wrapperRect, windowHieght, wrapperRef])

    return <div
        ref={ref => {
            wrapperRectRef(ref)
        }}
    >
        <motion.div
            // style={{ x: -x }}
            className={clsx(props.className)}
            ref={ref => {
                wrapperRef.current = ref
                nodeRectRef(ref);
            }}
        >
            {props.children}
        </motion.div>
    </div>
}

export default HorizontalSlides