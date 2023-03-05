import HorizontalSlides from "../HorizontalSlides";
import { useRef, useEffect, useLayoutEffect } from "react"
import gsap from 'gsap';
import { ABOUTS, TECH_STACKS } from "../../constant/data"
import InView from "../InView";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Homepage = props => {
    const thumbRef = useRef();

    useLayoutEffect(() => {
        // gsap.set()
        gsap.timeline()
            .from("#main-title", { y: -500 })
            .from("#sub-title", { y: -100, opacity: 0 })
            .from("#button button", { x: -500, stagger: 0.3 })
            .from(thumbRef.current, { y: 200, opacity: 0 })
            .to("#main-title", { duration: 1, y: 0 })
            .to("#sub-title", { duration: 1, y: 0, opacity: 1 })
            .to("#button button", { duration: 0.8, x: 0, stagger: 0.3 })
            .to(thumbRef.current, { duration: 1, y: 0, opacity: 1 })

        gsap.fromTo("#about", {
            opacity: 0,
            x: -100
        }, {
            duration: 1,
            x: 0,
            opacity: 1,
            scrollTrigger: '#about'
        })
    }, []);

    return <div className="p-20 text-white px-20 relative" id="main">
        <div className="flex flex-col gap-y-[70vh]">
            <div className="flex gap-x-5">
                <div className="flex flex-col gap-y-24 flex-1">
                    <p id="main-title" className="text-5xl font-bold pl-5 py-5 border-l-4 border-l-white">Hi, i'm Thinh and i'm a Software Developer</p>
                    <p id="sub-title" className="text-lg font-medium opacity-0">I love to build beautiful UI/UX for applications</p>
                    <div id="button" className="flex flex-col gap-y-5">
                        <div>
                            <button className="rounded-full drop-shadow-lg bg-blue-800 px-10 shadow text-xl font-bold py-2 w-4/12">My resume</button>
                        </div>
                        <div>
                            <button className="rounded-full bg-black px-10 text-xl font-bold py-2 w-4/12">Github</button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div
                        ref={thumbRef} className="relative w-[300px] h-[300px] opacity-0 mt-16">
                        <img className="w-full h-full rounded-xl object-cover absolute -top-[100px] left-[170px] z-10" src="/avatar_2.jpg" />
                        <img className="w-9/12 h-full rounded-xl object-cover absolute" src="/avatar.jpg" />
                    </div>
                </div>
            </div>
            <div className="flex gap-x-16">
                <div className="w-6/12 pb-24">
                    <p id="about" className=" font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-white">About me</p>
                </div>
                <div className="flex flex-col gap-y-[60vh]">
                    <div></div>
                    {
                        ABOUTS.map(item => <div key={item.title}>
                            <p className="text-about font-bold text-3xl mb-5">{item.title}</p>
                            <p className="text-xl">{item.description}</p>
                        </div>)
                    }
                </div>
            </div>
            <HorizontalSlides
                header={<div>
                    <p className="font-bold text-5xl pl-5 py-5 border-l-4 border-l-white">My skills</p>
                </div>}
                wrapperClassName="sticky top-[20%]"
                lenis={props.lenis}
                className="flex gap-x-20 mt-20 inline-flex">
                {
                    TECH_STACKS.map(item => <div key={item.title} className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[300px] h-[400px]">
                        <p className="text-3xl font-bold">{item.title}</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>)
                }
            </HorizontalSlides>
        </div>
    </div>
}

export default Homepage;