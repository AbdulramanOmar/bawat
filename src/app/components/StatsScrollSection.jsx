"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    year: 2013,
    events: ["تأسيس الشركة", "بداية العمل الفعلي", "تسجيل العلامة التجارية"],
    image: "/case1.png",
  },
  {
    year: 2015,
    events: ["التوسع في الأسواق", "افتتاح فرع جديد", "زيادة عدد الموظفين"],
  image: "/case2.png",
  },
  {
    year: 2018,
    events: ["إطلاق منتج جديد", "جوائز محلية", "زيادة رأس المال"],
    image: "/case1.png",
  },
  {
    year: 2023,
    events: ["التحول الرقمي", "فتح أسواق خارجية", "زيادة الشراكات"],
    image: "/case2.png",
  },
];

const StatsScrollSection = () => {
  const imageRef = useRef(null);
  const sectionsRef = useRef([]);
  const [currentImage, setCurrentImage] = useState(data[0].image);

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, data.length);

    data.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: sectionsRef.current[index],
        start: "top center+=100",
        onEnter: () => setCurrentImage(item.image),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16 py-10 gap-10 md:gap-20">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-[30px]">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="p-6 border rounded-xl shadow-sm bg-white"
          >
            <h2 className="text-xl font-bold mb-2">{item.year}</h2>
            <ul className="list-disc ps-6 space-y-1 text-gray-700">
              {item.events.map((ev, idx) => (
                <li key={idx}>{ev}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Section (Sticky Image) */}
      <div className="flex-1">
        <div className="sticky top-24">
          <img
            ref={imageRef}
            src={currentImage}
            alt="Timeline Visual"
            className="w-full h-auto rounded-xl shadow-lg transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsScrollSection;
