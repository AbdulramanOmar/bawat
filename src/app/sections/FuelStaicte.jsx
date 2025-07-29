"use client";
import ElegantNumber from "../components/ElegantNumber";
import Title from "../components/Title";

const FuelStaicte = () => {



  return (
    <section className="py-20 bg-white relative overflow-hidden">


      {/* محتوى الواجهة فوق المجسم */}
      <div className="relative z-10 containe">
        <Title title="Fuel Statistics" color="red" />
     
        <ElegantNumber num={68000020} />

        <div className="flex mt-30 items-center justify-between">
          <div>
            <h4 className="text-[#394854] w-[400px] pb-3 border-b border-[#ddd]">
              Annual drilling volume (m)
            </h4>
            <h4 className="text-[#394854] text-5xl p-5">1 000 000</h4>
          </div>
          <div>
            <h4 className="text-[#394854] w-[400px] pb-3 border-b border-[#ddd]">
              Total investments (₽)
            </h4>
            <h4 className="text-[#394854] text-5xl p-5">13 billion</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelStaicte;
