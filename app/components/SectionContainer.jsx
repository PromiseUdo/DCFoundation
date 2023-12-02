import React from "react";
import Container from "./Container";

const SectionContainer = ({ title, subtitle, description, children }) => {
  return (
    <section
      id=""
      className="w-full relative pb-[6rem] pt-[5rem] after:absolute after:content-[''] after:bottom-0  after:h-[1px] after:bg-[#eaeaef] after:w-[80%] after:left-[50%] after:translate-x-[-50%]"
    >
      <Container>
        <div className="flex flex-col items-center justify-center ">
          <h3 className="py-[0.3rem] px-0.1rem md:px-[0.5rem] rounded-md bg-black/10 w-[max-content] mb-[0.6rem] text-2xl font-medium">
            <span
              className="captitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text"
              style={{
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              {title}
            </span>
          </h3>
          {/* #212427 */}
          <h2 className="text-[#333366] text-[2.5rem] py-0 px-[2rem] mb-[0.8rem] text-center ">
            {subtitle}
          </h2>
          <p className="text-[1rem] text-[#333366] text-center max-w-[50rem] px-[2rem]">
            {description}
          </p>
        </div>
        <div>{children}</div>
      </Container>
    </section>
  );
};

export default SectionContainer;
