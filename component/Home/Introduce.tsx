import { ABOUTS } from "@/constant/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const Introduce = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#about",
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to("#scroll-down", {
            y: 200,
            duration: 2,
            ease: "bounce.out",
          });
        }
      },
    });
  }, []);

  return (
    <div className="flex gap-x-16 mr-48">
      <div className="w-1/3 pb-24">
        <p
          id="process"
          className="font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-blue-600 scroll-mt-36"
        >
          How can we work together
        </p>
      </div>
      <div className="flex flex-col gap-y-[60vh] w-2/3">
        {ABOUTS.map((item) => (
          <div key={item.title}>
            <p className="text-[#FFEB00] font-bold text-3xl mb-5">
              {item.title}
            </p>
            <p className="text-xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduce;
