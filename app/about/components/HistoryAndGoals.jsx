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

const goals = [
  {
    title: "Empower Survivors of Domestic Violence",
    description:
      "Provide comprehensive support systems to empower survivors of domestic violence, fostering resilience and helping them rebuild their lives.",
    url: "/loans/loan-for-sme",
    image: "/sme.jpg",
  },
  {
    title: "Facilitate Career Restart Opportunities",
    description:
      "Create and implement programs that facilitate the reintegration of women into the workforce, offering training, mentorship, and resources to support career restarts",
    url: "/loans/loan-for-sme",
    image: "/loan-school-fees.jpg",
  },
  {
    title: "Provide Educational Resources",
    description:
      "Offer educational resources and workshops that equip women with essential skills, knowledge, and tools to enhance their personal and professional development",
    url: "/loans/cash-advance",
    image: "/cashadvance.jpg",
  },
];
const HistoryAndGoals = () => {
  return (
    <div>
      <Container>
        <div className="w-full flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-[50%] flex flex-col gap-2">
            <h3 className="text-3xl font-semibold mb-6 ">Our History</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Established in 2013, DS Foundation was born out of a deep-seated
              commitment to stand beside women facing adversity. Our founders
              envisioned a sanctuary where women could find refuge, regain
              control over their lives, and emerge stronger, regardless of the
              challenges they faced.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              Our initial efforts were dedicated to providing immediate
              assistance to those experiencing domestic violence. DS Foundation
              became a haven, offering resources, counseling, and a supportive
              community for survivors to rebuild their lives.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-4">
              How you can support the foundation
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
                Get Involved
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
                    title={option.title}
                    description={option.description}
                    url={option.url}
                    image={option.image}
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
