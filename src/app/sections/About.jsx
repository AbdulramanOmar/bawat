"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const textRef1 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=100% top",
          scrub: true,
          pin: true,
        },
      });

      // ✅ الصورة تنزل لأسفل وتتصغر (بدون يمين/يسار)
      tl.to(imageRef.current, {
        scale: 0.6,
        y: 150,
        ease: "power2.out",
      });

      // ✅ النص يظهر من اليسار
      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
        },
        "<" // يبدأ مع نفس توقيت الصورة
      );
      tl.fromTo(
        textRef1.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
        },
        "<" // يبدأ مع نفس توقيت الصورة
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <h1 className="absolute text-white w-full z-20 pt-60 text-center">
        <AnimatedText
          text="Bawabt Albargsiyah"
          className="sm:text-7xl text-4xl leading-24  font-bold"
          delay={0}
          speed={0.04}
        />
      </h1>
      <section
        ref={sectionRef}
        className="relative w-full h-[100vh] overflow-hidden  text-white"
      >
        <div ref={imageRef} className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/about1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full h-screen flex items-center justify-between px-8">
          <div ref={textRef} className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
              Integrity, Responsibility, Diversity, Loyalty, Accountability,
              Availability
            </h2>
          </div>
          <div ref={textRef1} className="flex items-center flex-col ">
            <h3 className="text-7xl font-bold ">22+</h3>
            <span className="text-[#ddd]"> fuel tankers </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
