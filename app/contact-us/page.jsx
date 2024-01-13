import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import CommunicationChannels from "./components/CommunicationChannels";
import ContactFormAndMap from "./components/ContactFormAndMap";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const contactInfo = await client.getEntries({
    content_type: "contactInformation",
  });

  return [contactInfo];
}
const page = async () => {
  const [contactInfo] = await getData();
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <CommunicationChannels contactInfo={contactInfo?.items[0]?.fields} />
      <ContactFormAndMap contactInfo={contactInfo?.items[0]?.fields} />
    </>
  );
};

export default page;
