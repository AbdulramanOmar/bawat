"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { casecardData } from "../assets/Data";
import CaseCard from "../components/CaseCard";
import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const x = (clientX / window.innerWidth - 0.5) * 20;
  const y = (clientY / window.innerHeight - 0.5) * 20;

  const elements = hero.querySelectorAll(".parallax");
  elements.forEach((el) => {
    const htmlEl = el;
    const speed = Number(htmlEl.getAttribute("data-speed")) || 1;
    const depth = Number(htmlEl.getAttribute("data-depth")) || 1;

    // هنا نحدد هل العنصر يتحرك عكس الماوس أم لا
    const inverse = htmlEl.hasAttribute("data-inverse"); // إذا العنصر فيه data-inverse يتحرك عكس الماوس

    // نطبق الحركة
    htmlEl.style.transform = inverse
      ? `translate3d(${-x * speed}px, ${-y * speed}px, ${depth * 40}px)`
      : `translate3d(${x * speed}px, ${y * speed}px, ${depth * 40}px)`;
  });
};

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative parallax overflow-hidden w-full h-screen bg-cover z-10 bg-center bg-no-repeat"
      data-speed="0.1"
      data-depth="0.2"
    >
      {/* ✅ الخلفية المتحركة الجديدة */}
      <div
        className="absolute inset-0 -z-20 parallax"
        data-speed="0.5"
        data-depth="0.4"
      >
        <Image
          src="/hero-back.png"
          alt="Hero Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent -z-10" />
      {/* عناصر الصور الأسطورية المتحركة */}
      <div className="absolute inset-0 z-0">
        <Image
          src={require("../assets/hero-back-2.png")}
          alt=""
          width={1000}
          height={500}
          className="parallax absolute bottom-0 right-0 -z-10 "
          data-speed="0.1"
          data-depth="0.2"
        />
      </div>

      {/* المحتوى */}
      <div className="containe flex-col md:flex-row  flex items-center pt-40 gap-5 md:gap-15 text-white relative z-10">
        <div className="flex gap-10 flex-col sm:flex-row">
          <div className="w-full">
            <AnimatedText
              text="Achieving Hard Work in Hard Places"
              className="sm:text-[50px] text-3xl leading-[1.2]  font-bold"
              delay={3}
              speed={0.04}
            />
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 4, ease: "easeOut", duration: 1 }}
              className="text-lg sm:text-xl font-medium mt-5"
            >
              Reliable fuel transport, industrial services, and consulting
              solutions built for Iraq’s most complex environments
            </motion.h3>

            <div className="mt-14 hidden sm:flex items-center gap-8">
              {casecardData.map((item, i) => (
                <CaseCard
                  key={i}
                  title={item.title}
                  id={item.id}
                  img={item.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full pt-5 ">
          <Image
            src={require("../assets/hero-back-3.png")}
            alt=""
            width={300}
            height={300}
            className="parallax mr-auto ml-5"
            data-speed="0.3"
            data-depth="0.1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
