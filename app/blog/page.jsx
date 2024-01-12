import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import PageContent from "./components/PageContent";
const page = () => {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <PageContent />
    </>
  );
};

export default page;
