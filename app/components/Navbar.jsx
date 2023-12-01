"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";
import clsx from "clsx";
import useOnClickOutside from "../hooks/clickOutside";
const pages = [
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Career",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/about",
  },
  {
    title: "Resources",
    url: "/about",
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileDropDown, setMobileDropdown] = useState(false);
  const mobileNav = useRef(null);

  useOnClickOutside(mobileNav, () => setIsActive(false));
  return (
    <div className="shadow-md z-[999] sticky top-0 w-full bg-[#505ca4]">
      <Container>
        <nav className="w-full h-[65px] flex items-center justify-between">
          <Link className="h-[inherit] w-[80px]" href="/">
            <div
              className="logo bg-red-500 h-[inherit] w-[80px]"
              style={{
                background: "url('/logo.jpeg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Link>
          <div className="  items-center hidden md:flex">
            <ul className="flex items-center gap-[1.7rem] text-[1.2rem] text-[#f7f7f7]">
              {pages.map((page, idx) => (
                <li key={idx}>
                  <Link
                    className="group  transition duration-300"
                    href={page.url}
                  >
                    {page.title}
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f7f7f7]"></span>
                  </Link>
                </li>
              ))}
              <li className="bg-[#f7f7f7] rounded-md text-[#505ca4] px-4 py-2 hover:bg-[#ffffff] transition-all duration-100">
                <Link href="/about">Get Involved</Link>
              </li>
            </ul>
          </div>

          <div className="text-[1.7rem] flex items-center md:hidden">
            <button>
              <FaBars onClick={() => setIsActive(true)} color="#f7f7f7" />
            </button>
          </div>
        </nav>
      </Container>
      {/* Mobile Nav */}
      <div
        ref={mobileNav}
        className={clsx(
          "border-r border-t border-b border-[#f7f7f750] fixed top-0 left-0 z-20 w-[60%] h-[100vh] bg-[#505ca4] transition-all duration-100 ease-in-out",
          !isActive && "translate-x-[-100%]"
        )}
      >
        <nav className="p-[2rem] h-[100vh] w-[100%]">
          <div className="flex items-center justify-between w-full border-b border-[#f7f7f7] pb-[1rem] mb-[2rem]  logo-close-container">
            <Link className="h-[70px] w-[70px]" href="/">
              <div
                className="logo bg-red-500 h-[70px] w-[70px]"
                style={{
                  background: "url('/logo.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Link>
            <button className="text-[1.2rem] flex items-center justify-center">
              <FaTimes onClick={() => setIsActive(false)} color="#f7f7f7" />
            </button>
          </div>

          {/* links */}
          <ul className="flex flex-col ">
            {pages.map((page, idx) => (
              <li className="my-[0.4rem]  " key={idx}>
                <Link
                  className="w-full pb-[0.5rem] text-[#f7f7f7]  "
                  href={page.url}
                >
                  {page.title}
                </Link>
              </li>
            ))}
            <li className="bg-[#f7f7f7] mt-[0.4rem] rounded-md text-[#505ca4] hover:bg-[#c5c5c5] transition-all duration-100 px-4 py-2">
              <Link href="/about">Get Involved</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
