import AboutSection from "./components/AboutSection";
import BreadCrumb from "./components/BreadCrumb";
import OurImpact from "./components/OurImpact";
import PageBanner from "./components/PageBanner";
import GetInvolved from "./components/GetInvolved";
import OurTeam from "./components/OurTeam";
import HistoryAndGoals from "./components/HistoryAndGoals";

export default function About() {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <AboutSection />
      <OurImpact />
      <HistoryAndGoals />
      {/* <GetInvolved /> */}
      <OurTeam />
    </>
  );
}
