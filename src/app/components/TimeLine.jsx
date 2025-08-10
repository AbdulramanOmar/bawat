"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { year: 2013, events: ["January 14 – Foundation of Naftagaz-Drilling"] },
  {
    year: 2014,
    events: [
      "September – Start of cooperation with Gazpromneft",
      "October – First oil well drilled at Verkhne-Shapshinskoye field",
    ],
  },
  { year: 2015, events: ["Launch of Vostok project"] },
  { year: 2016, events: ["Expanded operations to new regions"] },
  { year: 2017, events: ["Signed major contract with Lukoil"] },
];

const TimeLine = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item) => {
      const year = item.querySelector(".year-circle");
      const paragraphs = item.querySelectorAll("p");

      gsap.fromTo(
        year,
        { opacity: 0, scale: 0.5, rotate: -45, filter: "blur(5px)" },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top center+=150",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        { y: 50, opacity: 0, rotateX: 60 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.25,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top center+=150",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      "#timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="relative bg-gradient-to-b from-gray-900 to-black py-28 overflow-hidden"
      ref={containerRef}
    >
      {/* خط الزمن */}
      <div
        id="timeline-line"
        className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-red-600 to-yellow-500 origin-top h-full z-0 animate-pulse"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="timeline-item flex flex-col items-center text-center gap-6 mb-40"
          >
            {/* سنة */}
            <div className="year-circle w-28 h-28 rounded-full border-4 border-red-600 flex items-center justify-center text-3xl font-black text-red-400 bg-white/10 backdrop-blur-md shadow-2xl animate-spin-slow hover:scale-105 transition-transform duration-500">
              {item.year}
            </div>

            {/* الأحداث */}
            <div className="space-y-4">
              {item.events.map((event, idx) => (
                <p
                  key={idx}
                  className="text-gray-100 relative z-10 bg-white/5 border border-white/10 px-6 py-5 text-lg font-medium leading-relaxed rounded-xl shadow-md backdrop-blur-lg"
                >
                  {event}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeLine;
