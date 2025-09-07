"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// رقم متحرك من 9 إلى الرقم الحقيقي
const AnimatedToRealDigit = ({ target, delay = 0, start = false }) => {
  const [digit, setDigit] = useState(9);
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    if (!start) return;

    const t = setTimeout(() => {
      setIsFinal(true);
      setDigit(target);
    }, delay * 1000 + 300);

    return () => clearTimeout(t);
  }, [target, delay, start]);

  return (
    <div className="relative w-[1ch] h-[90px] overflow-hidden text-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={digit}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="absolute left-0 right-0"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const ElegantNumber = ({ num = 85, color = "#9e0d22" }) => {
  const digits = num.toString().split("");
  const firstDigit = digits[0];
  const restDigits = digits.slice(1);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // يتم تشغيله فقط مرة واحدة

  return (
    <div
      ref={ref}
      className={`flex text-3xl lg:text-8xl font-semibold gap-[0.05em] text-[${color}]`}
    >
      {/* الرقم الأول ثابت */}
      <div className="w-[1ch] h-[90px] overflow-hidden text-center">
        {firstDigit}
      </div>

      {/* باقي الأرقام تبدأ عند scroll */}
      {restDigits.map((digit, i) => (
        <AnimatedToRealDigit
          key={i}
          target={digit}
          delay={i * 0.1}
          start={isInView}
        />
      ))}

      <span>+</span>
    </div>
  );
};

export default ElegantNumber;

