import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import FAQ from "./components/FAQ";
const page = () => {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <FAQ />
    </>
  );
};

export default page;
