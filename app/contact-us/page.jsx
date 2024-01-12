import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import CommunicationChannels from "./components/CommunicationChannels";
import ContactFormAndMap from "./components/ContactFormAndMap";

const page = () => {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <CommunicationChannels />
      <ContactFormAndMap />
    </>
  );
};

export default page;
