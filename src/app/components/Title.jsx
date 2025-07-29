"use client";

import { motion } from "framer-motion";

const colorMap = {
  red: "text-[#9e0d22] bg-[#ddd]",
  white: "text-white bg-[#ffffff33]",
};

const Title = ({ title, color = "blue" }) => {
  const classes = colorMap[color] || "text-black bg-black";

  const [textColor, bgColor] = classes.split(" ");

  return (
    <div className="containe mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className={`text-xl font-normal relative block ${textColor}`}
      >
        {title}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          viewport={{ once: true }}
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-full origin-left h-[1px] ${bgColor} rounded-full`}
        />
      </motion.h2>
    </div>
  );
};

export default Title;
