import React from "react";
import Container from "./Container";
import Link from "next/link";

const Support = () => {
  return (
    <div className="relative h-72 bg-cover bg-center flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/love_support.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Text Content */}
      <Container>
        <div className="relative z-10 flex flex-col md:flex-row gap-4 items-center justify-between w-full">
          <div className="">
            <h2 className="text-center md:text-left text-[1.5rem] md:text-3xl font-bold mb-4 text-white">
              Support the Foundation
            </h2>
            <p className="leading-relaxed text-center md:text-left text-sm md:text-lg text-[#f7f7f7] max-w-2xl">
              Your support makes a difference. Learn more about our initiatives
              and how you can contribute to our cause.
            </p>
          </div>
          <div className="">
            <Link
              href="/get-involved"
              className="shadow-md bg-[#505ca4] text-[#f7f7f7] px-4 py-2 rounded-md text-base md:text-lg hover:bg-[#282e52] transition-all duration-100"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Support;
