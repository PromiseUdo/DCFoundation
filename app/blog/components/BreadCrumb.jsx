import React from "react";
import Container from "../../components/Container";
import { MdChevronRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className=" flex items-center w-full h-10 py-2">
      <Container>
        <div className="flex items-center gap-1">
          <span>Home</span>
          <MdChevronRight />
          <span>Blog and News</span>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
