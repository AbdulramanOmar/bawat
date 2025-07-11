import React, { useState } from "react";
import Title from "../components/Title";
import { IoIosArrowForward } from "react-icons/io";

const blog = [
  {
    id: 1,
    title: "Our Services in Basra: The Beating Heart of Logistics",
    image: "blog.png",
    description:
      "Basra is home to our main headquarters, where we manage major operations and fuel distribution for global clients like Lukoil and Altcom. We offer efficient services that ensure speed, accuracy, and reliability.",
    date: "2025-Aug-21",
    location: "Basra",
  },
  {
    id: 2,
    title: "Umm Qasr: Customs Clearance and Fuel Entry Hub",
    image: "blog.png",
    description:
      "At Umm Qasr Port, we provide expert customs clearance and fuel entry services, making us a trusted partner in supply chain management across Iraq’s maritime gateways.",
    date: "2025-Aug-13",
    location: "Umm Qasr",
  },
  {
    id: 3,
    title: "Baghdad: Strategic Advisory and International Partnerships",
    image: "blog.png",
    description:
      "In Baghdad, we offer strategic consulting services to international companies, facilitating their market entry and operations with partners like CMA CGM.",
    date: "2025-Aug-13",
    location: "Baghdad",
  },
  {
    id: 4,
    title: "Al-Faw Port: Supporting Future Infrastructure Projects",
    image: "blog.png",
    description:
      "At Al-Faw Port, we support logistics operations for major infrastructure projects, including Daewoo's mega developments, contributing to Iraq’s long-term growth.",
    date: "2025-Aug-13",
    location: "Al-Faw",
  },
  {
    id: 5,
    title: "Dubai: Our Gateway to Global Markets",
    image: "blog.png",
    description:
      "Through our Dubai office, we coordinate shipments, manage supplier relationships, and ensure high-quality logistics operations between Iraq and international markets.",
    date: "2025-Aug-13",
    location: "Dubai",
  },
  {
    id: 1,
    title: "Our Services in Basra: The Beating Heart of Logistics",
    image: "blog.png",
    description:
      "Basra is home to our main headquarters, where we manage major operations and fuel distribution for global clients like Lukoil and Altcom. We offer efficient services that ensure speed, accuracy, and reliability.",
    date: "2025-Aug-13",
    location: "Basra",
  },
  {
    id: 2,
    title: "Umm Qasr: Customs Clearance and Fuel Entry Hub",
    image: "blog.png",
    description:
      "At Umm Qasr Port, we provide expert customs clearance and fuel entry services, making us a trusted partner in supply chain management across Iraq’s maritime gateways.",
    date: "2025-Aug-13",
    location: "Umm Qasr",
  },
  {
    id: 3,
    title: "Baghdad: Strategic Advisory and International Partnerships",
    image: "blog.png",
    description:
      "In Baghdad, we offer strategic consulting services to international companies, facilitating their market entry and operations with partners like CMA CGM.",
    date: "2025-Aug-13",
    location: "Baghdad",
  },
  {
    id: 4,
    title: "Al-Faw Port: Supporting Future Infrastructure Projects",
    image: "blog.png",
    description:
      "At Al-Faw Port, we support logistics operations for major infrastructure projects, including Daewoo's mega developments, contributing to Iraq’s long-term growth.",
    date: "2025-Aug-13",
    location: "Al-Faw",
  },
  {
    id: 5,
    title: "Dubai: Our Gateway to Global Markets",
    image: "blog.png",
    description:
      "Through our Dubai office, we coordinate shipments, manage supplier relationships, and ensure high-quality logistics operations between Iraq and international markets.",
    date: "2025-Aug-13",
    location: "Dubai",
  },
];

const Blog = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScrollLeft = () => {
    setScrollX((prev) => Math.max(prev - 400, 0));
  };

  const handleScrollRight = () => {
    setScrollX((prev) => prev + 400);
  };

  return (
    <section className="py-20">
      <Title title={"blog"} color="white" />
      <div className="flex containe items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="px-4 py-2 text-black rounded-full bg-[#ddd]">
            News
          </span>
          <span className="px-3 py-2 text-black rounded-full bg-[#ddd]">
            Events
          </span>
          <span className="px-3 py-2 text-black rounded-full bg-[#ddd]">
            Media
          </span>
        </div>
        <div className="flex items-center gap-5">
          <div
            className="w-10 h-10 bg-white text-[#9e0d22] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
            onClick={handleScrollLeft}
          >
            <IoIosArrowForward className="text-xl rotate-180" />
          </div>

          <div
            className="w-10 h-10 bg-white text-[#9e0d22] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
            onClick={handleScrollRight}
          >
            <IoIosArrowForward className="text-xl " />
          </div>
        </div>
      </div>

      <div className="overflow-hidden mt-10 ml-20">
        <div
          className="flex items-center gap-10 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${scrollX}px)` }}
        >
          {blog.map((blog, i) => {
            return (
              <div
                key={i}
                className="relative cursor-pointer group p-5 min-w-[350px] z-10 h-[350px] flex justify-between flex-col"
              >
                <div>
                  <h4 className="group-hover:opacity-0 transition-colors">
                    {blog.title}
                  </h4>
                </div>
                <div className="flex justify-between border-t pt-3 border-[#bbb]">
                  <h5 className="text-7xl text-[#c03423] font-medium group-hover:text-white transition-colors -tracking-widest">
                    {blog.date.split("-")[2]}
                  </h5>
                  <div className="flex items-center flex-col">
                    <h5 className="group-hover:text-white transition-colors">
                      {blog.date.split("-")[1]}
                    </h5>
                    <h5 className="group-hover:text-white transition-colors">
                      {blog.date.split("-")[0]}
                    </h5>
                  </div>
                </div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute top-0 left-0 w-full h-full -z-10"
                />
                <div className="absolute bg-[#d3d3d3] transition-all ease-in-out duration-500 group-hover:h-0 top-0 left-0 w-full h-full -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
