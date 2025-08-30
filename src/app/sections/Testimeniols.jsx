"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdQuote } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../components/Title";
import Link from "next/link";

const people = [
  {
    name: "Nour Aldeen  ",
    job: "CEO",
    message:
      "The Company’s highly qualified executive staff with extensive experience in the industry provide “turnkey” project development services to vertically integrated oil and gas companies. Provision of logistics services is also among ",
    img: "/lead (1).jpg",
  },
  {
    name: "Mohammed Sabah",
    job: "COO",
    message:
      "With deep expertise in oilfield operations, Anna leads multiple large-scale initiatives and ensures project efficiency, safety, and customer satisfaction across all fields.multiple large-scale initiatives and ensures project efficiency, safety,",
    img: "/lead (2).jpg",
  },
];

const TestimonialHero = () => {
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
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  const current = people[index];
  const prevIndex = (index - 1 + people.length) % people.length;
  const prevImg = people[prevIndex].img;

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen text-white overflow-hidden">
      {/* Left Side */}
      <div className="md:w-1/2 w-full bg-[#1b1f23] flex flex-col justify-center items-center px-6 py-10 sm:px-10 relative">
        <AnimatePresence mode="wait">
          <div className="relative w-full h-[300px] md:h-full overflow-hidden rounded-lg">
            <Image
              src={prevImg}
              alt={current.name}
              fill
              className="object-cover rounded-md"
            />
            <motion.div
              key={index}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
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
            <motion.span
              initial={{ y: "10px" }}
              animate={{ y: 0 }}
              className="absolute left-5 bottom-5 z-50"
            >
              {" "}
              {current.job}{" "}
            </motion.span>
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
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl absolute z-20 w-fit left-1/2 -translate-x-1/2 bottom-5 font-bold text-white text-center"
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
        <Title title="Management message" color="white" />

        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-message"}
            className="flex items-start gap-4 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <IoMdQuote size={40} className="mt-1 text-white" />
            <p className="text-sm sm:text-base leading-relaxed max-w-full sm:max-w-md">
              {current.message}
            </p>
          </motion.div>
        </AnimatePresence>

        <Link
          href="/about"
          className="mt-6 inline-block text-sm font-semibold underline"
        >
          Learn more
        </Link>

        {/* Navigation */}
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 flex items-center gap-2 sm:gap-3">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#9e0d22] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
            onClick={() => setIndex((prev) => (prev + 1) % people.length)}
          >
            <IoIosArrowForward className="text-base sm:text-lg" />
          </div>
          <Image
            src={people[(index + 1) % people.length].img}
            alt="next"
            width={40}
            height={40}
            className="rounded-sm border-2 border-white sm:w-[50px] sm:h-[50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialHero;

