import "@/styles/globals.css";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { Mulish } from "@next/font/google";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);

SwiperCore.use([Autoplay, Pagination, Navigation]);

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    //bg-[#3F3F41]
    <main className={mulish.className}>
      <Component {...pageProps} />
    </main>
  );
}
