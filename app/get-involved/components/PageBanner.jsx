import React from "react";
import Container from "../../components/Container";

const PageBanner = () => {
  return (
    <section className="w-full bg-[#202441] py-20 mb-12 h-52">
      <Container>
        <div
          className="w-full flex flex-col gap-2
        "
        >
          <h1 className="text-[#f7f7f7] text-4xl">Get Involved</h1>
          <p className="text-[#f7f7f7] max-w-lg">
            Become a partner, volunteer or work with us. Together we can make a
            difference
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PageBanner;
