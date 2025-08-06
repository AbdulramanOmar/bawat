"use client";
import Title from "./Title";
import ElegantNumber from "./ElegantNumber";
import Image from "next/image";
import { motion } from "framer-motion";
const locations = [
  {
    name: "Baghdad",
    img: "/caes1.png",
    des: 568,
    fuel: 400,
  },
  {
    name: "Baghdad",
    img: "/caes1.png",
    des: 568,
    fuel: 400,
  },
  {
    name: "Baghdad",
    img: "/caes1.png",
    des: 568,
    fuel: 400,
  },
  {
    name: "Baghdad",
    img: "/caes1.png",
    des: 568,
    fuel: 400,
  },
];
const OurLocation = () => {
  return (
    <section className="py-20">
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
            in the transport of petroleum products across Iraq
          </p>
        </div>
      </div>

      <div className="containe py-10 ">
        <div className="mx-auto w-fit relative z-20">
          <Image
            width={600}
            height={600}
            src="/pngwing.com (1).png"
            alt="abawat-iraq-map"
            className="mx-auto w-full relative z-10"
          />
          <span
            className="absolute right-18 sm:right-21 bottom-10 sm:bottom-8 h-[10px] w-[10px] rounded-[50%] bg-white z-30"
          ></span>
          <span className="absolute right-7 bottom-15 sm:right-8 sm:bottom-14 h-[16px] w-[16px] rounded-[50%] bg-white z-30"></span>
          <motion.span
            whileInView={{ width: "400px" }}
            initial={{ width: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="absolute right-7 bottom-15 sm:right-8 sm:bottom-15 origin-right  z-40  h-[2px] w-[450px] rounded-full bg-[#c7c7c734]"
          >
            <h3 className="text-[#ddd] font-medium">Head Office</h3>
            <p className="text-[#d3d3d3da]"> Basra </p>
          </motion.span>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 300 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2.3, ease: "easeOut" }}
            className="absolute origin-top right-7 bottom-15 sm:right-8 sm:top-97 z-10 w-[400px] overflow-hidden"
          >
            <img
              src="/test1.jpeg"
              alt=""
              className="w-full h-full object-cover hidden md:block"
            />
          </motion.div>

          <span className="absolute right-12 bottom-22 h-2 w-2 rounded-full bg-white z-30"></span>
          <span className="absolute left-50 sm:left-60 top-37 sm:top-40 bottom-22 h-2 w-2 rounded-full bg-white z-30"></span>
          <motion.span
            whileInView={{ width: "350px" }}
            initial={{ width: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="absolute rotate-0 origin-right -left-26  top-37 sm:top-41 bottom-22 h-[2px] w-[350px] rounded-full bg-[#c7c7c734] text-[#d3d3d3da] z-20"
          >
            {" "}
            Baghdad
          </motion.span>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="w-[150px] rounded-full origin-center h-[150px]  bg-[#9e0d22] absolute  right-0 bottom-0  z-20 "
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="w-10 h-10 bg-[#9e0d22] origin-center rounded-full absolute left-50 sm:left-56 top-37 sm:top-36 z-20 bottom-22"
          />
        </div>
        <svg className="">
          <path
            d="m0 0-78.938-107.864v258H0Z"
            stroke="#fff"
            strokeWidth={2}
            className=" rotate-90"
            fill="transparent"
            transform="matrix(.35278 0 0 -.35278 34.718 )"
          />
        </svg>
      </div>
    </section>
  );
};

export default OurLocation;
