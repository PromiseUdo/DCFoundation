import Image from "next/image";
import { createClient } from "contentful";
import Dummy from "./components/Dummy";
import HeroSection from "./components/Hero";
import FocusAreas from "./components/FocusAreas";
import MissionAndVision from "./components/MissionAndVision";
import Testimonials from "./components/Testimonials";
import Support from "./components/Support";
import LatestPosts from "./components/LatestPosts";
import Newsletter from "./components/Newsletter";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const testimonials = await client.getEntries({
    content_type: "successStory",
  });

  const blogPosts = await client.getEntries({
    content_type: "blogPosts",
    limit: 3,
  });

  return [testimonials, blogPosts];
}

export default async function Home() {
  const [testimonials, blogPosts] = await getData();

  return (
    <>
      <HeroSection />
      <FocusAreas />
      <MissionAndVision />
      <Testimonials testimonials={testimonials?.items} />
      <Support />
      <LatestPosts blogPosts={blogPosts?.items} />
      <Newsletter />
    </>
  );
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
