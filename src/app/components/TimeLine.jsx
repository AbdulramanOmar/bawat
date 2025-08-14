"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// تفعيل ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// بيانات الـ Timeline
const timelineData = [
  {
    year: "2014",
    events: [
      { date: "September 2014", text: "Start of Naftagaz cooperation with Gazpromneft" },
      { date: "October 2014", text: "The first oil well drilled at the Verkhne-Shapshinskoye field" },
      { date: "November 2014", text: "Launch of Vostok project" },
    ],
  },
  {
    year: "2015",
    events: [
      { date: "January 2015", text: "Expansion of drilling operations" },
      { date: "June 2015", text: "New partnerships announced" },
      { date: "December 2015", text: "First offshore oil shipment" },
    ],
  },
  {
    year: "2016",
    events: [
      { date: "March 2016", text: "Launch of offshore project" },
      { date: "September 2016", text: "Reached 10M barrels milestone" },
      { date: "December 2016", text: "Record oil production achieved" },
    ],
  },
  {
    year: "2017",
    events: [
      { date: "September 2014", text: "Start of Naftagaz cooperation with Gazpromneft" },
      { date: "October 2014", text: "The first oil well drilled at the Verkhne-Shapshinskoye field" },
      { date: "November 2014", text: "Launch of Vostok project" },
    ],
  },
  {
    year: "2018",
    events: [
      { date: "January 2015", text: "Expansion of drilling operations" },
      { date: "June 2015", text: "New partnerships announced" },
      { date: "December 2015", text: "First offshore oil shipment" },
    ],
  },
  {
    year: "2019",
    events: [
      { date: "March 2016", text: "Launch of offshore project" },
      { date: "September 2016", text: "Reached 10M barrels milestone" },
      { date: "December 2016", text: "Record oil production achieved" },
    ],
  },
];

export default function Timeline() {
  // مراجع (Refs) للتحكم في العناصر
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const yearsRef = useRef([]);
  const eventsRef = useRef([]);

  // السنة الحالية في الدائرة
  const [currentYear, setCurrentYear] = useState(timelineData[0].year);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const circleLength = circleRef.current.getTotalLength();

      // إعداد الدائرة أولًا
      gsap.set(circleRef.current, {
        strokeDasharray: circleLength,
        strokeDashoffset: circleLength,
      });

      // تايملاين رئيسي
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: yearsRef.current[0].parentNode.parentNode, // تثبيت السنة + الدائرة
        },
      });

      // لكل سنة
      timelineData.forEach((item, index) => {
        const section = eventsRef.current[index];
        const yearChange = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onEnter: () => setCurrentYear(item.year),
            onEnterBack: () => setCurrentYear(item.year),
          },
        });

        // ملء الدائرة
        yearChange.fromTo(
          circleRef.current,
          { strokeDashoffset: circleLength },
          { strokeDashoffset: 0, ease: "none" }
        );

        // إضافة التايملاين الجزئي إلى الرئيسي
        masterTL.add(yearChange, index);
      });

      // أنيميشن المحتوى على اليمين
      gsap.utils.toArray(".event-item").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // أنيميشن الرقم عند التغيير
      gsap.fromTo(
        ".year-number",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: false,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex w-full max-w-7xl mx-auto py-20">
      {/* يسار: الرقم + الدائرة */}
      <div className="w-1/2 flex justify-center relative">
        <div className="sticky top-40 flex items-center justify-center">
          {/* دائرة SVG */}
          <svg width="300" height="300" className="absolute">
            <circle
              ref={circleRef}
              cx="150"
              cy="150"
              r="140"
              stroke="#b91c1c"
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>

          {/* الرقم */}
          <h1
            ref={(el) => (yearsRef.current[0] = el)}
            className="year-number text-[8rem] font-bold text-red-700 select-none"
          >
            {currentYear}
          </h1>
        </div>
      </div>

      {/* يمين: الأحداث */}
      <div className="w-1/2 pl-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (eventsRef.current[index] = el)}
            className="mb-40"
          >
            {item.events.map((ev, idx) => (
              <div
                key={idx}
                className="event-item mb-10 border-l-2 border-red-600 pl-4"
              >
                <p className="text-sm text-gray-500">{ev.date}</p>
                <p className="text-lg font-medium">{ev.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
