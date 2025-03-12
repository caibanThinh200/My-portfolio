import HorizontalSlides from "../HorizontalSlides";
import { useRef, useEffect, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";
import { ABOUTS, PROJECTS, TECH_STACKS } from "../../constant/data";
import InView from "../InView";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Introduce from "./Introduce";
import Histories from "./Histories";
import Projects from "./Projects";
import Link from "next/link";
import Skill from "./Skill";
import Contact from "../Contact";
import Card from "../ui/card";
import Lenis from "@studio-freight/lenis";
import About from "./About";
import Service from "./Services";
gsap.registerPlugin(ScrollTrigger);

const Homepage = (props: { lenis?: Lenis }) => {
  const thumbRef = useRef(null);
  const scrollDownRef = useRef(null);

  const handleNavigateSection = useCallback(
    (sectionId: string) => {
      const section = document.querySelector(sectionId);
      console.log(section);
      return props.lenis?.scrollTo(section, {
        duration: 1,
        offset: -50,
        easing: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
      });
    },
    [props.lenis]
  );

  return (
    <div>
      <div className="p-20 px-20 relative text-white" id="main">
        <div className="fixed right-20 top-20 z-[100]">
          <div className="flex gap-5">
            <ul className="flex flex-col gap-5 items-end border-r-4 border-r-blue-600 py-2 pr-5">
              <li>
                <p className="font-bold text-2xl">Sections</p>
              </li>
              <li className="font-bold">
                <button onClick={() => handleNavigateSection("#main-title")}>
                  Welcome
                </button>
              </li>
              <li className="font-bold">
                <button onClick={() => handleNavigateSection("#about")}>
                  About me
                </button>
              </li>
              <li className="font-bold">
                <button onClick={() => handleNavigateSection("#process")}>
                  Working process
                </button>
              </li>
              <li className="font-bold">
                {" "}
                <button onClick={() => handleNavigateSection("#skills")}>
                  Skills
                </button>
              </li>
              <li className="font-bold">
                <button onClick={() => handleNavigateSection("#experiences")}>
                  Experiences
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="scroll-down"
          ref={scrollDownRef}
          className="fixed bottom-10 left-1/2 z-[100] -translate-x-1/2 flex flex-col gap-2 items-center font-bold text-white"
        >
          <Image
            // className="animate-bounce"
            alt="arrow"
            src={"/scroll-down.png"}
            width={50}
            height={100}
          />
          Scroll down
        </div>

        <div className="flex flex-col gap-[20vh] relative z-20">
          <div className="flex lg:w-1/2 gap-x-5 mt-0">
            <div className="flex flex-col gap-y-10 flex-1 text-white">
              <h1
                id="main-title"
                className="text-5xl font-bold py-5 border-l-4 border-l-blue-600 pl-5 leading-normal"
              >
                Hello, I'm Thinh <br /> Welcome to My Portfolio
              </h1>
              <p id="sub-title" className="text-lg font-medium">
                A dedicated and detail-oriented UI/UX with a true passion for
                enhancing user experiences through carefully crafted,
                aesthetically pleasing interfaces
              </p>
              <div id="button" className="flex flex-col gap-y-5">
                <div>
                  <button className="rounded-full drop-shadow-lg bg-blue-800 px-10 shadow text-xl text-white font-bold py-2 w-4/12">
                    My resume
                  </button>
                </div>
                <div>
                  <button className="rounded-full bg-white px-10 text-xl font-bold py-2 w-4/12 text-black">
                    Github
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex-1 flex justify-center items-center">
            <div ref={thumbRef} className="relative w-[300px] h-[300px] mt-16">
              <img
                className="w-full h-full rounded-xl object-cover absolute shadow-xl top-0 left-0 z-10"
                src="/avatar_2.jpg"
              />
              <img
                className="w-8/12 h-full rounded-xl object-cover absolute shadow-xl top-36 -left-36 z-20"
                src="/avatar.jpg"
              />
            </div>
          </div> */}
          </div>
          <About />
          <Service />
          <Skill />
          <Histories />
          <Projects />
          {/* <HorizontalSlides
            header={
              <div>
                <p className="font-bold text-5xl pl-5 py-5 border-l-4 border-l-blue-600">
                  My skills
                </p>
              </div>
            }
            wrapperClassName="sticky top-[20%]"
            lenis={props.lenis}
            className="gap-10 mt-20 inline-flex"
          >
            {PROJECTS.map((project, idx) => (
              <Card key={idx} {...project} />
            ))}
          </HorizontalSlides> */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
