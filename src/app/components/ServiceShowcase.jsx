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
    title: "Fuel Sourcing & Transportation",
    background: "/ser (3).png",
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
    id: 2,
    title: "Construction & Site Logistics",
    background: "/ser (4).png",
    description:
      "Delivering infrastructure, industrial, and civil projects with unmatched precision and reliability.",
    content: (
      <div className="text-lg leading-relaxed space-y-4">
        <p>
          At <strong>Bawabt Albargsiyah</strong>, we bring world-class expertise
          to Basra and southern Iraq, delivering infrastructure, industrial, and
          civil works that shape the future. Our scope covers:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Earthworks & foundation preparation</li>
          <li>Steel structure fabrication & installation</li>
          <li>Pipeline laying & facility setup</li>
        </ul>
      </div>
    ),
  },

  {
    id: 3,
    title: "Oil & Gas Supply Chain",
    background: "/ser (2).webp",
    description:
      "Certified, traceable, and timely oilfield supply solutions from source to site.",
    content: (
      <div className="text-lg leading-relaxed space-y-4">
        <p>
          We are your trusted sourcing partner in Iraq’s oil & gas sector,
          providing specialized materials and equipment including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>API 5CT Casing & Tubing</li>
          <li>Complete range of OCTG (Oil Country Tubular Goods)</li>
        </ul>
        <div className="space-y-2">
          <FAQ
            question="Do you supply both drilling and production materials?"
            answer="Yes, we cover the full range of oilfield supply needs for both drilling and production activities."
          />
          <FAQ
            question="Are your products certified?"
            answer="All our materials come with full certification and traceability from globally recognized manufacturers."
          />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Business Consulting in Iraq",
    background: "/ser (1).jpg",
    description:
      "Strategic market entry, regulatory navigation, and on-ground business insights.",
    content: (
      <div className="text-lg leading-relaxed space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Market Entry Strategies:</strong> Regulatory mapping, local
            compliance, and JV structuring.
          </li>
          <li>
            <strong>Tender & Contract Support:</strong> Public and private
            bidding assistance with local connections.
          </li>
          <li>
            <strong>Licensing & Regulatory Navigation:</strong> Business
            registration, operational licensing, and governmental clearances.
          </li>
          <li>
            <strong>On-Ground Knowledge:</strong> Land availability, industrial
            zones, and access to key energy & infrastructure projects.
          </li>
        </ul>
        <p>
          With our insider knowledge and local networks, we transform market
          challenges into business opportunities.
        </p>
      </div>
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
          { y: 150 },
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
            <h2 className="lg:text-6xl text-4xl font-bold transition-colors duration-300 group-hover:text-[#9e0d22]">
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
