"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HiOutlineUserGroup,
  HiOutlineDocument,
  HiOutlineTruck,
  HiOutlineFire,
} from "react-icons/hi";
import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Initial Meeting & Needs Assessment",
    description:
      "We meet with the client to identify the scope of services required, locations, and technical specifications.",
    icon: <HiOutlineUserGroup size={28} />,
  },
  {
    title: "Compliance & Clearance Check",
    description:
      "We conduct regulatory reviews and initiate the onboarding documentation process to ensure compliance with Iraqi authorities and client internal policies.",
    icon: <HiOutlineDocument size={28} />,
  },
  {
    title: "Logistics Planning & Contract Signing",
    description:
      "Our operations team designs a full logistics and delivery plan, resource allocation, and contract terms are finalized.",
    icon: <HiOutlineTruck size={28} />,
  },
  {
    title: "Fuel Scheduling",
    description:
      "Fuel deliveries are dispatched, monitored in real time, and secured under professional fleet management.",
    icon: <HiOutlineFire size={28} />,
  },
];

export default function ProcessFlow() {
  const svgRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 85%",
        },
      }
    );

    stepRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: i % 2 === 0 ? -80 : 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 2 + i * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] text-white py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-40">
          <Title title="How to Work With Us" color="white" />
        </h2>

        {/* Large screens (Horizontal flow) */}
        <div className="hidden md:block relative h-[350px]">
          {/* Wavy SVG Line */}
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="absolute top-1/2 -translate-y-1/2 w-full h-40 z-0"
          >
            <path
              ref={svgRef}
              d="M0,50 Q250,0 500,50 T1000,50"
              fill="transparent"
              stroke="#9e0d22"
              strokeWidth="5"
            />
          </svg>

          {/* Steps horizontally */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
            {steps.map((step, index) => {
              const isAbove = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`relative w-1/4 text-center z-10 ${
                    isAbove ? "-mt-40" : "mt-40"
                  }`}
                >
                  {/* Big Number */}
                  <div className="absolute text-[180px] font-extrabold text-[#ffffff14] -top-28 left-1/2 transform -translate-x-1/2 select-none pointer-events-none leading-none">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#0f0f0f] border-4 border-[#9e0d22] flex items-center justify-center text-[#9e0d22] shadow-xl z-10 relative">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-3">
                    <h3 className="text-xl font-semibold text-[#9e0d22] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small screens (Vertical flow) */}
        <div className="block md:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-[4px] bg-[#9e0d22]"></div>

          <div className="flex flex-col space-y-20 relative pl-20">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="relative"
              >
                {/* Big Number */}
                <div className="absolute -left-16 text-[80px] font-extrabold text-[#ffffff14] -top-6 select-none pointer-events-none leading-none">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 absolute -left-8 top-2 rounded-full bg-[#0f0f0f] border-4 border-[#9e0d22] flex items-center justify-center text-[#9e0d22] shadow-xl z-10">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="bg-[#111] rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-[#9e0d22] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
