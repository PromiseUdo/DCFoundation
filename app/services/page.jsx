import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import CareerRestart from "./components/CareerRestart";
import TraumaConselling from "./components/TraumaConselling";
import DomesticViolenceSupport from "./components/DomesticViolenceSupport";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const careerRestart = await client.getEntries({
    content_type: "careerRestartService",
  });
  const traumaCounselling = await client.getEntries({
    content_type: "traumaCounsellingService",
  });
  const domesticViolenceSupport = await client.getEntries({
    content_type: "domesticViolenceSupport",
  });

  return [careerRestart, traumaCounselling, domesticViolenceSupport];
}

const page = async () => {
  const [careerRestart, traumaCounselling, domesticViolenceSupport] =
    await getData();
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <CareerRestart careerRestart={careerRestart?.items[0]?.fields} />
      <TraumaConselling
        traumaCounselling={traumaCounselling?.items[0]?.fields}
      />
      <DomesticViolenceSupport
        domesticViolenceSupport={domesticViolenceSupport?.items[0]?.fields}
      />
    </>
  );
};

export default page;
