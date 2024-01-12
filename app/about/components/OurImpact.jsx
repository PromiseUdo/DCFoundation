import React from "react";
import Image from "next/image";
import Container from "../../components/Container";

const OurImpact = () => {
  return (
    <section className="w-full py-20 flex items-center justify-center">
      <Container>
        <div className="w-full flex items-center justify-center">
          <div className="h-[fit-content] w-full 2xl:w-[70%] px-4 md:px-12 py-12 rounded-xl bg-[#202441]">
            <div className="w-full flex flex-col md:flex-row items-center justify-between h-full">
              <div className="py-4">
                <h2 className="max-w-lg text-2xl lg:text-4xl text-[#f7f7f7]">
                  Our Impact
                </h2>
              </div>
              <div className="text-[#f7f7f7] flex flex-col md:flex-row items-center gap-8">
                <div className="w-full flex flex-col gap-3">
                  <p className="text-3xl lg:text-5xl font-semibold">50K+</p>
                  <p className="font-light">Active Members</p>
                </div>
                <div className="hidden lg:block">
                  <Image src="/line.png" height={64} width={64} alt="divider" />
                </div>
                <div className="w-full flex flex-col gap-3 ">
                  <p className="text-3xl lg:text-5xl font-semibold">100+</p>
                  <p className="font-light">Active Volunteers</p>
                </div>
                <div className="hidden lg:block">
                  <Image src="/line.png" height={64} width={64} alt="divider" />
                </div>
                <div className="w-full flex flex-col gap-3 ">
                  <p className="text-3xl lg:text-5xl font-semibold">₹100K+</p>
                  <p className="font-light">Funds Raised</p>
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
