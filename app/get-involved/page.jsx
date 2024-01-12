import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import Testimonials from "./components/Testimonials";
import ForIndividuals from "./components/ForIndividuals";
import ForOrganizations from "./components/ForOrganizations";

const page = () => {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <ForIndividuals />
      <ForOrganizations />
      <Testimonials />
    </>
  );
};

export default page;
