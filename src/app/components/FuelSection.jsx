"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTruckMoving, FaHardHat, FaUserShield, FaGlobe } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FuelSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Image animation
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.2, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
      )
        // Text stagger
        .fromTo(
          textRefs.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-12 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/Petro.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Image */}
      <div
        ref={imageRef}
        className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(158,13,34,0.7)] z-10"
      >
        <img
          src="/Petro1.webp"
          alt="Fuel Transport"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div className="relative w-full md:w-1/2 space-y-6 z-10">
        <h2
          ref={(el) => (textRefs.current[0] = el)}
          className="text-4xl md:text-6xl font-extrabold tracking-wide"
          style={{ color: "#9e0d22" }}
        >
          Petroleum Product Transportation
        </h2>

        <p
          ref={(el) => (textRefs.current[1] = el)}
          className="text-gray-300 text-lg"
        >
          We specialize in the transportation of petroleum products including
          petrol, diesel, black oil, and crude oil. Our operations follow strict
          safety and compliance protocols.
        </p>

        <ul className="space-y-4 text-lg">
          <li
            ref={(el) => (textRefs.current[2] = el)}
            className="flex items-center gap-3"
          >
            <FaTruckMoving className="text-[#9e0d22] text-2xl" />
            Transport of petrol, diesel, black oil, crude oil
          </li>
          <li
            ref={(el) => (textRefs.current[3] = el)}
            className="flex items-center gap-3"
          >
            <FaHardHat className="text-[#9e0d22] text-2xl" />
            Operations with focus on safety and compliance
          </li>
          <li
            ref={(el) => (textRefs.current[4] = el)}
            className="flex items-center gap-3"
          >
            <FaUserShield className="text-[#9e0d22] text-2xl" />
            Certified, professional, experienced drivers
          </li>
          <li
            ref={(el) => (textRefs.current[5] = el)}
            className="flex items-center gap-3"
          >
            <FaGlobe className="text-[#9e0d22] text-2xl" />
            Region-wide coverage, 24/7 operation
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FuelSection;
