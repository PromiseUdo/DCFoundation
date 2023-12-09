import React from "react";
import SectionContainer from "./SectionContainer";
import FocusAreaCard from "./FocusAreaCard";
const focusAreas = [
  {
    icon: "/career_restart.png",
    alt: "career restart icon",
    title: "Career Restart",
    description: "We help you restore a successful career",
  },
  {
    icon: "/guidance.png",
    alt: "Guidance icon",
    title: "Guidance",
    description: "We provide guidance and support during trauma",
  },
  {
    icon: "/domestic_violence.png",
    alt: "domestic violence icon",
    title: "Domestic Violence",
    description: "Reach out to us for cases of domestic violence",
  },
];
const FocusAreas = () => {
  return (
    <SectionContainer
      title="Focus Areas"
      subtitle="What drives our passion everyday"
      description="We believe we can contribute a lot to the development of women lives by focusing on these areas"
      hasBg={false}
    >
      <div className=" w-full flex flex-wrap flex-col md:flex-row justify-center gap-20 items-center">
        {focusAreas.map((focusArea, idx) => (
          <FocusAreaCard
            key={idx}
            icon={focusArea.icon}
            alt={focusArea.alt}
            title={focusArea.title}
            description={focusArea.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FocusAreas;
