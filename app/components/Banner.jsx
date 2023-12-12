import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandInstagram,
} from "react-icons/tb";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full relative z-20 py-[0.4rem] px-[0rem] border-b border-[#f7f7f7] bg-[#282e52] text-[#f7f7f7]">
      <div className="flex items-center justify-center w-full">
        {/* <div>
          <Link href="#">
            <span>Contact Us</span>
            <MdKeyboardArrowRight />
          </Link>
        </div> */}
        <div className="flex items-center justify-center gap-[0.5rem] lg:gap-[1rem]">
          <div className="flex items-center gap-[0.5rem] text-[1.1rem] py-0 px-[0.5rem]  border-r-[1.5px] border-[#f7f7f7]">
            <IoLocationOutline />
            <span className="text-xs md:text-sm">Dadri, Uttar Pradesh</span>
          </div>
          <div className="flex items-center gap-[0.5rem] text-[1.1rem] py-0 px-[0.5rem]  border-r-[1.5px] border-[#f7f7f7]">
            <BsTelephone />
            <span className="text-xs md:text-sm">94722 24524</span>
          </div>
          <div className="flex items-center gap-[0.5rem] lg:gap-[0.7rem] ">
            <Link href="#">
              <TbBrandFacebook />
            </Link>
            <Link href="#">
              <TbBrandTwitter />
            </Link>
            <Link href="#">
              <TbBrandInstagram />
            </Link>
            <a
              href="https://www.linkedin.com/company/ds-foundations/"
              target="_blank"
            >
              <TbBrandLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
