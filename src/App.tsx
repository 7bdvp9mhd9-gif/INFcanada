import { MotionConfig, motion, useScroll } from "framer-motion";
import Footer from "./components/Footer";
import FundraisingProgress from "./components/FundraisingProgress";
import GivingPath from "./components/GivingPath";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactGrid from "./components/ImpactGrid";
import DonatePage from "./components/DonatePage";
import Partners from "./components/Partners";
import StoryBand from "./components/StoryBand";
import Team from "./components/Team";
import {
  CommunityTransformationProjectsPage,
  GreenPasturesHospitalPage,
} from "./components/TravelProjectPages";
import TravelToNepal from "./components/TravelToNepal";
import WhatWeDoPage from "./components/WhatWeDoPage";

function getPage() {
  return window.location.pathname.replace(/\/$/, "");
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const page = getPage();
  const donatePage = page === "/donate";
  const teamPage = page === "/team";
  const travelPage = page === "/travel-to-nepal";
  const whatWeDoPage = page === "/what-we-do" || page === "/what-do-we-do";
  const communityProjectsPage = page === "/community-transformation-projects" || page === "/transformation";
  const hospitalPage = page === "/inf-green-pastures-hospital" || page === "/hospital";

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Header />
      <main
        className={
          teamPage || travelPage || donatePage || whatWeDoPage || communityProjectsPage || hospitalPage
            ? "page-main"
            : undefined
        }
      >
        {donatePage ? (
          <DonatePage />
        ) : whatWeDoPage ? (
          <WhatWeDoPage />
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
            <Partners />
          </>
        )}
      </main>
      <Footer />
    </MotionConfig>
  );
}
