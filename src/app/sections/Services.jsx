"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "../components/AnimatedText";
import { FaArrowRight } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const ServicesData = [
  {
    name: "Fuel Sourcing & Transport",
    description:
      "We source and transport fuel to your location, ensuring timely delivery and quality service.",
    img: "ser (3).png",
  },
  {
    name: "Construction & Site Logistics",
    description:
      "We manage all aspects of construction logistics, ensuring efficient site operations.",
    img: "ser (4).png",
  },
  {
    name: "Oil & Gas Supply Chain",
    description:
      "We provide comprehensive supply chain solutions for the oil and gas industry, from procurement to delivery.",
    img: "ser (2).png",
  },
  {
    name: "Business Consulting in Iraq",
    description:
      "We offer expert consulting services to help businesses navigate the Iraqi market and achieve success.",
    img: "ser (1).png",
  },
];

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const panelsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".horizontal-panel");

      gsap.to(panelsRef.current, {
        x: () => -(window.innerWidth * (panels.length - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => `+=${window.innerWidth * (panels.length - 1)}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-black text-white">
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div
          ref={panelsRef}
          className="flex h-full"
          style={{ width: `${ServicesData.length * 100}vw` }}
        >
          {ServicesData.map((service, index) => (
            <div
              key={index}
              className="horizontal-panel w-screen h-screen relative overflow-hidden"
            >
              {/* ✅ الخلفية */}
              <img
                src={service.img}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* ✅ الزجاج + المحتوى */}
              <div className="relative z-10 h-full w-full flex items-end pb-15 justify-center px-10">
                <div className="w-full max-w-5xl mx-auto flex justify-between items-end sm:items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
                  {/* ✅ النصوص */}
                  <div className="max-w-2xl">
                    <AnimatedText
                      text={service.name}
                      className="text-white sm:text-5xl text-3xl font-bold leading-tight mb-4"
                      delay={0}
                      speed={0.04}
                    />
                    <p className="text-white/80 sm:text-lg text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* ✅ السهم */}
                  <div className="hidden sm:flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition">
                      <FaArrowRight className="text-white text-2xl -rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
