import { MotionConfig, motion, useScroll } from "framer-motion";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import FundraisingProgress from "./components/sections/FundraisingProgress";
import GivingPath from "./components/sections/GivingPath";
import Hero from "./components/sections/Hero";
import ImpactGrid from "./components/sections/ImpactGrid";
import StoryBand from "./components/sections/StoryBand";
import WeAreInfVideo from "./components/sections/WeAreInfVideo";
import AboutInfoPage, { type AboutPageKey } from "./pages/AboutInfoPage";
import DonatePage from "./pages/DonatePage";
import OurPurposePage from "./pages/OurPurposePage";
import Team from "./pages/Team";
import {
  CommunityTransformationProjectsPage,
  GreenPasturesHospitalPage,
} from "./pages/TravelProjectPages";
import TravelToNepal from "./pages/TravelToNepal";
import WhatWeDoPage from "./pages/WhatWeDoPage";

function getPage() {
  return window.location.pathname.replace(/\/$/, "");
}

function getAboutPage(page: string): AboutPageKey | null {
  if (page === "/vision-mission" || page === "/vision-and-mission") {
    return "vision-mission";
  }

  if (page === "/our-mandate") {
    return "our-mandate";
  }

  if (page === "/core-values") {
    return "core-values";
  }

  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const page = getPage();
  const aboutPage = getAboutPage(page);
  const donatePage = page === "/donate";
  const teamPage = page === "/team";
  const travelPage = page === "/travel-to-nepal";
  const whatWeDoPage = page === "/what-we-do" || page === "/what-do-we-do";
  const ourPurposePage = page === "/our-purpose";
  const communityProjectsPage = page === "/community-transformation-projects" || page === "/transformation";
  const hospitalPage = page === "/inf-green-pastures-hospital" || page === "/hospital";

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Header />
      <main
        className={
          aboutPage ||
          teamPage ||
          travelPage ||
          donatePage ||
          whatWeDoPage ||
          ourPurposePage ||
          communityProjectsPage ||
          hospitalPage
            ? "page-main"
            : undefined
        }
      >
        {aboutPage ? (
          <AboutInfoPage page={aboutPage} />
        ) : donatePage ? (
          <DonatePage />
        ) : whatWeDoPage ? (
          <WhatWeDoPage />
        ) : ourPurposePage ? (
          <OurPurposePage />
        ) : communityProjectsPage ? (
          <CommunityTransformationProjectsPage />
        ) : hospitalPage ? (
          <GreenPasturesHospitalPage />
        ) : travelPage ? (
          <TravelToNepal />
        ) : teamPage ? (
          <Team isPage />
        ) : (
          <>
            <Hero />
            <ImpactGrid />
            <GivingPath />
            <FundraisingProgress />
            <StoryBand />
            <WeAreInfVideo />
          </>
        )}
      </main>
      <Footer />
    </MotionConfig>
  );
}
