import { useRect } from "@studio-freight/hamo"
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useWindowSize } from "use-hooks"
import { clamp, mapRange } from "../../lib/math"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlides = props => {
    const [wrapperRectRef, wrapperRect] = useRect();
    const [nodeRectRef, nodeRect] = useRect();
    const [totalHeight, setTotalHieght] = useState(0);
    const wrapperRef = useRef();
    const { height: windowHieght } = useWindowSize();

    useEffect(() => {
        if (!wrapperRef.current) return;
        const totalHeight = [...wrapperRef.current.children].reduce((current, element) => {
            return element.getBoundingClientRect().height + current;
        }, 0);
        setTotalHieght(totalHeight)
        // wrapperRef.current.style.height = `${totalHeight}px`
    }, [wrapperRect]);

    useEffect(() => {
        handleHorizontalScroll();
    })

    const handleHorizontalScroll = useCallback(() => {
        props?.lenis?.on("scroll", ({ scroll }) => {
            const start = wrapperRect.top - windowHieght;
            const end = wrapperRect.top + wrapperRect.height - windowHieght;
            let progress = mapRange(start, end, scroll, 0, 1);
            progress = clamp(0, progress, 1);
            const position = (progress * nodeRect.width) - 1500
            gsap.to(wrapperRef.current?.children,
                {
                    scrollTrigger: wrapperRef.current,
                    x: -position,
                    // stagger: 0.033,
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
        <div className={props.wrapperClassName}>
            {props.header}
            <div
                // style={{ x: -x }}
                className={clsx(props.className)}
                ref={ref => {
                    wrapperRef.current = ref
                    nodeRectRef(ref);
                }}
            >
                {props.children}
            </div>
        </div>

        <div style={{ height: totalHeight }} />
    </div>
}

export default HorizontalSlides