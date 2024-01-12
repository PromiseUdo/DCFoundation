import AboutSection from "./components/AboutSection";
import BreadCrumb from "./components/BreadCrumb";
import OurImpact from "./components/OurImpact";
import PageBanner from "./components/PageBanner";
import GetInvolved from "./components/GetInvolved";
import OurTeam from "./components/OurTeam";
import HistoryAndGoals from "./components/HistoryAndGoals";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "teamMembers",
  });
  return res;
}

export default async function About() {
  const data = await getData();

  console.log(data.items[0].fields.memberPhoto.file);
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <AboutSection />
      <OurImpact />
      <HistoryAndGoals />
      {/* <GetInvolved /> */}
      <OurTeam teamMembers={data.items} />
    </>
  );
}
