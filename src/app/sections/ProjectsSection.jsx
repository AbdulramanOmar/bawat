"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projectContent = [
  {
    title: "Project One",
    description: "This is project one from another world.",
    image: "/ser (1).webp",
  },
  {
    title: "Project Two",
    description: "Another divine project appearing slowly.",
    image: "/ser (2).webp",
  },
  {
    title: "Project Three",
    description: "Parallax magic from project three.",
    image: "/ser (3).webp",
  },
  {
    title: "Project Four",
    description: "Final miracle project with fade transition.",
    image: "/ser (4).webp",
  },
];

export default function ProjectsSection() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      const image = section.querySelector(".bg-image");
      const title = section.querySelector(".title");
      const desc = section.querySelector(".desc");

      const imageX = i % 2 === 0 ? "50%" : "-50%";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300%",
            scrub: true,
            pin: true,
          },
        })
        .fromTo(
          image,
          { scale: 1.2, y: "-10%", borderRadius: "0", x: "0%" },
          {
            scale: 0.8,
            borderRadius: "30px",
            x: imageX,
            y: "0%",
            duration: 3,
            ease: "power2.out",
          }
        )
        .fromTo(
          title,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=2"
        )
        .fromTo(
          desc,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=1"
        );
    });
  }, []);

  return (
    <div className="relative">
      {projectContent.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
          >
            <div
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-between w-full max-w-7xl px-4 md:px-10 gap-10`}
            >
              {/* الصورة */}
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover rounded-xl brightness-75 bg-image"
                />
              </div>

              {/* النص */}
              <div
                className={`w-full md:w-1/2 text-white ${
                  isEven ? "text-left" : "text-right"
                }`}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 title">
                  {project.title}
                </h2>
                <p className="text-xl md:text-2xl desc">
                  {project.description}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
