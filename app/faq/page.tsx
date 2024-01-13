import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import FAQ from "./components/FAQ";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const faqs = await client.getEntries({
    content_type: "faq",
  });

  return [faqs];
}

const page = async () => {
  const [faqs] = await getData();
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <FAQ faqs={faqs?.items} />
    </>
  );
};

export default page;
