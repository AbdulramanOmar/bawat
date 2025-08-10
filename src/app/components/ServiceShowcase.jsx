"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FAQ = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    if (answerRef.current) {
      gsap.to(answerRef.current, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: 0.5,
        ease: "power2.out",
        overflow: "hidden",
      });
    }
  }, [open]);

  return (
    <div className="border-b border-gray-600 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between cursor-pointer items-center w-full text-left text-lg font-semibold"
      >
        <span>{question}</span>
        <span className="text-xl font-bold">{open ? "−" : "+"}</span>
      </button>
      <div
        ref={answerRef}
        className="overflow-hidden text-gray-300 text-base leading-relaxed mt-2"
        style={{ height: 0 }}
      >
        {answer}
      </div>
    </div>
  );
};
const services = [
  {
    id: 1,
    title: "Construction & Site Logistics",
    background: "/ser (4).webp",
    description:
      "Certified wiring, smart installations, and lighting with safety guaranteed.",
    content: (
      <p className="text-lg leading-relaxed">
        Certified wiring, lighting installations, and smart systems setup with
        safety guaranteed.
      </p>
    ),
  },
  {
    id: 2,
    title: "Fuel Sourcing & Transportation",
    background: "/ser (3).webp",
    description:
      "We transform outdated spaces into modern masterpieces with expert craftsmanship.",
    content: (
      <ul className="list-disc pl-5 text-lg leading-relaxed">
        <li>Old to new transformation</li>
        <li>Interior remodeling</li>
        <li>Custom solutions</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Oil & Gas Supply Chain",
    background: "/ser (2).webp",
    description:
      "Premium paints with perfect finishes, both interior and exterior.",
    content: (
      <div className="text-lg leading-relaxed space-y-4">
        <p>
          We use premium paints with professional-grade finishes for both
          interior and exterior.
        </p>
        <div className="space-y-2 ">
          <FAQ
            question="Do you do exterior?"
            answer="Yes, we provide both interior and exterior painting services with professional finish."
          />
          <FAQ
            question="What kind of paint do you use?"
            answer="We use eco-friendly, durable paints from top global brands ensuring long-lasting results."
          />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Business Consulting in Iraq",
    background: "/ser (1).webp",
    description:
      "Reliable plumbing solutions, emergency fixes, and expert installations.",
    content: (
      <ul className="list-disc pl-5 text-lg leading-relaxed">
        <li>Pipe repairs</li>
        <li>Bathroom setups</li>
        <li>Emergency leaks</li>
      </ul>
    ),
  },
];

const ServiceCard = ({ service }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current && contentRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 50 },
          {
            y: -50,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          contentRef.current,
          { y: 50 },
          {
            y: -150,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center justify-center px-6 text-white"
    >
      <div
        className={`w-full flex group flex-col md:flex-row items-center gap-5 ${
          service.id % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left: Image */}
        <div
          ref={imageRef}
          className="relative w-full md:w-4/5 h-[600px] shadow-2xl"
        >
          <Image
            src={service.background}
            alt={service.title}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right: Text */}
        <div
          ref={contentRef}
          className="w-full relative z-10 md:w-1/2 space-y-6"
        >
          <div
            className={`${
              service.id % 2 === 0 ? " md:-mr-20 " : " md:-ml-40 "
            }`}
          >
            <span className="font-black text-xl text-white ml-4">
              0{service.id}
            </span>
            <h2 className="text-6xl font-bold transition-colors duration-300 group-hover:text-[#9e0d22]">
              {service.title}
            </h2>
          </div>
          <p className="text-gray-300 text-lg">{service.description}</p>
          <div className="text-white">{service.content}</div>
          <button className="mt-4 px-6 py-2 border text-white duration-300">
            Read More →
          </button>
          <h3 className="absolute text-[#ffffff14] text-[340px] tracking-tighter uppercase font-bold -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            s{service.id}
          </h3>
        </div>
      </div>
    </section>
  );
};

const ServicesShowcase = () => {
  return (
    <main className="w-full py-24 bg-black">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </main>
  );
};

export default ServicesShowcase;
