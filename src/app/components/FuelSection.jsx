"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const FuelSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    gsap.fromTo(
      image,
      { x: -200, opacity: 0, rotate: -20 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      text,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col md:flex-row items-center  justify-center px-6 md:px-20 py-24  text-white gap-12 "
    >
      <div
        ref={imageRef}
        className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl"
      >
        <img
          src="/ser (1).webp"
          alt="Fuel Transport"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Text */}
      <div ref={textRef} className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold ">
          Fuel Sourcing & Transportation
        </h2>
        <p className="text-gray-300 text-lg">
          We specialize in the transportation of petroleum products including
          petrol, diesel, black oil, and crude oil. Our operations follow strict
          safety and compliance protocols.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>GPS-tracked, secure fleet</li>
          <li>Trained & certified long-haul drivers</li>
          <li>Nationwide delivery including remote zones</li>
          <li>24/7 coordination & operational support</li>
        </ul>
      </div>
    </section>
  );
};

export default FuelSection;
