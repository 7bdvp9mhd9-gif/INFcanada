import { MotionConfig, motion, useScroll } from "framer-motion";
import Footer from "./components/Footer";
import GivingPath from "./components/GivingPath";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactGrid from "./components/ImpactGrid";
import Partners from "./components/Partners";
import StoryBand from "./components/StoryBand";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Header />
      <main>
        <Hero />
        <ImpactGrid />
        <GivingPath />
        <StoryBand />
        <Partners />
      </main>
      <Footer />
    </MotionConfig>
  );
}
