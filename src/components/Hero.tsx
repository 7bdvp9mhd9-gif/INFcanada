import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CirclePlay } from "lucide-react";
import heroImage from "../assets/hero-nepal.jpg";
import MountainSignature from "./MountainSignature";
import { heroStats } from "../data/content";

export default function Hero() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const imageY = useTransform(scrollY, [0, 700], [0, 90]);
  const copyY = useTransform(scrollY, [0, 700], [0, -38]);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.img
        className="hero-image"
        src={heroImage}
        alt="A health worker walking through a Nepali hillside village at sunrise."
        loading="eager"
        decoding="async"
        style={{ y: reduceMotion ? 0 : imageY }}
      />
      <div className="hero-scrim" />
      <MountainSignature className="hero-mountain-signature" />

      <motion.div
        className="hero-copy"
        style={{ y: reduceMotion ? 0 : copyY }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Canadians walking beside Nepal</p>
        <h1 id="hero-title">INF Canada</h1>
        <p className="hero-lede">
          A new Canadian home for supporting locally led health, disability inclusion,
          community strength, and resilience across Nepal.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#giving">
            <span>Start giving</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#stories">
            <CirclePlay size={19} aria-hidden="true" />
            <span>See the vision</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {heroStats.map((stat) => (
          <div key={stat.value} className="hero-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
