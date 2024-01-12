import React from "react";
import Image from "next/image";
import Container from "../../components/Container";
import formatNumber from "../../../helper/formatNumber";
const OurImpact = ({ impact }) => {
  return (
    <section className="w-full py-20 flex items-center justify-center">
      <Container>
        <div className="w-full flex items-center justify-center">
          <div className="h-[fit-content] w-full 2xl:w-[70%] px-4 md:px-12 py-12 rounded-xl bg-[#202441]">
            <div className="w-full flex flex-col md:flex-row items-center justify-between h-full">
              <div className="py-4">
                <h2 className="max-w-lg text-2xl lg:text-4xl text-[#f7f7f7]">
                  {impact.title}
                </h2>
              </div>
              <div className="text-[#f7f7f7] flex flex-col md:flex-row items-center gap-8">
                <div className="w-full flex flex-col gap-3">
                  <p className="text-3xl lg:text-5xl font-semibold">
                    {formatNumber(impact.memberCount)}
                  </p>
                  <p className="font-light">{impact.membersTitle}</p>
                </div>
                <div className="hidden lg:block">
                  <Image src="/line.png" height={64} width={64} alt="divider" />
                </div>
                <div className="w-full flex flex-col gap-3 ">
                  <p className="text-3xl lg:text-5xl font-semibold">
                    {formatNumber(impact.volunteerCount)}
                  </p>
                  <p className="font-light">{impact.volunteerTitle}</p>
                </div>
                <div className="hidden lg:block">
                  <Image src="/line.png" height={64} width={64} alt="divider" />
                </div>
                <div className="w-full flex flex-col gap-3 ">
                  <p className="text-3xl lg:text-5xl font-semibold">{`₹${formatNumber(
                    impact.amountRaised
                  )}`}</p>
                  <p className="font-light">{impact.fundsRaisedTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurImpact;
