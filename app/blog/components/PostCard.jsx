"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { truncateText } from "../../../helper/truncateText";
import { useRouter } from "next/navigation";

const PostCard = ({ image, title, snippet, slug }) => {
  const router = useRouter();
  return (
    <div className="bg-[#fff] shadow  hover:shadow-lg overflow-hidden  rounded-lg h-[24rem] w-full border border-[#d5d5d5] cursor-pointer transition-all duration-100">
      <div className="aspect-square h-[10rem] w-full relative">
        <Image
          src={"https:" + image}
          alt="image post"
          fill
          objectFit="cover"
          className="rounded-t-lg"
          objectPosition="top"
        />
      </div>
      <div className="w-full h-full  px-4 py-2 flex flex-col gap-1">
        <div className=" ">
          <h3 className="uppercase text-[#505ca4] font-semibold">{title}</h3>
          <p className="text-sm md:text-base">{truncateText(snippet)}</p>
        </div>

        <div className="">
          <span
            onClick={() => router.push(`/blog/${slug}`)}
            className="flex items-center gap-2"
          >
            <span className="text-sm md:text-base font-light hover:text-[#505ca4] hover:underline">
              Read More
            </span>
            <FaChevronRight color="#505ca4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
