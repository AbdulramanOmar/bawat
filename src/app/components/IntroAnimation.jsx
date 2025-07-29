// components/IntroAnimation.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function IntroAnimation({ onFinish }) {
  const containerRef = useRef(null);
  const pathRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power2.out" },
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          onComplete: onFinish,
        });
      },
    });

    // Initial state
    gsap.set(pathRefs.current, {
      strokeDasharray: (i, el) => el.getTotalLength(),
      strokeDashoffset: (i, el) => el.getTotalLength(),
    });

    // Animate each path sequentially
    pathRefs.current.forEach((el, i) => {
      tl.to(el, { strokeDashoffset: 0 }, i * 0.4); // delay لكل عنصر
    });

    // Add scale or fade effect
    tl.to(
      ".logo-container",
      { duration: 0.6, opacity: 1, ease: "power2.inOut" },
      "-=1"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div className="logo-container scale-100  transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={300}
          height={300}
          viewBox="0 0 188.307 110.944"
          fill="none"
        >
          <path
            ref={(el) => el && pathRefs.current.push(el)}
            d="m0 0-78.938-107.864v258.383H0Z"
            stroke="#090c08"
            strokeWidth={2}
            fill="transparent"
            transform="matrix(.35278 0 0 -.35278 34.718 53.1)"
          />
          <path
            ref={(el) => el && pathRefs.current.push(el)}
            d="M0 0h105.318l198.695 273.059H198.696Z"
            stroke="#c03423"
            strokeWidth={2}
            fill="transparent"
            transform="matrix(.35278 0 0 -.35278 0 110.944)"
          />
          <path
            ref={(el) => el && pathRefs.current.push(el)}
            d="M0 0h-105.318l-103.395 141.393h105.318z"
            stroke="#828a95"
            strokeWidth={2}
            fill="transparent"
            transform="matrix(.35278 0 0 -.35278 188.307 64.495)"
          />
          <path
            ref={(el) => el && pathRefs.current.push(el)}
            d="M0 0h105.318l146.029 202.438H146.029Z"
            stroke="#c03423"
            strokeWidth={2}
            fill="transparent"
            transform="matrix(.35278 0 0 -.35278 63.158 86.03)"
          />
        </svg>
      </div>
    </div>
  );
}
