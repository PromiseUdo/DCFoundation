"use client";

import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import Container from "../../components/Container";

const FAQ = ({ faqs }) => {
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
                title={faq?.fields?.question}
                answer={faq?.fields?.answer}
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
