import React from "react";
import Container from "./Container";
import { clsx } from "clsx";

const SectionContainer = ({
  hasBg,
  title,
  subtitle,
  description,
  children,
  color = "#fff",
}) => {
  return (
    <section
      style={{
        background: color,
      }}
      id=""
      className={clsx(
        " w-full relative pb-[6rem] pt-[5rem] after:absolute after:content-[''] after:bottom-0  after:h-[1px] after:bg-[#eaeaef] after:w-[100%] "
      )}
    >
      {/* after:left-[50%] after:translate-x-[-50%] */}
      <Container>
        <div className="w-full  flex flex-col items-center justify-center ">
          <h3 className="py-[0.3rem] px-[1rem] md:px-[0.5rem] rounded-md bg-black/10 w-[max-content] mb-[0.6rem] text-lg md:text-2xl font-medium">
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
          <h2 className="text-[#333366]  text-[1.5rem] md:text-[2.5rem] py-0  mb-[0.8rem] text-center ">
            {subtitle}
          </h2>
          <p className="md:first-letter:text-[1rem] text-sm text-[#333366] text-center w-full md:max-w-[50rem] ">
            {description}
          </p>
        </div>
        <div className="mt-8 md:mt-12">{children}</div>
      </Container>
    </section>
  );
};

export default SectionContainer;
