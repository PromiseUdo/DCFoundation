import Image from "next/image";
import React from "react";

const FocusAreaCard = ({ icon, title, alt, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="bg-[#505ca4] h-[12rem] w-[15rem] rounded-md ">
        <div className="flex flex-col items-center justify-center gap-4 relative bottom-4 right-4 bg-[#c5c5c5] h-[12rem] w-[15rem] rounded-md">
          <Image src={icon} alt={alt} height={65} width={65} />
          <div className="px-2">
            <h3 className="text-[#333366] tracking-wide text-center font-semibold">
              {title}
            </h3>
            <p className=" text-[#333366] text-center text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusAreaCard;
