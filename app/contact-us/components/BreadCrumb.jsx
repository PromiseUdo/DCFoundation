import React from "react";
import Container from "../../components/Container";
import { MdChevronRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className=" flex items-center w-full h-20 py-4">
      <Container>
        <div className="flex items-center gap-1">
          <span>Home</span>
          <MdChevronRight />
          <span>Contact</span>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
