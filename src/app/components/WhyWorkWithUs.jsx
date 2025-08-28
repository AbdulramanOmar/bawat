"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTruck, FaNetworkWired, FaGlobe, FaUsers } from "react-icons/fa";
import Title from "./Title";

const reasons = [
  {
    number: "01",
    title: "PROVEN FUEL LOGISTICS TRACK ",
    subtitle: "ACROSS IRAQ",
    icon: <FaTruck size={40} />,
  },
  {
    number: "02",
    title: "INTEGRATED SERVICES REACH",
    subtitle: " REGIONAL REACH",
    icon: <FaNetworkWired size={40} />,
  },
  {
    number: "03",
    title: "LOCAL EXECUTION WITH GLOBAL",
    subtitle: "WITH GLOBAL COMPLIANCE",
    icon: <FaGlobe size={40} />,
  },
  {
    number: "04",
    title: "EXCLUSIVE REPRESENTATION",
    subtitle: "OF PREMIUM PARTNERS",
    icon: <FaUsers size={40} />,
  },
];

export default function WhyWorkWithUs() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="bg-black text-white py-20 relative">
      <div className="mb-10">
        <Title title="Why Work With Us?" color="white"/>
      </div>
      <div className="containe ">

        {/* البطاقات */}
        <div className=" overflow-hidden lg:flex grid grid-cols-1 sm:grid-cols-2 flex-row lg:gap-0 gap-5 lg:items-center w-full">
          {reasons.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                layout
                className={`flex-shrink-0 rounded-3xl p-8 mx-2 h-[300px] cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "bg-white text-black w-80"
                    : "bg-neutral-900 text-white lg:w-67 w-80  opacity-60"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                  <span className="text-3xl font-bold opacity-40">{item.number}</span>
                </div>
                <p className="text-gray-500 mb-6">{item.subtitle}</p>
                <div className="flex items-center gap-2">
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

