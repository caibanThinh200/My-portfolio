import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Card from "../ui/card";
import { PROJECTS } from "@/constant/data";

const Projects = () => {
  const listProjectRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState({
    open: false,
    project: null,
  });

  useEffect(() => {
    gsap.set(".projects", {
      opacity: 0,
      y: 100,
      // delay: 1000 * idx,
      // scrollTrigger: {
      //   trigger: listProjectRef.current,
      //   start: "center bottom",
      //   end: "center center",
      //   scrub: true,
      // },
    });
    gsap.to(".projects", {
      scrollTrigger: {
        trigger: listProjectRef.current,
        // start: "center bottom",
        // end: "center center",
        // scrub: true,
        start: "top bottom",
      },
      stagger: 0.1,
      opacity: 1,
      duration: 0.5,
      y: 0,

      // delay: 1000 * idx,
    });
    // });
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 100,
    },
  };

  const handleSelectProject = (project: string) => {
    const card = document.getElementById(project);
    const listProjectRect =
      listProjectRef.current?.getBoundingClientRect() as DOMRect;
    // Get the card's current position relative to the viewport
    const cardRect = card?.getBoundingClientRect() as DOMRect;

    // Get the center position of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Get the card's current position
    gsap.to(".projects", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1, // Optional stagger to add delay between each card fading out
      ease: "power2.inOut",
    });

    // Use GSAP to animate the card's position and scaling
    gsap.to(`#${project}`, {
      x: centerX - cardRect.width / 2,
      y: centerY + cardRect.height / 2,

      position: "absolute",
      // left: cardRect.x,
      // left: "50%",
      // scaleX: 2, // Scale horizontally to fill the screen
      // scaleY: 2, // Scale vertically to fill the screen
      opacity: 1,
      // width: "100%",
      // height: "100%",
      duration: 1, // Duration of the animation
      zIndex: 50,
      ease: "power2.inOut", // Easing function for smooth animation
    });
  };

  return (
    <section className="my-36 mr-48">
      <div>
        <p
          id="project"
          className=" font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-blue-600"
        >
          Projects
        </p>
      </div>
      <div className="mt-10">
        <div ref={listProjectRef} className="grid grid-cols-3 gap-10 relative">
          {PROJECTS.map((project, idx) => (
            <Card key={idx} {...project} />
          ))}
        </div>
      </div>
      {/* <Modal
        style={customStyles}
        isOpen={modal?.open}
        // bodyOpenClassName={"z-[100]"}
        overlayClassName={"bg-black/50 fixed z-[100] h-full w-full inset-0"}
        onRequestClose={() => setModal({ open: false, project: null })}
        contentLabel="Project"
      >
        <h2>Project</h2>
      </Modal> */}
    </section>
  );
};

export default Projects;
