"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    year: 2013,
    events: ["January 14 – Foundation of Naftagaz-Drilling"],
  },
  {
    year: 2014,
    events: [
      "September – Start of cooperation with Gazpromneft October – First oil well drilled at Verkhne-Shapshinskoye field ",
    ],
  },
  {
    year: 2015,
    events: ["Launch of Vostok project"],
  },
  {
    year: 2016,
    events: ["Expanded operations to new regions"],
  },
  {
    year: 2017,
    events: ["Signed major contract with Lukoil"],
  },
];

const TimeLine = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item, i) => {
      const year = item.querySelector(".year-circle");
      const paragraphs = item.querySelectorAll("p");

      gsap.fromTo(
        year,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
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
      className="relative bg-white py-20 overflow-hidden"
      ref={containerRef}
    >
      {/* خط الزمن */}
      <div
        id="timeline-line"
        className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-red-700 origin-top h-full z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="timeline-item flex flex-col items-center text-center gap-6 mb-32"
          >
            {/* سنة */}
            <div className="year-circle w-50 h-50 rounded-full border-4 border-red-700 flex items-center justify-center text-2xl font-bold text-red-700 bg-white shadow-md">
              {item.year}
            </div>

            {/* الأحداث */}
            <div className="space-y-4">
              {item.events.map((event, idx) => (
                <p
                  key={idx}
                  className="text-gray-800 relative z-10 bg-white py-5 -mt-5    text-lg font-medium leading-relaxed"
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
