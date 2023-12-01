import Image from "next/image";
import { createClient } from "contentful";
import Dummy from "./components/Dummy";

// async function getData() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });
//   const res = await client.getEntries({
//     content_type: "heroSection",
//   });
//   return res;
// }

export default async function Home() {
  // const data = await getData();

  // console.log(data.items, "dd");
  return <h1>Homepage</h1>;
}

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({
//     content_type: "hero_section",
//   });

//   return {
//     props: {
//       heroSection: res.items,
//     },
//   };
// }
