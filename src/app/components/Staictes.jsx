"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "22+",
    label: "Fuel Tankers",
    description: "High-performance tankers delivering across the region.",
  },
  {
    number: "40+",
    label: "Certified Drivers",
    description: "Professionally licensed operators and drivers.",
  },
  {
    number: "24/7",
    label: "Dispatch",
    description: "Always-on dispatch system with fast response time.",
  },
  {
    number: "1.2M+",
    label: "Liters Delivered",
    description: "Fuel transported monthly across multiple projects.",
  },
  {
    number: "0",
    label: "Critical Incidents",
    description: "Zero major incidents in the past three years.",
  },
  {
    number: "98.5%",
    label: "On-Time Delivery",
    description: "Precise timing and logistics you can depend on.",
  },
];

export default function StatisticsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stat-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          rotate: 5,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          ease: "power3.out",
          duration: 1.2,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".stats-title",
        {
          opacity: 0,
          y: 50,
          letterSpacing: "-0.05em",
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.02em",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".stats-title",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-[#0e0e0e] py-24 px-4 text-white overflow-hidden relative"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="stats-title text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-wide">
          Trusted Numbers That Matter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-xl transform transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="text-5xl font-bold text-[#9e0d22] mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm text-gray-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
