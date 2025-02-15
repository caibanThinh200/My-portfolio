import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SKILLS } from "@/constant/data";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface StrapLinesProps {}

const Slide: React.FC<StrapLinesProps> = (props) => {
  return (
    <Swiper
      spaceBetween={50} // Space between slides
      slidesPerView={"auto"} // Number of logos visible at once
      centeredSlides
      loop={true} // Enable loop mode
      // virtual
      autoplay={{
        delay: 0,
      }}
      direction={"horizontal"}
      navigation={true} // Enable navigation arrows
      freeMode={true}
      speed={8000}
      className="bg-white py-5 bottom-10 rotate-[-8deg] !w-[calc(100%+100vw)] !absolute -left-1/2"
    >
      {SKILLS.frontend.map((item, index) => (
        <SwiperSlide className="!w-auto" key={index}>
          <div className="flex items-center gap-3 py-5">
            <Image
              width={50}
              height={50}
              className="h-[30px] w-auto"
              src={item.thumbnail}
              alt={item.name}
            />
            <p className="text-black">{item.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const VerticalSlide: React.FC<StrapLinesProps> = (props) => {
  return (
    <Swiper
      spaceBetween={50} // Space between slides
      slidesPerView={"auto"} // Number of logos visible at once
      centeredSlides
      loop={true} // Enable loop mode
      // virtual
      autoplay={{
        delay: 0,
      }}
      direction={"horizontal"}
      navigation={true} // Enable navigation arrows
      freeMode={true}
      speed={7000}
      className="bg-black py-5 top-0 -left-[30%] rotate-[60deg] !w-[calc(100%+100vw)] !absolute"
    >
      {SKILLS.backend.map((item, index) => (
        <SwiperSlide className="!w-auto" key={index}>
          <div className="flex items-center py-5 gap-3">
            <Image
              width={50}
              height={50}
              className="h-[30px] w-auto"
              src={item.thumbnail}
              alt={item.name}
            />
            <p className="text-white">{item.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
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
