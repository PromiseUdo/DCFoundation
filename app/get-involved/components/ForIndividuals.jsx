import React from "react";
import Container from "../../components/Container";
import Image from "next/image";

const ForIndividuals = () => {
  return (
    <div className="w-full h-[fit-content] py-12">
      <Container>
        <h3 className="text-3xl font-semibold mb-6 ">For Individuals</h3>

        <div className="flex items-center justify-between">
          <p className="leading-relaxed max-w-3xl">
            We are constantly seeking dedicated individuals to join our team and
            contribute to making a positive impact in the lives of numerous
            women and their children. Whether you can spare a little or a lot of
            your time, we welcome your involvement. Feel free to reach out by
            completing the form below, and we will promptly respond to you. Your
            commitment matters, and we appreciate your willingness to be a part
            of our mission.
          </p>
          <Image
            src="/individual.png"
            alt="individual icon"
            height={64}
            width={64}
            className="hidden md:block object-contain"
          />
        </div>

        <button className="mt-8 shadow-md bg-[#505ca4] text-[#f7f7f7] px-4 py-2 rounded-md text-base md:text-lg hover:bg-[#282e52] transition-all duration-100">
          Volunteer form
        </button>
      </Container>
    </div>
  );
};

export default ForIndividuals;
