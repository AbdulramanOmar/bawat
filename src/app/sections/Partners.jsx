"use client";
import Image from "next/image";
import partSvg from "../assets/part.svg";
import Title from "../components/Title";
const Partners = () => {
    
  return (
    <section className="bg-white text-white py-30">
      <Title title={"Our Partners"} color="red" />

      <h2 className="text-3xl font-bold text-center"></h2>
      <div className=" containe grid  grid-cols-5 border border-[#f1f1f1]">
        {[partSvg, partSvg, partSvg, partSvg , partSvg].map((el, i) => {
          return (
            <div key={i} className="p-20 border-l border-[#f1f1f1] flex items-center justify-center">
          <Image src={partSvg} alt="" className="w-[70px] " />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
