import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import ResourceNav from "./components/ResourceNav";
import ResourceList from "./components/ResourceList";

const page = () => {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <ResourceNav />
      <ResourceList />
    </>
  );
};

export default page;
