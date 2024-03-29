"use client";

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { setTimeout } from "timers";
import { clsx } from "clsx";
import Link from "next/link";
const slides = [
  {
    url: "/slide1.jpg",
  },
  {
    url: "/slide2.jpg",
  },
  {
    url: "/slide3.jpg",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  });
  return (
    // <Container>
    <div className="row-start-1 row-end-3 col-start-1 col-end-5  w-full h-[100vh] relative">
      <div className="absolute h-[inherit] w-[inherit] inset-0 bg-black opacity-70  "></div>

      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="px-4 md:px-2 flex flex-col items-center justify-center w-[100%] md:w-[50%] absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center gap-3">
          <p className="tracking-wider text-[#f7f7f7]">
            Empower. Transform. Thrive
          </p>
          <h1 className="text-[#f7f7f7] text-shadow-md text-6xl font-bold mb-4 ">
            DS Foundation
          </h1>
          <p className="text-[#f7f7f7] text-lg tracking-wide max-w-[100%] md:max-w-[60%] ">
            We believe that when a woman is successful her community is
            strengthened
          </p>

          <div className="flex flex-col md:flex-row mt-6 w-full justify-center  items-center gap-4">
            <Link
              href="/services"
              className="shadow-md bg-[#f7f7f7] px-4 py-2 text-[#505ca4] rounded-md text-base md:text-lg hover:bg-[#fff] transition-all duration-100 "
            >
              Our Services
            </Link>
            <Link
              href="/get-involved"
              className="shadow-md bg-[#505ca4] text-[#f7f7f7] px-4 py-2 rounded-md text-base md:text-lg hover:bg-[#282e52] transition-all duration-100"
            >
              Get Involved
            </Link>
          </div>
        </div>
        {/* left arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl shadow-sm rounded-full p-2 bg-white/20 hover:bg-[#c5c5c520] transition-all duration-100 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl shadow-sm rounded-full p-2 bg-white/20 hover:bg-[#c5c5c520] transition-all duration-100 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      <div className="absolute h-8 w-full bottom-0  gap-2 flex  justify-center py-2">
        {slides.map((slide, idx) => (
          <div
            onClick={() => goToSlide(idx)}
            key={idx}
            className={clsx(
              "p-1 text-2xl h-2 w-2 bg-white  rounded-full cursor-pointer",
              currentIndex !== idx && "bg-opacity-50"
            )}
          />
        ))}
      </div>
    </div>
    // </Container>
  );
};

export default Carousel;
