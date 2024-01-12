import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const PostCard = ({ image, title, snippet, url }) => {
  return (
    <div className="bg-[#fff] shadow  hover:shadow-lg overflow-hidden  rounded-lg h-[24rem] w-full border border-[#d5d5d5] cursor-pointer transition-all duration-100">
      <div
        className="aspect-square h-[40%] w-full relative"
        // style={{
        //   background: `url('${image}')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "top",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Image
          src={image}
          alt="image post"
          fill
          objectFit="cover"
          className="rounded-lg"
          objectPosition="top"
        />
      </div>
      <div className="w-full  px-4 py-2 flex flex-col gap-3">
        <h3 className="uppercase text-[#505ca4] font-semibold">{title}</h3>
        <p className="text-sm md:text-base">{snippet}</p>
        <Link className="flex items-center gap-2" href={url}>
          <span className="text-sm md:text-base font-light hover:text-[#505ca4] hover:underline">
            Read More
          </span>{" "}
          <FaChevronRight color="#505ca4" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
