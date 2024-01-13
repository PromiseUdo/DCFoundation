import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import ResourceNav from "./components/ResourceNav";
import ResourceList from "./components/ResourceList";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const resources = await client.getEntries({
    content_type: "resources",
  });

  return [resources];
}

const page = async () => {
  const [resources] = await getData();
  console.log(resources?.items[0]?.fields?.resourceImage?.fields, "dfdfdfdf");
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <ResourceNav />
      <ResourceList resources={resources?.items} />
    </>
  );
};

export default page;
