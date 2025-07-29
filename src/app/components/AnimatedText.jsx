"use client";

import { motion } from "framer-motion";

const AnimatedText = ({ text, className  , delay , speed }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren:speed, // السرعة بين الحروف
        delayChildren: delay, // تأخير ظهور الحروف
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      className={`inline-block overflow-hidden ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
