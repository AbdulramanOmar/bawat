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
  const viewportRef = useRef(null);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const viewportEl = viewportRef.current;
      const listEl = listRef.current;
      if (!viewportEl || !listEl) return;

      const circleSize = 300;
      const yearHeight = circleSize;
      const totalShift = (timelineData.length - 1) * yearHeight;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center", // تبدأ لما الدائرة توصل منتصف الشاشة
        end: "bottom bottom", // تنتهي عند نهاية السكشن
        pin: viewportRef.current,
        scrub: true,
      });

      gsap.to(listRef.current, {
        y: -totalShift,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const circleSize = 300;

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="flex gap-12">
        {/* Left circle with years */}
        <div className="w-1/2 flex justify-center">
          <div
            ref={viewportRef}
            className="relative overflow-hidden rounded-full border border-gray-300"
            style={{ width: circleSize, height: circleSize }}
          >
            <div
              ref={listRef}
              className="font-extrabold text-red-700 select-none"
              style={{ lineHeight: 1, fontSize: "5rem" }}
            >
              {timelineData.map((item, i) => (
                <div
                  key={i}
                  style={{
                    height: circleSize,
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

        {/* Right events */}
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
            >
              {item.events.map((ev, idx) => (
                <div key={idx} className="mb-6 border-l-2 border-red-600 pl-4">
                  <p className="text-xs text-gray-500">{ev.date}</p>
                  <p className="text-lg font-semibold">{ev.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
