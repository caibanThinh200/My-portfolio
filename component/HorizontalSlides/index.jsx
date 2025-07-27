import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import 'tailwindcss/tailwind.css';

// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollCards = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cards = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Innovative solution for modern problems",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Cutting-edge technology implementation",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Revolutionary approach to design",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Next generation user experience",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "AI-powered performance optimization",
      color: "bg-red-500",
    },
    {
      id: 1,
      title: "Project Alpha",
      description: "Innovative solution for modern problems",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Cutting-edge technology implementation",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Revolutionary approach to design",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Next generation user experience",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "AI-powered performance optimization",
      color: "bg-red-500",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cardsContainer = cardsContainerRef.current;

    // Calculate total width needed for all cards plus gaps
    const totalWidth = cards.length * 320 + (cards.length - 1) * 32;

    // Set up GSAP animation
    gsap.to(cardsContainer, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "-100px",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[85%] h-[200vw] overflow-hidden !mr-48"
    >
      <div className="absolute top-0 left-0 flex">
        <div
          ref={cardsContainerRef}
          className="flex space-x-8 px-8"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 rounded-2xl shadow-xl overflow-hidden bg-[#A6B5CA] transform transition-transform hover:scale-105"
            >
              <div className={`w-full h-1/3 ${card.color} flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              </div>
              <div className="p-6 h-2/3 flex flex-col">
                <p className="text-gray-600 text-lg mb-4">{card.description}</p>
                <button className="mt-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCards;