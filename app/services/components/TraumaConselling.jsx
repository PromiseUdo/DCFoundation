import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Item from "./Item";
import { MdChevronRight } from "react-icons/md";

const TraumaConselling = ({ traumaCounselling }) => {
  return (
    <SectionContainer
      title={traumaCounselling?.title}
      subtitle={traumaCounselling?.subtitle}
      description=""
      hasBg={false}
    >
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-[50%] flex flex-col gap-2">
          <h3 className="text-3xl font-semibold mb-6 ">
            {traumaCounselling?.aboutTitle}
          </h3>
          <p
            className="text-sm md:text-base leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: traumaCounselling?.aboutDescription,
            }}
          />

          <p className="text-sm md:text-base leading-relaxed mt-4"></p>
          <ul className=" flex flex-col gap-2">
            {traumaCounselling?.programFeaturesList?.map((item, i) => (
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
              {traumaCounselling?.ctaCaption}
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%]  md:px-4">
          <h3 className="text-3xl font-semibold mb-6 ">
            {traumaCounselling?.programBenefitsTitle}
          </h3>

          <div className="w-full h-[30rem]  ">
            <div className="overflow-y-auto h-full flex flex-col gap-2  scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-teal-80 scrollbar-track-gray-400">
              {traumaCounselling?.benefitsList?.map((option, i) => (
                <Item
                  key={i}
                  title={option?.title}
                  description={option?.desc}
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
