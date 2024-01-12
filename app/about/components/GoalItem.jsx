import Image from "next/image";
import Link from "next/link";
import React from "react";

const GoalItem = ({ title, description, url, image }) => {
  return (
    <div className="border flex border-[#d9d9d980] rounded-md gap-8 h-[13rem] px-4 py-4">
      {/* <div className="relative overflow-hidden rounded-md aspect-square h-full  w-[12rem]">
        <Image
          src={image}
          alt="sme business man"
          fill
          objectPosition="top"
          className="object-cover object-center"
        />
      </div> */}
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p>{description}</p>
        {/* <div className="mt-1 w-full">
          <Link
            href={url}
            className=" min-w-[150px] shadow-md bg-transparent border hover:border-[#282e52] border-[#FFB600] text-[black] px-4 py-2 rounded-md text-base  hover:bg-[#282e52] transition-all duration-100 font-semibold hover:text-[#f7f7f7] uppercase"
          >
            {"View Details"}
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default GoalItem;