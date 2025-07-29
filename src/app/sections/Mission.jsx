"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const people = [
  {
    name: "Mission Statement",
    job: "CEO",
    message:
      "To deliver safe, tailored transportation and support services across challenging environments, helping our partners succeed through operational excellence, integrity, and commitment",
    img: "/test1.jpeg",
  },
  {
    name: "Vision ",
    job: "Project Manager",
    message:
      "To be the preferred partner for transportation and general services in Iraq and the region, recognized for our efficiency, safety, and strong local knowledge.",
    img: "/test1.jpeg",
  },
];
const Mission = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % people.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const current = people[index];

  return (
    <section className="flex flex-col md:flex-row-reverse w-full min-h-screen text-white overflow-hidden">
      {/* Left Side */}
      <div className="md:w-1/2 w-full bg-[#1b1f23] flex flex-col justify-center items-center px-6 py-10 sm:px-10 relative">
        <AnimatePresence mode="wait">
          <div className="relative w-full h-[300px] md:h-full overflow-hidden rounded-md">
            <Image
              src={current.img}
              alt={current.name}
              fill
              className="object-cover rounded-md"
            />
            <motion.div
              key={index}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 z-20"
            >
              <Image
                src={current.img}
                alt={current.name}
                fill
                className="object-cover rounded-md"
              />
            </motion.div>
          </div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.h2
            key={index + "-name"}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={container}
            transition={{ duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl absolute z-20 w-fit left-1/2 -translate-x-1/2 -top-5 font-bold text-white text-center"
          >
            {current.name
              .split(" ")[0]
              .split("")
              .map((char, i) => (
                <motion.span variants={child} key={i} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            <br />
            {current.name
              .split(" ")[1]
              .split("")
              .map((char, i) => (
                <motion.span variants={child} key={i} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full bg-[#9e0d22] flex flex-col justify-center px-6 py-10 sm:px-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-message"}
            className="flex items-start gap-4 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm sm:text-base leading-relaxed max-w-full sm:max-w-md">
              {current.message}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.a
          href="#"
          className="mt-6 inline-block text-sm font-semibold underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Learn more
        </motion.a>

        {/* Navigation */}
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 flex items-center gap-2 sm:gap-3">
          {/* Previous */}
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#9e0d22] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
            onClick={() =>
              setIndex((prev) => (prev - 1 + people.length) % people.length)
            }
          >
            <IoIosArrowForward className="text-base sm:text-lg rotate-180" />
          </div>
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#9e0d22] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
            onClick={() => setIndex((prev) => (prev + 1) % people.length)}
          >
            <IoIosArrowForward className="text-base sm:text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
