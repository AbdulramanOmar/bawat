import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const certifications = [
  {
    title: "Licensed by the Iraqi Ministry of Oil",
    subtitle:
      "Official authorization to operate nationwide logistics and fuel distribution.",
    image: "/cert.png",
  },
  {
    title: "Environmental & Safety Compliance",
    subtitle: "Aligned with Iraqi and international safety regulations.",
    image: "/cert.png",
  },
  {
    title: "Driver Training & Safety Audits",
    subtitle: "Ongoing training programs and strict fleet inspection routines.",
    image: "/cert.png",
  },
  {
    title: "Compliance-Ready Documentation",
    subtitle:
      "Full documentation support for supplier registration and audits.",
    image: "/cert.png",
  },
];

const Certifications = () => {

  return (
    <section
  
      className="bg-[#0e0e0e] text-white py-16 px-4 md:px-20 relative"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Certifications & Compliance
      </h2>
      <div className="grid grid-cols-1  ">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="cert-card group relative p-6 border border-neutral-700  bg-neutral-900 transition-all duration-300 hover:shadow-2xl "
          >
            <div className="flex py-2 justify-between items-start">
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 max-w-md">
                  {item.subtitle}
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition">
                  <FaArrowRight className="text-white text-2xl -rotate-45" />
                </div>
              </div>
            </div>
            <div className="absolute -top-1/2 right-0 z-50  w-[200px] h-[200px] opacity-0 group-hover:opacity-100 bg-black/80 translate-x-10 group-hover:translate-x-0 transition-all duration-500 flex items-center justify-center">
              <Image src={item.image} alt={item.title} fill />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
