"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2013",
    events: [{ date: "January 2013", text: "Foundation of Naftagaz-Drilling" }],
  },
  {
    year: "2014",
    events: [
      { date: "September 2014", text: "Start of cooperation with Gazpromneft" },
    ],
  },
  {
    year: "2015",
    events: [
      {
        date: "October 2015",
        text: "First oil well drilled at Verkhne-Shapshinskoye field",
      },
    ],
  },
  {
    year: "2016",
    events: [{ date: "September 2016", text: "Launch of Vostok project" }],
  },
  {
    year: "2017",
    events: [{ date: "January 2017", text: "Foundation of Naftagaz-Drilling" }],
  },
  {
    year: "2018",
    events: [
      { date: "September 2018", text: "Start of cooperation with Gazpromneft" },
    ],
  },
  {
    year: "2019",
    events: [
      {
        date: "October 2019",
        text: "First oil well drilled at Verkhne-Shapshinskoye field",
      },
    ],
  },
  {
    year: "2020",
    events: [{ date: "September 2020", text: "Launch of Vostok project" }],
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const yearsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const circleSize = 300;
      const step = circleSize;
      const totalShift = (timelineData.length - 1) * step;

      // 🟢 تثبيت الدائرة في مكانها
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",   // يبدأ لما السكشن يدخل نص الشاشة
        end: () => `+=${totalShift}`,
        pin: circleRef.current,
        scrub: true,
      });

      // 🟢 حركة السنوات (داخل الدائرة)
      gsap.to(yearsRef.current, {
        y: -totalShift,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: () => `+=${totalShift}`,
          scrub: true,
        },
      });

      // 🟢 حركة الأحداث (كل حدث يظهر بـ Fade In + Slide)
      gsap.utils.toArray(".event-block").forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%", // يظهر لما يدخل أسفل الشاشة
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const circleSize = 300;

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="flex gap-12">
        {/* 🟢 Left circle with years */}
        <div className="w-1/2 flex justify-center">
          <div
            ref={circleRef}
            className="relative overflow-hidden rounded-full border-4 border-red-600 shadow-xl bg-white"
            style={{ width: circleSize, height: circleSize }}
          >
            <div
              ref={yearsRef}
              className="font-extrabold text-red-700 select-none"
              style={{ lineHeight: 1, fontSize: "42px" }}
            >
              {timelineData.map((item, i) => (
                <div
                  key={i}
                  style={{
                    height: circleSize + "px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.year}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🟢 Right side events */}
        <div className="w-1/2">
          {timelineData.map((item, index) => (
            <div
              key={index}
              style={{
                height: circleSize,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="event-block"
            >
              {item.events.map((ev, idx) => (
                <div
                  key={idx}
                  className="mb-6 border-l-4 border-red-600 pl-4 bg-white p-2 rounded-lg shadow"
                >
                  <p className="text-sm text-gray-500">{ev.date}</p>
                  <p className="text-xl font-semibold">{ev.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
