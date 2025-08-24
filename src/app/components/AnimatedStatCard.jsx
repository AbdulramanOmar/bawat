import React from "react";
import CountUp from "react-countup";


export default function AnimatedStatCard({
  number,
  suffix,
  label,
  description,
  delay,
}) {
  return (
    <div
      className="stat-card relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-5xl font-bold text-[#00FFD1] mb-2 tracking-tight flex items-baseline gap-1">
        <CountUp start={-200} end={parseFloat(String(number))} duration={2} />
        {suffix && <span className="text-2xl">{suffix}</span>}
      </div>
      <h3 className="text-xl font-semibold mb-1">{label}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
