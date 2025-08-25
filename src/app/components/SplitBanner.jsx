import Image from "next/image";
import Link from "next/link";

export default function SplitBanner() {
  return (
    <div className="relative w-full h-screen flex">
      {/* Drilling Half */}
      <Link href="/services" className="w-1/2 bg-[#9e0d22] flex justify-center items-center relative group">
        <h2 className="text-white text-7xl tracking-tighter font-bold z-10">Construction</h2>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/ser (2).webp')` }}></div>
      </Link>

      {/* Service Half */}
      <Link href="/services" className="w-1/2 relative flex justify-center items-center group">
        <h2 className="text-white text-7xl tracking-tighter font-bold z-10">Fuel Sourcing </h2>
               
      </Link>

      {/* Middle Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#2f3b45] w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold cursor-default select-none">
          →
        </div>
      </div>
    </div>
  );
}
