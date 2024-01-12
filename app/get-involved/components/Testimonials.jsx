import Container from "../../components/Container";
import React from "react";
import SectionContainer from "../../components/SectionContainer";

const testimonials = [
  {
    text: "DS Foundation gave me the strength to rise above adversity. The counseling support and career guidance were instrumental in my journey toward empowerment. Grateful for their unwavering commitment to women's well-being.",
    name: "Priya Sharma",
  },
  {
    text: "Collaborating with DS Foundation has been fulfilling. Witnessing the positive impact of our support on women's lives is truly heartening. Proud to be associated with an organization dedicated to making a real difference.",
    name: "Ananya Pate (Coporate Sponsor)",
  },
  {
    text: "DS Foundation gave me the strength to rise above adversity. The counseling support and career guidance were instrumental in my journey toward empowerment. Grateful for their unwavering commitment to women's well-being.",
    name: "Aarav Singh",
  },
];
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
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              message={testimonial.text}
              author={testimonial.name}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

const TestimonialCard = ({ message, author }) => {
  return (
    <div className="border border-[#d9d9d980] hover:border-[#FFB600] transition-all duration-100 flex items-center justify-center p-4 px-8 h-44 rounded-md">
      <p className="italic text-sm leading-relaxed">
        &quot;{message}&quot; - <span className="font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default Testimonials;
