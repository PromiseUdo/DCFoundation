import React from "react";
import Container from "../../components/Container";
import { MdChevronRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className=" w-full h-32 py-12">
      <Container>
        <div className="flex items-center gap-1">
          <span>Home</span>
          <MdChevronRight />
          <span>About</span>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
