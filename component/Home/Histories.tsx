import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IStackedCard {
  // stackedCards?: {
  //     ctaButtons?: IButtonRebranding[];
  //     description?: string;
  //     title?: string;
  //     cardBackgroundColor?: string;
  //     image?: IImage;
  // }[];
}

const stackedCards = [
  // {
  //   title: "Joy Software",
  //   cardBackgroundColor: "#f0f0f0",
  //   color: "#black",
  //   date: "November 2020 - December 2021",
  //   description:
  //     "Company providing software solutions and services for the tourism industry.",
  //   responsibilities: [
  //     "Partnered with IT Comtor to understand client requirements and translate them into actionable tasks.",
  //     "Worked closely with QA/QC teams to enhance product quality and meet client expectations.",
  //     "Collaborated with backend developers to ensure seamless API integration.",
  //     "Set up and developed client-side web applications for each sprint, ensuring timely delivery and functionality.",
  //   ],
  //   logo: "/companies/joy.webp",
  // },
  {
    title: "TCOM",
    cardBackgroundColor: "#fde002",
    color: "#0063aa",
    date: "December 2022 - October 2023",
    description:
      "Company providing digital solutions and services for the Japanese market.",
    responsibilities: [
      "Collaborated on a project with Vietnam Airlines to develop an eCommerce web application tailored for tourists.",
      "Coordinated with designers and QA/QC teams throughout each sprint to ensure product quality.",
      "Developed and integrated UI/UX with APIs for Tourist, Voucher, CMS, and Checkout pages.",
      "Identified and resolved client-side system errors, ensuring a smooth user experience.",
    ],
    logo: "/companies/tcom.svg",
  },
  {
    title: "WhammyTech",
    cardBackgroundColor: "rgb(41, 41, 41)",
    color: "rgb(243, 113, 33)",
    date: "October 2022 - January 2023",
    description: "Company specializing in digital solutions and services.",
    responsibilities: [
      "Engaged directly with clients to gather and refine project requirements.",
      "Collaborated with UI/UX designers and QA/QC teams to enhance the quality and usability of products.",
      "Configured servers and designed database schemas for optimized data flow.",
      "Developed web applications on both client and server sides, ensuring a full-stack approach to product delivery.",
    ],
    logo: "/companies/whammy-tech.png",
  },
  {
    title: "Saigon Digital",
    cardBackgroundColor: "#3165f5",
    color: "#fff",
    date: "March 2023 - Present",
    description:
      "Company providing digital business solutions and services for the European and U.S. markets.",
    responsibilities: [
      "Collaborated with Product Managers to outline and refine product specifications.",
      "Worked alongside UI/UX designers and QA/QC teams to optimize product quality and user experience.",
      "Built user-friendly web interfaces following design specifications to enhance the end-user experience.",
      "Developed customizable pages and components using Headless CMS and JAMstack technologies.",
      "Configured server environments and designed database schemas to ensure robust backend functionality.",
      "Developed comprehensive web applications on both client and server sides to support a fully integrated digital experience.",
    ],
    logo: "/companies/saigon-digital.svg",
  },
];

const Histories = (props: IStackedCard) => {
  // const {stackedCards} = props || {};
  const $wrapper = useRef<HTMLDivElement>(null);
  const $startTrigger = useRef<HTMLDivElement>(null);
  const $endTrigger = useRef<HTMLDivElement>(null);

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const checkMobileScreen = () => {
    window.innerWidth > 1280
      ? setIsMobileScreen(false)
      : setIsMobileScreen(true);

    ScrollTrigger.refresh();
  };
  useEffect(() => {
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card: any, index: number) => {
        const cardInner = card.querySelector(".card-inner");
        gsap.to(cardInner, {
          scrollTrigger: {
            trigger: card,
            start: () => (isMobileScreen ? `top top+=100` : `top top+=15%`),
            end: () => `bottom bottom`,
            scrub: 2,
            // markers: true,
            invalidateOnRefresh: true,
          },
          transformOrigin: "top",
          ease: Power4.easeInOut,
          scale: () =>
            1 - (cards.length - 1 - index) * (isMobileScreen ? 0.01 : 0.025),
        });

        gsap.set(card, {
          top: isMobileScreen ? index * 1 + "rem" : index * 2.3 + "rem",
        });

        ScrollTrigger.create({
          trigger: card,
          start: () => (isMobileScreen ? `top top+=100` : `top top+=15%`),
          pin: true,
          scrub: 0.3,
          pinSpacing: false,
          // markers: true,
          // anticipatePin: 1,
          end: () => `top+=${(stackedCards.length || 1) * 80} bottom`,
          endTrigger: $endTrigger.current,
          invalidateOnRefresh: true,
          // refreshPriority: 1,
        });
      });
    }, $wrapper);

    return () => ctx.revert();
  }, [isMobileScreen]);

  return (
    <section ref={$wrapper} className="mr-48">
      <div className="w-1/3 pb-10">
        <p
          id="experiences"
          className=" font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-blue-600 scroll-mt-72"
        >
          Experiences
        </p>
      </div>
      <div className="container" ref={$startTrigger}>
        <div className="">
          {stackedCards.map((card) => (
            <div
              className="card mb-20 will-change-transform"
              // key={index}
            >
              <div
                className="card-inner flex w-full flex-col-reverse items-center justify-center gap-y-5 rounded-[30px] text-center will-change-transform lg:flex-row lg:gap-x-10 lg:px-10 lg:py-14 lg:text-left xl:justify-between xl:pb-[60px] xl:pl-[80px] xl:pr-[60px] xl:pt-[88px]"
                style={{
                  backgroundColor: card.cardBackgroundColor,
                }}
              >
                <div
                  style={{ color: card?.color }}
                  className="lg:flex lg:w-1/2 lg:flex-col lg:justify-center xl:w-[45%] text-black gap-5"
                >
                  <p className="text-3xl font-bold">{card?.title}</p>
                  <p className="font-bold">{card?.date}</p>
                  <p>{card?.description}</p>
                  <div>
                    <span className="font-bold">Responsibilities:</span>
                    <ul className="mt-5 flex flex-col gap-3">
                      {card?.responsibilities?.map((respond, idx) => (
                        <li key={idx}>{respond}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative mx-auto aspect-[640/430] w-2/3 lg:w-1/2 xl:w-[48%]">
                  <Image
                    src={card?.logo}
                    alt={card?.title}
                    // sizes="100vw, (min-width: 1024px) 25vw"
                    // fill
                    height={500}
                    width={500}
                    className="object-contain w-full"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="end-trigger" ref={$endTrigger}></div>
        </div>
        <div
          style={{
            height: (stackedCards?.length || 1) * 140 + "px",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Histories;
