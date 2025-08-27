"use client";
import Title from "./Title";
import ElegantNumber from "./ElegantNumber";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const locations = [
  {
    name: "Umm Qasr Port",
    img: "/ser (1).webp",
    des: "Customs clearance, fuel entry, and distribution logistics.",
    fuel: 400,
    style: "right-[72px] bottom-[40px]",
  },
  {
    name: "Al-Faw Port",
    img: "/ser (1).webp",
    des: "Fuel and consultation support for mega infrastructure initiatives.",
    fuel: 450,
    style: "right-0 bottom-[60px]",
  },
  {
    name: "Basra ",
    img: "/ser (1).webp",
    des: "Fleet operations, fuel logistics, and key client hubs such as Lukoil, Altcom, Petrojet, and Weir.",
    fuel: 400,
    style: "right-[40px] bottom-[80px]",
  },
  {
    name: "Baghdad",
    img: "/ser (1).webp",
    des: " Strategic consultations, client onboarding, and regulatory navigation with companies like CMA CGM and international investors.",
    fuel: 400,
    style: "left-[220px] top-[132px]",
  },
];

const OurLocation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-[120px] relative">
      <Title title="Our Locations" color="white" />
      <div className="containe text-white flex items-center justify-between flex-col md:flex-row">
        <div className="w-full p-4">
          <ElegantNumber num={6800000} />
          <h5 className="font-bold text-white">fuel transport</h5>
        </div>
        <div>
          <p className="text-2xl font-bold leading-7">
            Founded in Basra, Iraq, Bawabt Albargsiyah for General Services and
            Limited Transportation has established itself as a reliable partner
            in the transport of petroleum products across Iraq. With a
            reputation built on integrity, safety, and operational excellence,
            the company continues to evolve, expanding its scope of services and
            regional presence.
          </p>
        </div>
      </div>

      <div className="relative w-full pb-[200px] overflow-hidden">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute right-0 top-0 h-screen  w-[400px] bg-white flex flex-col items-center gap-4"
            >
              <div>
                <Image
                  src={locations[hoveredIndex].img}
                  alt={locations[hoveredIndex].name}
                  width={400}
                  height={300}
                />
              </div>
              <div className="px-[20px]">
                <h3 className="text-4xl text-center font-bold">
                  {locations[hoveredIndex].name}
                </h3>
                <p className="text-gray-600 py-5">
                  {locations[hoveredIndex].des}
                </p>
                <p className="text-gray-600">
                  <strong>Fuel Capacity :</strong>{" "}
                  {locations[hoveredIndex].fuel} Liters
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="py-10 relative">
          <div className="mx-auto w-fit relative z-20">
            <Image
              width={600}
              height={600}
              src="/pngwing.com (1).png"
              alt="abawat-iraq-map"
              className="mx-auto w-full relative z-10"
            />

            {locations.map((loc, index) => (
              <img
                key={loc.name}
                src="/location.png"
                className={`absolute cursor-pointer w-[35px] transition-transform duration-300 ease-in-out hover:scale-125 z-50 ${loc.style}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}

            <motion.span
              whileInView={{ width: "400px" }}
              initial={{ width: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="absolute right-[28px] bottom-[60px] sm:right-[120px] sm:bottom-[60px] origin-right z-40 h-[2px] w-[600px] rounded-full bg-[#c7c7c734]"
            >
              <h3 className="text-[#ddd] font-medium">Head Office</h3>
              <p className="text-[#d3d3d3da]">Basra</p>
            </motion.span>
            <motion.span
              whileInView={{ width: "350px" }}
              initial={{ width: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="absolute rotate-0 origin-right left-[-104px] top-[148px] h-[2px] w-[350px] rounded-full bg-[#c7c7c734] text-[#d3d3d3da] z-20"
            >
              Baghdad
            </motion.span>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="w-[150px] h-[150px] rounded-full  absolute right-0 bottom-0 z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
