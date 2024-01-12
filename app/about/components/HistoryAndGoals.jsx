import React from "react";
import Container from "../../components/Container";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import GoalItem from "./GoalItem";
const requirements = [
  "Consider volunteering your time and skills to support our various activities.",
  "Help raise awareness about DS Foundation and its mission. ",
  "Share your expertise by offering career guidance, mentorship, or networking opportunities for women looking to restart their careers. ",
  "Become a part of the DS Foundation community.",
];

const HistoryAndGoals = ({ history, goals }) => {
  return (
    <div>
      <Container>
        <div className="w-full flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-[50%] flex flex-col gap-2">
            <h3 className="text-3xl font-semibold mb-6 ">{history.title}</h3>
            <p
              className="text-sm md:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: history.description }}
            />

            <p className="text-sm md:text-base leading-relaxed mt-4">
              {history.supportTitle}
            </p>
            <ul className=" flex flex-col gap-2">
              {history.howToSupport.map((item, i) => (
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
                {history.ctaCaption}
              </button>
            </div>
          </div>
          <div className="w-full md:w-[50%]  md:px-4">
            <h3 className="text-3xl font-semibold mb-6 ">Our Goals</h3>

            <div className="w-full h-[30rem]  ">
              <div className="overflow-y-auto h-full flex flex-col gap-2  scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-teal-80 scrollbar-track-gray-400">
                {/* <LoanOption /> */}

                {goals.map((option, i) => (
                  <GoalItem
                    key={i}
                    title={option.fields.title}
                    description={option.fields.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HistoryAndGoals;
