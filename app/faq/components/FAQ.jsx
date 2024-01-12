"use client";

import React, { useState } from "react";
import { faqs } from "../data";
import AccordionItem from "./AccordionItem";
import Container from "../../components/Container";

const FAQ = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <div className="w-full py-12">
      <Container>
        <div className="w-full flex items-center justify-center">
          <div className="md:px-[40px] w-[100%]  md:w-[80%]	">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                open={i === open}
                title={faq.title}
                answer={faq.answer}
                toggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;