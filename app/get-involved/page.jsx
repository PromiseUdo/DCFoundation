import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import Testimonials from "./components/Testimonials";
import ForIndividuals from "./components/ForIndividuals";
import ForOrganizations from "./components/ForOrganizations";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const testimonials = await client.getEntries({
    content_type: "successStory",
  });

  return [testimonials];
}

const page = async () => {
  const [testimonials] = await getData();
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <ForIndividuals />
      <ForOrganizations />
      <Testimonials testimonials={testimonials?.items} />
    </>
  );
};

export default page;
