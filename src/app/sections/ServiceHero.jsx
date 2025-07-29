"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceHero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    gsap.fromTo(
      el,
      { scale: 1 },
      {
        scale: 2.5,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
        transformOrigin: "center center",
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="relative w-full h-[150vh] pb-40 overflow-hidden flex items-center justify-center">
      <h1
  ref={textRef}
  className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[150px]  tracking-tighter font-black text-transparent bg-clip-text bg-cover bg-center text-center px-4"
  style={{
    backgroundImage: "url('/ser (3).webp')",
  }}
>
  SERVICES
</h1>

    </section>
  );
};

export default ServiceHero;
