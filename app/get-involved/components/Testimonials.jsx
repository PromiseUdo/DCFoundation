import Container from "../../components/Container";
import React from "react";
import SectionContainer from "../../components/SectionContainer";
const Testimonials = () => {
  return (
    <SectionContainer
      title="Success Stories"
      subtitle="What people say about us"
      description=""
      hasBg={false}
    >
      <div className="w-full flex flex-col gap-8">
        <div className="w-full items-center grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </SectionContainer>
  );
};

const TestimonialCard = ({ message, author = "Gbenga" }) => {
  return (
    <div className="border border-[#d9d9d980] hover:border-[#FFB600] transition-all duration-100 flex items-center justify-center p-4 px-8 h-44 rounded-md">
      <p className="italic text-sm leading-relaxed">
        &quot;Goldpay has been very friendly and helpful through out my
        University days&quot; - <span className="font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default Testimonials;
