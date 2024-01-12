import AboutSection from "./components/AboutSection";
import BreadCrumb from "./components/BreadCrumb";
import OurImpact from "./components/OurImpact";
import PageBanner from "./components/PageBanner";
import OurTeam from "./components/OurTeam";
import HistoryAndGoals from "./components/HistoryAndGoals";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const teamMembers = await client.getEntries({
    content_type: "teamMembers",
  });
  const goals = await client.getEntries({
    content_type: "ourGoals",
  });
  const history = await client.getEntries({
    content_type: "outHistory",
  });
  const impact = await client.getEntries({
    content_type: "impact",
  });
  const approach = await client.getEntries({
    content_type: "ourApproach",
  });
  return [teamMembers, goals, history, impact, approach];
}

export default async function About() {
  const [teamMembers, goals, history, impact, approach] = await getData();

  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <AboutSection approach={approach.items[0].fields} />
      <OurImpact impact={impact.items[0].fields} />
      <HistoryAndGoals history={history.items[0].fields} goals={goals.items} />
      <OurTeam teamMembers={teamMembers.items} />
    </>
  );
}
