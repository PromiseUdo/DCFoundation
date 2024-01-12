import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, answer }) => {
  return (
    <div className="pt-[10px]">
      <div
        onClick={toggle}
        className="bg-[#f7f7f7] py-[25px] px-[1rem] md:px-[2.5rem] shadow rounded-lg flex justify-between items-center cursor-pointer"
      >
        <p className="text-[1rem] md:text-[1.3rem] font-semibold ">{title}</p>

        <div className="text-[30px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white rounded-b-lg shadow px-[50px] py-[20px]">
          {answer}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
