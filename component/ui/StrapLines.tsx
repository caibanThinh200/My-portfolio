import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SKILLS } from "@/constant/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface StrapLinesProps {}

const Slide: React.FC<StrapLinesProps> = (props) => {
  return (
    <Marquee
      loop={0}
      autoFill
      play
      speed={20}
      className="bg-black lg:py-5 py-2 bottom-10 !rotate-[-8deg] !w-[calc(100%+100vw)] !absolute -left-1/2 gap-10"
    >
      {SKILLS.frontend.map((skill) => (
        <div className="flex items-center gap-3 lg:py-1 mx-5">
          <Image
            width={50}
            height={50}
            className="h-[30px] w-auto"
            src={skill.thumbnail}
            alt={skill.name}
          />
          <p className="text-white">{skill.name}</p>
        </div>
      ))}
    </Marquee>
    // <Swiper
    //   spaceBetween={50} // Space between slides
    //   slidesPerView={"auto"} // Number of logos visible at once
    //   centeredSlides
    //   loop={true} // Enable loop mode
    //   // virtual
    //   autoplay={{
    //     delay: 0,
    //   }}
    //   direction={"horizontal"}
    //   navigation={true} // Enable navigation arrows
    //   freeMode={true}
    //   speed={8000}
    //   className="bg-white py-5 bottom-10 rotate-[-8deg] !w-[calc(100%+100vw)] !absolute -left-1/2"
    // >
    //   {SKILLS.frontend.map((item, index) => (
    //     <SwiperSlide className="!w-auto" key={index}>
    //       <div className="flex items-center gap-3 py-5">
    //         <Image
    //           width={50}
    //           height={50}
    //           className="h-[30px] w-auto"
    //           src={item.thumbnail}
    //           alt={item.name}
    //         />
    //         <p className="text-black">{item.name}</p>
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
};

const VerticalSlide: React.FC<StrapLinesProps> = (props) => {
  return (
    <Marquee
      loop={0}
      autoFill
      speed={20}
      play
      className="bg-white lg:py-5 py-2 top-0 lg:-left-[30%] -left-[85%] !rotate-[83deg] lg:!rotate-[60deg] !w-[calc(100%+250vw)] lg:!w-[calc(100%+100vw)] !absolute"
    >
      {SKILLS.backend.map((skill) => (
        <div className="flex items-center gap-3 lg:py-1 mx-5">
          <Image
            width={50}
            height={50}
            className="h-[30px] w-auto"
            src={skill.thumbnail}
            alt={skill.name}
          />
          <p className="text-black">{skill.name}</p>
        </div>
      ))}
    </Marquee>
  );
};

const StrapLine: React.FC<StrapLinesProps> = () => {
  return (
    <div className="h-screen absolute w-screen z-10">
      <div className="relative w-full h-full overflow-x-clip">
        <Slide />
        <VerticalSlide />
      </div>
      {/* <Slide /> */}
    </div>
  );
};

export default StrapLine;
