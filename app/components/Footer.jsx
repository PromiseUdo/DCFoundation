import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import Container from "./Container";

const Footer = () => {
  return (
    <section className="w-full text-[#f7f7f7] bg-[#202441] py-20">
      <Container>
        <div className="w-full flex flex-col-reverse lg:flex-row">
          <div className="mt-4 lg:mt-0 pr-8 items-center lg:items-start grow flex flex-col gap-4">
            <Image src={"/logo.jpeg"} height={115} width={115} alt="logo" />
            <div className="items-center lg:items-start flex flex-col gap-2 ">
              <h3 className="tracking-wider uppercase text-lg lg:text-3xl font-semibold text-center lg:text-start">
                We&apos;re here to Help.
              </h3>
              <div className="flex items-center gap-1">
                <FaPhone />
                <span className="">94722 24524</span>
              </div>
              <div className="flex items-center gap-1">
                <MdEmail />
                <span className="">dsfoundationw@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <FaInstagramSquare className="cursor-pointer" size={30} />
                <FaFacebookSquare className="cursor-pointer" size={30} />
                <a
                  href="https://www.linkedin.com/company/ds-foundations/"
                  target="_blank"
                >
                  <FaLinkedin className="cursor-pointer" size={30} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 grow">
            <h2 className="text-2xl font-medium">Our Foundation</h2>
            <div className="w-20  h-[2px] bg-[#FFB600]"></div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer">About</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer ">Community</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className="cursor-pointer ">Careers</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 grow">
            <h2 className="text-2xl font-medium">Office Locations</h2>
            <div className="w-20  h-[2px] bg-[#FFB600]"></div>

            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg">Dadri, Uttar Pradesh</h3>
              {/* <p className="">#23 Masharatta Road</p> */}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg">Opening Hours</h3>
              <p className=" flex items-center gap-1">
                <FaCalendarDay /> <span>Monday - Friday</span>
              </p>
              <p className=" flex items-center gap-1">
                <MdAccessTimeFilled /> <span>8:00AM- 5:00PM</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 grow">
            <h2 className="text-2xl font-medium">Help & Support</h2>
            <div className="w-20 h-[2px] bg-[#FFB600]"></div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <MdChevronRight /> <span className=" cursor-pointer">Blog</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer ">Knowledge Center</span>
              </div>
              <div className="flex items-center gap-1">
                <MdChevronRight />{" "}
                <span className=" cursor-pointer ">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
