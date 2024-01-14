import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Container from "../../components/Container";
import Image from "next/image";
import PageBanner from "./components/PageBanner";
import BreadCrumb from "./components/BreadCrumb";
import styles from "./blog.module.scss";
import { BLOCKS } from "@contentful/rich-text-types";
import clsx from "clsx";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node?.data?.target?.fields;
      console.log(file, "llllllllllllllllllllllll");
      // if (!file || !file["en-US"]) {
      //   return null; // Return null if there's no valid file data
      // }

      const { url, contentType } = file;
      const mimeGroup = contentType?.split("/")[0];

      switch (mimeGroup) {
        case "image":
          return (
            <div className="w-full md:w-[50%] h-[20rem] relative aspect-square">
              <Image
                title={title ? title : "ll"}
                alt={"lkkl"}
                src={"https:" + url}
                fill
                className="object-cover"
              />
            </div>
          );
        default:
          return (
            <span style={{ backgroundColor: "red", color: "white" }}>
              {" "}
              {contentType} embedded asset{" "}
            </span>
          );
      }
    },
  },
};

const Page = async ({ params }) => {
  console.log(params.slug);

  const { items } = await client.getEntries({
    content_type: "blogPosts",
    "fields.slug": params.slug,
  });

  console.log(items[0].fields, "items");
  return (
    <>
      <BreadCrumb />
      <PageBanner title={items[0].fields?.title} />
      <div className=" h-full my-12">
        <Container>
          <div className="grid grid-cols-8 w-full  h-[100%]">
            {/* <div className="col-span-2 bg-green-400  h-full"></div> */}
            <div className="col-span-8   h-full">
              <div className="w-full aspect-square h-[18rem] relative">
                <Image
                  src={
                    "https:" +
                    items[0]?.fields?.featuredImage?.fields?.file?.url
                  }
                  alt={items[0].fields.featuredImage?.fields?.title}
                  fill
                  objectPosition="center"
                  className="object-cover aspect-square"
                />
              </div>

              <div className={clsx(styles.contentStyles)}>
                <h3 className="text-3xl font-semibold my-4">
                  {items[0]?.fields?.title}
                </h3>
                {documentToReactComponents(
                  items[0]?.fields?.postContent,
                  richTextOptions
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
