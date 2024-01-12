import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import Container from "../../components/Container";

const AboutSection = () => {
  return (
    <section className="w-full py-12 ">
      <Container>
        <div className="w-full flex flex-col md:gap-12 md:flex-row items-center justify-between h-full">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-2xl md:text-4xl font-semibold  leading-relaxed text-[#505ca4]">
                Our Approach : <br /> Empower. Transform. Thrive.
              </span>
              <div className="w-20 mt-1 h-[2px] bg-[#FFB600]"></div>
            </div>
            <div>
              <p className="text-sm md:text-base max-w-lg leading-relaxed">
                Empowering Women for Renewed Careers and Lives. We are a
                dedicated NGO committed to helping women reignite their careers
                after life-altering challenges like marriage, domestic violence,
                and harassment. Through tailored guidance, mentoring, and a
                nurturing community, we enable women to overcome obstacles and
                flourish in both their professional and personal journeys. Join
                us in fostering empowerment, resilience, and transformation.
                Together, we&apos;re reshaping futures
              </p>
            </div>

            <div className="flex gap-12 items-center">
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/support.png"
                  height={50}
                  width={50}
                  alt="options icon"
                />
                <span className="text-sm font-semibold">Empower</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/mindset.png"
                  height={50}
                  width={50}
                  alt="options icon"
                />
                <span className="text-sm font-semibold">Transform</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/thrive.png"
                  height={50}
                  width={50}
                  alt="options icon"
                />
                <span className="text-sm font-semibold">Thrive</span>
              </div>
            </div>
          </div>
          <div className="bg-[#f2f2f2] h-[16rem] w-[fit-content] md:w-[24rem]  selection:self-start flex items-center justify-center mt-8 lg:mt-0">
            <div className=" gap-12 flex flex-col justify-center px-4 md:px-16">
              <h2 className=" text-2xl lg:text-4xl font-semibold text-[#505ca4]">
                Find the best counsel and support
              </h2>

              <div>
                <Link className="flex items-center gap-2" href="/">
                  <span className="text-lg font-semibold text-[#505ca4] hover:underline">
                    Contact Us Now
                  </span>
                  <MdArrowRightAlt
                    size={30}
                    className="text-xl"
                    color="#FFB600"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
