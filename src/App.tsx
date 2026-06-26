import { MotionConfig, motion, useScroll } from "framer-motion";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import FundraisingProgress from "./components/sections/FundraisingProgress";
import GivingPath from "./components/sections/GivingPath";
import Hero from "./components/sections/Hero";
import ImpactGrid from "./components/sections/ImpactGrid";
import Partners from "./components/sections/Partners";
import StoryBand from "./components/sections/StoryBand";
import DonatePage from "./pages/DonatePage";
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
