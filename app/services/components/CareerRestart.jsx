import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Item from "./Item";
import { MdChevronRight } from "react-icons/md";

const requirements = [
  "Skill Enhancement Workshops",
  "Resume Building and Interview Preparation",
  "Mentorship and Networking Opportunities",
  "Personalized Career Counseling",
];

const goals = [
  {
    title: "Tailored Support",
    description:
      "Our program is personalized to your needs, ensuring a supportive and adaptable approach to your unique circumstances",
    image: "/sme.jpg",
  },
  {
    title: "Career Confidence",
    description:
      "Regain confidence in your professional abilities and chart a clear path toward your career aspirations.",
    url: "/loans/loan-for-sme",
    image: "/loan-school-fees.jpg",
  },
  {
    title: "Community Connection",
    description:
      "Join a community of like-minded individuals, providing mutual support and encouragement throughout your career restart journey.",
    url: "/loans/cash-advance",
    image: "/cashadvance.jpg",
  },
  {
    title: "Job Placement Assistance",
    description:
      "Benefit from our network of partner organizations and potential employers, increasing your chances of securing suitable employment.",
    url: "/loans/cash-advance",
    image: "/cashadvance.jpg",
  },
];

const CareerRestart = () => {
  return (
    <SectionContainer
      title="Career Restart"
      subtitle="Empowering Your Professional Journey"
      description=""
      hasBg={false}
    >
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[50%] flex flex-col gap-2">
          <h3 className="text-3xl font-semibold mb-6 ">About the program</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Career Restart Program, a transformative initiative designed to
            empower women on their path to career resurgence. We understand that
            life&apos;s journey may lead to career interruptions, and we are
            here to help you reignite your professional spark. Our Career
            Restart Program is crafted to address the unique challenges faced by
            women navigating the complexities of returning to work after a
            hiatus.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Our program is tailored to provide comprehensive support, guidance,
            and resources for individuals seeking to re-enter the workforce or
            transition into a new career phase
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-4">
            Key program features include
          </p>
          <ul className=" flex flex-col gap-2">
            {requirements.map((item, i) => (
              <li
                key={i}
                className="text-sm md:text-base leading-relaxed flex items-center gap-1"
              >
                <MdChevronRight /> {item}
              </li>
            ))}
          </ul>
          <div className="w-full my-4">
            <button className="shadow-md bg-[#505ca4] text-[#f7f7f7] px-4 py-2 rounded-md text-base md:text-lg hover:bg-[#282e52] transition-all duration-100">
              Get Enrolled
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%]  md:px-4">
          <h3 className="text-3xl font-semibold mb-6 ">
            Benefits of the program
          </h3>

          <div className="w-full h-[30rem]  ">
            <div className="overflow-y-auto h-full flex flex-col gap-2  scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-teal-80 scrollbar-track-gray-400">
              {/* <LoanOption /> */}

              {goals.map((option, i) => (
                <Item
                  key={i}
                  title={option.title}
                  description={option.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CareerRestart;
