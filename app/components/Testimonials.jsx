"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React from "react";
import SectionContainer from "./SectionContainer";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const testimonialData = [
  {
    imgSource: "/testifier_image.jpg",
    country: "Pune, India",
    comment: "It got an amazing support from DS Foundation",
    name: "Divya Amara",
    profession: "Teacher",
  },
  {
    imgSource: "/testifier_image.jpg",
    country: "Pune, India",
    comment: "It got an amazing support from DS Foundation",
    name: "Divya Amara",
    profession: "Teacher",
  },
  {
    imgSource: "/testifier_image.jpg",
    country: "Pune, India",
    comment: "It got an amazing support from DS Foundation",
    name: "Divya Amara",
    profession: "Teacher",
  },
];
const TestimonialCard = ({ imgSource, country, comment, name, profession }) => {
  return (
    <div className="flex flex-col-reverse items-center md:items-start md:flex-row justify-center py-0 px-[3rem] gap-[2rem] mb-[4rem] pt-[2rem]">
      <div className="  w-full h-auto md:h-[200px] select-none ">
        {/* country */}
        <div className="relative text-start mb-[1rem]">
          <div className="text-[#1e1e1e50] absolute top-[-4.3rem] left-[-1.5rem] text-[8rem]">
            <RiDoubleQuotesL />
          </div>
          <span className="relative z-20 text-[2rem]">{country}</span>
        </div>
        {/* comment */}
        <p className="text-[1.3rem] md:text-[1.8rem] leading-[1.8] italic ">
          {comment}
        </p>
        {/* name */}
        <div className="flex flex-col gap-[0.5rem] justify-start items-start">
          <div className="text-[1.5rem] ">{name}</div>
          <div className="text-[1rem]">{profession}</div>
        </div>
      </div>
      <div className="flex items-center justify-center w-auto md:w-[70%]">
        <div className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden relative ">
          <Image
            src={imgSource}
            alt="testifier_image"
            objectFit="cover"
            layout="responsive"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          {/* <div
            className="absolute inset-0 rounded-full p-[10px] pointer-events-none"
            style={{
              webkitMask: "orange content-box, orange",
              webkitMaskComposite: "xor",
              maskComposite: "exclude",
              background: "orange",
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <SectionContainer
      title="Testimonials"
      subtitle="What People Say About Us"
      description="We believe we can contribute a lot to the development of women lives by focusing on these areas"
      hasBg={true}
      color={"#c1c1d1"}
    >
      <Carousel emulateTouch showThumbs={false} showStatus={false}>
        {testimonialData.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            imgSource={testimonial.imgSource}
            country={testimonial.country}
            profession={testimonial.profession}
            comment={testimonial.comment}
            name={testimonial.name}
          />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default Testimonials;
