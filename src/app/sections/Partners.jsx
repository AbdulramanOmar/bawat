"use client";
import Image from "next/image";
import Title from "../components/Title";
import { motion } from "framer-motion";

const imgClients = [
  "/c 1.webp",
  "/c 2.webp",
  "/c 3.webp",
  "/c 4.webp",
  "/c 5.webp",
  "/c 6.jpg",
  "/c 7.webp",
  "/c 8.webp",
  "/c 9.webp",
  "/c 10.webp",
];

const Partners = () => {
  return (
    <section className="bg-white py-20">
      <Title title={"Our Clients"} color="red" />
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["80%", "-150%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...imgClients, ...imgClients].map((el, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-40 flex items-center justify-center border border-[#f1f1f1] rounded-lg p-2"
            >
              <Image src={el} alt={`Client ${i}`} width={100} height={100} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
