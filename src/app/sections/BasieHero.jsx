import Image from "next/image";
import AnimatedText from "../components/AnimatedText";

const BasieHero = ({ title }) => {
  return (
    <section className="">
      <div className="">
        <div className="containe">
          <AnimatedText
            text={title}
            className="lg:text-[160px] font-bold relative tracking-tight z-30 -mb-7  lg:-mb-13 text-5xl text-white"
            delay={0}
            speed={0.05}
          />
        </div>
        <div className="bg-[#9e0d22]  ">
          <Image
            src="/back-1.png"
            width={1000}
            height={600}
            alt="back-basic"
            className="block ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BasieHero;

