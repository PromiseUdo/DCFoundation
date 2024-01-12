import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Item from "./Item";
import { MdChevronRight } from "react-icons/md";

const requirements = [
  "One-on-one sessions tailored to your unique experiences, providing a confidential and empathetic space for personal exploration and healing.",
  "Participate in group therapy sessions, fostering a supportive community where individuals can share their experiences, gain insights, and offer mutual support.",
  "Engage in family counseling sessions to address the collective impact of trauma and strengthen familial bonds.",
];

const goals = [
  {
    title: "Safe Outlet for Expression",
    description:
      "Counseling provides a safe and non-judgmental space for individuals to express their thoughts, emotions, and experiences, facilitating the healing process",
  },
  {
    title: "Coping Strategies",
    description:
      "Learn effective coping strategies and tools to manage the emotional impact of trauma, promoting resilience and well-being.",
    url: "/loans/loan-for-sme",
  },
  {
    title: "Emotional Regulation",
    description:
      "Gain support in developing skills for emotional regulation, helping to navigate daily challenges with increased emotional stability.",
    url: "/loans/cash-advance",
  },
  {
    title: " Post-Traumatic Growth:",
    description:
      "Trauma counseling focuses not only on recovery but also on fostering post-traumatic growth, empowering individuals to find strength and meaning in their experiences",
    url: "/loans/cash-advance",
  },
];
const TraumaConselling = () => {
  return (
    <SectionContainer
      title="Trauma Conselling"
      subtitle="A Path to Healing"
      description=""
      hasBg={false}
    >
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[50%] flex flex-col gap-2">
          <h3 className="text-3xl font-semibold mb-6 ">About the program</h3>
          <p className="text-sm md:text-base leading-relaxed">
            We provide compassionate and professional support is offered to
            guide individuals through the process of healing from traumatic
            experiences. Our counseling services are designed to provide a safe
            and nurturing space for those seeking emotional recovery.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            At DS Foundation, our trauma counseling services aim to address the
            emotional impact of traumatic experiences. Our dedicated counselors
            are trained to provide:
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-4"></p>
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
              Schedule a session
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%]  md:px-4">
          <h3 className="text-3xl font-semibold mb-6 ">
            Importance of the program
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

export default TraumaConselling;
