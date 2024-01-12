import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const MissionAndVision = () => {
  return (
    <SectionContainer
      title="Mission and Vision"
      subtitle="Our Mission and Vision"
      description="We believe we can contribute a lot to the development of women lives by focusing on these areas"
      hasBg={true}
      color="#fafafa"
    >
      <div className="bg-[#c1c1d1] h-[fit-content] md:h-96 w-full flex flex-col md:flex-row items-center">
        <div
          className="bg-[#505ca4] w-[100%] md:w-[50%] h-full flex px-8 py-4 flex-col gap-8 "
          style={
            {
              // clipPath: "polygon(0 0, 100% 0%, calc(100% - 50%) 100%, 0% 100%)",
            }
          }
        >
          <div className="w-full flex items-center ">
            <Image
              src="/mission.png"
              alt="mission icon"
              height={65}
              width={65}
            />
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-medium text-[#f7f7f7] ">
              Our Mission
            </h3>
            <p className="text-sm md:text-base leading-loose mt-2 max-w-2xl text-[#f7f7f7]">
              At DS Foundation, our mission is to empower women, break the cycle
              of domestic violence, and provide holistic support for those
              seeking to rebuild their lives. We are dedicated to fostering
              resilience, promoting emotional well-being, and creating a
              community where every woman can thrive with dignity, strength, and
              independence
            </p>
          </div>
        </div>
        <div className="bg-[#c1c1d1] w-[100%] md:w-[50%]  h-full px-8 py-4 flex flex-col gap-8">
          <div className="w-full flex items-center justify-end">
            <Image src="/vision.png" alt="vision icon" height={65} width={65} />
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-medium ">Our Vision</h3>
            <p className="text-sm md:text-base leading-loose mt-2 max-w-2xl">
              Our vision at DS Foundation is a world where every woman lives
              free from the shadows of domestic violence, equipped with the
              tools to overcome challenges and pursue her dreams. We aspire to
              be a beacon of hope, leading transformative change, and fostering
              a society that champions equality, safety, and empowerment for all
              women.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MissionAndVision;
