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
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const contactInfo = await client.getEntries({
    content_type: "contactInformation",
  });

  return [contactInfo];
}

const Banner = async () => {
  const [contactInfo] = await getData();
  const { phoneNumber, emailAddress, linkedinUrl, officeAddressText } =
    contactInfo.items[0].fields;
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
          <div className="flex items-center gap-[0.5rem] text-[1.1rem] py-0 px-[0.4rem]  border-r-[1.5px] border-[#f7f7f7]">
            <IoLocationOutline />
            <span className="text-xs md:text-sm">{officeAddressText}</span>
          </div>
          <div className="flex items-center gap-[0.5rem] text-[1.1rem] py-0 px-[0.4rem]  border-r-[1.5px] border-[#f7f7f7]">
            <BsTelephone />
            <span className="text-xs md:text-sm">{phoneNumber}</span>
          </div>
          <div className="flex items-center gap-[0.4rem] lg:gap-[0.7rem] ">
            {/* <Link href="#">
              <TbBrandFacebook />
            </Link>
            <Link href="#">
              <TbBrandTwitter />
            </Link>
            <Link href="#">
              <TbBrandInstagram />
            </Link> */}
            <a
              href={linkedinUrl}
              target="_blank"
              aria-labelledby="linkedin url"
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
