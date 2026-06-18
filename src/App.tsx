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
import TravelToNepal from "./components/TravelToNepal";

function getPage() {
  return window.location.pathname.replace(/\/$/, "");
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const page = getPage();
  const donatePage = page === "/donate";
  const teamPage = page === "/team";
  const travelPage = page === "/travel-to-nepal";

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Header />
      <main className={teamPage || travelPage || donatePage ? "page-main" : undefined}>
        {donatePage ? (
          <DonatePage />
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
