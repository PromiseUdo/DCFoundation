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

  return [careerRestart];
}

const page = async () => {
  const [careerRestart] = await getData();
  console.log(careerRestart.items[0].fields.benefitsList, "dfdfdf");
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <CareerRestart careerRestart={careerRestart.items[0].fields} />
      <TraumaConselling />
      <DomesticViolenceSupport />
    </>
  );
};

export default page;
