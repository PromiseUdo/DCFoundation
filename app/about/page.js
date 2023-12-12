import AboutSection from "./components/AboutSection";
import BreadCrumb from "./components/BreadCrumb";
import OurImpact from "./components/OurImpact";
import PageBanner from "./components/PageBanner";

export default function About() {
  return (
    <>
      <BreadCrumb />
      <PageBanner />
      <AboutSection />
      <OurImpact />
    </>
  );
}
