import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Item from "./Item";
import { MdChevronRight } from "react-icons/md";

const requirements = [
  "Seeking help is a crucial step towards breaking the cycle of abuse and creating a path to a safer and more empowered life.",
  "Counseling and support services are essential for emotional healing, helping survivors overcome the trauma and regain control over their lives.",
  "Accessing resources and support empowers survivors to envision and create a future free from violence, full of possibilities and self-determination.",
];

const goals = [
  {
    title: "Emergency Assistance",
    description:
      "Immediate support for individuals facing imminent danger, including shelter, resources, and a 24/7 emergency helpline.",
  },
  {
    title: "Counseling and Emotional Support",
    description:
      "Confidential counseling services for survivors, providing a safe space to process trauma, rebuild self-esteem, and plan for a secure future.",
  },
  {
    title: "Legal Advocacy",
    description:
      "Assistance with navigating legal processes, obtaining protection orders, and connecting with legal professionals dedicated to domestic violence cases.",
  },
  {
    title: "Community Resources",
    description:
      "Access to a network of community resources, including support groups, workshops, and educational materials addressing the dynamics of domestic violence",
  },
];
const DomesticViolenceSupport = () => {
  return (
    <SectionContainer
      title="Domestic Violence Support"
      subtitle="Breaking the Silence, Rebuilding Lives"
      description=""
      hasBg={false}
    >
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[50%] flex flex-col gap-2">
          <h3 className="text-3xl font-semibold mb-6 ">About the program</h3>
          <p className="text-sm md:text-base leading-relaxed">
            We are committed to providing a lifeline for those affected by
            domestic violence. Our comprehensive support services encompass
            resources, counseling, and empowerment initiatives to guide
            individuals on their journey to safety and healing.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Remember, you are not alone. DS Foundation is here to support you,
            and our Domestic Violence Support Services are designed to help you
            break free from the cycle of abuse and rebuild your life with
            strength and resilience. Your safety is our priority, and we are
            here to walk beside you on your journey to healing.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-4">
            Importance of seeking help
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
              Contact Us
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%]  md:px-4">
          <h3 className="text-3xl font-semibold mb-6 ">How we can help</h3>

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

export default DomesticViolenceSupport;
