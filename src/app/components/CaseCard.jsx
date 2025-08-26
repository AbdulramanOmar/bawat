import Image from "next/image";
import ButtonArrow from "./ButtonArrow";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
const CaseCard = ({ title, img, id , link }) => {
  return (
    <Link href={link} className="overflow-hidden z-10  bg-white relative group w-[200px] sm:w-[250px]  h-[140px]  ">
      <div className="flex  w-full items-center z-20  justify-between px-4 py-2">
        <h5 className=" text-[#394854] ">{title}</h5>
        <span className="font-bold text-xl strok-text">0{id}</span>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-5 z-20 ">
        <ButtonArrow
          title={<IoIosArrowForward className="text-lg text-white" />}
          style={``}
        />
      </div>
      <Image
        width={250}
        height={1500}
        src={img}
        alt={`bawat-${title}`}
        className=" translate-y-1/2 group-hover:translate-y-0 absolute inset-0 -z-10 ease-in-out transition-transform duration-300"
      />
    </Link>
  );
};

export default CaseCard;
