"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Title from "./Title";

// بيانات الـ Timeline
const timelineData = [
  {
    year: "2015",
    events: [
      { date: "January", text: "Company founded and first office opened" },
      { date: "June", text: "Second first contact" },
    ],
  },
  {
    year: "2016",
    events: [
      { date: "March", text: "First 1000 trip" },
      { date: "December", text: "Reached 10 clients" },
    ],
  },
  {
    year: "2018",
    events: [
      { date: "April", text: "Expand in all basra oilfields " },
      { date: "August", text: "Oped Dubai office" },
    ],
  },
];

// أنيميشن العناصر
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Timeline() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-16"
          style={{ color: "#9e0d22" }}
        >
            
        </motion.h2>
        <Title title={"Company Growth Timeline"} color="red" />

        <div className="relative">
          {/* الخط العمودي */}
          <div
            className="absolute left-1/2 top-0 w-1 h-full bg-gray-300"
            style={{ transform: "translateX(-50%)" }}
          />

          <div className="space-y-16">
            {timelineData.map((yearData, yearIndex) => (
              <div key={yearIndex}>
                {/* السنة */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-10"
                >
                  <span
                    className="text-2xl relative z-40 font-bold px-6 py-2 rounded-full shadow-lg"
                    style={{
                      backgroundColor: "#9e0d22",
                      color: "white",
                    }}
                  >
                    {yearData.year}
                  </span>
                </motion.div>

                {/* الأحداث */}
                <div className="flex flex-col space-y-12">
                  {yearData.events.map((event, eventIndex) => {
                    const isLeft = eventIndex % 2 === 0;
                    return (
                      <motion.div
                        key={eventIndex}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className={`flex  items-center w-full ${
                          isLeft ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div className="relative w-1/2">
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4"
                            style={{
                              left: isLeft ? "98.5%" : "-0.5rem",
                              borderColor: "#9e0d22",
                              background: "white",
                            }}
                          ></div>

                          <div
                            className={`bg-white p-6 mx-5 rounded-2xl shadow-lg border`}
                            style={{
                              borderColor: "#9e0d22",
                            }}
                          >
                            <p
                              className="text-sm font-semibold mb-2"
                              style={{ color: "#9e0d22" }}
                            >
                              {event.date}
                            </p>
                            <p className="text-gray-700 text-base">
                              {event.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="text-center block mt-10 text-2xl">We keep going to service the best</span>
    </section>
  );
}

