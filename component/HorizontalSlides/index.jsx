import { useRect } from "@studio-freight/hamo"
import { useCallback, useEffect, useRef } from "react";
import clsx from "clsx";
import useScroll from "@dh-react-hooks/use-scroll"
import { useWindowSize } from "use-hooks"
import { mapRange, clamp } from "../../lib/math"
import gsap from "gsap";

const HorizontalSlides = props => {
    const [wrapperRectRef, wrapperRect] = useRect();
    const [nodeRectRef, nodeRect] = useRect();
    const wrapperRef = useRef();
    const { height: windowHieght, width: windowWidth } = useWindowSize()

    useEffect(() => {
        wrapperRef.current.style.height = `${wrapperRect.width}px`
    }, [wrapperRect]);

    useEffect(() => {
        handleHorizontalScroll()
    })

    const handleHorizontalScroll = useCallback(() => {
        props?.lenis?.on("scroll", ({ scroll }) => {
            const start = wrapperRect.top - windowHieght
            const end = wrapperRect.top + wrapperRect.height - windowHieght;
            let progress = mapRange(start, end, scroll, 0, 1);
            progress = clamp(0, progress, 1)
            const position = progress * (nodeRect.width - windowWidth)
            gsap.to(wrapperRef.current,
                {
                    scrollTrigger: wrapperRef.current,
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
        <div
            className={clsx(props.className)}
            ref={ref => {
                wrapperRef.current = ref
                nodeRectRef(ref);
            }}
        >
            {props.children}
        </div>

    </div>
}

export default HorizontalSlides