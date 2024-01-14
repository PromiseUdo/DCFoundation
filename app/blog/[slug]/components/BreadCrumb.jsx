import React from "react";
import { MdChevronRight } from "react-icons/md";
import Container from "../../../components/Container";

const BreadCrumb = () => {
  return (
    <div className=" flex items-center w-full h-10 py-2">
      <Container>
        <div className="flex items-center gap-1">
          <span>Home</span>
          <MdChevronRight />
          <span>Blog</span>
          <MdChevronRight />
          <span>Post</span>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
