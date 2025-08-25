const ButtonArrow = ({ title, style }) => {
  return (
    <div
      className={`relative z-10 overflow-hidden group cursor-pointer ${style} mt-5 bg-[#394854] py-1 px-1 flex items-center justify-center text-white `}
    >
     <div className="absolute bg-[#9e0d22] w-0 h-0 left-1/2 top-1/2 group-hover:w-full rounded-lg group-hover:h-full transition-all duration-500 ease-in-out -translate-y-1/2 -translate-x-1/2 -z-10 " />
      <span className="z-10">{title}</span>
    </div>
  );
};

export default ButtonArrow;
 
