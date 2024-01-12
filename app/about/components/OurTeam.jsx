import React from "react";
import Container from "../../components/Container";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import SectionContainer from "../../components/SectionContainer";

const OurTeam = ({ teamMembers }) => {
  return (
    <SectionContainer
      title="Our Team"
      subtitle="Meet our team members"
      description=""
      hasBg={false}
      // color="#fafafa"
    >
      {/* <Container> */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%]  flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-20">
            {teamMembers?.map((team, idx) => (
              <div key={idx} className=" cursor-pointer group">
                <div className="shadow relative aspect-square h-72 w-72 rounded-lg overflow-hidden">
                  <Image
                    src={"https:" + team.fields.memberPhoto.fields.file.url}
                    alt="chairman"
                    fill
                    className="object-cover"
                  />
                  <div
                    className=" absolute flex items-center justify-center group-hover:bottom-0 duration-500 -bottom-[200px] w-full h-[60%] "
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <a href="/" aria-labelledby="Visit LinkedIn page">
                      <FaLinkedin size={25} color="#f7f7f7" />
                    </a>
                  </div>
                </div>
                <div className="w-full mt-4 justify-center flex-col flex">
                  <h3 className=" text-center text-sm font-semibold">
                    {team.fields.memberName}
                  </h3>
                  <p className="text-center text-sm">
                    {team.fields.memberTitle}
                  </p>
                </div>
              </div>
            ))}

            {/* <div className="cursor-pointer group">
              <div className="shadow relative aspect-square h-72 w-72 rounded-lg overflow-hidden">
                <Image
                  src="/testifier_image.jpg"
                  alt="chairman"
                  fill
                  className="object-cover"
                />
                <div
                  className=" absolute flex items-center justify-center group-hover:bottom-0 duration-500 -bottom-[200px] w-full h-[60%] "
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <a href="/">
                    <FaLinkedin size={25} color="#f7f7f7" />
                  </a>
                </div>
              </div>
              <div className="w-full mt-4 justify-center flex-col flex">
                <h3 className=" text-center text-sm font-semibold">
                  Laksita Prakash
                </h3>
                <p className="text-center text-sm">Program Manager</p>
              </div>
            </div> */}

            {/* <div className="cursor-pointer group">
              <div className="shadow relative aspect-square h-72 w-72 rounded-lg overflow-hidden">
                <Image
                  src="/testifier_image.jpg"
                  alt="chairman"
                  fill
                  className="object-cover"
                />
                <div
                  className=" absolute flex items-center justify-center group-hover:bottom-0 duration-500 -bottom-[200px] w-full h-[60%] "
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <a href="/">
                    <FaLinkedin size={25} color="#f7f7f7" />
                  </a>
                </div>
              </div>
              <div className="w-full mt-4 justify-center flex-col flex">
                <h3 className=" text-center text-sm font-semibold">
                  Laksita Prakash
                </h3>
                <p className="text-center text-sm">PR Officer</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* </Container> */}
    </SectionContainer>
  );
};

export default OurTeam;
