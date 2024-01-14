import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import PageBanner from "./components/PageBanner";
import PageContent from "./components/PageContent";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const blogPosts = await client.getEntries({
    content_type: "blogPosts",
  });

  return [blogPosts];
}
const page = async () => {
  const [blogPosts] = await getData();
  console.log(blogPosts.items[0]?.fields?.postContent);

  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <PageContent blogPosts={blogPosts?.items} />
    </>
  );
};

export default page;
