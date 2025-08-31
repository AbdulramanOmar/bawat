"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projectContent = [
  {
    id: "01",
    title: "Client Case Studies ",
    iconimg: "/com (1).png",
    description:
      "Bawabt Albargsiyah supports Iraq Land Company in its field operations at the Lukoil oilfield by providing consistent and officially authorized fuel supply logistics. Our ability to maintain uninterrupted delivery schedules has enabled their on-site construction and drilling teams to operate without disruption, even in remote areas with complex logistical access. Our relationship with Iraq Land showcases our ability to support high-value oilfield contractors in strategic projects across Iraq’s southern energy corridor.",
    image: "/project (1).jpg",
  },
  {
    id: "02",
    title: "Client Case Studies ",
    iconimg: "/com (2).webp",
    campany: "CMA CGM Iraq",
    width: "200px",
    description: `As one of the leading international shipping companies, CMA CGM relies on reliable inland fuel and logistics services to power its operational assets in Iraq. Bawabt Albargsiyah has worked with CMA CGM’s local branches to ensure timely and compliant fuel delivery to support port-based logistics, warehousing, and inland haulage. Our role complements their mission to provide uninterrupted freight movement within the Iraqi market.`,
    image: "/project (3).jpg",
  },
  {
    id: "03",
    title: "Client Case Studies ",
    iconimg: "/campany (6).png",
    campany: "Olive Group Training",
    description:
      "For Olive Group, an international safety and security training provider, we have delivered consultation and logistics facilitation for fuel sourcing and operational mobility in southern Iraq. This includes helping establish dependable fuel access points and supporting their training center’s logistical readiness with compliant, locally sourced fuel.",
    image: "/project (4).jpg",
  },
  {
    id: "04",
    title: "Client Case Studies ",
    iconimg: "/com (5).png",
    campany: "ALtcom Iraq",
    description:
      "Altcom’s role in construction and infrastructure development aligns with our expertise in site-based logistics. Bawabt Albargsiyah provides construction site fueling and transportation services to Altcom project locations across Basra. Our support enhances their machinery uptime and contributes to the smooth execution of time-sensitive infrastructure projects.",
    image: "/project (5).jpg",
  },
  {
    id: "05",
    title: "Client Case Studies ",
    iconimg: "/com (4).png",
    campany: "Triyaki Agro",

    description:
      "As an agro-industrial firm with large-scale warehousing and supply chain operations, Tiryaki benefits from our on-call fuel transportation services, particularly in support of their seasonal demand cycles and storage facility operations. We provide tailored solutions to ensure they can maintain energy-efficient logistics without fuel shortages, particularly during agricultural peak periods.",
    image: "/project (6).jpg",
  },
  {
    id: "06",
    title: "Client Case Studies ",
    iconimg: "/com (3).png",
    campany: "Petrojet",

    description:
      "Bawabt Albargsiyah provides Petrojet with fuel and construction site logistics support in Iraq. As Petrojet executes high-stakes EPC and infrastructure projects across the region, our role ensures their teams and machinery receive timely energy access and logistical readiness in challenging environments. This partnership is built on precision, compliance, and synchronized execution timelines.",
    image: "/project (7).jpg",
  },
  {
    id: "07",
    title: "Client Case Studies ",
    iconimg: "/com (1).svg",
    campany: "Weir Group - Iraq Operations",

    description:
      "As Weir Group delivers engineering solutions in the energy and mining sectors, Bawabt Albargsiyah supports their operations in Iraq through fuel logistics and consulting services. Our team helps ensure energy access and regulatory coordination for Weir’s sites, enabling their teams to maintain uptime and safety across multiple industrial zones.",
    image: "/project (8).jpg",
  },
  {
    id: "08",
    title: "Client Case Studies ",
    iconimg: "/com (2).png",
    campany: "Daewoo E&C",

    description:
      "With Daewoo E&C executing mega infrastructure and industrial development projects in Iraq, Bawabt Albargsiyah provides critical on-ground logistics consultation and energy supply services, especially in areas like Al-Faw port development. Our role ensures that Daewoo’s operational capacity remains uninterrupted, compliant, and well-integrated into Iraq’s industrial ecosystem.",
    image: "/project (9).jpg",
  },
];

export default function ProjectsSection() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      const image = section.querySelector(".bg-image");
      const title = section.querySelector(".title");
      const desc = section.querySelector(".desc");
      const imgicon = section.querySelector(".imgicon");
      const number = section.querySelector(".number");

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
          number,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=4"
        )
        .fromTo(
          imgicon,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=2"
        )
        .fromTo(
          title,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=3"
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
    <div className="relative hidden md:block">
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
                <span
                  className="text-2xl font-black  number "
                  style={{
                    WebkitTextStroke: "2px #9e0d22",
                    color: "transparent",
                  }}
                >
                  {" "}
                  {project.id}{" "}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 title">
                  {project.title}
                </h2>
                <div
                  className={`imgicon font-medium flex items-center mb-5 gap-5 ${
                    isEven ? "text-right mr-12" : "text-left ml-10"
                  }`}
                >
                  <h4> {project.campany} </h4>
                  <img
                    src={project.iconimg}
                    className={`  w-[150px] ${project.width}`}
                    alt=""
                  />
                </div>
                <p className="text-base  desc">{project.description}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );

}
