import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const avatarWrapperRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLImageElement>(null);
  const backRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(avatarRef.current, {
      scrollTrigger: {
        trigger: avatarRef.current,
        start: "top bottom",
        end: "top center",
        // scrub: true,
      },
      scale: 1,
      duration: 1,
    });
  }, []);

  useEffect(() => {
    const card = avatarRef.current as HTMLDivElement;
    const front = frontRef.current as HTMLImageElement;
    const back = backRef.current as HTMLImageElement;

    const handleMouseEnter = () => {
      setTimeout(() => {
        gsap.to(card, { rotateY: 180, duration: 1.4, ease: "power4.inOut" });
        gsap.to(front, {
          opacity: 0,
          delay: 0.5,
          //   duration: 1.4,
          ease: "power4.inOut",
        });
        gsap.to(back, {
          opacity: 1,
          delay: 0.5,
          //   duration: 1.4,
          ease: "power4.inOut",
        });
      }, 100);
    };

    const handleMouseLeave = () => {
      setTimeout(() => {
        gsap.to(card, { rotateY: 0, duration: 1.4, ease: "power4.inOut" });
        gsap.to(front, {
          opacity: 1,
          delay: 0.5,
          //   duration: 1.4,
          ease: "power4.inOut",
        });
        gsap.to(back, {
          opacity: 0,
          delay: 0.5,
          //   duration: 1.4,
          ease: "power4.inOut",
        });
      }, 100);
    };

    (avatarWrapperRef.current as HTMLDivElement).addEventListener(
      "mouseenter",
      handleMouseEnter
    );
    (avatarWrapperRef.current as HTMLDivElement).addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="lg:my-20 lg:mt-[50vh] mt-20 lg:pr-40 flex flex-col gap-10">
      <div>
        <h2
          id="about"
          className="font-bold sticky top-[30%] pl-5 py-5 border-l-4 border-l-blue-600"
        >
          About me
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col gap-20 items-center lg:mt-10">
        <div ref={avatarWrapperRef} className="cursor-pointer">
          <div
            ref={avatarRef}
            className="relative size-[200px] lg:size-[300px] rounded-full overflow-hidden scale-0 transform-3d perspective-distant"
          >
            <Image
              ref={frontRef}
              className="absolute w-full h-full inset-0 opacity-100 backface-hidden object-center"
              src={"/avatar_3.png"}
              width={400}
              height={400}
              alt={"avatar-front"}
            />
            <Image
              ref={backRef}
              className="absolute w-full h-full object-cover rotate-y-180 inset-0 opacity-0 object-[0%_80%] backface-hidden"
              src={"/avatar.jpg"}
              width={400}
              height={400}
              alt={"avatar-back"}
            />
          </div>
        </div>
        <div className="flex-2">
          <p className="text-white text-xl before:content-['\0022'] before:absolute before:-top-10 before:text-[100px] before:text-[#FFEB00] relative">
            I'm a Software Developer living in Vietnam with 3+ years of
            experience. I have a passion for coding and problem-solving, and I'm
            always eager to learn new technologies and improve my skills. I'm a
            quick learner and a team player, and I'm committed to delivering
            high-quality work that meets the needs of my clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
