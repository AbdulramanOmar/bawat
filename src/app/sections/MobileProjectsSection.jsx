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

export default function MobileProjectsSection() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      const image = section.querySelector(".bg-image");
      const title = section.querySelector(".title");
      const desc = section.querySelector(".desc");
      const imgicon = section.querySelector(".imgicon");
      const number = section.querySelector(".number");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        })
        .fromTo(image, { scale: 1.2, y: 50 }, { scale: 1, y: 0, duration: 1.5 })
        .fromTo(number, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
        .fromTo(imgicon, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8")
        .fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6")
        .fromTo(desc, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4");
    });
  }, []);

  return (
    <div className="block md:hidden bg-black">
      {projectContent.map((project, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="relative py-12 px-4 flex flex-col items-center text-center text-white"
        >
          {/* الصورة */}
          <div className="relative w-full h-[250px] mb-6">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl brightness-75 bg-image"
            />
          </div>

          {/* النص */}
          <span
            className="text-2xl font-black number mb-2"
            style={{ WebkitTextStroke: "1px #9e0d22", color: "transparent" }}
          >
            {project.id}
          </span>
          <h2 className="text-2xl font-bold mb-4 title">{project.title}</h2>
          <div className="imgicon flex items-center justify-center gap-3 mb-4">
            <h4 className="font-medium">{project.campany}</h4>
            <img
              src={project.iconimg}
              className="w-[100px] object-contain"
              alt=""
            />
          </div>
          <p className="text-sm leading-relaxed desc">{project.description}</p>
        </section>
      ))}
    </div>
  );
}
