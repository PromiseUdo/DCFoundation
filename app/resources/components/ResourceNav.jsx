import React from "react";
import Container from "../../components/Container";
import { GoDash } from "react-icons/go";

const ResourceNav = () => {
  return (
    <div className="w-full">
      <Container>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full items-center gap-2 flex">
            <h2 className="text-2xl">Explore Our Resources</h2>
            <GoDash size={30} className="font-bold" />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
            <button className="rounded-lg bg-[#565C5B] py-2 px-4 text-[#f7f7f7] font-semibold">
              All
            </button>
            <button className="rounded-lg hover:bg-[#565C5B] py-2 px-4 hover:text-[#f7f7f7] font-semibold">
              Career Restart
            </button>
            <button className="rounded-lg hover:bg-[#565C5B] py-2 px-4 hover:text-[#f7f7f7] font-semibold">
              Support
            </button>
            <button className="rounded-lg hover:bg-[#565C5B] py-2 px-4 hover:text-[#f7f7f7] font-semibold">
              Family
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResourceNav;
