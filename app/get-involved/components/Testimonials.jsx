"use client";

import Container from "../../components/Container";
import React, { useRef, useState } from "react";
import SectionContainer from "../../components/SectionContainer";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const testimonials = [
  {
    text: "DS Foundation gave me the strength to rise above adversity. The counseling support and career guidance were instrumental in my journey toward empowerment. Grateful for their unwavering commitment to women's well-being.",
    name: "Priya Sharma",
  },
  {
    text: "Collaborating with DS Foundation has been fulfilling. Witnessing the positive impact of our support on women's lives is truly heartening. Proud to be associated with an organization dedicated to making a real difference.",
    name: "Ananya Pate (Coporate Sponsor)",
  },
  {
    text: "DS Foundation gave me the strength to rise above adversity. The counseling support and career guidance were instrumental in my journey toward empowerment. Grateful for their unwavering commitment to women's well-being.",
    name: "Aarav Singh",
  },
  {
    text: "DS Foundation gave me the strength to rise above adversity. The counseling support and career guidance were instrumental in my journey toward empowerment. Grateful for their unwavering commitment to women's well-being.",
    name: "Aarav Singh",
  },
  {
    text: "DS Foundation gave me the strength to rise above adversity. The counseling support and career guidance were instrumental in my journey toward empowerment. Grateful for their unwavering commitment to women's well-being.",
    name: "Aarav Singh",
  },
];
const Testimonials = ({ testimonials }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const handleScroll = (scrollLeft) => {
    setScrollPosition(scrollLeft);
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 500;
      handleScroll(container.scrollLeft);
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 500;
      handleScroll(container.scrollLeft);
    }
  };
  return (
    <SectionContainer
      title="Success Stories"
      subtitle="What people say about us"
      description=""
      hasBg={false}
    >
      <div className="  flex items-center flex-col">
        <div className="hidden lg:flex self-end cursor-pointer  gap-2 mb-4">
          <div
            className="border border-1 border-border-gray-400  hover:border-border-gray-400 p-2 rounded-full hover:bg-gray-100 transition-all ease-in"
            onClick={scrollLeft}
          >
            <FiChevronLeft />
          </div>
          <div
            className="border cursor-pointer border-1 border-border-gray-400  hover:border-border-gray-400 p-2 rounded-full hover:bg-gray-100 transition-all ease-in"
            onClick={scrollRight}
          >
            <FiChevronRight />
          </div>
        </div>
        <div
          ref={containerRef}
          onScroll={(e) => {
            setScrollPosition(e.currentTarget.scrollLeft);
          }}
          style={{ scrollBehavior: "smooth" }}
          className="flex  flex-1 max-w-full items-start justify-between gap-6 md:gap-2 overflow-x-auto scrollbar scrollbar-h-1 overflow-y-visible  scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-gray-500 scrollbar-track-gray-200 pb-4"
        >
          <div className="flex flex-1  items-start h-full z-10 gap-4">
            {testimonials?.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                message={testimonial?.fields?.testimonyText}
                author={testimonial.fields?.testifier}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const TestimonialCard = ({ message, author }) => {
  return (
    <div className="border border-[#d9d9d980] hover:border-[#FFB600] transition-all duration-100 flex items-center justify-center p-4 px-8 h-44 w-96 rounded-md">
      <p className="italic text-sm leading-relaxed">
        &quot;{message}&quot; - <span className="font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default Testimonials;
