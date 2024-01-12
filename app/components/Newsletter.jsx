import React from "react";
import Container from "./Container";

const Newsletter = () => {
  return (
    <div className="w-full py-16">
      <Container>
        <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-20 justify-between w-full">
          <div className="w-full md:w-[50%] ">
            <h2 className="text-[1.5rem] md:text-3xl text-center md:text-left font-bold mb-4 ">
              Newsletter Signup
            </h2>
            <p className="leading-relaxed text-sm md:text-lg  text-center md:text-left max-w-2xl">
              If you&apos;d like to hear about any updates, new events, and
              more, please fill the form to be added to our mailing list.
            </p>
          </div>
          <div className="flex  grow flex-col gap-3 items-center md:items-end ">
            <input
              type="email"
              placeholder="Your Email Address"
              className="rounded-md border-gray-600 w-full"
              aria-label="email input"
            />
            <button className="shadow-md bg-[#505ca4] text-[#f7f7f7] px-4 py-2 rounded-md text-base md:text-lg hover:bg-[#282e52] transition-all duration-100">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
