"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    list: [
      "Fuel Sourcing and Transportation",
      "Construction Services",
      " Oil & Gas Supply Chain Solutions",
      " Business Consulting",
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Leadership ", href: "/leadership " },
  { name: "Contact Us", href: "/contact" },
];

const listVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute  text-white  z-50">
      <div className="containe">
        {/* Logo and Phone */}
        <div className="flex items-center justify-between w-full flex-row py-5">
          <div>
            <Image
              width={200}
              height={100}
              src={logo}
              alt="Bawabt Albargsiyah-Logo"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-white"
          >
            {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Nav links (desktop) */}
        <nav className="hidden w-full md:flex items-center gap-10 rtl:flex-row-reverse mt-4 md:mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group  pl-[2px] cursor-pointer w-full flex items-center justify-between flex-row"
            >
              <span>{link.name}</span>
              {link.list && <IoIosArrowDown />}
              <span className="absolute left-0 -top-3 h-[1px] bg-[#ffffff1c] w-full transition-all duration-500"></span>
              <span className="absolute left-0 -top-3 h-[1px] bg-[#ffffff] w-0 group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
        </nav>

        {/* Nav links (mobile) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col gap-4 mt-4 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link href={link.href}>
                    <div className="relative group font-medium cursor-pointer text-left p-3">
                      <span>{link.name}</span>
                      <span className="absolute right-0 -bottom-1 h-[1px] bg-[#ffffff23] w-full transition-all duration-500"></span>
                      <span className="absolute left-0 -bottom-1 h-[1px] bg-[#ffffff] w-0 group-hover:w-full transition-all duration-500"></span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
