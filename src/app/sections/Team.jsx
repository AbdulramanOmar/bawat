"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../components/Title";

const teamMembers = [
  {
    name: "Mohammed Sabah",
    role: "Creative Director",
    image: "/lead (2).jpg",
  },
  {
    name: "Khaled Amir",
    role: "UI/UX Specialist",
    image: "/lead (1).jpg",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-black text-white" id="team">
      <div className="containe ">
        <Title title={"Our Legendary Team"} color="white" />
      </div>

      <div className="mt-20 containe grid grid-cols-1 gap-5 md:grid-cols-2 h-[80vh]">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="relative group overflow-hidden rounded-xl"
          >
            {/* Image Full Background */}
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover  transform group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl font-extrabold tracking-wide"
              >
                {member.name}
              </motion.h3>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base text-gray-200 mt-2"
              >
                {member.role}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
