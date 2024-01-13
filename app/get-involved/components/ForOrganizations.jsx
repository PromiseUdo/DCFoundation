import React from "react";
import Container from "../../components/Container";
import Image from "next/image";
import Link from "next/link";

const ForOrganizations = () => {
  return (
    <div className="w-full h-[fit-content] py-12 bg-[#fafafa]">
      <Container>
        <h3 className="text-3xl font-semibold mb-6 ">For Organizations</h3>
        <div className="mb-8 flex items-center justify-between">
          <p className="leading-relaxed max-w-3xl">
            Are you a business owner committed to making a positive impact in
            the lives of women and their families? DS Foundation welcomes
            collaborations with organizations that share our mission. Reach out
            to us to explore how your business can partner with us to create
            meaningful change. Together, we can make a substantial difference in
            empowering women and fostering stronger, more resilient communities.
            Contact us to discuss potential collaboration opportunities and
            collectively contribute to our shared vision of transformation and
            empowerment.
          </p>

          <Image
            src="/organization.png"
            alt="organization icon"
            height={64}
            width={64}
            className="hidden md:block object-contain"
          />
        </div>

        <Link
          href="/contact-us"
          className=" shadow-md bg-[#505ca4] text-[#f7f7f7] px-4 py-2 rounded-md text-base md:text-lg hover:bg-[#282e52] transition-all duration-100"
        >
          Get in touch
        </Link>
      </Container>
    </div>
  );
};

export default ForOrganizations;
