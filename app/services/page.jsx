import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import CareerRestart from "./components/CareerRestart";
import TraumaConselling from "./components/TraumaConselling";
import DomesticViolenceSupport from "./components/DomesticViolenceSupport";
const page = () => {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <CareerRestart />
      <TraumaConselling />
      <DomesticViolenceSupport />
    </>
  );
};

export default page;
