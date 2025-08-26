"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../components/Title";


const teamMembers = [
  {
    name: "Lena Alvarez",
    role: "Creative Director",
    image: "/test1.jpeg",
  },
  {
    name: "Khaled Amir",
    role: "UI/UX Specialist",
    image: "/test1.jpeg",
  },
  {
    name: "Emily Zhang",
    role: "Frontend Engineer",
    image: "/test1.jpeg",
  }, {
    name: "Lena Alvarez",
    role: "Creative Director",
    image: "/test1.jpeg",
  },
  {
    name: "Khaled Amir",
    role: "UI/UX Specialist",
    image: "/test1.jpeg",
  },
  {
    name: "Emily Zhang",
    role: "Frontend Engineer",
    image: "/test1.jpeg",
  }, {
    name: "Lena Alvarez",
    role: "Creative Director",
    image: "/test1.jpeg",
  },
  {
    name: "Khaled Amir",
    role: "UI/UX Specialist",
    image: "/test1.jpeg",
  },
  {
    name: "Emily Zhang",
    role: "Frontend Engineer",
    image: "/test1.jpeg",
  },
];

export default function Team() {
  return (
    <section className="py-20 " id="team">
      <div className="containe  ">
        <Title title={"Our Team"} color="white" />
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 containe">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-xl  group"
          >
            {/* Image fills the card */}
            <div className="w-full h-100 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#9e0d22]/90 to-transparent text-white p-4">
              <h3 className="text-3xl font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
